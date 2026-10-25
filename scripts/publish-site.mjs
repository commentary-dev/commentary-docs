import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { root, readJson, sha256 } from "./site-lib.mjs";
const manifest = await readJson(path.join(root, ".generated/manifest.json"));
const origin = new URL(
  process.env.COMMENTARY_APP_URL || "https://commentary.dev",
);
if (
  origin.username ||
  origin.password ||
  origin.search ||
  origin.hash ||
  origin.pathname !== "/" ||
  !(
    origin.protocol === "https:" ||
    (origin.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname))
  )
)
  throw new Error(
    "Publishing requires a credential-free HTTPS origin (HTTP is allowed only on loopback).",
  );
const gitRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  cwd: root,
  encoding: "utf8",
}).trim();
if (path.resolve(gitRoot) !== root)
  throw new Error("Publish only from the actual docs Git checkout.");
const sourceSha = execFileSync("git", ["rev-parse", "HEAD"], {
  cwd: root,
  encoding: "utf8",
}).trim();
const dirty = execFileSync("git", ["status", "--porcelain"], {
  cwd: root,
  encoding: "utf8",
}).trim();
if (dirty || manifest.sourceSha !== sourceSha)
  throw new Error(
    "Publication requires a clean source checkout matching the built manifest.",
  );
const token = process.env.COMMENTARY_DOCS_PUBLISH_TOKEN;
if (!token)
  throw new Error(
    "COMMENTARY_DOCS_PUBLISH_TOKEN is required; publication never silently skips.",
  );
const request = async (pathname, options = {}) => {
  const response = await fetch(new URL(pathname, origin), {
    ...options,
    redirect: "error",
    headers: { Authorization: `Bearer ${token}`, ...options.headers },
    signal: AbortSignal.timeout(120000),
  });
  if (!response.ok)
    throw new Error(
      `Docs publication failed (${response.status}) at ${pathname}: ${(await response.text()).slice(0, 500)}`,
    );
  return response.status === 204 ? null : response.json();
};
const health = await fetch(new URL("/api/health", origin), {
  redirect: "error",
  signal: AbortSignal.timeout(15000),
}).then((r) => {
  if (!r.ok) throw new Error("Production health unavailable.");
  return r.json();
});
if (health.build?.gitSha !== manifest.appBaselineSha)
  throw new Error(
    "Documentation baseline differs from the deployed app. Verify and rebuild before publishing.",
  );
const previous = await request("/api/internal/publish/docs/activate");
await request("/api/internal/publish/docs/releases", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(manifest),
});
let nextFile = 0;
const uploadErrors = [];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (!uploadErrors.length && nextFile < manifest.files.length) {
      const file = manifest.files[nextFile++];
      try {
        const bytes = await fs.readFile(path.join(root, "dist", file.path));
        if (bytes.length !== file.sizeBytes || sha256(bytes) !== file.sha256)
          throw new Error(`Built file changed after validation: ${file.path}`);
        await request(
          `/api/internal/publish/docs/releases/${manifest.releaseId}/files/${file.path}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/octet-stream" },
            body: bytes,
          },
        );
      } catch (error) {
        uploadErrors.push(error);
      }
    }
  }),
);
if (uploadErrors.length) throw uploadErrors[0];
try {
  await request("/api/internal/publish/docs/activate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      releaseId: manifest.releaseId,
      expectedEtag: previous.etag,
    }),
  });
} catch (error) {
  const status = await request("/api/internal/publish/docs/activate");
  if (status.releaseId !== manifest.releaseId) throw error;
}
console.log(
  `Activated documentation release ${manifest.releaseId}; previous release: ${previous.releaseId || "none"}.`,
);
