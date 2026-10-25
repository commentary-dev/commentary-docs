---
title: Inbox Triage
description: Inspect authorized Inbox attention and route work to canonical Resources.
slug: build/skills/commentary-inbox-triage
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Inspect authorized Inbox attention and route work to canonical Resources.

**Use it when:** Use when an agent must understand active Inbox items and identify the right next action.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-inbox-triage/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-inbox-triage` to summarize the authorized active Inbox items for this workspace, identify sender and reason, and recommend the one primary next action for each. Preserve cursors and do not mark items complete by reading them.
```

**Expected result:** The agent returns a bounded feed summary with canonical Resource links and explicit continuation state; it does not treat one workspace as the whole account.

## Workflow

Read active items, identify sender and reason, inspect the bounded conversation, select the one requested action, and route to the authorized canonical review or workspace Resource.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-inbox-triage/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Inbox visibility is authorization-bound. Reading or scrolling does not mark an item complete; do not message without user authorization.
