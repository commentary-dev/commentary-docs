---
title: Read Form results
description: Fetch, poll, normalize, and export Commentary Forms results.
slug: build/skills/commentary-form-results
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Fetch, poll, normalize, and export Commentary Forms results.

**Use it when:** Use when a permitted integration needs to read and export a Form response collection.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-form-results/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-results` to fetch the authorized release-readiness submissions, retain source and contract version context, and export the permitted rows as CSV.
```

**Expected result:** The agent returns only results allowed to this caller, with pagination and export status; filling access alone is not treated as collection access.

## Workflow

Check result-list authorization, fetch bounded pages, retain source/version context, normalize only supported fields, and export through the permitted format or destination.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-results/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Fill access does not grant result access. Do not expose anonymous respondent identity or send submitted values to analytics.
