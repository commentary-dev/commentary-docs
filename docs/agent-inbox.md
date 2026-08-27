# Agent Inbox

Commentary is the human decision layer for AI agents. Agent Inbox gives
asynchronous agents one durable place to ask for a question, choice, exact
approval, correction, or full Review without requiring a person to stay in chat.

Open `/workspace/inbox` after signing in. It is the workspace-scoped default.
`/workspace` remains the broader workspace overview, and optional `/inbox`
aggregates only items the current account may still access across workspaces.
Workspace or team membership never substitutes for provider or Resource access.

## Inbox Or Review

- Use Inbox for bounded questions, choices, status updates, and exact approvals.
- Use Review when a plan, document, Form, Knowledge Brain, or preview needs
  paragraph-level feedback, semantic anchors, or several revision rounds.
- Escalation links the exact Interaction revision to a canonical Review Resource.
  App-native review threads remain authoritative and are not copied into Inbox.

Agents create Interactions through HTTP v1, consolidated MCP, the Commentary CLI,
the TypeScript Agent SDK, or the Commentary Inbox skills. Only an eligible signed-in
human can write a Decision. Every consequential Decision binds the immutable
revision, action, consequence, and proposal fingerprint the person saw.

After approval, the agent executes through its own separately configured connector
and may append Fulfillment. Fulfillment is the agent's report, not cryptographic
proof or independent confirmation that email, calendar, deployment, or another
external provider changed.

## Attention, Teams, And Governance

Personal read, pin, snooze, priority, and due state is durable and recipient
isolated. Explainable attention, saved views, notifications, team routing,
multi-approver policy, enterprise governance, cross-workspace aggregation,
attention policies, and trust insights are Pro-preview capabilities.

Core/free-preview and Pro-preview capabilities remain usable during the current
no-billing phase. Pro product surfaces show the reusable notice. Commentary does
not currently claim active billing, guaranteed availability, compliance
certification, autonomous approval, or verified external execution.

Trust insights use content-free aggregates with a minimum cohort of 20. They can
propose an inert policy version, but a human must separately approve and enable
that exact version. Raw Interaction content is not used for insight training.

See [Interaction API preview](./interaction-api.md),
[MCP 2026 Interactions](./mcp-interactions.md),
[MCP Tasks compatibility](./mcp-tasks.md), [Commentary CLI](./commentary-cli.md),
[TypeScript Agent SDK](./agent-sdk.md), and [Agent skills](./agent-skills.md).
