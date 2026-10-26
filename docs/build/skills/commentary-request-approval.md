---
title: Request Approval
description: Request a human Decision bound to an exact proposal and consequence.
slug: build/skills/commentary-request-approval
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Request a human Decision bound to an exact proposal and consequence.

**Use it when:** Use when an agent needs an explicit human decision before a consequential next step.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-request-approval/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-request-approval` to request human approval for deploying artifact revision `release-18` to staging. Bind the request to the exact action, consequence, and rollback limit; wait for current-policy approval before deployment.
```

**Expected result:** The agent returns a current-policy Decision receipt for the exact action or a pending/rejected state; it does not execute before approval.

## Workflow

Describe the exact proposal and consequence, submit it for human review, wait for the Decision receipt, then proceed only within the approved fingerprint and policy.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-request-approval/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Does not approve its own request, broaden an approval, or execute an external proposal. Human authority remains with the signed-in user.
