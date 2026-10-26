---
title: Create a Commentary Form
description: Design and create Commentary Form Contract v1 forms.
slug: build/skills/commentary-form-creation
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Design and create Commentary Form Contract v1 forms.

**Use it when:** Use when authoring a source-backed Form Contract for structured answers.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-form-creation/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-creation` to create a source-backed release-readiness Form with required owner and risk fields, optional notes, and server-validated submission. Return a valid Form Contract and validation result.
```

**Expected result:** The agent returns a source-ready Contract v1 and validation diagnostics; it does not create a standalone workspace Form through an unsupported API.

## Workflow

Define a stable form id, typed fields, required values, user-facing labels, safe UI grouping, and enabled destinations; validate the contract before sharing it with participants.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-creation/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Forms are source-authored; standalone API create/update is not the authoring route. Server validation is authoritative.
