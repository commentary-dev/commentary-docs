---
title: Draft Review with the CLI
description: Use the Commentary CLI for live collaborative review of local text artifacts.
slug: build/skills/commentary-draft-review
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Use the Commentary CLI for live collaborative review of local text artifacts.

**Use it when:** Use when local Markdown, MDX, HTML, or text needs a hosted human review.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-draft-review/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-draft-review` to create a Draft Review for `./docs/release-plan.md`, share it only if I ask, and wait for reviewer comments. Keep the local file authoritative; after feedback, sync a new revision and report its review link.
```

**Expected result:** The agent returns a hosted review link and the next actionable comment or bounded wait state; edits remain local until explicitly synced.

## Workflow

Authenticate with the CLI, create a Draft Review from local files, share only when requested, read comments, edit locally, sync a new immutable revision, and resolve threads with proper approval.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-draft-review/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Local files remain the source of truth unless the user explicitly asks to pull reviewed content. CLI authentication is separate from project metadata; no Git commits or PRs are created.
