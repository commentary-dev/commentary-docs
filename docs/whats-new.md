# Documentation updates

## October 2026 branch documentation update

This documentation describes the current Projects branch implementation. Check [deployment capabilities and release boundaries](projects-compatibility.md) before using new features; documentation does not establish production availability or human acceptance.

- [Workspace](workspace.md) opens Reviews, with Recent, Pull requests, Branches and All reviews. Coordinate groups Projects and Trackers; Research & knowledge groups Research studies, Forms and Knowledge. Inbox stays separate.
- [Projects](projects.md) adds seven optional starting templates, an editable Tracker option and downloadable stakeholder review material. Project sections are Overview, Contents, Reviews & guides, Evidence, Activity and Settings.
- [Trackers](trackers.md) provide eight native layouts, saved views, typed editing and explicit conflict recovery. [Portability and Git recovery](tracker-portability.md) explain imports, proposals and source-confirmed authority changes.
- [Review guides](project-review-sessions.md) combine exact deliverable revisions. Questions retain their original artifact context, recheck source access and keep conversation, investigation responses and acceptance separate.
- [Polls and Consensus](review-collaboration.md) are independent per-review settings, both off for new reviews. Existing migrated collaboration retains its history. Proposal decisions, application reports, conversation resolution and exact human sign-off remain separate.
- [Packages](review-packages.md) and [source exploration](engineering-project-reviews.md) document immutable history, retained context and recovery without silently substituting newer content.
- [Evidence](project-evidence.md) distinguishes authored claims, supplied reports, independent verification and [human acceptance](project-acceptance.md). Generated API/MCP contracts and canonical workflow fixtures are synchronized from the branch.

The refresh also aligns Research and Forms entry points, Inbox focused reading, authentication recovery and review navigation guidance. Existing screenshots retain their original capture dates; they are illustrative where the current chrome differs.

## September 2026 Documentation Update

This refresh covers the current implementation through September 15, 2026. It updates the August 27 Inbox/Workspace documentation and fills earlier gaps in Research, visual review, and Live Preview guidance.

## Inbox And Workspace

- [Inbox](agent-inbox.md) is the account-wide Active feed plus History, with sorting, filters, personal attention controls, bounded conversation, author reply edits, and separate future-facing agent guidance.
- [Workspace](workspace.md) has durable personal/team identity, a persistent searchable switcher, grouped navigation (see the current [Workspace guide](workspace.md)), searchable collections, related-review source filters, shared Resource links, and a combined URL/PR/repository review launcher.
- [Saved views and notifications](inbox-preferences.md) live in account settings, with explicit defaults, consent, quiet hours, digests, and separate delivery history.
- [Teams, agents, and automation](teams-and-agents.md) covers membership, agent participation, assignment, exact multi-person approvals, and human-approved attention policies.
- [Developer access](developer-access.md) is account-scoped and includes review-before-issue, one-time secrets, deliberate rotation, and replacement credentials. [Governance](enterprise-governance.md) and [Webhooks](outbound-webhooks.md) remain workspace administration.

## Review And Research

- [Research Studies](research-studies.md) uses Contract v2: Consent, an ordered mix of Content/Activity/Form steps, then Complete. Sessions pin revisions; active structural changes require pause/versioning. Results and agent APIs use step context.
- [Images and diagrams](visual-reviews.md) supports raster, sanitized SVG, and Mermaid region comments with fit/zoom/pan and explicit re-anchoring limits.
- [Live Preview](web-app-reviews.md) covers embedded/new-tab delivery, connection recovery, screenshot feedback, and tracked/manual Research activities.
- [Review modes](review-modes.md) separates Preview/Raw from Document/Changes and exact versions/comparisons. Introductory guides now use the same labels.
- [Forms](commentary-forms.md) explains workspace entry, Research use, and Review-mode navigation while preserving final validation.

The [HTTP reference](api/reference.md), OpenAPI files, and [MCP reference](api/mcp-tools.md) are synchronized from the current application contracts. [MCP Interactions](mcp-interactions.md) now documents all twelve actions, including guidance retrieval and acknowledgment.

## Screenshot Scope

New screenshots were captured with Playwright on the signed-in live commentary.dev site on September 15. They show Inbox, Workspace Overview, the New review chooser, notification settings, and Research creation. Account names, private titles, and hostnames were anonymized in the browser before capture; captions identify neutral replacements.

The account had no active Inbox items or Research studies, and only In-app notification delivery was exposed. Detailed request actions, populated Research results, external delivery, and other unavailable states are documented from current implementation and tests rather than represented as live screenshots. No requests, Decisions, invitations, studies, or outbound deliveries were created for this refresh. Older screenshots elsewhere remain illustrative and may show previous chrome.

## Projects implementation candidates — October 2026

Candidate documentation now covers optional [Projects](projects.md)/[Trackers](trackers.md), immutable [packages](review-packages.md), exact [Review guides](project-review-sessions.md), [source/evidence](engineering-project-reviews.md), [human acceptance](project-acceptance.md), renderer isolation and [agent workflows](projects-quickstarts.md). Tested code versions and retained release gaps are in [compatibility](projects-compatibility.md). This entry is not a production-launch, package-publication, performance or human-acceptance claim.
