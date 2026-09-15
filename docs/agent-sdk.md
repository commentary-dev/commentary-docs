# TypeScript Agent SDK

`@commentary-dev/agent-sdk` is the thin TypeScript transport client for Commentary's shipped HTTP v1 agent resources. The package is Core/free preview under `api.agent_sdk`; importing it never bypasses server licensing, scopes, workspace access, Resource checks, or human approval.

## Install and create a client

```bash
npm install @commentary-dev/agent-sdk
```

```ts
import { createCommentaryClient } from "@commentary-dev/agent-sdk";

const commentary = createCommentaryClient({
  baseUrl: "https://commentary.dev",
  token: process.env.COMMENTARY_TOKEN,
});

const created = await commentary.interactions.create(
  { type: "review_request", title: "Review the release note", content: {} },
  { idempotencyKey: crypto.randomUUID(), correlationId: crypto.randomUUID() },
);
```

The client covers Interaction list/create/get/update/cancel/revision and browser-session feedback, Decision read/wait, Fulfillment read/report, public review-participant agent registration, webhook subscriptions and authorized delivery diagnostics, health, and OpenAPI capability discovery. It adds transport mechanics only: bearer headers, base URLs, correlation and idempotency, ETags, cursor iteration, bounded polling and cancellation, stable errors, and shallow runtime response validation.

## Pagination, waits, and cancellation

```ts
for await (const page of commentary.interactions.pages(
  { limit: 50 },
  { maxPages: 10 },
)) {
  for (const interaction of page.data) console.log(interaction);
}

const receipt = await commentary.decisions.wait(created.data.data.id, {}, {
  timeoutMs: 60_000,
  intervalMs: 1_000,
  signal: AbortSignal.timeout(60_000),
});
```

Decision server waits are capped at ten seconds per request; the SDK repeats them only inside the caller's total timeout and abort boundary. Pagination stops at `maxPages` (100 by default). `CommentaryError` exposes stable `code`, HTTP `status`, request/correlation ids, and a `retryable` hint. `CommentaryTimeoutError` identifies bounded timeouts.

## Operations and safe diagnostics

Use `client.operations.health()` for the existing shallow/deep health surface and `client.operations.capabilities()` to compare the SDK operation manifest with the deployed OpenAPI document. Webhook delivery inspection uses the existing owner/admin-authorized redacted diagnostics. Replay reports/requeues delivery state only; it cannot approve or execute an Interaction.

An optional `debug(event)` callback receives request method/path, status, bounded poll counters, and correlation ids. Authorization, cookies, credentials, tokens, secrets, bodies, payloads, and evidence are redacted. The SDK never persists credentials.

## Runtimes and browser safety

The dependency-free ESM package supports Node.js 20+ and current evergreen browsers with standards-compatible Fetch, Headers, AbortController, and Web Crypto APIs. Compatible edge runtimes are best effort. It has no Node-only runtime imports and declares `sideEffects: false` for tree-shaking.

Never put a long-lived bearer token in a public browser bundle. Human feedback uses a signed-in browser session with `credentials: "include"`, because the server intentionally keeps that operation human-only.

## Compatibility and deprecation

Stable HTTP endpoints use explicit major paths such as `/api/v1`. Within a major, Commentary permits additive optional fields and operations but does not remove operations, make optional fields required, narrow accepted schemas, or repurpose stable errors, tools, webhooks, cursors, idempotency, or ETag semantics.

Deprecated operations receive at least 12 months' public notice and at least two minor SDK releases, whichever is longer. Notice appears in OpenAPI, release notes, docs, and deprecation/sunset response headers where practical. Breaking changes require a new major path with an overlap window. Security or legal emergencies may shorten the window with a documented reason and migration path.

The package artifact is built and tested against the committed OpenAPI contract, inspected with `npm pack`, and installed by an isolated smoke consumer before the manual provenance-enabled publication step. Publication credentials remain a release responsibility.
