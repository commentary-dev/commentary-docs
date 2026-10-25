import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PACKAGE_NAME = "@commentary-dev/cli";
const PACKAGE_VERSION = "0.3.0";
const DIST_SHA256 = "a379829d988fed621dc17431a1f42bbc7391a216d5f644eb85008181095ceb48";
const TARBALL_SHA256 = "8213004c10627d7fa2e57e60465133906664fa5b32171eb70d879fcf025f1d20";
const APP_BASELINE_SHA = "4e7ac7718cfb098807ce32a01b8223f575ab7cf7";
const SOURCE_DOC = "docs/commentary-cli.md";
const RELEASE_DATE = "2026-10-25";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultOutputRoot = path.resolve(scriptDir, "../..");
const runFile = promisify(execFile);
const tick = String.fromCharCode(96);

function fail(message) {
  console.error(`CLI reference capture: ${message}`);
  process.exit(1);
}
function argsFrom(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    if (!flag.startsWith("--")) fail(`Unexpected argument: ${flag}`);
    const name = flag.slice(2);
    const value = argv[++i];
    if (!value || value.startsWith("--")) fail(`${flag} requires a value.`);
    if (result[name]) fail(`${flag} may be passed only once.`);
    result[name] = value;
  }
  return result;
}
function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}
function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}
function isInside(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}
function parseCommands(help) {
  const lines = help.split(/\r?\n/);
  const heading = lines.findIndex((line) => /^Commands:\s*$/.test(line));
  if (heading < 0) return [];
  const commands = [];
  for (let i = heading + 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) break;
    const match = line.match(/^ {2}([a-z][a-z0-9-]*(?:\|[a-z][a-z0-9-]*)*)(?:\s|$)/i);
    if (!match) {
      if (/^\s{3,}/.test(line)) continue;
      break;
    }
    for (const name of match[1].split("|")) if (name !== "help") commands.push(name);
  }
  return commands;
}
async function capture(packageRoot, executable) {
  const visited = new Set();
  const queue = [[]];
  const entries = [];
  async function worker() {
    while (queue.length) {
      const commandPath = queue.shift();
      if (!commandPath) break;
      const key = commandPath.join(" ");
      if (visited.has(key)) continue;
      visited.add(key);
      if (entries.length >= 400) fail("Command tree exceeded the 400-command safety limit.");
      let output;
      try {
        const result = await runFile(process.execPath, [executable, ...commandPath, "--help"], {
          cwd: packageRoot,
          encoding: "utf8",
          timeout: 15000,
          maxBuffer: 1024 * 1024,
          windowsHide: true,
          env: {
            PATH: process.env.PATH || "",
            SystemRoot: process.env.SystemRoot || "",
            WINDIR: process.env.WINDIR || "",
            NO_COLOR: "1",
            FORCE_COLOR: "0",
          },
        });
        output = result.stdout;
      } catch (error) {
        fail(`Could not read --help for commentary ${key || "(root)"}: ${error.message}`);
      }
      if (!output?.startsWith("Usage: commentary")) fail(`Help output was invalid for commentary ${key || "(root)"}.`);
      entries.push({ commandPath, output: output.trimEnd() });
      for (const command of parseCommands(output)) queue.push([...commandPath, command]);
    }
  }
  await Promise.all(Array.from({ length: 4 }, () => worker()));
  return entries.sort((a, b) => compareText(a.commandPath.join(" "), b.commandPath.join(" ")));
}
function fence(output) {
  return `${tick.repeat(3)}text\n${output}\n${tick.repeat(3)}`;
}

