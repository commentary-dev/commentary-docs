import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { root, readJson, walk, parseDocument, sha256 } from "../site-lib.mjs";
// Scenario coverage: DOCS-001, DOCS-002, DOCS-003, SEO-001.
const manifest = await readJson(path.join(root, ".generated/manifest.json"));
const baseline = await readJson(path.join(root, "release-baseline.json"));
test("publication is bounded, unique, and tied to a verified released app", () => {
  assert.equal(manifest.appBaselineSha, baseline.appBaselineSha);
  assert.match(manifest.sourceSha, /^[a-f0-9]{40}$/);
  assert.ok(manifest.files.length <= 10000);
  assert.ok(
    manifest.files.reduce((sum, f) => sum + f.sizeBytes, 0) <=
      256 * 1024 * 1024,
  );
  assert.equal(
    new Set(manifest.files.map((f) => f.publicPath)).size,
    manifest.files.length,
  );
  for (const f of manifest.files) {
    if (/^(assets|examples)\//.test(f.path)) assert.equal(f.kind, "asset", f.path);
    assert.ok(f.sizeBytes <= 16 * 1024 * 1024);
    assert.match(f.sha256, /^[a-f0-9]{64}$/);
    if (f.kind === "asset")
      assert.ok(
        f.publicPath.startsWith(`/docs/_releases/${manifest.releaseId}/`),
      );
    else assert.ok(!f.publicPath.includes("/_releases/"));
  }
});
test("only release-reviewed authored pages become public", async () => {
  const publicRoutes = new Set(manifest.files.map((f) => f.publicPath));
  for (const file of await walk(path.join(root, "docs"))) {
    if (!/\.mdx?$/.test(file)) continue;
    const { data } = parseDocument(await fs.readFile(file, "utf8"));
    if (data.published === true) {
      assert.equal(data.appBaselineSha, manifest.appBaselineSha, file);
      assert.ok(publicRoutes.has(`/docs/${data.slug}`), file);
    } else if (data.slug)
      assert.ok(!publicRoutes.has(`/docs/${data.slug}`), file);
  }
});
test("machine-readable exports and every binary have exact integrity", async () => {
  for (const route of [
    "/docs",
    "/docs/version.json",
    "/docs/sitemap.xml",
    "/docs/llms.txt",
    "/docs/reference/openapi.json",
  ])
    assert.ok(
      manifest.files.some((f) => f.publicPath === route),
      route,
    );
  for (const file of manifest.files) {
    const bytes = await fs.readFile(path.join(root, "dist", file.path));
    assert.equal(sha256(bytes), file.sha256, file.path);
  }
});
test("private application routes cannot become docs aliases", () => {
  for (const [from, to] of Object.entries(manifest.redirects)) {
    assert.ok(from.startsWith("/docs/"));
    assert.ok(to.startsWith("/docs"));
    assert.ok(manifest.files.some((f) => f.publicPath === to));
  }
  assert.equal(manifest.legacyPaths["README.md"], "/docs/start");
  assert.equal(manifest.redirects["/docs/getting-started"], "/docs/start");
});
test("Markdown exports use available immutable screenshot and sample assets", async () => {
  const images = await readJson(path.join(root, ".generated/images.json"));
  assert.ok(Object.keys(images).length > 0);
  const paths = new Set(manifest.files.map(file => file.publicPath));
  for (const file of manifest.files.filter(file => file.path.endsWith(".md"))) {
    const markdown = await fs.readFile(path.join(root, "dist", file.path), "utf8");
    assert.doesNotMatch(markdown, /\]\(\/docs\/(?:assets|examples)\//, file.path);
    for (const match of markdown.matchAll(/\]\((\/docs\/_releases\/[^\s)]+)/g))
      assert.ok(paths.has(match[1]), `${file.path}: ${match[1]}`);
  }
});
