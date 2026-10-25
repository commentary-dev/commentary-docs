import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { root, readJson } from "./site-lib.mjs";
const manifest = await readJson(path.join(root, ".generated/manifest.json"));
const files = new Map(manifest.files.map((f) => [f.publicPath, f]));
const port = Number(process.env.PORT || 4321);
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const target =
    manifest.redirects[pathname] ||
    (pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : null);
  if (target) {
    res.writeHead(308, { Location: target });
    return res.end();
  }
  const file = files.get(pathname);
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Page not found");
  }
  res.writeHead(200, {
    "Content-Type": file.contentType,
    "Content-Length": file.sizeBytes,
    ETag: `"${file.sha256}"`,
    "X-Content-Type-Options": "nosniff",
  });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(path.join(root, "dist", file.path)).pipe(res);
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Docs preview: http://127.0.0.1:${port}/docs`),
);