const options = argsFrom(process.argv.slice(2));
if (!options["package-dir"]) fail("Pass --package-dir with the explicitly unpacked npm tarball package directory.");
const packageRoot = path.resolve(options["package-dir"]);
const outputRoot = path.resolve(options["output-root"] || defaultOutputRoot);
const packageFile = path.join(packageRoot, "package.json");
if (!fs.existsSync(packageFile)) fail(`No package.json at ${packageFile}`);
const packageJson = JSON.parse(fs.readFileSync(packageFile, "utf8"));
if (packageJson.name !== PACKAGE_NAME || packageJson.version !== PACKAGE_VERSION) fail(`Expected ${PACKAGE_NAME}@${PACKAGE_VERSION}, received ${packageJson.name}@${packageJson.version}.`);
const executableRelative = packageJson.bin?.commentary;
if (typeof executableRelative !== "string") fail("The package does not declare the commentary executable.");
const executable = path.resolve(packageRoot, executableRelative);
if (!isInside(packageRoot, executable) || !fs.existsSync(executable)) fail("The declared executable is missing or resolves outside the supplied package directory.");
const distSha = sha256(fs.readFileSync(executable));
if (distSha !== DIST_SHA256) fail(`Published CLI bundle integrity mismatch: ${distSha}`);
if (options.tarball) {
  const tarballPath = path.resolve(options.tarball);
  if (!fs.existsSync(tarballPath)) fail(`Tarball not found: ${tarballPath}`);
  const tarballSha = sha256(fs.readFileSync(tarballPath));
  if (tarballSha !== TARBALL_SHA256) fail(`Published CLI tarball integrity mismatch: ${tarballSha}`);
}

const helpEntries = await capture(packageRoot, executable);
const groups = [
  { slug: "draft-reviews", title: "Draft Reviews", description: "Released command help for local Draft Review sessions, comments, collaboration, authentication, recovery, and sharing.", commands: ["abandon","collaboration","comments","login","logout","next-comment","open","pull","rebase","reply","resolve","restore","review","revision","revisions","sessions","share","status","sync","track","upload","wait-comment","watch","whoami"] },
  { slug: "interactions", title: "Interactions and Decisions", description: "Released command help for durable Interactions, immutable Decisions, and agent-reported Fulfillment.", commands: ["decision","fulfillment","interaction"] },
  { slug: "workspace-inbox", title: "Workspace and Inbox", description: "Released command help for delegated workspace resources, queues, and Inbox operations.", commands: ["inbox","workspace"] },
  { slug: "webhooks", title: "Webhooks", description: "Released command help for scoped webhook subscriptions and delivery receipts.", commands: ["webhook"] },
  { slug: "projects-trackers", title: "Projects and Trackers", description: "Released command help for Project resources, typed Trackers, records, views, imports, and proposals.", commands: ["project","tracker"] },
  { slug: "packages", title: "Review packages", description: "Released command help for validating and publishing static walkthrough packages.", commands: ["package"] },
  { slug: "review-sessions-evidence", title: "Review sessions, snapshots, and evidence", description: "Released command help for immutable review sessions, source snapshots, and evidence records.", commands: ["review-session","source-snapshot","evidence"] },
];
const commandFamilies = new Set(groups.flatMap((group) => group.commands));
const topLevel = new Set(helpEntries.filter((entry) => entry.commandPath.length === 1).map((entry) => entry.commandPath[0]));
const ungrouped = [...topLevel].filter((name) => !commandFamilies.has(name));
if (ungrouped.length) fail(`Unmapped top-level command families: ${ungrouped.join(", ")}`);
const byFamily = new Map();
for (const entry of helpEntries) {
  if (!entry.commandPath.length) continue;
  const family = entry.commandPath[0];
  if (!byFamily.has(family)) byFamily.set(family, []);
  byFamily.get(family).push(entry);
}
const pageItems = [];
const rootHelp = helpEntries.find((entry) => entry.commandPath.length === 0)?.output;
if (!rootHelp) fail("The released CLI did not return root --help output.");
const hub = [
  `This command reference is captured from the published ${tick}${PACKAGE_NAME}@${PACKAGE_VERSION}${tick} package. It records the executable’s own ${tick}--help${tick} output, including command descriptions, options, required arguments, aliases, and nested command lists. The capture uses read-only help invocations; no authenticated or write command runs.`,
  `The npm tarball SHA-256 is ${tick}${TARBALL_SHA256}${tick}; the packaged executable SHA-256 is ${tick}${DIST_SHA256}${tick}. The generator verifies both receipts when ${tick}--tarball${tick} is supplied and always verifies the executable hash before running it.`,
  `Family pages preserve the recursive help snapshots for every command family and subcommand. For task-oriented installation and examples, see [CLI setup and workflows](/docs/build/cli) and [Draft Review CLI workflow](/docs/build/cli-draft-reviews).`,
  "## Command families",
  ...groups.map((group) => `- [${group.title}](/docs/reference/cli/${group.slug}) — ${group.description}`),
  "## Global help",
  "Root help output from the released executable:",
  fence(rootHelp),
].join("\n\n");
pageItems.push({ path: "docs/reference/cli.md", slug: "reference/cli", section: "reference", contentType: "reference", title: "Commentary CLI reference", description: "Complete recursive command and option reference captured from the published Commentary CLI 0.3.0 binary.", body: hub });
for (const group of groups) {
  const familyEntries = group.commands.flatMap((family) => byFamily.get(family) || []);
  const body = [
    group.description,
    `Every block is the exact output of the released ${tick}commentary <command> --help${tick} invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.`,
    ...familyEntries.flatMap((entry) => {
      const commandName = entry.commandPath.join(" ");
      const level = entry.commandPath.length === 1 ? "##" : entry.commandPath.length === 2 ? "###" : "####";
      return [`${level} ${tick}commentary ${commandName} --help${tick}`, fence(entry.output)];
    }),
  ].join("\n\n");
  pageItems.push({ path: `docs/reference/cli/${group.slug}.md`, slug: `reference/cli/${group.slug}`, section: "reference", contentType: "reference", title: `CLI: ${group.title}`, description: group.description, body });
}

