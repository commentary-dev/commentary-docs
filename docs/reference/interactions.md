---
title: Interactions, Decisions, and Fulfillment
description: Understand durable owner-directed requests and the boundaries among human Decisions, agent reports, and external execution.
slug: reference/interactions
section: reference
contentType: reference
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 4
---


Interactions are durable owner-directed requests available through the HTTP API. They give a user a durable question or approval request that can outlive the current assistant session. They are separate from Review threads and workspace Inbox cards.

## Lifecycle boundaries

- **Interaction** holds the request and its revisions.
- **Decision** is the human's recorded response to an exact proposal fingerprint.
- **Fulfillment** is an append-only agent self-report about work it says it performed.
- **Verification** and actual execution remain separate responsibilities; an agent report does not prove completion.

Creation is addressed to the credential owner in the personal workspace. Writes use idempotency keys; mutable writes use strong ETags; lists use bounded opaque cursor pagination. The API supports cancellation, polling, Decision receipts, and fulfillment reporting. Human authority remains in the signed-in experience.

Webhooks are minimal notifications to retrieve current state; they do not grant access or authorize action. See [webhook setup](../build/webhooks.md), [API operations](https://commentary.dev/docs/reference/api-operations), and [MCP operations](https://commentary.dev/docs/reference/mcp-operations).
