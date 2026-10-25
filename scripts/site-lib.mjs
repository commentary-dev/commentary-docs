import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import YAML from "yaml";

export const root = path.resolve(import.meta.dirname, "..");
export const base = "/docs";
export const origin = "https://commentary.dev";
export const sha256 = (bytes) =>
  createHash("sha256").update(bytes).digest("hex");
export const slash = (value) => value.split(path.sep).join("/");
export async function walk(dir) {
  const result = [];
  for (const item of await fs
    .readdir(dir, { withFileTypes: true })
    .catch(() => [])) {
    if (item.isSymbolicLink())
      throw new Error(
        `Symlinks are not allowed in documentation inputs: ${item.name}`,
      );
    const file = path.join(dir, item.name);
    if (item.isDirectory()) result.push(...(await walk(file)));
    else result.push(file);
  }
  return result.sort();
}
export function parseDocument(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return {
    data: match ? YAML.parse(match[1]) : {},
    body: match ? text.slice(match[0].length) : text,
  };
}
export const frontmatter = (data, body) =>
  `---\n${YAML.stringify(data)}---\n\n${body.trim()}\n`;
export async function write(file, text) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, text);
}
export async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}
export const safeSlug = (value) =>
  typeof value === "string" &&
  /^(?:[a-z0-9]+(?:-[a-z0-9]+)*)(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(value);
export const typeFor = (name) =>
  ({
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".wasm": "application/wasm",
    ".pf_fragment": "application/octet-stream",
    ".pf_index": "application/octet-stream",
    ".pf_meta": "application/octet-stream",
    ".yaml": "text/plain; charset=utf-8",
    ".yml": "text/plain; charset=utf-8",
    ".zip": "application/zip",
  })[path.extname(name)] ?? "application/octet-stream";
export const xml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c],
  );
