# Regenerate the published CLI reference

`capture-cli-help.mjs` rebuilds the authored CLI reference pages, their
`release-content.json` entries, and the CLI row in `migration-ledger.csv` from
the installed binary in an explicitly supplied npm package directory. It does
not contact npm, install dependencies, authenticate, or run write commands. The
capture invokes only recursively discovered `--help` paths after checking the
package identity and executable hash.

## Reproduce the current release capture

The checked-in snapshot is pinned to:

- Package: `@commentary-dev/cli@0.3.0`
- App baseline: `4e7ac7718cfb098807ce32a01b8223f575ab7cf7`
- npm tarball SHA-256: `8213004c10627d7fa2e57e60465133906664fa5b32171eb70d879fcf025f1d20`
- Packaged `dist/index.js` SHA-256: `a379829d988fed621dc17431a1f42bbc7391a216d5f644eb85008181095ceb48`
- Capture date: `2026-10-25`

From the commentary repository root, retrieve and unpack the exact package:

```powershell
New-Item -ItemType Directory -Force .data\cli-release-audit | Out-Null
npm pack @commentary-dev/cli@0.3.0 --pack-destination .data\cli-release-audit
tar -xzf .data\cli-release-audit\commentary-dev-cli-0.3.0.tgz -C .data\cli-release-audit
npm install --prefix .data\cli-release-audit\package --omit=dev --ignore-scripts --no-audit --no-fund
```

Run the generator from the docs site root. Its default output root is the site
root that contains `release-content.json` and `migration-ledger.csv`:

```powershell
Push-Location .data\docs-site
node docs\scripts\capture-cli-help.mjs `
  --package-dir C:\code\commentary\.data\cli-release-audit\package `
  --tarball C:\code\commentary\.data\cli-release-audit\commentary-dev-cli-0.3.0.tgz
Pop-Location
```

The generator stops before writing if any release receipt, package identity,
baseline, output inventory, or command-family mapping does not match. It writes
the CLI reference pages and updates their inventory and source migration map
only after the full help tree has been captured.

## Updating to a later release

Do not change the pinned hashes just to make a new tarball pass. First verify
the package version and tarball from the intended npm release, confirm the
executable hash inside that tarball, and verify the application production
baseline that the docs release will describe. Then update the four constants
for package version, tarball hash, executable hash, and app baseline in the
generator, plus the capture date. Update this README’s receipts at the same
time. Re-run the generator with both the unpacked package directory and the
tarball, review the changed command snapshots and manifest, then run the docs
site build and link checks.
