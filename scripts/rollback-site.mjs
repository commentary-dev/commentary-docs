const releaseId = process.argv[2];
if (!/^[a-f0-9]{12,64}$/.test(releaseId || ""))
  throw new Error(
    "Usage: node scripts/rollback-site.mjs <previous-release-id>",
  );
const base = new URL(
  process.env.COMMENTARY_APP_URL || "https://commentary.dev",
);
if (
  base.username ||
  base.password ||
  base.search ||
  base.hash ||
  base.pathname !== "/" ||
  !(
    base.protocol === "https:" ||
    (base.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(base.hostname))
  )
)
  throw new Error("Rollback requires an HTTPS origin or HTTP loopback.");
const token = process.env.COMMENTARY_DOCS_PUBLISH_TOKEN;
if (!token) throw new Error("Docs publication credential is required.");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
const status = await fetch(
  new URL("/api/internal/publish/docs/activate", base),
  { headers, redirect: "error", signal: AbortSignal.timeout(30000) },
).then(async (r) => {
  if (!r.ok) throw new Error(`Status failed: ${r.status}`);
  return r.json();
});
try {
  const result = await fetch(
    new URL("/api/internal/publish/docs/activate", base),
    {
      method: "POST",
      headers,
      redirect: "error",
      signal: AbortSignal.timeout(120000),
      body: JSON.stringify({ releaseId, expectedEtag: status.etag }),
    },
  );
  if (!result.ok)
    throw new Error(
      `Rollback failed (${result.status}): ${(await result.text()).slice(0, 500)}`,
    );
} catch (error) {
  // A lost response can follow a successful pointer switch. Never retry a stale ETag.
  const confirmed = await fetch(new URL("/api/internal/publish/docs/activate", base), {
    headers,
    redirect: "error",
    signal: AbortSignal.timeout(30000),
  })
    .then(async response => response.ok ? response.json() : null)
    .catch(() => null);
  if (confirmed?.releaseId !== releaseId) throw error;
}
console.log(`Restored compatible documentation release ${releaseId}.`);
