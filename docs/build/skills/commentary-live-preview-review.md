---
title: Live Preview Review
description: Set up Commentary Live Preview Reviews and address live web app comments.
slug: build/skills/commentary-live-preview-review
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Set up Commentary Live Preview Reviews and address live web app comments.

**Use it when:** Use when implementing or reviewing an owned preview app with element-level feedback.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-live-preview-review/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-live-preview-review` to add Commentary element feedback to our Vite preview build. Load the published Review SDK only when `VITE_COMMENTARY_REVIEW` is true, set the Commentary parent origin, and explain the required frame policy.
```

**Expected result:** The agent returns the preview-build integration and a connection-check workflow; it does not inject into an unrelated third-party app.

## Workflow

Enable the published Review SDK in preview builds, configure the trusted parent origin, open a Live Preview Review, verify the connection, then read and address element comments.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-live-preview-review/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Do not inject into third-party pages or bypass CSP. Never expose long-lived credentials in the browser. Localhost previews cannot be shared as working targets.
