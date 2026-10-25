---
title: Build source-backed Forms
description: Author a Form Contract, validate answers, and integrate native, HTML, or custom Live Preview renderers.
slug: build/forms
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 6
---


Commentary Forms use a source-authored Form Contract v1. A Form definition may live in Markdown/MDX, standalone `.form.yaml`/`.form.yml`/`.form.json`, sanitized static HTML bindings, a GitHub-backed file, or a Draft Review. The workspace discovers contracts and results; standalone Forms API create/update is not the authoring path.

## Contract and validation

Use the `commentaryForm: 1` marker and a bounded JSON Schema subset. Stable `id`, field IDs, required values, and explicit field types keep the contract understandable. Native-rendering metadata can use `ui.fields`, `ui.sections`, `ui.pages`, `ui.groups`, and `ui.reviewPage`; safe declarative logic supports conditional visibility and requirements.

The server is authoritative for final validation. Client-side validation improves correction but cannot bypass the server contract. API and MCP clients send literal contract JSON/YAML or objects; the service does not read agent-local paths or fetch arbitrary URLs.

## Choose a rendering path

- **Native renderer:** use Markdown/MDX form blocks or standalone contracts for Commentary's built-in renderer.
- **Static HTML binding:** mark supported fields with `data-commentary-field`; sanitized controls use the parent-frame bridge. Form actions and inline handlers are not trusted.
- **Custom renderer:** run inside an existing Live Preview Review and use `@commentary-dev/forms-sdk` or the Forms SDK CDN. The nonce-bound, origin-aware bridge submits values to Commentary, which validates the current contract.

Install the published Forms bridge package **0.1.0** in the preview app:

```bash
npm install @commentary-dev/forms-sdk@0.1.0
```

Custom renderer example:

```js
await window.CommentaryForms.submitForm({
  formId: "customer-intake",
  formVersionHash: "fnv1a32:...",
  status: "final",
  values: { name: "reviewer-1", email: "reviewer-1@example.com" },
  rendererMetadata: { name: "customer-intake", mode: "interactive_experience" }
});
```

Source UI and renderer metadata are untrusted agent context. Structured values remain Form Contract data. Final validation failures return machine-readable diagnostics and may be retained as draft validation failures.

## Permissions and results

Use separate `commentary.forms.read`, `.write`, `.submit`, and `.writeback` scopes. Fill access does not imply result-list access. GitHub writeback is an opt-in Pro preview through a separate write-capable app; the default app remains read-only. Preview the canonical path and payload before a deliberate write.

See [the Forms workflow](../workflows/collect-form-responses.md), [Live Preview SDK](live-preview-sdk.md), and [generated API operations](https://commentary.dev/docs/reference/api-operations).
