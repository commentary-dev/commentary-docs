# Projects capabilities, migration and recovery

## Check the deployment

Use current OpenAPI paths and authenticated MCP tools/list before attempting a workflow. Agent SDK operations.capabilities compares deployed operations. The legacy x-commentary-reserved-project-contract extension name remains for compatibility; implemented registrations, not that name or a granted scope, establish availability. An older server may return capability_unsupported. A structured private-resource denial retains its own code and is not proof that a feature is missing.

Tested candidates: CLI 0.2.0; Agent SDK 0.2.0; Tracker SDK 0.1.0; Skills catalog 0.7.0 with both new plugins/eleven skills at 0.1.0. Existing SDK 0.1.0 Interaction/webhook methods remain additive-compatible. Install clients after compatible server enablement. No new scopes are retroactively granted. No registry, marketplace, hosting or human acceptance is established by these versions alone.

## Entitlements

| Tier | Approved keys |
| --- | --- |
| Free | projects.basic, projects.agent_api, trackers.basic, trackers.native_views, trackers.portability, trackers.agent_api, trackers.git_source |
| Free | review_packages.basic, review_packages.agent_api, project_reviews.basic, project_reviews.agent_api, review.source_explorer, projects.evidence.basic |
| Pro-preview | trackers.custom_renderer, trackers.renderer_hosting, trackers.git_writeback, project_reviews.advanced_evidence, project_reviews.advanced_impact |

Pro-preview features remain usable during no billing and UI access shows the reusable Pro notification. Entitlement does not replace scope, workspace/grant, participation, Resource or provider checks. Existing free behavior remains free; there is no claimed pricing or willingness-to-pay validation.

## Reconnect events and waits

Project/Tracker/package/Session activity and feedback routes provide bounded pages of minimal change hints, not content or commands. Persist private continuation, deduplicate event IDs and refetch current authorized Resources/threads. waitMs is at most 10,000 per call. Cursors bind caller/workspace/resource/query, expire after 24 hours and must not be shared between identities. HTTP 410 event_cursor_resync_required means read a bounded current snapshot, discard the old cursor and reconnect. Cancellation/timeout leaves the current task outstanding. Bounded SSE uses the same cursor via Last-Event-ID; it is not a persistent agent.

Webhook delivery uses the existing signed outbox, bounded retries/dead letters and explicit replay. A delivery or acceptance_changed hint cannot create/approve/execute anything. Source revocation applies again when retrieving state. See [webhooks](outbound-webhooks.md).

## Migration and failure recovery

| Symptom | Recovery |
| --- | --- |
| Concurrent edit / 412 | Preserve local intent, load latest, reconcile, then submit a new intent/key |
| Lost response / timeout | Inspect status/receipt; retry identical body/ETag/key before changing intent |
| Schema/view incompatible | Preview explicit migration, repair mappings, apply against current checkpoint |
| Upload expired / checksum mismatch | Inspect status, resend matching missing chunks; prepare anew after expiry |
| Git conflict / revoked source | Preserve proposal; reconcile approved base or restore original access |
| Azure provider write | Unsupported; use read/import or an explicitly supported destination |
| Renderer disconnected | Native fallback, current capabilities/permissions, fresh mount |
| Historical target unavailable | Explain missing/purged capture; never replace it with latest silently |
| Acceptance stale | Revise exact manifest, explain changes and request a new eligible human Decision |

Additive PostgreSQL migrations preserve old reviews/native threads/Decisions. Rollback disables optional writers/mounts/producers while retaining history; no destructive down-migration or shared Resource cascade is implied. Import cannot manufacture acceptance. Package/renderer references protect upload bytes; report retention purges content independently of minimal receipts. Operators must use established retention/replay procedures.

These are implementation-candidate docs. CP-038 owns launch assets; CP-039 verifies convergence; CP-040 qualifies release claims and genuine human acceptance. Live GitHub writes/CI, Azure authorization, deployed origin isolation and native plugin-client behavior remain release boundaries unless their actual evidence is recorded. Docs continue through the existing publishing snapshot workflow. See [quickstarts](projects-quickstarts.md) and [troubleshooting](troubleshooting-and-faq.md).