// All integrity checks and help captures finish before any authored file is written.
const manifestPath = path.join(outputRoot, "release-content.json");
const ledgerPath = path.join(outputRoot, "migration-ledger.csv");
if (!fs.existsSync(manifestPath) || !fs.existsSync(ledgerPath)) fail("Output root must contain release-content.json and migration-ledger.csv.");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
if (manifest.baselineSha !== APP_BASELINE_SHA) fail(`Editorial manifest baseline mismatch: ${manifest.baselineSha}`);
const ledgerLines = fs.readFileSync(ledgerPath, "utf8").split(/\r?\n/);
const ledgerIndex = ledgerLines.findIndex((line) => line.startsWith(`"${SOURCE_DOC}",`));
if (ledgerIndex < 0) fail(`Migration ledger has no ${SOURCE_DOC} row.`);
for (const page of pageItems) {
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(page.title)}`,
    `description: ${JSON.stringify(page.description)}`,
    `slug: ${page.slug}`,
    `section: ${page.section}`,
    `contentType: ${page.contentType}`,
    "published: true",
    `appBaselineSha: ${APP_BASELINE_SHA}`,
    `updated: ${RELEASE_DATE}`,
    "---",
    "",
    page.body,
    "",
  ].join("\n");
  const outputPath = path.join(outputRoot, page.path);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, frontmatter, "utf8");
  const entry = { path: page.path, slug: page.slug, section: page.section, contentType: page.contentType, title: page.title, description: page.description, published: true, appBaselineSha: APP_BASELINE_SHA, sourceDocs: [SOURCE_DOC], updated: RELEASE_DATE };
  const existingIndex = manifest.entries.findIndex((candidate) => candidate.slug === page.slug);
  if (existingIndex >= 0) manifest.entries[existingIndex] = entry;
  else manifest.entries.push(entry);
}
manifest.entries.sort((a, b) => compareText(a.path, b.path));
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
const ledgerFields = [...ledgerLines[ledgerIndex].matchAll(/"((?:[^"]|"")*)"/g)].map((match) => match[1].replace(/""/g, '"'));
if (ledgerFields.length !== 4) fail("Unexpected CLI migration ledger row format.");
const targets = [...new Set(`${ledgerFields[2]};${pageItems.map((page) => page.slug).join(";")}`.split(";").filter(Boolean))];
ledgerFields[2] = targets.join(";");
ledgerLines[ledgerIndex] = ledgerFields.map((field) => `"${field.replaceAll('"', '""')}"`).join(",");
fs.writeFileSync(ledgerPath, `${ledgerLines.join("\n").replace(/\n+$/, "")}\n`, "utf8");
console.log(JSON.stringify({ package: `${PACKAGE_NAME}@${PACKAGE_VERSION}`, executableSha256: distSha, helpSnapshots: helpEntries.length, authoredPages: pageItems.length, pageSlugs: pageItems.map((page) => page.slug) }, null, 2));
