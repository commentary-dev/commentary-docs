# Outbound Interaction Webhooks

Use webhooks to notify your service when an Interaction changes, then retrieve the current request with your own authorized Commentary credential. A webhook is a notification, not permission to approve or execute the request.

## Configure A Subscription

1. Select the workspace and open **Manage → Developer → Webhooks**.
2. Create a subscription with an HTTPS receiver and the event types you need.
3. Copy the signing secret from the one-time reveal and store it securely at the receiver.
4. Inspect delivery history for actual attempts and failures.

Owners/admins manage subscriptions. API clients need `commentary.webhooks.read` for diagnostics and `.write` for changes. The canonical page is `/workspaces/{workspaceId}/settings/developer/webhooks`; account API credentials stay in [Developer access](developer-access.md).

Secrets are shown once on create or rotation. If a response or secret is lost, deliberately rotate; retrying a successful create does not reveal the old secret. Rotation immediately replaces it for new attempts, though an in-flight request may still carry the earlier signature.

## Event Types

- `interaction.created.v1`
- `interaction.updated.v1`
- `interaction.revision.created.v1`
- `interaction.decision.recorded.v1`
- `interaction.fulfillment.updated.v1`
- `interaction.terminal.v1`
- `interaction.content_purged.v1`

Payloads contain versioned event identifiers, minimal state, and an authorized retrieval path. They omit proposal bodies, messages, evidence, credentials, raw repository URLs, and review content. Reply-edit history is retrieved through the authorized Interaction API; it is not a new webhook event type.

## Verify The Signature

Read `X-Commentary-Timestamp`, `X-Commentary-Event-Id`, `X-Commentary-Delivery-Id`, and `X-Commentary-Signature`. Verify the exact raw UTF-8 body before parsing:

```text
signed = timestamp + "." + event_id + "." + delivery_id + "." + raw_body
signature = "v1=" + hex(HMAC-SHA-256(secret, signed))
```

Use constant-time comparison, reject timestamps more than 300 seconds from your clock, and deduplicate the delivery id. A deliberate replay receives a new delivery id and retains replay provenance in diagnostics.

## Retries And Recovery

Retryable transport failures and HTTP 408, 409, 425, 429, or 5xx receive up to six retries after the initial attempt. Other 4xx responses fail permanently. Exhausted retries appear as **Exhausted**; pending attempts appear as **Queued**. These are delivery states, not Interaction outcomes.

Delivery history is paginated and filterable. Review a failed/exhausted delivery before confirming replay. Tests replay an existing subscribed event, so an empty subscription needs an event before it can be tested. Disabled subscriptions reject replay and stop pending work. Replaying does not record a Decision or run the external proposal.

Production receivers must use HTTPS and cannot resolve to private, loopback, link-local, or reserved addresses. Each request and permitted redirect is rechecked. Requests have bounded timeouts and response size; diagnostics show redacted summaries rather than secrets or complete payloads.

Creation uses `Idempotency-Key`; conditional changes use the strong ETag in `If-Match`. Keep a failed edit draft and refresh the current version before an explicit retry. See [API reference](api/reference.md) for subscription, delivery, disable, rotation, and replay endpoints, or use [Agent SDK](agent-sdk.md) pagination helpers.

Outbound webhooks use the Pro-preview `interactions.webhooks` feature and remain usable during the no-billing preview. Receiving or replaying an event never grants access to its linked Resource.
