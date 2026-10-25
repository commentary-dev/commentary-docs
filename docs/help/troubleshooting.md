---
title: Troubleshooting
description: Diagnose common review, provider, draft, Live Preview, Form, and API problems with safe recovery steps.
slug: help/troubleshooting
section: help
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 2
---


## Repository access

### A repository or PR will not open

Public GitHub PRs support anonymous read-only access. Sign in for private data or any write action. Confirm the GitHub App installation includes the repository, or that the Azure DevOps Entra identity can access the organization and project. A Commentary workspace membership does not grant provider repository access.

### A file is not in the navigator

Check that the correct repository, branch, and path are selected and that the file type is supported. For an Azure DevOps URL, include its project-scoped context. For local content that is not in Git, create a Draft Review.

## Rendering and history

### The rendered page differs from source

Switch to Raw and check the exact Markdown/HTML. Static HTML is sanitized and scripts or active embeds are blocked. Docs preview appears only when Commentary detects a supported framework layout.

### A historical snapshot or comparison is unavailable

The exact endpoint may no longer be retrievable. Commentary shows unavailable rather than substituting a newer version. Select a known commit/update or return to current explicitly. Preview/Raw selection is independent of Document/Changes selection.

## Provider sync

### A PR comment is visible locally but not on GitHub

The thread may still be `provider_pending`. Use **Submit review** and read the pending synchronization count. A branch review has no provider submission; its comments remain app-native. Do not assume a provider event succeeded until Commentary reports it.

### A review submission fails

Check provider authorization and the reported pending item state, then retry after resolving the specific failure. Keep the review page open. Do not duplicate the same comment merely because submission took time.

## Draft upload

### A Draft Review upload fails

Check that the file type is supported and the content is within service limits. Retry from the intended review. CLI and API tools must send literal file content; Commentary cannot read a local path on the agent's machine. A partial upload carries forward omitted files, so confirm which files are included in the new revision.

### A CLI cannot find the session

Check the session id and local `.commentary/session.json`, then use `commentary restore <session-id> --dry-run --json` before restoring metadata. The CLI metadata file contains review metadata, not the auth token.

## Live Preview

### The preview is blank or connection is unavailable

For embedded delivery, check the target's `frame-ancestors` CSP. For new-tab delivery, check that the preview allows `frame-src https://commentary.dev` and loads the SDK. A timeout alone does not prove the frame was blocked. Try the offered new-tab or screenshot recovery.

### Element selection does not work

Confirm the Review SDK loads in a preview build and parent origin matches the review. Screenshot feedback can capture a cropped visual region when SDK selection is unavailable; it does not recover selectors.

### Another reviewer cannot open localhost

The URL points at the current reviewer's browser. Commentary cloud does not fetch localhost, and the review cannot be shared as a working preview. Use an authorized deployed HTTPS environment for shared review.

## Forms

### A final submission is rejected

Use server validation diagnostics to correct the field values. Review mode skips answering; it does not bypass required fields or final contract validation.

### I can fill a Form but cannot read its results

Filling and result-list access are separate. Confirm source permission or response-link ownership. A submitter's own-submission access does not imply access to the complete collection.

## API and MCP

### A write returns a conflict

Refresh the object, retain the intended changes, compare with current state, and reconcile. Retry using a fresh version and a new idempotency key for the revised intent. Reuse a key only for an identical retry.

### A tool or scope is unavailable

Discover tools on the current MCP deployment and inspect its negotiated version. Check the token's scopes and target, registered agent workspace grant, underlying provider/source access, and feature availability separately. A token cannot create human authority.

For a new workflow, use the [workflows index](../workflows/index.md). For API details, see [Developer access](../build/developer-access.md) and the [reference](../reference.md).
