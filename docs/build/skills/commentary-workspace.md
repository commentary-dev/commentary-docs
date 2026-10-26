---
title: Workspace Discovery
description: Discover granted workspace Resources and team queues; link and rename authorized reviews.
slug: build/skills/commentary-workspace
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Discover granted workspace Resources and team queues; link and rename authorized reviews.

**Use it when:** Use when an agent needs to locate work in a granted workspace.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-workspace/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-workspace` to find the release-readiness review in workspace `ws_123`, verify that the Resource is accessible, and report its current title and review URL. Do not link or rename unless I explicitly request it.
```

**Expected result:** The agent returns only authorized Resource metadata and the relevant workspace continuation; no provider permission or human governance authority is inferred.

## Workflow

Read the workspace binding and allowed collections, filter for the named Resource, inspect its association, and perform only explicitly allowed linking or renaming actions.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-workspace/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. A workspace grant does not confer provider access, human governance, or permission to read inaccessible linked Resources.
