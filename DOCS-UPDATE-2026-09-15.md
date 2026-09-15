# Documentation refresh evidence — September 15, 2026

## Baseline and scope

- Last committed public-docs update: `e4c83c1`, August 27, 2026, 15:41 +03:00, “Document the Agent Inbox decision layer”.
- Application source inspected: `504813ee4fad1dc262d7e06aa6fa839d57935e6c`, including the September 15 Inbox transformation merge `533cc227` and subsequent release fixes.
- Compared existing public guides with current code, scenario contracts, and targeted engineering guides. This includes earlier undocumented Research v2, visual artifacts, Live Preview delivery/screenshot capabilities, and Form review navigation, not just commits after the docs timestamp.
- Documentation only: no application behavior, persistence, routes, licenses, or scenario requirements changed. The scenario matrix does not need modification.
- Preserved the pre-existing `docs/review-modes.md` edits exactly. Extended the existing uncommitted `docs/index.md` and `mkdocs.yml` changes. Left the existing CI workflow, requirements, and link-check script intact.

## Coverage map

Paths below refer to the application repository. They are evidence sources, not a claim that each full scenario lane was run during this documentation task.

| Public documentation | Relevant scenarios | Current source evidence |
| --- | --- | --- |
| `docs/agent-inbox.md`, `docs/inbox-preferences.md` | `INBOX-001`–`INBOX-009`, `INTERACTION-005`–`INTERACTION-009`, `INTERACTION-011`–`INTERACTION-012` | `src/components/inbox/`, `src/app/settings/`, `src/lib/server/inbox-query.ts`, `src/lib/server/interaction-guidance.ts`, `docs/engineering/inbox-feed-semantics.md`, `test/inbox-feed-semantics.test.ts` |
| `docs/workspace.md`, launcher/collection guidance | `WORKSPACE-001`–`WORKSPACE-004`, `INTAKE-001`–`INTAKE-004` | `src/app/workspaces/`, `src/lib/server/workspace-selection.ts`, `docs/engineering/workspace-collection-discovery.md`, `docs/engineering/workspace-launcher-discovery.md`, `test/workspace-collections.test.ts` |
| `docs/teams-and-agents.md`, governance guide | `AGENT-001`, `TEAM-001`–`TEAM-004`, `INBOX-008`–`INBOX-009` | `docs/engineering/agent-registry.md`, `docs/engineering/team-inbox.md`, `docs/engineering/interaction-multi-approver.md`, `src/lib/licenses.ts`, `test/workspace-agent-inventory-postgres.test.ts` |
| Developer access, Interaction API, webhooks, MCP | `API-001`–`API-010`, `INTERACTION-003`–`INTERACTION-012` | `src/components/developer-access-manager.tsx`, `src/lib/external-auth-scopes.ts`, `src/lib/server/mcp-interactions.ts`, `src/lib/server/interaction-guidance.ts`, `docs/engineering/outbound-webhooks.md` |
| `docs/research-studies.md` | `RESEARCH-001`–`RESEARCH-025` | `src/lib/research-workflow.ts`, `src/lib/server/research-workflows.ts`, `src/lib/server/research-workflow-agent-api.ts`, `src/components/research-studies/`, `notes/commentary-research-contract-v2.md`, `ui-qa/playwright/research-workflow-v2.spec.ts` |
| `docs/visual-reviews.md`, Draft updates | `VISUAL-001`–`VISUAL-004`, `DRAFT-001` | `src/lib/review-artifacts.ts`, `docs/engineering/visual-reviews.md`, `test/visual-review.test.ts` |
| Live Preview updates | `WEBAPP-001`–`WEBAPP-009` | `src/components/web-app-reviews/web-app-review-shell.tsx`, current API/MCP contracts, current delivery/screenshot sections of `docs/web-app-reviews.md` (historical Research task/placement prose was not adopted) |
| Forms and review terminology | `FORM-004`, `MODE-001`–`MODE-004` | `src/components/forms/form-renderer.tsx`, current scenario matrix, and the pre-existing public `docs/review-modes.md` update |

## New or expanded material

- Rewrote Inbox and Workspace around current account/workspace boundaries.
- Added saved views/notifications, teams/agents/automation, Research Studies, visual reviews, outbound webhooks, and a reader-facing September update summary.
- Updated developer issuance/rotation, Interaction reply/guidance, all twelve MCP Interaction actions, Forms, Drafts, Live Preview, introductory control labels, FAQ, and landing/navigation links.
- Copied all four generated public HTTP/MCP reference artifacts from the application and verified byte equality. OpenAPI contains 148 operations.

## Live screenshots and boundaries

Used Playwright MCP with the authenticated `https://commentary.dev` session. Captured and visually inspected five images: Inbox Active, Workspace Overview, New review chooser, notification settings, and an unsaved Research creation screen.

Anonymization happened in the browser before capture: the account identity became “Reviewer”; private review titles and preview hosts became neutral examples; PR rows used neutral repository/title text. No original private screenshots were copied into the docs. Captions distinguish anonymized examples and live empty states. Existing older screenshots were retained as illustrations with an explicit note in the update summary.

The account had no active Inbox requests or Research studies. Populated request details, Decisions, guidance, result pages, team writes, outbound receivers, SMTP, and Web Push were not exercised live. The deployment exposed In-app notification settings only. No Interactions, Decisions, invitations, credentials, studies, or outbound notifications were created. Unavailable states were documented from implementation/test evidence rather than fabricated screenshots.

## Verification

- `python scripts/check-relative-links.py` — passed.
- `python -m mkdocs build --strict` — passed.
- Byte equality for `docs/api/{reference.md,openapi.json,openapi.yaml,mcp-tools.md}` — passed against current application sources.
- `npm run verify:quality` in the app — passed: static ratchet, OpenAPI check/lint (148 operations), scenario contract check (163 scenarios), scenario-id check, coverage gate (91.32% lines, 80.89% branches, 94.26% functions), and basic formatting.
- Initial sandboxed quality run reached coverage, then failed to spawn a child process (`EPERM`). The authorized rerun outside the sandbox completed successfully.
- No app build or disposable PostgreSQL write lane was needed for this documentation-only change. The quality gate does not attest deployed provider access or actual external delivery.
- Prepared files are applied only after checking original hashes, protecting concurrent user edits. Application source remained unchanged by this task.
