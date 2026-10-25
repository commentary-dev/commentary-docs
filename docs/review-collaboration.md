# Polls and Consensus

New reviews start with both features off. Enable either feature at creation or in Review settings. Settings persist across files and revisions. Packages and backing drafts share a canonical review; Review guides keep independent discussions.

## Use collaboration in the review

Open **Review settings**, turn on **Polls**, **Consensus**, or both, and choose **Save settings**. Ordinary comments remain available with both off. Standard polls collect non-binding feedback. Decision polls need both settings enabled and explicit outcome meanings; voting cannot bypass an active blocker.

With Consensus enabled, use **Request decision** on a thread that needs an explicit proposal decision. Reviewers can **Agree**, **Object**, request clarification or raise a **Blocker**. The configured agreement rule determines readiness; the default is **Manager decides**, with agent input advisory. An authorized manager can **Accept proposal**, **Reject**, or mark it **Out of scope**. Participants can withdraw their own stance; clearing another participant's blocker requires an authorized human manager and an attributed reason.

After an accepted change is applied, **Record application** identifies its exact resulting revision. This is an application claim, separate from resolving the conversation or recording human sign-off. New content can make earlier decisions stale. Read the current gate before continuing downstream; corrective preparation is allowed by default unless the stricter wait policy is selected.

Turning Polls off freezes poll participation. Turning Consensus off freezes decisions and decision polls and removes its gate requirements; standard polls can remain available if Polls is on. History remains readable. Re-enabling evaluates current content, and only eligible humans can configure or remove human sign-off requirements.

## API, MCP and CLI clients

1. Read `review_settings` with the actual typed `review` reference. Draft, PR, branch, preview, package, snapshot and guide sources use the same configuration. Guides own their discussion; linked reviews keep independent settings and votes.
2. Honor `review_gate_status` for the exact current revision. `prepareChanges` permits corrective work by default; `continueDownstream` requires readiness. Never supply a purported consensus result as authority.
3. Ordinary comments remain ordinary. Explicitly use `review_comments` actions `request_decision`, `signal`, `decide`, `clear_blocker` or `record_application` as appropriate. Read the decision version first. Use conditional versions and a stable operation key; retry the identical intent with the same key.
4. Signals are agree, object, needs_clarification or blocker. Registered identities, not arbitrary aliases, participate independently. Input is advisory unless Count agent input is on. Do not cast votes or make manager decisions without authorization from the user or an applicable delegated workflow. Agents cannot clear another human's blocker or configure/waive human sign-off.
5. Configure collaboration only when authorized and with explicit `commentary.review.settings.write`. Human sign-off configuration is human-only. Default consensus is Manager decides, advisory agent input and no automatic application.
6. Use `review_polls` for creation, editing, voting, closing and outcomes. Standard polls are non-binding. Decision polls require both features, explicit outcome meanings, the configured threshold and counted quorum. Ties, conflicting outcomes and stale questions need manager decisions. A poll cannot bypass an active blocker.
7. Apply authorized accepted proposals through the ordinary source revision workflow. Then record an application claim using the accepted decision and exact accessible resulting revision. Application, conversation resolution, proposal acceptance and human approval are separate. Do not clear objections, blockers or approvals as a side effect of upload.
8. Paused features retain read-only history. Do not mutate them until an authorized manager re-enables them; re-read current versions and stale state after re-enabling.

CLI equivalents: `commentary collaboration settings|configure|decision|decide|polls|poll|gate --file payload.json --json` (or `--stdin`). New local drafts can use `commentary review ./docs --polls --consensus`; content sync remains `commentary sync` and does not address decisions implicitly.

PR comments and readable poll snapshots use the existing staged provider submission workflow. Voting, decisions, application records and human requirements remain authoritative in Commentary. Provider reactions and edited Markdown are not votes. Do not post automatically for every stance, merge, commit, or complete a Project.

Polls are Free. Consensus is Pro preview and remains usable during the no-billing phase. Existing legacy review URLs retain their content and history as ordinary drafts with both features enabled.
