import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";
import {
  root,
  walk,
  slash,
  parseDocument,
  frontmatter,
  write,
  readJson,
  safeSlug,
  sha256,
} from "./site-lib.mjs";
import {
  operationContent,
  propertyTable,
  referenceSlug,
} from "./reference-content.mjs";

const baseline = await readJson(path.join(root, "release-baseline.json"));
if (!/^[a-f0-9]{40}$/.test(baseline.appBaselineSha))
  throw new Error("A verified production app baseline is required.");
for (const contract of ["docs/api/openapi.json", "docs/api/mcp-tools.md"])
  if (
    sha256(await fs.readFile(path.join(root, contract))) !==
    baseline.contracts?.[contract]
  )
    throw new Error(
      `Released contract checksum changed: ${contract}. Reverify the deployed source before updating the baseline receipt.`,
    );
let sourceSha = process.env.DOCS_SOURCE_SHA;
if (!sourceSha) {
  const gitRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
  if (path.resolve(gitRoot) !== root)
    throw new Error(
      "Set DOCS_SOURCE_SHA explicitly outside the docs checkout.",
    );
  sourceSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
}
if (!/^[a-f0-9]{40}$/.test(sourceSha))
  throw new Error("Invalid docs source SHA.");
let publishedAt = process.env.DOCS_PUBLISHED_AT;
if (!publishedAt && process.env.SOURCE_DATE_EPOCH) {
  if (!/^\d+$/.test(process.env.SOURCE_DATE_EPOCH))
    throw new Error("Invalid SOURCE_DATE_EPOCH.");
  publishedAt = new Date(
    Number(process.env.SOURCE_DATE_EPOCH) * 1000,
  ).toISOString();
}
if (!publishedAt) {
  const gitRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
  if (path.resolve(gitRoot) !== root)
    throw new Error(
      "Set DOCS_PUBLISHED_AT explicitly when validating outside the docs checkout.",
    );
  publishedAt = execFileSync("git", ["show", "-s", "--format=%cI", sourceSha], {
    cwd: root,
    encoding: "utf8",
  }).trim();
}
if (!Number.isFinite(Date.parse(publishedAt)))
  throw new Error("Invalid publication timestamp.");
publishedAt = new Date(publishedAt).toISOString();
// An unrelated docs release must not refresh every article's last-modified date.
const sourceDates = new Map();
let isSourceCheckout = false;
try {
  isSourceCheckout = path.resolve(execFileSync("git", ["rev-parse", "--show-toplevel"], {
    cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"],
  }).trim()) === root;
} catch {
  // Explicit source SHA/time support reproducible local staging without a Git checkout.
}
function sourceUpdated(source) {
  const file = `docs/${source.split("#")[0]}`;
  if (!sourceDates.has(file)) {
    const date = isSourceCheckout ? execFileSync("git", ["log", "-1", "--format=%cI", sourceSha, "--", file], {
      cwd: root, encoding: "utf8",
    }).trim() : "";
    sourceDates.set(file, date || publishedAt);
  }
  return sourceDates.get(file);
}
// public/ is generated-only. Reset it so removed assets cannot leak into a later release.
const publicDir = path.resolve(root, "public");
if (path.dirname(publicDir) !== root)
  throw new Error("Unexpected public output directory.");
await fs.rm(publicDir, { recursive: true, force: true });
await fs.mkdir(publicDir, { recursive: true });
const docsRoot = path.join(root, "docs");
const inputs = [];
for (const file of await walk(docsRoot)) {
  if (!/\.mdx?$/.test(file)) continue;
  const source = slash(path.relative(docsRoot, file));
  const { data, body } = parseDocument(await fs.readFile(file, "utf8"));
  if (data.published !== true) continue;
  if (typeof data.updated !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.updated) || !Number.isFinite(Date.parse(data.updated)))
    throw new Error(`Published article needs an accurate substantive-edit date (updated: YYYY-MM-DD): ${source}`);
  if (
    !safeSlug(data.slug) ||
    !data.title ||
    !data.description ||
    !["start", "use", "workflows", "build", "reference", "help"].includes(
      data.section,
    )
  )
    throw new Error(`Invalid page metadata: ${source}`);
  if (data.appBaselineSha !== baseline.appBaselineSha)
    throw new Error(
      `Page ${source} has not been verified against the production release.`,
    );
  inputs.push({ source, data, body });
}
const inventory = await readJson(path.join(root, "release-content.json"));
if (inventory.baselineSha !== baseline.appBaselineSha)
  throw new Error(
    "Editorial inventory is not verified against this production baseline.",
  );
const listed = new Set(
  inventory.entries.filter((e) => e.published === true).map((e) => e.slug),
);
for (const page of inputs)
  if (!listed.has(page.data.slug))
    throw new Error(
      `Published page is missing from the reviewed editorial inventory: ${page.source}`,
    );
