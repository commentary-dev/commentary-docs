# Interaction API Developer Preview

The Interaction HTTP v1 developer preview lets an agent create a durable
request for its credential owner and poll the request state. It is a
Core/free-preview capability.

The preview does not approve requests, execute fulfillment, send notifications,
route to teams, or authorize autonomous actions. Decision and Fulfillment
endpoints are not available.

## Endpoints and scopes

- `GET|POST /api/v1/interactions`
- `GET|PATCH|DELETE /api/v1/interactions/{interactionId}`
- `POST /api/v1/interactions/{interactionId}/revisions`
- `GET|POST /api/v1/interactions/{interactionId}/messages`

Use the least-privilege `commentary.interactions.create`, `.read`, `.update`,
and `.cancel` scopes. Creation requires an account-scoped token and targets
only the credential owner in their personal workspace. The linked Draft Review,
Form, Research Study, or Web App Review must belong to that owner. Scopes do not
replace Resource authorization, and revocation takes effect immediately.

## Create and retry safely

```bash
curl -i https://commentary.dev/api/v1/interactions \
  -H "Authorization: Bearer $COMMENTARY_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: release-review-42" \
  -H "X-Correlation-Id: agent-run-42" \
  --data '{"resource":{"type":"draft_review","id":"draft_opaque"},"initialState":"active","content":{"title":"Review the release notes","summary":"Check the compatibility changes."}}'
```

Retry-sensitive mutations require `Idempotency-Key`. Compatible retries return
the original outcome with `Idempotency-Replayed: true`; different input with
the same key returns `409 idempotency_key_reused`.

## Poll and update

```bash
curl -i "https://commentary.dev/api/v1/interactions?state=active&limit=25" \
  -H "Authorization: Bearer $COMMENTARY_TOKEN"
```

Lists return an opaque `nextCursor`. Only `limit`, `cursor`, `state`, and
`resourceType` filters are accepted.

Get responses include a strong ETag. Revision, message, lifecycle, and cancel
mutations require it:

```bash
curl -i -X PATCH https://commentary.dev/api/v1/interactions/ixn_opaque \
  -H "Authorization: Bearer $COMMENTARY_TOKEN" \
  -H 'If-Match: "ixn_opaque:v1"' \
  -H "Idempotency-Key: wait-for-human-42" \
  -H "Content-Type: application/json" \
  --data '{"state":"waiting_for_human"}'
```

Missing `If-Match` returns `428`; a stale value returns `412`.

Errors include a stable v1 code, message, correlation id, optional field
details, and retryability:

```json
{"error":{"version":"1","code":"precondition_failed","message":"Fetch the Interaction again.","correlationId":"agent-run-42","retryable":true}}
```

Do not parse opaque ids or cursors. Response fields may be added compatibly
during preview; incompatible contracts use a new version or deprecation window.
