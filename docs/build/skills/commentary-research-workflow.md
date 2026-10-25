---
title: Operate a Research Study
description: Operate source-backed Commentary Research Studies through MCP and Draft Review.
slug: build/skills/commentary-research-workflow
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Operate source-backed Commentary Research Studies through MCP and Draft Review.

**Use it when:** Use when an authorized agent needs to inspect or participate in an existing Research Study.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-research-workflow/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-research-workflow` to inspect the currently launched study, verify the participant session is on the expected revision, and answer only the active step question. Preserve its `stepId` and `stepRunId`.
```

**Expected result:** The agent returns authorized current-step context or a scoped reply; it does not author or launch a study.

## Workflow

Discover deployed Research capability, read the study and exact pinned workflow revision, preserve stepId/stepRunId, and contribute only permitted responses on the active step.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-research-workflow/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Agent scopes do not grant study authoring, launch, participant consent, or publication authority. Missing telemetry is not an outcome.
