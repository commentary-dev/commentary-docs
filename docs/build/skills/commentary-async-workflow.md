---
title: Async Workflow
description: Orchestrate a durable Interaction across polling, Decision, revision, and fulfillment.
slug: build/skills/commentary-async-workflow
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Orchestrate a durable Interaction across polling, Decision, revision, and fulfillment.

**Use it when:** Use for an asynchronous task with a human gate and later agent-reported work.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-async-workflow/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-async-workflow` to manage the durable migration request through polling, human decision, requested changes, and a final fulfillment report. Keep each step bounded and report unknown outcomes honestly.
```

**Expected result:** The agent returns the current Interaction state, waits only within the requested budget, and appends a self-reported fulfillment result after authorized work.

## Workflow

Create or resume the Interaction, poll with bounded continuation, wait for the human Decision, revise if requested, and append a truthful fulfillment report after authorized work.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-async-workflow/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Fulfillment is an agent self-report, not verified proof. Never continue a gated action before the exact Decision arrives.
