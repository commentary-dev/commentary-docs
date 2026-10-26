---
title: Brainstorm Review
description: Create and operate a structured Brainstorming Review for a proposal.
slug: build/skills/commentary-brainstorm-review
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Create and operate a structured Brainstorming Review for a proposal.

**Use it when:** Use when a team needs structured feedback before acting on a proposal.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-brainstorm-review/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-brainstorm-review` to structure a review of the release plan around rollout timing, rollback readiness, and customer impact. Keep discussion separate from any execution approval.
```

**Expected result:** The agent prepares or operates a Brainstorming Review with explicit questions and returns unresolved feedback; no vote or discussion is treated as execution approval.

## Workflow

Create the review from the exact proposal, ask focused questions, collect discussion and structured responses, summarize unresolved issues, and carry an explicit human decision into the next step.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-brainstorm-review/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Brainstorming is not an execution grant. Follow configured Polls/Consensus rules and preserve human authority.
