---
title: Escalate Review
description: Prepare and follow a human-confirmed handoff to canonical full Review.
slug: build/skills/commentary-escalate-review
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Prepare and follow a human-confirmed handoff to canonical full Review.

**Use it when:** Use when a durable request needs a full document or artifact review.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-escalate-review/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-escalate-review` to prepare a handoff of the exact release plan and its decision context into full Commentary Review. Show the destination and preserve the proposal fingerprint for human confirmation.
```

**Expected result:** The agent prepares the handoff and stops for the eligible human to confirm the destination; it does not invoke browser-only escalation as an agent.

## Workflow

Summarize the artifact and decision context, propose the destination Review, wait for human confirmation, then link the exact source and continue through the canonical review surface.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-escalate-review/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. The handoff requires human confirmation and source authorization. It does not create branches or grant repository rights.
