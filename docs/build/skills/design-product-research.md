---
title: Design product research
description: Design ethical, decision-focused product research using established UX methods.
slug: build/skills/design-product-research
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Design ethical, decision-focused product research using established UX methods.

**Use it when:** Use when planning a study and choosing a research method.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/design-product-research/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `design-product-research` to plan research that determines whether first-time users can locate the annual plan. Recommend a method, participant task, consent points, and evidence to collect.
```

**Expected result:** The agent returns a decision-focused study plan and maps it to Commentary's Consent, Content, Activity, Form, and Complete steps without launching it.

## Workflow

Define the product decision, audience, research questions, method, consent needs, participant tasks, and evidence to collect; map the plan into Commentary's linear workflow where appropriate.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/design-product-research/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. A design recommendation does not launch a study or authorize collection. Keep participant-facing language neutral and privacy-aware.
