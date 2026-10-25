---
title: Publish a versioned Review package
description: Prepare a document walkthrough, validate its assets, publish an immutable revision, and recover safely from an interrupted upload.
slug: workflows/publish-review-package
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 12
---

Use a Review package for a multi-page walkthrough that should read like one composed document and keep its binary assets with the exact revision.

## Before you begin

Install the [published CLI](../build/cli.md), sign in, and select an authorized
workspace grant. Package publication uses the CLI or API/MCP upload operations.

## Prepare the package

Create a directory with an entry page and supporting pages, for example:

```text
release-walkthrough/
  README.md
  details.md
  commentary.package.json
```

Download [README.md](../examples/review-walkthrough/README.md),
[details.md](../examples/review-walkthrough/details.md), and
[commentary.package.json](../examples/review-walkthrough/commentary.package.json)
into that directory to try the complete two-page example. Both document links
stay inside the package. Add images only after the text-only package validates.

An explicit manifest gives pages stable identities across path moves:

```json
{
  "kind": "commentary_review_package",
  "manifestVersion": 1,
  "title": "Release walkthrough",
  "entryPageId": "overview",
  "pages": [
    { "id": "overview", "path": "README.md" },
    { "id": "details", "path": "details.md" }
  ],
  "trustTier": "static"
}
```

Keep relative links and assets inside the package. The collector hashes bytes without running scripts or a customer build. Symlinks, traversal, case-colliding paths, missing assets, secret/config files, unsupported MIME types, and oversized content fail validation.

## Upload and publish

1. Run the validation command below. Resolve diagnostics while the package is still local; validation does not publish anything.
2. Replace `ws_123` with the workspace authorized by your credential, then publish with a unique idempotency key.
3. The CLI collects and hashes local bytes, uploads bounded chunks, and asks Commentary to finalize the immutable revision.
4. Inspect the returned review URL and revision state. Wait until the revision is **Ready** before sharing it or adding it to a Review guide.

```bash
commentary package validate ./release-walkthrough --manifest ./release-walkthrough/commentary.package.json
commentary --workspace ws_123 package publish ./release-walkthrough --manifest ./release-walkthrough/commentary.package.json --idempotency-key release-walkthrough-1 --no-open
```

For API/MCP clients, send literal content through the declared bounded upload operations; Commentary does not collect a local path from an agent. See [package API operations](https://commentary.dev/docs/reference/api-operations) and [MCP tools](https://commentary.dev/docs/reference/mcp-operations).

## Expected result and recovery

The package opens on its entry page, its internal links and assets resolve, and reviewers can comment on rendered pages. A new publication creates another revision; it does not mutate the previous one.

If a response is indeterminate, check upload status and retry the identical intent with the original receipt/idempotency key before changing the request. Resend only missing matching chunks. If the upload expired, prepare a new one. Content appears only when validation and indexing reach **Ready**; a failed index can be retried. Abandoned uploads expire after 24 hours.

Static Markdown/HTML is sanitized. Executable bundles require the isolated renderer trust tier. A running external app belongs in a [Live Preview Review](review-a-live-preview.md), not a package manifest. Continue with [Review guide composition](../use/review-guides.md) or [package usage](../use/review-packages.md).
