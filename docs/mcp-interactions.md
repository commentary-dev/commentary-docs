# MCP 2026 Interactions

Commentary supports the official MCP `2026-07-28` stateless core and retains
`2025-11-25`, `2025-06-18`, and `2025-03-26`. The modern protocol does not use
an initialize handshake or MCP session id. Each POST includes:

- `MCP-Protocol-Version: 2026-07-28`
- `Mcp-Method` matching the JSON-RPC method
- `Mcp-Name` matching the tool name for `tools/call`
- protocol version, client info, and client capabilities in `params._meta`

Use `server/discover` when you want capabilities first. `server/discover` and
`tools/list` are deterministic and include `ttlMs` and `cacheScope` hints.
Commentary provides at least 12 months' notice before removing a negotiated
version; no version listed above will be removed before July 28, 2027.

## One durable Interaction tool

The consolidated `interaction` tool supports eight actions:

- `create`: requires `resource`, `content`, and `idempotencyKey`
- `get`: requires the opaque `handle`
- `list`: accepts `limit`, opaque `cursor`, `state`, and `resourceType`
- `revise`: requires `handle`, `content`, `expectedVersion`, and `idempotencyKey`
- `cancel`: requires `handle`, `expectedVersion`, and `idempotencyKey`
- `status`: requires `handle` and returns immediate polling guidance
- `decision_get`: requires `handle` and opaque `decisionId`
- `decision_wait`: requires `handle`, optionally accepts opaque `after`, and
  accepts a cancelable `waitMs` from 0 through 10000

Create, revise, and cancel are retry-safe when the caller reuses an idempotency
key only with identical input. Lists are newest-first and cursor-paginated.
Treat handles and cursors as opaque.

Every successful call returns structured content plus a concise text fallback,
a correlation id, and polling metadata. Poll `status` after `retryAfterMs` until
`complete` is true; polling works for every client and does not hold a
connection open.

## Retrieve a human Decision

Only an eligible signed-in human can submit a Decision. The creating agent can
retrieve the resulting immutable receipt with `decision_get`, or wait briefly
with `decision_wait`. Use `waitMs: 0` for the universal immediate-poll fallback;
when no receipt is available, retry after the returned `retryAfterMs`.

```json
{"action":"decision_wait","handle":"ixn_opaque","after":"ixd_previous","waitMs":10000}
```

The receipt contains opaque Interaction, revision, action, and Decision ids;
the exact proposal fingerprint; semantic action and outcome; timestamps;
terminal state; and purge status. It never exposes human identity, linked
Resource data, consequence content, or the action snapshot. A purged receipt
keeps those immutable facts and reports that its content was purged.

```http
POST /mcp HTTP/1.1
Authorization: Bearer $COMMENTARY_TOKEN
Content-Type: application/json
MCP-Protocol-Version: 2026-07-28
Mcp-Method: tools/call
Mcp-Name: interaction
Mcp-Param-Action: status

{"jsonrpc":"2.0","id":"poll-2","method":"tools/call","params":{"name":"interaction","arguments":{"action":"status","handle":"ixn_opaque"},"_meta":{"io.modelcontextprotocol/protocolVersion":"2026-07-28","io.modelcontextprotocol/clientInfo":{"name":"example-client","version":"1.0"},"io.modelcontextprotocol/clientCapabilities":{}}}}
```

## Permissions and boundaries

Actions use the existing least-privilege `commentary.interactions.create`,
`.read`, `.update`, and `.cancel` scopes. Mutations require an account-scoped
credential. The caller is bound to its credential owner's personal workspace,
and every linked Resource receives a current ownership check; scopes alone do
not grant Resource access. The feature key is `mcp.interactions`, Core/free
preview.

Durable Commentary Interactions and their Inbox projections remain canonical.
This tool cannot submit, revise, or delete human Decisions through any action,
internal token, impersonation, or tool indirection. It does not approve on a user's behalf, report
Fulfillment, expose MCP Tasks, or turn ephemeral MCP Elicitation into a durable
Inbox request.
