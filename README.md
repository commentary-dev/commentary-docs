# Commentary documentation

The public technical documentation for [Commentary](https://commentary.dev/docs). This repository owns the content, documentation design, static build, search index, and independent publication workflow. The application repository owns product behavior and the authenticated publication service.

## Read the documentation

- [Get started](https://commentary.dev/docs/start)
- [Use Commentary](https://commentary.dev/docs/use)
- [Workflows and examples](https://commentary.dev/docs/workflows)
- [Build with Commentary](https://commentary.dev/docs/build)
- [Reference](https://commentary.dev/docs/reference)
- [Help](https://commentary.dev/docs/help)

## Develop locally

Use Node 24. Install dependencies with `npm ci`, then run `npm run build` and `npm test`. Run `npm run preview` and open `http://127.0.0.1:4321/docs` to inspect the exact packaged site. The preview serves the same manifest routes and immutable asset paths as production. Stop it when finished.

The build derives the source commit and its timestamp from this repository. When validating a staged copy outside its Git checkout, set `DOCS_SOURCE_SHA` explicitly to the reviewed source checkout's commit and `DOCS_PUBLISHED_AT` to an ISO timestamp. A staged candidate is not a published release receipt. Referenced PNG/JPEG screenshots are converted to bounded WebP assets during the build; original source images remain unchanged.

`npm run dev` offers Astro editing feedback, but final acceptance uses the built preview because Pagefind and release assets are generated during the build.

## Author a shipped-feature guide

Place Markdown under `docs/`. The build accepts only files with `published: true` and an `appBaselineSha` matching `release-baseline.json`. Future work belongs outside the public build and must not have that published flag.

```yaml
---
title: Review a pull request
description: Open a public pull request, read its documents, and send useful feedback.
slug: use/pull-requests
section: use
contentType: guide
published: true
appBaselineSha: <verified-production-commit>
order: 10
updated: 2026-10-25
---
```

Sections are `start`, `use`, `workflows`, `build`, `reference`, and `help`. Content types are `guide`, `workflow`, and `reference`. Use short, permanent, lowercase slugs. Add aliases only when a previous public documentation path must continue resolving. Keep one clear outcome, prerequisites, ordered steps, expected results, recovery guidance, and next steps in every task guide.

Use relative Markdown links for repository navigation or canonical `/docs/...` links. Images in nested guides use `../assets/...`. Preserve exact code examples, provider permissions, human approval boundaries, and product licensing. Do not put real credentials, private repository names, or customer data in screenshots or samples.

The generated output is not committed. `src/content/docs`, `.generated`, `public`, and `dist` are build artifacts. `migration-ledger.csv` records every former page's disposition; `release-content.json` records the authored publication inventory.

Every published authored guide requires `updated: YYYY-MM-DD`, recording its last substantive editorial change. Update it when instructions, examples, outcomes, titles, or explanations change; retain it for baseline-only metadata changes and formatting fixes. The initial complete rewrite is dated 2026-10-25. Generated reference dates follow their authoritative contract source history.

## Update released API references

`docs/api/openapi.json` and `docs/api/mcp-tools.md` are canonical inputs copied from the verified application release. The build splits them into endpoint/tool pages and generates the operation indexes. Do not manually edit generated operation pages. Update source contracts only after verifying the deployed application revision and source checksums. The TypeScript Agent SDK is intentionally omitted while its public package is unavailable; npm version claims must be verified independently of the app deployment.

## Publish independently

The `Publish Commentary Docs` workflow runs on `main` in the protected `production-docs` environment. Configure that environment to allow deployments only from `main`; protect `main` with review and required verification. The job also rejects manual dispatch from other refs. Environment restrictions are required because a branch can change its own workflow file. Configure `COMMENTARY_APP_URL` (defaults to `https://commentary.dev`) and the docs-specific `COMMENTARY_DOCS_PUBLISH_TOKEN` secret. Never put a general storage credential into this repository.

The workflow builds and verifies the complete candidate, checks `/api/health` reports the reviewed app baseline, registers its manifest, uploads checksum-verified files, and activates it with an expected pointer ETag. Missing credentials or mismatched baselines fail publication. A failed upload leaves the previous release active. No GitHub API, database, or user session is needed to read published docs.

The initial candidate was audited against app commit `4e7ac7718cfb098807ce32a01b8223f575ab7cf7`. Deploying the new docs-serving application produces a different app commit, so this candidate deliberately cannot be activated unchanged. Verify that deployed revision and compare its shipped behavior and released contracts; then deliberately update `release-baseline.json`, the baseline and entries in `release-content.json`, and each published guide's `appBaselineSha`. Recheck contract hashes and package versions, update content where behavior changed, and run all gates before publishing. Never automatically relabel content to the health response's SHA. Baseline-only changes retain authored `updated` dates.

To restore a previous release, dispatch the workflow with `rollback_release` set to its release ID. The service accepts only a release compatible with the deployed application. Coordinate application rollback with its matching docs release. An activation response lost in transit is checked against the active pointer before being treated as failure.

## Verification

- `npm run build`: release metadata, static build, reference generation, Pagefind indexing, manifest packaging, complete link/anchor and metadata crawl.
- `npm test`: publication size/integrity bounds, shipped-only authored pages, machine-readable exports, and alias safety.
- `npm audit --audit-level=moderate`: dependency security.
- Built browser review: desktop/phone navigation, search and filters, theme switching, no-JavaScript reading, code copying, and accessibility.

Documentation pages expose unique HTML metadata, a sitemap, per-article Markdown, `llms.txt`, and a version receipt. These improve crawlability and reuse; search rankings and chatbot citations are not guaranteed.
