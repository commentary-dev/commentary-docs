import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { load } from "cheerio";
import * as pagefind from "pagefind";
import {
  root,
  origin,
  walk,
  slash,
  write,
  readJson,
  sha256,
  typeFor,
  xml,
} from "./site-lib.mjs";

const { releaseId, baseline, sourceSha, publishedAt } = await readJson(
  path.join(root, ".generated/build.json"),
);
const articles = await readJson(path.join(root, ".generated/articles.json"));
const optimizedImages = await readJson(path.join(root, ".generated/images.json"));
const dist = path.join(root, "dist");
if (!/^[a-f0-9]{40}$/.test(sourceSha))
  throw new Error(
    "DOCS_SOURCE_SHA must identify the actual docs source commit.",
  );
const assetPrefix = `/docs/_releases/${releaseId}`;
const assets = new Set(
  (await walk(dist))
    .filter((file) => !file.endsWith(".html") && !/sitemap.*\.xml$/.test(file))
    .map((file) => slash(path.relative(dist, file))),
);
// Rewrite authored root asset URLs and Starlight's lazy Pagefind base to an immutable release.
const replaceAssets = (text) => {
  for (const [original, image] of Object.entries(optimizedImages))
    text = text.replaceAll(original, `/docs/${image.path}`);
  return text.replace(
    /\/docs\/(assets|examples|_astro|pagefind|_pagefind)\//g,
    `${assetPrefix}/$1/`,
  );
};
for (const file of await walk(dist)) {
  if (!/\.(html|css|js|mjs|json|svg)$/.test(file)) continue;
  let text = replaceAssets(await fs.readFile(file, "utf8"));
  if (file.endsWith(".html")) {
    const relative = slash(path.relative(dist, file));
    const slug =
      relative === "index.html"
        ? ""
        : relative.replace(/\.html$/, "").replace(/\/index$/, "");
    const article = articles.find((a) => a.slug === slug);
    if (article) {
      const $ = load(text);
      $(".sl-markdown-content img").each((index, element) => {
        const img = $(element);
        const optimized = Object.values(optimizedImages).find(
          image => img.attr("src") === `${assetPrefix}/${image.path}`,
        );
        if (optimized) img.attr({ width: optimized.width, height: optimized.height });
        img.attr({ loading: index === 0 ? "eager" : "lazy", decoding: "async" });
        if (index === 0) img.attr("fetchpriority", "high");
      });
      $("a[href]").each((_, element) => {
        const href = $(element).attr("href");
        if (href?.startsWith("/docs/"))
          $(element).attr(
            "href",
            href
              .replace("/docs/docs/", "/docs/")
              .replace(/\/index\.html(?=#|$)/, "")
              .replace(/\.html(?=#|$)/, ""),
          );
      });
      $('link[rel="sitemap"]').attr("href", "/docs/sitemap.xml");
      $('link[rel~="icon"]').each((_, element) => {
        const href = $(element).attr("href");
        if (href?.startsWith("/docs/"))
          $(element).attr("href", href.replace("/docs/", `${assetPrefix}/`));
      });
      const canonical = `${origin}/docs${slug ? `/${slug}` : ""}`;
      $('link[rel="canonical"]').attr("href", canonical);
      $('[property="og:url"]').attr("content", canonical);
      $("main").attr("data-pagefind-filter", `section:${article.section}`);
      $(".sl-markdown-content")
        .first()
        .attr("data-pagefind-filter", `type:${article.contentType}`);
      $(".sl-markdown-content")
        .first()
        .attr(
          "data-pagefind-weight",
          article.slug.startsWith("reference/schemas/")
            ? "0.3"
            : article.contentType === "reference"
              ? "1"
              : "3",
        );
      const structured = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: article.title,
        description: article.description,
        url: canonical,
        dateModified: article.updated,
        publisher: { "@type": "Organization", name: "Commentary", url: origin },
      };
      $("head").append(
        `<script type="application/ld+json">${JSON.stringify(structured).replaceAll("<", "\\u003c")}</script>`,
      );
      $("head").append(
        `<link rel="alternate" type="text/markdown" href="${canonical}${slug ? ".md" : "/index.md"}">`,
      );
      $(".sl-markdown-content")
        .first()
        .prepend(
          `<div class="docs-page-tools" data-pagefind-ignore><a href="/docs/${slug || "index"}.md">Read as Markdown</a></div>`,
        );
      if (slug) {
        const section = articles.find((a) => a.slug === article.section);
        const crumbs = [
          { name: "Documentation", item: `${origin}/docs` },
          ...(section && slug !== article.section
            ? [
                {
                  name: section.title,
                  item: `${origin}/docs/${article.section}`,
                },
              ]
            : []),
          { name: article.title, item: canonical },
        ];
        $(".content-panel")
          .first()
          .prepend(
            `<nav aria-label="Breadcrumb" class="docs-breadcrumb" data-pagefind-ignore>${crumbs.map((c, i) => (i === crumbs.length - 1 ? `<span aria-current="page">${xml(c.name)}</span>` : `<a href="${new URL(c.item).pathname}">${xml(c.name)}</a>`)).join('<span aria-hidden="true"> / </span>')}</nav>`,
          );
        $("head").append(
          `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, ...c })) }).replaceAll("<", "\\u003c")}</script>`,
        );
      }
      text = $.html();
    }
  }
  await fs.writeFile(file, text);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${articles.map((a) => `<url><loc>${origin}/docs${a.slug ? `/${xml(a.slug)}` : ""}</loc><lastmod>${xml(a.updated)}</lastmod></url>`).join("")}</urlset>\n`;
await write(path.join(dist, "sitemap.xml"), sitemap);
await write(
  path.join(dist, "llms.txt"),
  `# Commentary documentation\n\n> Documentation for the currently released Commentary app. Public reading is free; product writes require the documented authentication and permissions.\n\n${articles
    .filter((a) => a.slug)
    .map((a) => `- [${a.title}](${origin}/docs/${a.slug}.md): ${a.description}`)
    .join("\n")}\n`,
);
await write(
  path.join(dist, "version.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      releaseId,
      sourceSha,
      appBaselineSha: baseline.appBaselineSha,
      publishedAt,
      packages: baseline.packages,
    },
    null,
    2,
  ),
);
for (const article of articles) {
  const filename = article.slug ? `${article.slug}.md` : "index.md";
  await write(
    path.join(dist, filename),
    `# ${article.title}\n\n${article.description}\n\nCanonical: ${origin}/docs${article.slug ? `/${article.slug}` : ""}\n\n${replaceAssets(article.body)}\n`,
  );
}
const redirects = {},
  legacyPaths = {};
for (const article of articles) {
  const target = `/docs${article.slug ? `/${article.slug}` : ""}`;
  for (const alias of article.aliases) {
    if (!alias.startsWith("/docs/") || alias === target)
      throw new Error(`Invalid alias ${alias}`);
    redirects[alias] = target;
  }
  if (article.source && !article.source.includes("#"))
    legacyPaths[`docs/${article.source}`] = target;
}
legacyPaths["README.md"] = "/docs/start";
legacyPaths["docs/index.md"] = "/docs/start";
// Read the explicit editorial migration ledger when available; never infer aliases by title.
const ledger = await fs
  .readFile(path.join(root, "migration-ledger.csv"), "utf8")
  .catch(() => null);
if (ledger) {
  const rows = ledger
    .trim()
    .split(/\r?\n/)
    .map((line) =>
      [...line.matchAll(/(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g)].map((m) =>
        (m[1] ?? m[2]).replaceAll('""', '"'),
      ),
    );
  const headings = rows.shift();
  const currentRoutes = new Set(
    articles.map((a) => `/docs${a.slug ? `/${a.slug}` : ""}`),
  );
  for (const row of rows) {
    const record = Object.fromEntries(headings.map((h, i) => [h, row[i]]));
    const old = record.sourcePath;
    const target = (record.targetSlugs || "").split(";")[0];
    if (!old || !target) continue;
    const route = target === "home" ? "/docs" : `/docs/${target}`;
    if (!currentRoutes.has(route))
      throw new Error(`Migration target does not exist: ${old} -> ${route}`);
    legacyPaths[old] = route;
    const alias = `/docs/${old.replace(/^docs\//, "").replace(/\.md$/, "")}`;
    if (alias !== route && !currentRoutes.has(alias)) redirects[alias] = route;
  }
}
const search = await pagefind.createIndex();
if (search.errors.length) throw new Error(search.errors.join("\n"));
try {
  const indexed = await search.index.addDirectory({ path: dist });
  if (indexed.errors.length) throw new Error(indexed.errors.join("\n"));
  const written = await search.index.writeFiles({
    outputPath: path.join(dist, "pagefind"),
  });
  if (written.errors.length) throw new Error(written.errors.join("\n"));
} finally {
  await pagefind.close();
}
const files = [];
for (const file of await walk(dist)) {
  const relative = slash(path.relative(dist, file));
  if (/^sitemap-.*\.xml$/.test(relative)) continue;
  const bytes = await fs.readFile(file),
    contentType = /^(assets|examples)\/.*\.html?$/.test(relative)
      ? "text/plain; charset=utf-8"
      : typeFor(relative);
  let kind, publicPath;
  if (/^(assets|examples)\//.test(relative)) {
    kind = "asset";
    publicPath = `${assetPrefix}/${relative}`;
  } else if (relative.endsWith(".html")) {
    kind = "page";
    publicPath =
      relative === "index.html"
        ? "/docs"
        : `/docs/${relative.replace(/\.html$/, "").replace(/\/index$/, "")}`;
    if (relative === "404.html") continue;
  } else if (
    relative.endsWith(".md") ||
    (relative.startsWith("reference/") && relative.endsWith(".json")) ||
    [
      "sitemap.xml",
      "llms.txt",
      "version.json",
      "reference/openapi.json",
    ].includes(relative)
  ) {
    kind = "data";
    publicPath =
      relative === "index.md" ? "/docs/index.md" : `/docs/${relative}`;
  } else {
    kind = "asset";
    publicPath = `${assetPrefix}/${relative}`;
  }
  files.push({
    path: relative,
    publicPath,
    sha256: sha256(bytes),
    sizeBytes: bytes.length,
    contentType,
    kind,
  });
}
// The docs-home Markdown alternative has a conventional index filename.
const manifest = {
  schemaVersion: 1,
  releaseId,
  sourceSha,
  appBaselineSha: baseline.appBaselineSha,
  publishedAt,
  packages: baseline.packages,
  files,
  redirects,
  legacyPaths,
};
await write(
  path.join(root, ".generated/manifest.json"),
  JSON.stringify(manifest, null, 2),
);
console.log(`Packaged ${files.length} files as release ${releaseId}.`);
