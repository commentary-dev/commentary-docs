# Separate claims, evidence and verification

Requirements state the expected outcome and acceptance scope. Claims are authenticated-actor assertions tied to exact targets. Evidence links reports, source and independent observations within an authorized Project/Session. None requires a Tracker; none becomes fulfilled merely because a file exists.

Use the Project evidence page at /workspaces/{workspaceId}/projects/{projectId}/evidence. Read requirement, claim, supplied result, observation status and acceptance separately. Open technical details and report bodies only when useful. Edits preserve immutable history and require current versions; stale updates retain local intent.

## Provenance and scope

| Fact | Meaning |
| --- | --- |
| Supplied report / screenshot / log | Reported by its author; inert uploaded content |
| Provider reference | Referenced; not independently retrieved merely by attaching it |
| Observed receipt | Independent adapter retrieved the exact provider/run/commit outcome |
| Passing observation | Proves that scoped run/result only, not overall correctness |
| Fulfillment | Agent's later execution report, separate from artifact/review/acceptance |
| Human Decision | Eligible person accepted the exact target/action, separate from verification |

Independent verification uses configured GitHub/Azure read adapters, exact source authority and commentary.evidence.verify consent. It validates repository/run/check/commit association, result, time and available artifact digest. Unknown, failed, unavailable, mismatched, stale and revoked results remain explicit. Arbitrary agent-supplied fetch URLs and authored passing JSON cannot create trusted receipts.

Supplied JSON/HTML/XML/logs are bounded and rendered inert. Remove secrets before uploading; secret detection is diagnostic, not a guarantee. Report content defaults to 30-day retention (bounded 1–365); purge retains minimized digest/attribution/revision facts. Authorized export excludes trusted observation writes, credentials and writable acceptance; import creates new attributed revisions and rechecks exact references. Expired report export fails rather than replacing content.

An evidence relation grants no source access. CI and artifact access are independently rechecked at retrieval; a historical digest is not permission to read revoked content. Review residual risk explicitly. See [acceptance and impact](project-acceptance.md), [engineering review](engineering-project-reviews.md) and [compatibility](projects-compatibility.md).
