# Projects agent contracts v1

The current implementation exposes 158 domain operations through HTTP v1, six MCP tools and Agent SDK 0.2.0. Check deployed paths/tools/capabilities: a scope or catalog entry alone grants neither availability nor authority. The legacy x-commentary-reserved-project-contract extension name remains compatibility metadata; these operations are implemented registrations.

## Canonical contracts

[OpenAPI JSON](openapi.json), [YAML](openapi.yaml), [HTTP reference](reference.md), [MCP schemas](mcp-tools.md), [contract snapshot](projects-agent-v1.json) and the [operation/action/SDK/CLI matrix](agent-capability-matrix.md) are copied from app canonical generation and checked byte-for-byte. Do not hand-edit generated artifacts. [Validated workflow fixtures](../examples/projects-workflows.json) include upload hashes and exact correction requests.

| MCP tool | HTTP family | CLI | SDK group |
| --- | --- | --- | --- |
| commentary_projects | /api/v1/projects | project | projects |
| commentary_trackers | /api/v1/trackers | tracker | trackers |
| review_package | /api/v1/review-packages | package | reviewPackages |
| project_review_session | /api/v1/project-review-sessions | review-session | projectReviews |
| codebase_review | /api/v1/source-snapshots | source-snapshot | sourceSnapshots |
| project_evidence | /api/v1/project-evidence | evidence | evidence |

MCP arguments are {action,input,etag?,idempotencyKey?}; input includes path identities and domain fields. SDK method names camel-case actions. Calls dispatch canonical HTTP handlers, retaining current scopes, workspace-bound grants, memberships/participation, independent Resource/source checks, entitlement, cancellation and durable receipts. Human management/Decisions, personal visits and renderer mounts retain browser authority. Existing native comment/Interaction services remain primary.

## Consent and retries

Separate read/write scopes use commentary.projects, trackers, review_packages, project_reviews and source_snapshots; evidence adds read/write/verify, and trackers adds writeback. Existing grants/default consent do not gain scopes. Git dispatch additionally needs current provider write authority; Azure writes fail unsupported_provider_write without dispatch. Free/usable Pro-preview keys remain server enforced.

Declared mutations require exact strong If-Match and Idempotency-Key. Missing preconditions fail 428, invalid/stale ETags fail 412, changed intent with the same key conflicts. Reuse original body/ETag/key after an indeterminate response; reconcile current state before new intent. Responses preserve the existing data/error/correlation envelopes. Optional replay headers can be absent; null/unknown must not be inferred false. Private errors expose no hidden metadata. Preserve actual server codes and CLI exits rather than translating from historical planning examples.

Literal resumable uploads support terminal-free clients; only CLI collects/watches directories. Event polling/SSE is bounded; cursor gaps demand current-state reconciliation. Human Decisions cannot be imported/created by any Agent operation. Tracker renderers use a separate credential-free host broker, never Agent tokens.

See [quickstarts](../projects-quickstarts.md), [compatibility/recovery](../projects-compatibility.md), [Developer access](../developer-access.md) and [Tracker SDK isolation](../tracker-renderers.md). Provider, native harness and genuine human acceptance remain independently verified release boundaries.
