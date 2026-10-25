# Branch documentation audit — October 25, 2026

## Scope and source authority

Reviewed the `projects` branch at `4d800b4e0a1e48059d24197ce9c91859c75d3122`,
146 commits ahead of the locally available `origin/main`, against the existing
`C:/code/commentary-docs` working tree (base commit
`00bf7f9e92e77005245e89ce976c085bd731a7a6`). This was a domain-based
documentation audit using implemented code, tests, scenario contracts and current
engineering guides. Three delegated reviews covered Projects/Trackers,
review workflows, and workspace/Research/Forms; the primary review covered
integration contracts, entry points, cross-topic consistency and validation.

The Docs checkout already contained tracked and untracked candidate documentation
and a deliberate deletion of `docs/brainstorming-reviews.md`. Those changes
were preserved. Writes were prepared separately and checked against original file
hashes before application. No commits, pushes, publishing or deployment occurred.

## Corrections and evidence

| Area | Documentation corrections | Current evidence / scenarios |
| --- | --- | --- |
| Discovery and navigation | Reviews default; Coordinate and Research & knowledge groups; separate Inbox; Project Contents and Reviews & guides labels; collection recovery | `src/components/workspace-shell.tsx`, `src/lib/projects/workspace.ts`, workspace design system; WORKSPACE-001–004, PROJECT-001–004 |
| Guided creation | Seven template names, optional editable Tracker, inert stakeholder ZIP and portable template download | `src/lib/projects/templates.ts`, `src/components/projects/project-creation.tsx`; PROJECTLAUNCH-001 |
| Trackers and source | Record/order/schema/import recovery, Git proposal and authority confirmation, retry/cancel retained source capture | `src/components/trackers/`, `src/components/source-capture-status.tsx`; TRACKER-001–007, SOURCE-001–003 |
| Evidence and acceptance | Searchable collections and inspector; claims, supplied reports, independent verification and exact human acceptance remain separate | Project evidence workspace/panel/editor and acceptance services; EVIDENCE-001/002, PROJECTREVIEW-003, PROJECTIMPACT-001 |
| Review guides | UI Review guide versus API Session; native Questions; frozen artifact context; shared/private investigation defaults and current access | Project review session/view/questions components, discussion access and investigation input; PROJECTREVIEW-001/002, ADR-057 |
| Review collaboration | Human UI steps plus API/CLI workflow; independent off-by-default Polls/Consensus; blockers, decisions, application and sign-off | Review settings/decision controls and collaboration services; CONSENSUS-001–006, COMMENTS-005, APPROVAL-001/002, ADR-058 |
| History and review recovery | Exact package/version navigation, saved visits, Preview/Raw preservation and merged-PR branch redirect/cancel | Package/session readers, merged PR redirect components, review navigation tests; PACKAGE-002, MODE-004, PR-003, DRAFT-002 |
| Research, Forms, Inbox and access | Current entry actions/sections, bounded focused Inbox reading, Resource/provider access and quota recovery | Workspace shell, section-navigation coverage, source authorization and PAT error handling; INBOX-002/003, FORM-004/007/011, RESEARCH-002/023/024, AUTH-004 |
| Integrations | Corrected invalid Interaction SDK create payload; complete 21-tool MCP list; link to complete scopes; clarified 158 Project-domain operations and candidate installation boundaries | Current OpenAPI, generated MCP reference, `src/lib/interactions.ts`, SDK parity checker; API-001–003, PROJECTAGENT-001, PROJECTSKILL-001 |
| Canonical copies | Resynchronized Projects contract, workflow fixture and latest operation matrix; all ten synchronization targets match | `scripts/sync-projects-public-contracts.mjs`; PROJECTAGENT-001 / PROJECTSKILL-001 |

Other reviewed public topics, including renderer isolation, agent skill inventory,
notification preferences and team/Live Preview guidance, retained their existing
content where it matched current behavior. Entry pages, navigation and What changed
now expose the October work. The obsolete Brainstorming link in the root README
now points to Polls and Consensus.

Two app-side engineering guide statements that still called PROJECTLAUNCH-001
planned were corrected in `docs/engineering/projects-documentation.md` and
`docs/engineering/change-recipes.md`. No behavior or required coverage changed,
so this audit did not change the scenario matrix. Concurrent app changes to CLI
parity documentation, the scenario matrix and TypeScript configuration were left
intact; the public operation matrix was synchronized to its current canonical copy.

## Validation

- Docs relative-link checker passed.
- MkDocs 1.6.1 strict build passed using the pinned Docs requirement, with output
  isolated under `C:/code/commentary/tmp/docs-audit/site-build`.
- All ten public contract/fixture targets match current app bytes.
- Agent SDK semantic parity check passed: 158 domain operations and 32 compatible
  legacy operations.
- The corrected SDK create example passed the current OpenAPI request schema
  and domain content normalization. This validates the request shape, not live
  authorization, persistence or delivery; no external request was sent.
- App `npm run verify:quality` passed: 1,994 tests, zero failures/skips;
  coverage 92.02% lines, 83.16% branches, 94.06% functions; maintained formatting
  passed. The initial sandbox attempt failed nine tests due to denied loopback
  sockets and hardlinks; the approved rerun passed. Logs are in
  `C:/code/commentary/tmp/docs-audit/quality-approved.log`.

No app/runtime code changed in this audit. No production build, browser session,
provider mutation or PostgreSQL integration run was needed for these prose and
canonical-copy corrections. Existing screenshot capture provenance is retained;
the outdated workspace screenshot is explicitly labeled as September chrome.
No new screenshot is presented as an October capture. Live provider behavior,
deployed availability, registry publication and genuine human acceptance remain
separate release evidence, not conclusions supplied by documentation.

## Files updated by this audit

38 existing Docs files, plus this audit report:

- `README.md`
- `mkdocs.yml`
- `docs/access-and-authentication.md`
- `docs/agent-inbox.md`
- `docs/agent-sdk.md`
- `docs/api/agent-capability-matrix.md`
- `docs/api/projects-agent-v1.json`
- `docs/api-and-mcp.md`
- `docs/commentary-cli.md`
- `docs/commentary-forms.md`
- `docs/core-concepts.md`
- `docs/demo-walkthrough.md`
- `docs/draft-reviews.md`
- `docs/engineering-project-reviews.md`
- `docs/examples/projects-workflows.json`
- `docs/getting-started.md`
- `docs/index.md`
- `docs/project-acceptance.md`
- `docs/project-evidence.md`
- `docs/project-review-sessions.md`
- `docs/project-workflows.md`
- `docs/projects-compatibility.md`
- `docs/projects-quickstarts.md`
- `docs/projects.md`
- `docs/research-studies.md`
- `docs/review-collaboration.md`
- `docs/review-modes.md`
- `docs/review-packages.md`
- `docs/review-progress.md`
- `docs/review-pull-requests.md`
- `docs/review-repository-branches.md`
- `docs/static-html-review.md`
- `docs/tracker-portability.md`
- `docs/trackers.md`
- `docs/troubleshooting-and-faq.md`
- `docs/visual-reviews.md`
- `docs/whats-new.md`
- `docs/workspace.md`
