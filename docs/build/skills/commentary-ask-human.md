---
title: Ask Human
description: Create a durable Inbox question when an answer must survive the current chat.
slug: build/skills/commentary-ask-human
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

**Purpose:** Create a durable Inbox question when an answer must survive the current chat.

**Use it when:** Use when an agent needs a human response that should remain in the account Inbox.

## Install

Check out the published `v0.6.2` tag of the [Commentary Skills repository](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2), then copy the complete `skills/commentary-ask-human/` folder into the skills directory for your compatible `SKILL.md` agent. Preserve references and metadata. Restart or refresh the harness if it loads skills at startup.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-ask-human` to ask the release owner whether the notes should lead with the migration window or the rollout plan. State that the answer changes document order only, then create a durable question and wait for its response.
```

**Expected result:** The agent creates or resumes one authorized Inbox question and returns its durable handle and response state; it does not treat an answer as approval to deploy.

## Workflow

Frame one concise question, state why the answer matters, and include bounded context. Create the durable request through the supported Inbox/Interaction workflow, then poll or wait for the human response before continuing dependent work.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-ask-human/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Sending a durable request is an external communication and requires user authorization; the skill grants no permission to message a person.
