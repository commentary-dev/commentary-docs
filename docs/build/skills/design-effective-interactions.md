---
title: Design an effective human request
description: Design clear notifications, durable questions, choices, and exact approval requests.
slug: build/skills/design-effective-interactions
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Design clear notifications, durable questions, choices, and exact approval requests.

**Use it when:** Use when shaping a request, Inbox interaction, notification, or human approval prompt.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/design-effective-interactions/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `design-effective-interactions` to improve this question: “Should we ship?” Make the needed decision, consequence, options, and response action clear while avoiding false urgency.
```

**Expected result:** The agent returns a concise, actionable request design; it does not send the request.

## Workflow

State who needs to act, what they must decide, the consequence and deadline if any, then choose the smallest interaction surface that preserves context.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/design-effective-interactions/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Design guidance does not authorize sending a message or creating an Interaction. Avoid manipulative urgency or vague approval requests.
