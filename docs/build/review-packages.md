---
title: Build and upload Review packages
description: Integrate the immutable Review package upload flow with exact manifests, bounded chunks, retries, and authorization.
slug: build/review-packages
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

Review packages use immutable manifests and content-addressed private assets. Use the generated HTTP and MCP operations for exact payload and precondition shapes; do not implement against guessed schemas.

## Package manifest

The v1 manifest declares `kind: commentary_review_package`, `manifestVersion: 1`, a title, `entryPageId`, page ids/paths, and a trust tier. Stable page ids preserve identity across path moves better than path inference. Without an explicit manifest, the service may infer supported documents and an entry page.

## Upload lifecycle

Prepare an actor/workspace-bound upload, transfer bounded checksummed chunks, inspect status, resend only missing chunks with the same intent, then finalize. Finalize checks bytes, hashes, and the package graph before publication. Lifecycle states include uploading, validating, indexing, ready, and failed; package content is available only for ready revisions.

For an indeterminate prepare/finalize, retry the identical request with its original idempotency key or receipt before changing intent. Existing-package changes use its exact current ETag and a stable retry key. Expired uploads require a new prepare. Abandoned uploads expire after 24 hours; reference cleanup preserves package/renderer references through its grace period.

The collector does not run customer npm, MDX, SSR, or backend builds. It rejects symlinks, traversal, case-colliding paths, missing assets, secret/config files, unsupported MIME types, and oversized input. Static content is sanitized. Executable renderer bundles require the isolated renderer trust tier.

Asset reads recheck original source authorization. A copied URL does not grant access. Use [the user publication workflow](../workflows/publish-review-package.md), [generated upload operations](https://commentary.dev/docs/reference/api-operations), and [agent authorization](developer-access.md).
