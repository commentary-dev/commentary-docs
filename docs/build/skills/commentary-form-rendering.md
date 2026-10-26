---
title: Render a Commentary Form
description: Implement Commentary Form renderers, bindings, and SDK bridges.
slug: build/skills/commentary-form-rendering
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Implement Commentary Form renderers, bindings, and SDK bridges.

**Use it when:** Use when adding a native, static HTML, or custom Live Preview Form rendering path.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-form-rendering/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-rendering` to add a customer-owned form renderer inside our existing Live Preview Review. Use the published Forms SDK bridge, preserve the Form Contract version, and return server validation errors to the participant.
```

**Expected result:** The agent returns renderer code and a test flow for the nonce/origin-bound bridge; no credential is included in the renderer.

## Workflow

Choose native rendering, sanitized HTML bindings, or the Forms SDK bridge; preserve the contract id/version, submit structured values, and surface server validation diagnostics.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-rendering/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Custom rendering requires an existing authorized Live Preview Review and the nonce-bound origin-aware bridge. Do not fetch renderer URLs server-side or execute renderer code inside Commentary.
