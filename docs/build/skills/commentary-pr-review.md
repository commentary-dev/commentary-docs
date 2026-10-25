---
title: PR Review with an agent
description: Operate rendered GitHub PR reviews with explicit provider and revision boundaries.
slug: build/skills/commentary-pr-review
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Operate rendered GitHub PR reviews with explicit provider and revision boundaries.

**Use it when:** Use when reviewing a GitHub pull request through Commentary.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-pr-review/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-pr-review` to review a GitHub pull request as a rendered document. Summarize important issues, anchor comments to changed content, and do not submit an overall review outcome unless I ask.
```

**Expected result:** The agent returns a content-focused review with anchored findings and the current pending state; provider submission remains a separate authorized action.

## Workflow

Open the PR, read the rendered document, switch to exact changes only when needed, anchor feedback to content, track pending threads, and submit an explicit provider review when authorized.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-pr-review/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Public PR read is anonymous; writing and submission require authentication. Comments do not become provider events until review submission.
