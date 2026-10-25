# Review exact deliverables together

A Review guide combines ordered exact targets in one document-first shell. Create a guide in the intended workspace and select ready package, document, source or other supported immutable revisions. It may stand alone and link to multiple Projects. Membership and every linked Resource's original access remain independent.

## Compose and review

Each target carries a typed Resource reference, revision identity and digest. Mutable branch URLs or latest pointers are not exact identity. A composition publishes an immutable manifest; selecting another revision publishes a new composition rather than changing the original. Reordering changes the revision set. Metadata/discussion edits may change the Session ETag without rewriting composition.

Open `/review/project/{sessionId}`. Read the rendered walkthrough and use its ordered navigation to inspect exact members. Native comments remain primary; guide discussion is revision-scoped. Private members disappear for unauthorized viewers without leaking names/counts. An authorized unavailable historical target does not silently substitute current content. Keep Preview/Raw independent of revision selection.

Investigations are contextual requests to assigned Agents. Browser authority governs creation; assigned Agents respond through existing Interactions. Bounded polling reconnects after interruption. A timeout leaves work outstanding. Request acceptance only after checking the complete authorized exact manifest; an authorized subset cannot represent the whole set.

## Revise after feedback

Fetch current native threads within a paging budget, select actionable feedback and publish corrected ready artifacts. Revise only affected targets, preserving unaffected pinned source/evidence. Recover an indeterminate publication using its original retry receipt before changing intent. Read the new manifest, explain what changed and request fresh human acceptance. Historical Decisions remain history; acceptance is never copied to new content.

See [engineering workflows](engineering-project-reviews.md), [exact acceptance](project-acceptance.md), [agent quickstarts](projects-quickstarts.md) and [event recovery](projects-compatibility.md).

## Current product terminology

The ordinary UI calls this prepared collection a **Review guide**. It remains the Project Review Session domain in storage, route identifiers, and API paths (`/api/project-review-sessions` and `/api/v1/project-review-sessions`). Use “Review guide” when describing the reading experience and “Session” when describing API/domain identifiers.

The guide header keeps its purpose summary short and plain. Full authored purpose and ordered Contents are available in bounded reading destinations. The guide context bar contains title/version/purpose, Previous, Contents, current item, Next, Questions, Submit review, and Guide options; phone navigation stays available. Individual documents, PRs, branches, drafts, and live previews remain Reviews.

## Questions and exact context

Questions is one contained panel for team conversation and investigations. Conversation remains native review-thread history; investigations use Interactions for assignment/status and do not create a second message history. Artifact-scoped questions retain their original composition revision, target, and selection. General guide discussion remains scoped to its exact composition revision. Updating or detaching a deliverable never retargets existing questions. New artifact questions require the active composition; historical questions remain readable/replyable only when current access to their original exact context is still authorized. Reads and replies recheck access: artifact-scoped threads require their exact target, while general discussion requires the complete original composition. Access denial withholds protected history; authored reply drafts and conditional intent are retained for explicit recovery.

New investigations default to shared, with an explicit private choice; legacy v1 requests remain private. Investigation responses and resolved conversations do not mean human acceptance or independent verification. Loading supporting evidence is distinct from explicitly sending an acceptance request.

Guide package search is available in a bounded task with matching page links and an explicit empty state. Opening a result preserves the exact guide and package revisions, Preview/Raw selection, browser history, reload behavior, and focus return.
