import { spawnSync } from "node:child_process";
import path from "node:path";
import { root } from "./site-lib.mjs";
const stages = [
  ["scripts/prepare-content.mjs"],
  ["node_modules/astro/bin/astro.mjs", "build"],
  ["scripts/package-site.mjs"],
  ["scripts/check-site.mjs"],
];
for (const args of stages) {
  const result = spawnSync(process.execPath, args, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
