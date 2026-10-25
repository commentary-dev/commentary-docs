// Authoring utility, deliberately not part of the build: keep committed Markdown useful on GitHub.
import fs from "node:fs/promises";
import path from "node:path";
import { root, walk, slash, parseDocument } from "./site-lib.mjs";
const docsRoot = path.join(root, "docs");
const pages = [];
for (const file of await walk(docsRoot)) {
  if (!/\.mdx?$/.test(file)) continue;
  const raw = await fs.readFile(file, "utf8"),
    { data, body } = parseDocument(raw);
  if (data.published === true)
    pages.push({
      file,
      source: slash(path.relative(docsRoot, file)),
      raw,
      body,
      slug: data.slug,
    });
}
const targets = new Map(pages.map((p) => [`/docs/${p.slug}`, p.source]));
let changed = 0;
for (const page of pages) {
  const sections = page.body.split(/(```[\s\S]*?```)/g);
  const body = sections
    .map((section, i) =>
      i % 2
        ? section
        : section.replace(
            /(!?\[[^\]]*\]\()(\/docs(?:\/[^\s)#]+)?)(#[^\s)]*)?(\))/g,
            (all, start, url, hash = "", end) => {
              const target =
                targets.get(url) ||
                (url.startsWith("/docs/assets/") ||
                url.startsWith("/docs/examples/")
                  ? url.slice("/docs/".length)
                  : null);
              if (!target)
                return `${start}https://commentary.dev${url}${hash}${end}`;
              const relative = path.posix.relative(
                path.posix.dirname(page.source),
                target,
              );
              return `${start}${relative || path.posix.basename(target)}${hash}${end}`;
            },
          ),
    )
    .join("");
  if (body !== page.body) {
    await fs.writeFile(
      page.file,
      page.raw.slice(0, page.raw.length - page.body.length) + body,
    );
    changed++;
  }
}
console.log(`Normalized GitHub-readable links in ${changed} authored pages.`);
