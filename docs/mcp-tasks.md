# Experimental MCP Tasks compatibility

Commentary supports an optional protocol view over long-running Interactions using the official experimental MCP Tasks extension, `io.modelcontextprotocol/tasks`. The implementation pins the draft snapshot verified on August 27, 2026. Draft behavior can change; clients must treat the advertised revision as part of compatibility checks.

Tasks never replace Commentary Interactions. The Interaction id, state machine, Resource authorization, HTTP/MCP polling, human Decision flow, and retention contract remain authoritative. Clients that do not declare the extension—including retained MCP 2025 clients—receive the normal Interaction result and poll `interaction.status` or the Interaction HTTP API exactly as before.

## Negotiate the extension

MCP `2026-07-28` `server/discover` advertises the standard extension capability with its draft-defined empty object. Commentary discovery metadata marks it experimental and pins the verified draft revision. Repeat support on each eligible request:

```json
{"io.modelcontextprotocol/clientCapabilities":{"extensions":{"io.modelcontextprotocol/tasks":{}}}}
```

When that capability is present on `interaction.create`, Commentary may return `resultType: "task"` with an opaque `taskId`. The server still decides per request whether to return a Task or the ordinary tool result.

Commentary implements only:

- `tasks/get` to read the current bounded view;
- `tasks/update` as an empty acknowledgement when there are no outstanding inputs; and
- `tasks/cancel` to cooperatively request canonical Interaction cancellation.

Set `Mcp-Method` to the JSON-RPC method and `Mcp-Name` to the exact `taskId` for each Tasks request. Repeat the extension capability in request metadata. There is deliberately no `tasks/list`: task ids are capabilities, not enumerable workspace records. Commentary also does not offer Tasks notifications or subscriptions in this experimental slice; poll at the returned `pollIntervalMs`.

## Security and state mapping

Task ids contain 256 bits of randomness. Commentary stores only their SHA-256 digest, binds the mapping to the exact caller token/agent and personal workspace, expires it after 24 hours, and rechecks the linked Resource on every operation. Guessed, cross-token, cross-agent, cross-workspace, expired, purged, and newly unauthorized handles are all denied without revealing which binding failed.

Draft, active, waiting-for-agent, and waiting-for-human Interactions appear as Tasks `working`. Waiting for a human does not appear as Tasks `input_required`: `tasks/update` cannot approve, reject, answer, or otherwise write a human Decision. Completed, rejected, expired, and domain-failed Interactions appear as Tasks `completed` with a bounded tool result; these are domain outcomes, not JSON-RPC failures. Canonical cancellation appears as `cancelled`. A cancellation acknowledgement is cooperative and may race with another terminal outcome.

Tasks do not grant new scopes or a new entitlement. The feature uses `mcp.interactions` in the Core/free preview and rechecks the existing Interaction read/cancel scopes and governance. Tasks cannot bypass proposal fingerprints, create Decision receipts, prove Fulfillment, or verify external execution. Decision proposal fingerprints remain unsigned SHA-256 integrity identifiers returned through authenticated immutable receipts; they are not portable signatures or non-repudiation evidence.
