# Projects HTTP, MCP and Agent SDK parity

CP-033 exposes 158 implemented domain operations through six grouped MCP tools
and `@commentary-dev/agent-sdk` 0.2.0. The [operation inventory](../api/agent-capability-matrix.md)
names exact routes, actions, scopes and SDK methods. Contract v1 remains additive;
existing grants and default consent do not gain scopes.

MCP takes `{ action, input, etag?, idempotencyKey? }`. `input` contains path
identities and domain fields, including any nested domain action. The bridge calls
the canonical HTTP handler in process, preserving current bearer/workspace/grant/
source checks, licenses, correlation, cancellation and durable receipts. It
validates bounded input and output. Successful results contain `data`, `etag`,
`status` and `correlationId` inside the existing MCP structured envelope. Mixed
tools conservatively advertise writes/destructive/external-world behavior;
per-action metadata declares scopes/features and conditional requirements.

SDK groups are `projects`, `trackers`, `reviewPackages`, `projectReviews`,
`sourceSnapshots` and `evidence`. Method names camel-case the MCP action. Each
takes one strict typed input plus transport options, required by TypeScript for
unconditional CAS/idempotent writes. Fetch ESM has no runtime dependencies or
Node-only imports. Typed GET references are JSON encoded, paths escaped and
nested queries preserve false/zero. Cursor iteration caps pages and rejects
repeated cursors. AbortSignal stops requests/polls, including pre-aborted calls.
Structured failures retain server retryability; stale writes require reconciliation.
An older server's unstructured missing route produces `capability_unsupported`;
additive responses from newer servers remain tolerated.

Core API access uses existing Free domain keys. Git writeback, custom renderer/
hosting, advanced evidence and impact retain approved Pro-preview checks in the
handlers and remain usable without billing. API access cannot write a human
Decision, reviewer eligibility or provider authority. Browser-only personal
visits, renderer mounts, human feedback and investigation creation retain session
authority. Assigned investigation Agents respond through existing Interactions.
Contextual comments remain app-native through existing review, Session and source
discussion services. No new persistence stores or migrations are introduced.

Package page comments reuse native thread services through `reviewPackages.commentsMutate`,
`review_package.comments_mutate` and existing `review_comments` with `packageId` and
`revisionId`. Package read and comment write scopes are independent of publication
write; resolve/reopen/reattach also require comment status. Only the registered Agent
author may edit their text. Historical writes and revoked source access fail closed.
Native comment edits retain their existing semantics; this adapter adds no CAS ledger.

Literal manifests/assets use existing resumable uploads. MCP JSON remains capped
at 17 MiB to carry a bounded 16 MiB portable Tracker input plus its RPC envelope;
selected domain tools may exceed the legacy 64 KiB tool limit, with
smaller service limits still enforced. Filesystem collection/watch is CLI-only.
Package attachment downloads use bytes/MIME in HTTP/SDK, or bounded base64/MIME/
size/digest in MCP. Source and verification reads remain independently authorized.
Authorized retained source and native discussion/anchor text are returned exactly,
including authentication examples. Only declared output text slots bypass the
portable-data credential-value guard; inputs, metadata, unsafe keys and all
schema and size limits retain that guard.
Never expose Agent bearer credentials to custom renderers; their browser SDK is
a separate capability broker.

`scripts/generate-agent-sdk-contract.mjs --write` generates the operation manifest,
typed declarations and explicit canonical-handler dispatch map. `--check` compares
semantic generated OpenAPI methods/paths/scopes, full request/response schemas,
conditional headers, registered handlers and frozen fixtures. `projects-agent:write`
and `openapi:write` maintain the canonical digest and public artifacts. The retained
`x-commentary-reserved-project-contract` extension name is compatibility metadata;
availability comes from implemented registrations.

| Client/server combination | Compatibility |
|---|---|
| Agent SDK 0.1.0 / current v1 | Existing Interaction/webhook methods and additive fields preserved |
| Agent SDK 0.2.0 / current v1 | Six domain groups plus existing methods |
| Agent SDK 0.2.0 / older server | Check `operations.capabilities()`; unavailable route fails explicitly |
| CLI 0.2.0 / current v1 | CP-031/032 commands preserved; filesystem collection stays CLI-only |

No sibling changes are required by CP-033. Their independent gates remain owned
by CP-031/032/035/036/037 and final convergence; this handoff does not invent
package publication or human acceptance.

`test/project-agent-parity-postgres.test.ts` runs HTTP, full MCP and SDK against
persisted scoped Agents and disposable PostgreSQL, independently compiling every
successful envelope with Ajv. It covers all six groups, exact retries/CAS/schema
conflicts, pagination, grant/membership denial, inert evidence, human-only
acceptance, >64 KiB uploads, ready packages, retained-source revocation, shared
throttling and cancellation of real bounded event waits across all three transports.
Only provider Fetch is mocked; services/jobs/storage/PostgreSQL are real. Session
tests cover exact review recipients/source authority and durable retries. SDK tests
cover binary transport, compatibility, throttling and aborts; isolated pack smoke
compiles a strict external TypeScript consumer.

Scenarios: PROJECTAGENT-001, API-003/006/007/008/010,
INTERACTION-003/004/005/007/008, WORKSPACE-003, PROJECTREVIEW-002,
PROJECTIMPACT-001, PACKAGE-001/002, SOURCE-001 and EVIDENCE-001/002.
Real provider writeback/CI observations, cross-origin renderer deployment,
external receivers, scale and genuine human Decisions retain existing staging/
CP-039/040 obligations. Rollback disables tool registrations while preserving
existing v1 routes, domain records and human receipts.
