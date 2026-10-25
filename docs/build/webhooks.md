---
title: Receive outbound webhooks
description: Configure signed Interaction change notifications, verify raw payloads, and recover deliveries safely.
slug: build/webhooks
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 9
---


Outbound webhooks notify your service that an Interaction changed. They do not grant permission to read linked content, make a decision, or execute the proposal. Retrieve current state with your own authorized credential.

## Configure and protect the secret

An authorized workspace owner/admin creates a subscription at **Workspace settings → Developer → Webhooks** with an HTTPS receiver and event types. The signing secret is shown once. Store it in a secret manager; rotate if it is lost or exposed. API clients use `commentary.webhooks.read` for diagnostics and `.write` for changes.

## Verify delivery

Read `X-Commentary-Timestamp`, `X-Commentary-Event-Id`, `X-Commentary-Delivery-Id`, and `X-Commentary-Signature`. Verify the exact raw UTF-8 body before parsing:

```text
signed = timestamp + "." + event_id + "." + delivery_id + "." + raw_body
signature = "v1=" + hex(HMAC-SHA-256(secret, signed))
```

Use constant-time comparison, reject timestamps more than 300 seconds from your clock, and deduplicate the delivery ID. Payloads contain minimal state and an authorized retrieval path, not proposal bodies, messages, evidence, credentials, or review content.

## Recover a failed delivery

Transient transport failures and HTTP 408, 409, 425, 429, or 5xx get up to six retries after the first attempt. Other 4xx responses fail permanently. Inspect delivery diagnostics before replaying. A replay has a new delivery ID and retains replay provenance; it does not record a decision.

Production receiver URLs must use HTTPS and cannot resolve to private, loopback, link-local, or reserved addresses. Requests have bounded timeouts and body sizes. Webhooks are Pro preview and usable during the no-billing phase. See [Interaction reference](../reference/interactions.md) and the [API operation list](https://commentary.dev/docs/reference/api-operations).
