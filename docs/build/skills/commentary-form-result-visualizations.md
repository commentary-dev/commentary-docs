---
title: Visualize Form results
description: Create accessible visualizations from permitted Form result data.
slug: build/skills/commentary-form-result-visualizations
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Create accessible visualizations from permitted Form result data.

**Use it when:** Use after an authorized result collection is available and needs a human-readable summary.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-form-result-visualizations/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-result-visualizations` to summarize the authorized risk-level responses with counts by category, include missing answers, and provide a text alternative.
```

**Expected result:** The agent returns an accessible chart plus counts/sample size and a text summary without implying that a small response set is statistically representative.

## Workflow

Inspect field types and sample sizes, choose a chart suited to the data, label counts and missing values, and provide a text summary with accessible color and contrast.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-result-visualizations/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Do not imply statistical validity from small samples or expose data outside its authorized audience.
