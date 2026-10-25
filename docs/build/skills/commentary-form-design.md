---
title: Route Form design work
description: Route Form experience work to focused rendering or design skills.
slug: build/skills/commentary-form-design
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Route Form experience work to focused rendering or design skills.

**Use it when:** Use as a compatibility entry point when a task concerns a Commentary Form experience.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-form-design/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-design` to classify this task: we need branded form UI, conditional questions, and a results chart. Route each part to the focused rendering, effective-form, or visualization skill and state which transport is needed.
```

**Expected result:** The agent identifies the focused skill or skills and required transport; it does not invent a separate Forms API or permission.

## Workflow

Clarify whether the need is contract authoring, renderer implementation, response design, results access, or visualization, then apply the corresponding focused skill and verify its boundaries.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-design/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. This is a compatibility router, not a separate Forms API or permission.
