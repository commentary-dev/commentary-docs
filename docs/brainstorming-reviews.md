# Brainstorming Reviews

Brainstorming Reviews are Draft Review Sessions for refining a plan of record with reviewers and agents before the work is committed to Git.

Open [/workspace/drafts/new](https://commentary.dev/workspace/drafts/new), choose `Brainstorming review`, and paste or upload Markdown, MDX, static HTML, or plain text files. Existing draft reviews can also be converted from `Draft actions` without changing the review URL or losing comments, replies, shares, or revision history.

## How They Work

- The latest revision is the current plan of record.
- Earlier revisions stay readable and read-only.
- Comments attach to rendered blocks and selected text, like other Commentary reviews.
- Sharing, live updates, exports, API access, MCP access, and CLI workflows use the same draft review foundation.
- Brainstorming comments and updates stay in Commentary; they do not create branches, commits, pull requests, or provider review comments.

Brainstorming Reviews are Pro-preview features. During the preview period they remain usable and show the standard Pro notice where relevant.

## Feedback Signals

Reviewers can set one active stance on a comment:

- `Agree`
- `Object`
- `Blocker`
- `Needs clarification`

Owners can mark feedback addressed after a revision applies the accepted change. Addressing feedback clears unresolved objections, blockers, and clarification needs for that thread.

## Consensus Rules

Owners can configure how feedback becomes actionable for agents. The default is owner-decides, so silence does not become approval.

Brainstorming Reviews can compute states such as:

- pending
- accepted for change
- blocked
- needs owner decision
- rejected
- out of scope
- applied
- resolved

Consensus state is based on feedback signals, owner decisions, configured rules, poll outcomes, and revision metadata. Commentary does not claim consensus unless the review state supports it.

## Polls

Poll comments can collect structured choices inside a normal review thread. Standard polls are informational. Decision polls can contribute to Brainstorming consensus and expose actionable, blocked, stale, or decision-needed outcomes for agents.

Multi-select polls keep a pending local selection until the reviewer explicitly commits the vote.

## Agent And CLI Workflows

Agents can work with Brainstorming Reviews through the public API, MCP, or the [Commentary CLI](./commentary-cli.md).

Common CLI commands:

```bash
commentary review ./docs/spec.md --mode brainstorming --title "Product spec"
commentary brainstorm status --json
commentary brainstorm next --consensus-state accepted_for_change --timeout 60s --json
commentary sync --message "Apply brainstorming consensus" --addressed-thread <thread-id>
```

For remote-only agents, MCP clients operate with review ids, file ids or paths, literal UTF-8 content payloads, comments, feedback signals, consensus state, and live events. Commentary does not read local paths or fetch arbitrary URLs for agents.

See [API and MCP](./api-and-mcp.md), [MCP tools](./api/mcp-tools.md), and [Agent skills](./agent-skills.md).
