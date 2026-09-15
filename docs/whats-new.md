# September 2026 Documentation Update

This refresh covers the current implementation through September 15, 2026. It updates the August 27 Inbox/Workspace documentation and fills earlier gaps in Research, visual review, and Live Preview guidance.

## Inbox And Workspace

- [Inbox](agent-inbox.md) is the account-wide Active feed plus History, with sorting, filters, personal attention controls, bounded conversation, author reply edits, and separate future-facing agent guidance.
- [Workspace](workspace.md) has durable personal/team identity, a persistent searchable switcher, Work/Manage sections, searchable collections, related-review source filters, shared Resource links, and a combined URL/PR/repository review launcher.
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
