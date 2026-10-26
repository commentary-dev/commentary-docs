---
title: Design an effective Form
description: Design clear, accessible, unbiased, and adaptive forms.
slug: build/skills/design-effective-forms
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Design clear, accessible, unbiased, and adaptive forms.

**Use it when:** Use before authoring a Form when question quality and respondent effort need review.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/design-effective-forms/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `design-effective-forms` to review this release survey for leading questions, unnecessary fields, accessibility, and respondent effort. Suggest a neutral rewrite for each problem.
```

**Expected result:** The agent returns prioritized form-design changes and accessible wording; it does not collect answers or bypass consent.

## Workflow

Map each question to a decision need, remove leading wording, choose the least burdensome response type, check accessibility, and explain any conditional logic.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/design-effective-forms/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Do not collect unnecessary personal data or imply that form design replaces consent or research ethics.