for (const slug of listed)
  if (!inputs.some((p) => p.data.slug === slug))
    throw new Error(
      `Editorial inventory page is missing or not published: ${slug}`,
    );

// Reference text is generated exclusively from contracts copied from the verified app release.
const openapi = await readJson(path.join(docsRoot, "api/openapi.json"));
const references = [];
for (const [endpoint, methods] of Object.entries(openapi.paths)) {
  for (const [method, operation] of Object.entries(methods)) {
    if (
      !["get", "post", "put", "patch", "delete", "head", "options"].includes(
        method,
      )
    )
      continue;
    const id = (operation.operationId || `${method}-${endpoint}`)
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
    const title = operation.summary || `${method.toUpperCase()} ${endpoint}`;
    const description = (operation.description || title)
      .replace(/\s+/g, " ")
      .slice(0, 200);
    const body = operationContent(endpoint, method, operation, openapi);
    references.push({
      source: `api/openapi.json#${operation.operationId || id}`,
      data: {
        title,
        description,
        slug: `reference/api/${id}`,
        section: "reference",
        contentType: "reference",
        published: true,
        appBaselineSha: baseline.appBaselineSha,
      },
      body,
    });
  }
}
const mcpSource = await fs.readFile(
  path.join(docsRoot, "api/mcp-tools.md"),
  "utf8",
);
for (const [name, schema] of Object.entries(
  openapi.components?.schemas || {},
)) {
  const slug = `reference/schemas/${referenceSlug(name)}`;
  const body = [
    schema.description || `Released API schema for \`${name}\`.`,
    "## Fields and constraints",
    propertyTable(schema, openapi),
    "## Full schema",
    `[Download this schema](/docs/reference/schemas/${referenceSlug(name)}.json) or use the [complete OpenAPI document](/docs/reference/openapi.json) to resolve all references.`,
    "## Related reference",
    "[Browse API endpoints](/docs/reference/api-operations).",
  ].join("\n\n");
  references.push({
    source: `api/openapi.json#${name}`,
    data: {
      title: name,
      description: (
        schema.description || `Fields, types, and constraints for ${name}.`
      ).slice(0, 200),
      slug,
      section: "reference",
      contentType: "reference",
      published: true,
      appBaselineSha: baseline.appBaselineSha,
    },
    body,
  });
  await write(
    path.join(root, "public", `reference/schemas/${referenceSlug(name)}.json`),
    JSON.stringify(schema, null, 2),
  );
}
for (const match of mcpSource.matchAll(
  /^## `([^`]+)`\r?\n([\s\S]*?)(?=^## `|$(?![\s\S]))/gm,
)) {
  const name = match[1],
    raw = match[2].trim(),
    json = raw.match(/```json\r?\n([\s\S]*?)\r?\n```/);
  const schema = json ? JSON.parse(json[1]) : {};
  const description = raw.split(/\r?\n/)[0];
  const toolSlug = name.replaceAll("_", "-");
  const body = [
    description,
    "## Connect and discover",
    "Connect an authenticated [MCP client](/docs/build/mcp). Call `tools/list` to confirm this tool is available to the current credential. Provider, workspace, and agent grants remain separate access checks.",
    "## Input fields",
    propertyTable(schema, {}),
    "## Call the tool",
    `Send a \`tools/call\` request with \`name: "${name}"\` and an \`arguments\` object containing the required fields above. Choose an advertised action, then supply the fields required by that action. Do not treat a successful request as human approval or verified execution unless the returned contract explicitly records that fact.`,
    "## Errors and recovery",
    "Read the returned error and permission requirements. Refresh stale revisions before conditional writes, retain idempotency keys only for exact retries, and reconnect when a credential has expired.",
    "## Complete input contract",
    `[Download the JSON schema](/docs/reference/mcp/${toolSlug}.json) for action-specific unions, nested fields, and validation constraints. This schema is generated from the same released definitions as the MCP endpoint. [Browse tools](/docs/reference/mcp-operations).`,
  ].join("\n\n");
  references.push({
    source: `api/mcp-tools.md#${name}`,
    data: {
      title: name,
      description: description.slice(0, 200),
      slug: `reference/mcp/${toolSlug}`,
      section: "reference",
      contentType: "reference",
      published: true,
      appBaselineSha: baseline.appBaselineSha,
    },
    body,
  });
  await write(
    path.join(root, "public", `reference/mcp/${toolSlug}.json`),
    JSON.stringify(schema, null, 2),
  );
}
const pages = [...inputs, ...references];
const unique = new Set();
for (const page of pages) {
  if (unique.has(page.data.slug))
    throw new Error(`Duplicate slug: ${page.data.slug}`);
  unique.add(page.data.slug);
}
const sourceMap = new Map(
  pages.map((page) => [page.source, `/docs/${page.data.slug}`]),
);
const outputDir = path.join(root, "src/content/docs");
// This directory is generated-only and ignored by Git.
await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });
const articleIndex = [];
for (const page of pages) {
  let body = page.body.replace(/^# [^\r\n]+\r?\n+/, "");
  body = body.replace(
    /(!?\[[^\]]*\]\()([^\s)]+)(\))/g,
    (all, start, target, end) => {
      if (
        target === "https://commentary.dev/docs" ||
        target.startsWith("https://commentary.dev/docs/")
      )
        return `${start}${target.slice("https://commentary.dev".length)}${end}`;
      if (/^(https?:|mailto:|\/|#|data:)/.test(target)) return all;
      const [file, hash] = target.split("#");
      const resolved = path.posix.normalize(
        path.posix.join(path.posix.dirname(page.source.split("#")[0]), file),
      );
      if (sourceMap.has(resolved))
        return `${start}${sourceMap.get(resolved)}${hash ? `#${hash}` : ""}${end}`;
      if (resolved.startsWith("assets/") || resolved.startsWith("examples/"))
        return `${start}/docs/${resolved}${hash ? `#${hash}` : ""}${end}`;
      return all;
    },
  );
  const updated = page.data.updated || sourceUpdated(page.source);
  const data = {
    title: page.data.title,
    description: page.data.description,
    slug: page.data.slug,
    editUrl: `https://github.com/commentary-dev/commentary-docs/edit/main/docs/${page.source.split("#")[0]}`,
    lastUpdated: new Date(updated),
    sidebar: {
      hidden: references.includes(page),
      order: page.data.order ?? 100,
    },
    head: [
      {
        tag: "meta",
        attrs: { name: "docsearch:section", content: page.data.section },
      },
    ],
  };
  await write(
    path.join(outputDir, `${page.data.slug}.md`),
    frontmatter(data, body),
  );
  articleIndex.push({
    source: page.source,
    title: page.data.title,
    description: page.data.description,
    slug: page.data.slug,
    section: page.data.section,
    contentType: page.data.contentType || "guide",
    updated: new Date(updated).toISOString(),
    aliases: page.data.aliases || [],
    body,
  });
}
// Bounded reference hubs expose generated operations without a thousand sidebar rows.
for (const [kind, title, description] of [
  [
    "api",
    "HTTP API reference",
    "Find an endpoint, its required fields, and its response contract.",
  ],
  ["mcp", "MCP tool reference", "Find a tool and its released input schema."],
]) {
  const rows = references.filter((p) =>
    p.data.slug.startsWith(`reference/${kind}/`),
  );
  const body = `${description}\n\n${rows.map((p) => `- [${p.data.title.replaceAll("[", "").replaceAll("]", "")}](/docs/${p.data.slug})`).join("\n")}`;
  const slug = `reference/${kind}-operations`;
  await write(
    path.join(outputDir, `${slug}.md`),
    frontmatter(
      {
        title,
        description,
        slug,
        sidebar: { order: kind === "api" ? 20 : 30 },
      },
      body,
    ),
  );
  articleIndex.push({
    source: null,
    title,
    description,
    slug,
    section: "reference",
    contentType: "reference",
    updated: baseline.verifiedAt,
    aliases: [],
    body,
  });
}
await write(
  path.join(outputDir, "index.mdx"),
  frontmatter(
    {
      title: "Build a clearer review process",
      description:
        "Use Commentary, learn complete workflows, and connect your tools and agents.",
      template: "splash",
      hero: {
        tagline:
          "Technical guides, practical workflows, and complete references for people and agents working together.",
        actions: [
          {
            text: "Start your first review",
            link: "/docs/start",
            icon: "right-arrow",
          },
          {
            text: "Build an integration",
            link: "/docs/build",
            variant: "minimal",
          },
        ],
      },
    },
    `import { Card, CardGrid, LinkCard } from '@astrojs/starlight/components';\n\n<CardGrid>\n<LinkCard title="Use Commentary" href="/docs/use" description="Review documents, organize feedback, and move work forward." />\n<LinkCard title="Follow a workflow" href="/docs/workflows" description="Go from a real problem to a working result, step by step." />\n<LinkCard title="Build with Commentary" href="/docs/build" description="Connect the CLI, agent skills, MCP, and the HTTP API." />\n<LinkCard title="Find a reference" href="/docs/reference" description="Look up released commands, endpoints, schemas, and permissions." />\n</CardGrid>\n\n## Start with the outcome\n\n- [Review a pull request as a document](/docs/use/pull-requests)\n- [Publish a local draft for feedback](/docs/build/cli-draft-reviews)\n- [Install an agent skill](/docs/build/agent-skills)\n- [Find and fix a connection problem](/docs/help/troubleshooting)\n\n## Documentation you can use\n\nEvery public guide describes shipped functionality. Examples explain prerequisites, expected results, and recovery steps. [View the documentation release receipt](/docs/version.json).`,
  ),
);
articleIndex.push({
  source: "index.md",
  title: "Commentary documentation",
  description:
    "Technical guides, practical workflows, and complete references.",
  slug: "",
  section: "start",
  contentType: "guide",
  updated: baseline.verifiedAt,
  aliases: [],
  body: "Use Commentary, follow complete workflows, and build integrations. See /docs/start, /docs/use, /docs/workflows, /docs/build, /docs/reference and /docs/help.",
});
const labels = {
  start: "Get started",
  use: "Use Commentary",
  workflows: "Workflows & examples",
  build: "Build with Commentary",
  reference: "Reference",
  help: "Help",
};
const navigation = Object.entries(labels).map(([section, label]) => {
  const entries = articleIndex
    .filter(
      (p) =>
        p.section === section &&
        !references.some((r) => r.data.slug === p.slug) &&
        p.slug,
    )
    .sort((a, b) =>
      a.slug === section
        ? -1
        : b.slug === section
          ? 1
          : a.title.localeCompare(b.title),
    );
  const items = entries
    .filter((p) => !p.slug.startsWith("build/skills/") && !p.slug.startsWith("reference/cli/"))
    .map((p) => ({ label: p.title, link: `/${p.slug}` }));
  const skills = entries.filter((p) => p.slug.startsWith("build/skills/"));
  if (skills.length)
    items.push({
      label: "Skill reference",
      collapsed: true,
      items: skills.map((p) => ({ label: p.title, link: `/${p.slug}` })),
    });
  const cliFamilies = entries.filter((p) => p.slug.startsWith("reference/cli/"));
  if (cliFamilies.length)
    items.push({
      label: "CLI command families",
      collapsed: true,
      items: cliFamilies.map((p) => ({ label: p.title, link: `/${p.slug}` })),
    });
  return { label, items };
});
await write(
  path.join(root, ".generated/navigation.json"),
  JSON.stringify(navigation, null, 2),
);
await write(
  path.join(root, ".generated/articles.json"),
  JSON.stringify(articleIndex, null, 2),
);
const rawInputs = [
  ...(await walk(docsRoot)),
  ...(await walk(path.join(root, "src/components"))),
  ...(await walk(path.join(root, "src/styles"))),
  ...(await walk(path.join(root, "src/assets"))),
  ...(await walk(path.join(root, "scripts"))),
  path.join(root, "astro.config.mjs"),
  path.join(root, "package-lock.json"),
];
let contentHash = "";
for (const file of rawInputs)
  contentHash +=
    slash(path.relative(root, file)) + sha256(await fs.readFile(file));
const releaseId = sha256(
  contentHash + JSON.stringify(baseline) + sourceSha + publishedAt,
).slice(0, 32);
await write(
  path.join(root, ".generated/build.json"),
  JSON.stringify({ releaseId, baseline, sourceSha, publishedAt }, null, 2),
);
const publishedAssets = new Set();
for (const article of articleIndex)
  for (const match of article.body.matchAll(
    /\/docs\/((?:assets|examples)\/[a-zA-Z0-9_./-]+)/g,
  ))
    publishedAssets.add(match[1]);
const optimizedImages = {};
for (const relative of publishedAssets) {
  const source = path.resolve(docsRoot, relative);
  if (
    !source.startsWith(`${docsRoot}${path.sep}`) ||
    relative.split("/").includes("..")
  )
    throw new Error(`Unsafe published asset: ${relative}`);
  if (/\.(png|jpe?g)$/i.test(relative)) {
    const optimizedPath = `${relative}.webp`;
    const { data, info } = await sharp(source, { limitInputPixels: 40000000 })
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toBuffer({ resolveWithObject: true });
    await write(path.join(publicDir, optimizedPath), data);
    optimizedImages[`/docs/${relative}`] = {
      path: optimizedPath, width: info.width, height: info.height,
    };
  } else {
    await write(path.join(publicDir, relative), await fs.readFile(source));
  }
}
await write(path.join(root, ".generated/images.json"), JSON.stringify(optimizedImages, null, 2));
await write(
  path.join(root, ".generated/published-assets.json"),
  JSON.stringify([...publishedAssets].sort(), null, 2),
);
await write(
  path.join(root, "public/reference/openapi.json"),
  JSON.stringify(openapi),
);
await fs.copyFile(
  path.join(root, "src/assets/favicon.svg"),
  path.join(root, "public/favicon.svg"),
);
console.log(
  `Prepared ${inputs.length} authored articles and ${references.length} released reference entries.`,
);
