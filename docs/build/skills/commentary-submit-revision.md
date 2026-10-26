---
title: Submit Revision
description: Address durable feedback with a new immutable Interaction revision.
slug: build/skills/commentary-submit-revision
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Address durable feedback with a new immutable Interaction revision.

**Use it when:** Use when a human response asks for a changed proposal or artifact.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-submit-revision/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-submit-revision` to address feedback on the current Interaction revision by clarifying the rollback limit. Preserve the prior revision and identify which feedback this revision addresses.
```

**Expected result:** The agent publishes a new immutable revision and returns its identifier; this does not accept the proposal or imply fulfillment.

## Workflow

Read the current revision and feedback, revise the relevant content, submit a new immutable revision, and preserve the conversation context for another human review.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-submit-revision/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. A revision does not imply acceptance or fulfillment. Use the exact authorized Interaction workflow; no implicit filesystem or provider access.
