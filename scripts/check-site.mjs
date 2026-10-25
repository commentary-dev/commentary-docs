import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
import { root, readJson, sha256 } from "./site-lib.mjs";
const manifest = await readJson(path.join(root, ".generated/manifest.json"));
const files = new Map(manifest.files.map((f) => [f.publicPath, f]));
const anchors = new Map(),
  failures = [];
for (const file of manifest.files) {
  const bytes = await fs.readFile(path.join(root, "dist", file.path));
  if (bytes.length !== file.sizeBytes || sha256(bytes) !== file.sha256)
    failures.push(`Checksum mismatch: ${file.path}`);
  if (file.kind === "page") {
    const $ = load(bytes.toString());
    anchors.set(
      file.publicPath,
      new Set(
        $("[id]")
          .map((_, e) => $(e).attr("id"))
          .get(),
      ),
    );
    if ($("h1").length !== 1)
      failures.push(`Expected one H1: ${file.publicPath}`);
    if (!$('meta[name="description"]').attr("content"))
      failures.push(`Missing description: ${file.publicPath}`);
    if (
      $('link[rel="canonical"]').attr("href") !==
      `https://commentary.dev${file.publicPath}`
    )
      failures.push(`Wrong canonical: ${file.publicPath}`);
    if (!$("main").text().trim())
      failures.push(`Empty article: ${file.publicPath}`);
    if ($('meta[name="robots"]').attr("content")?.includes("noindex"))
      failures.push(`Public page is noindex: ${file.publicPath}`);
  }
}
for (const file of manifest.files.filter((f) => f.kind === "page")) {
  const $ = load(await fs.readFile(path.join(root, "dist", file.path), "utf8"));
  for (const element of $(
    "a[href],img[src],script[src],link[href]",
  ).toArray()) {
    const raw = $(element).attr(
      element.tagName === "a" || element.tagName === "link" ? "href" : "src",
    );
    if (!raw || /^(mailto:|data:|javascript:|tel:)/.test(raw)) continue;
    const url = new URL(raw, `https://commentary.dev${file.publicPath}`);
    if (
      url.origin !== "https://commentary.dev" ||
      !url.pathname.startsWith("/docs")
    )
      continue;
    let target = url.pathname.replace(/\/$/, "");
    if (manifest.redirects[target]) target = manifest.redirects[target];
    if (!files.has(target)) {
      failures.push(`${file.publicPath}: missing ${raw}`);
      continue;
    }
    if (
      url.hash &&
      anchors.has(target) &&
      !anchors.get(target).has(decodeURIComponent(url.hash.slice(1)))
    )
      failures.push(`${file.publicPath}: missing anchor ${raw}`);
  }
}
// Exports are an independently consumed surface: crawl their links as well as HTML.
for (const file of manifest.files.filter((f) => f.path.endsWith(".md"))) {
  const markdown = (await fs.readFile(path.join(root, "dist", file.path), "utf8"))
    .replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, "");
  for (const match of markdown.matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const raw = match[1];
    const url = new URL(raw, `https://commentary.dev${file.publicPath}`);
    if (url.origin !== "https://commentary.dev" || !url.pathname.startsWith("/docs")) continue;
    const target = manifest.redirects[url.pathname] || url.pathname;
    if (!files.has(target)) failures.push(`${file.publicPath}: missing exported link ${raw}`);
    if (url.hash && anchors.has(target) && !anchors.get(target).has(decodeURIComponent(url.hash.slice(1))))
      failures.push(`${file.publicPath}: missing exported anchor ${raw}`);
  }
}
for (const [from, to] of Object.entries(manifest.redirects))
  if (!files.has(to) || files.has(from))
    failures.push(`Invalid redirect: ${from} -> ${to}`);
if (
  !files.has("/docs") ||
  !files.has("/docs/sitemap.xml") ||
  !files.has("/docs/llms.txt")
)
  failures.push("Missing required public entry points.");
if (failures.length) {
  const unique = [...new Set(failures)];
  await fs.writeFile(
    path.join(root, ".generated/check-errors.json"),
    JSON.stringify(unique, null, 2),
  );
  console.error(unique.slice(0, 60).join("\n"));
  console.error(
    `${unique.length} validation errors; full details in .generated/check-errors.json`,
  );
  process.exitCode = 1;
} else
  console.log(
    `Validated ${manifest.files.filter((f) => f.kind === "page").length} pages, internal links/anchors, metadata, and ${manifest.files.length} checksums.`,
  );
