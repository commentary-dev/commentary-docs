---
title: Commentary Inbox plugin
description: Keep agent work moving with durable human questions, exact approvals, revisions, and an actionable Inbox.
slug: build/plugins/commentary-inbox
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Use the Inbox plugin when an agent can do the work but needs a person to answer a question, choose an option, or approve a specific action. It keeps the request, response, and follow-up together so a decision does not disappear into a chat transcript.

## When to use it

A team is preparing a release, and the agent needs a migration decision before it can proceed. Instead of repeatedly asking for status, it creates a durable request, explains the consequences, waits for the right person, and resumes only the authorized work. Inbox triage helps reviewers find requests that need their attention; workspace discovery helps the agent find work it is actually allowed to see.

## Before you start

You need a Commentary account, an authorized CLI or MCP connection, and access to the target workspace or Interaction. Decide who should receive the request and exactly what action requires a decision.

## A complete workflow

1. Use `design-effective-interactions` to turn an ambiguous blocker into a concise question with useful choices, evidence, and consequences.
2. Use `commentary-workspace` to discover the authorized workspace context, then `commentary-ask-human` for an answer or `commentary-request-approval` for an exact action gate.
3. Use `commentary-async-workflow` to follow the durable request with bounded polling. The reviewer can use `commentary-inbox-triage` to decide what needs attention.
4. If the reviewer requests changes, use `commentary-submit-revision`. If the decision needs a fuller document review, use `commentary-escalate-review` for a human-confirmed handoff.
5. Resume only after the applicable human decision, then record what happened and what remains unverified.

Try this request after installation:

```text
Use the Inbox plugin to prepare a migration approval request. Explain the proposed action, rollback plan, and choices. Show me the request before sending it, then wait for the exact human decision before any migration runs.
```

**Expected result:** A durable request with clear ownership, an inspectable decision or waiting state, and a separate report of the work performed. The agent does not mistake its own completion claim for human acceptance.

## Included skills

The [published v0.6.2 catalog](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/catalog/plugins.yaml) contains 8 skills in this bundle (plugin version 0.2.1). Technical skills operate Commentary; practice skills improve the quality of the work. Each linked page has its own invocation, workflow, and limits.

| Skill | What it contributes |
| --- | --- |
| [Ask Human](../skills/commentary-ask-human.md) | Create a durable Inbox question when an answer must survive the current chat. |
| [Request Approval](../skills/commentary-request-approval.md) | Request a human Decision bound to an exact proposal and consequence. |
| [Submit Revision](../skills/commentary-submit-revision.md) | Address durable feedback with a new immutable Interaction revision. |
| [Escalate Review](../skills/commentary-escalate-review.md) | Prepare and follow a human-confirmed handoff to canonical full Review. |
| [Async Workflow](../skills/commentary-async-workflow.md) | Orchestrate a durable Interaction across polling, Decision, revision, and fulfillment. |
| [Inbox Triage](../skills/commentary-inbox-triage.md) | Inspect authorized Inbox attention and route work to canonical Resources. |
| [Workspace Discovery](../skills/commentary-workspace.md) | Discover granted workspace Resources and team queues; link and rename authorized reviews. |
| [Design an effective human request](../skills/design-effective-interactions.md) | Design clear notifications, durable questions, choices, and exact approval requests. |

## Recovery and limits

If a decision is missing, stale, or scoped to a different action, stop that action and clarify the request. Reconnect or request the necessary grant if workspace discovery fails. Installing this plugin does not authorize messages or grant approval authority; fulfillment remains an agent self-report.

## Install this plugin

Choose a native plugin install for the bundle and its Commentary MCP configuration. Complete the host’s connection flow separately; installation does not grant account or workspace access.

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-inbox@commentary-skills
```

### GitHub Copilot CLI

Run these commands in your terminal:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-inbox@commentary-skills
```

These marketplace commands use the repository's current default branch, which can be newer than the v0.6.2 contents described here. For the documented release, use the pinned individual-skill commands below or the [v0.6.2 plugin ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-inbox-cowork.zip) in Microsoft Copilot Cowork. See [installation choices](../plugins.md#choose-an-installation-method) for setup and version details.

### Other agents: install the skills with npx

Use Node.js 22.20 or newer and run a command for each skill you want. The installer lets you choose your supported agent and installation scope; it downloads the complete skill folder without a manual clone. These commands are pinned to v0.6.2:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-ask-human
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-request-approval
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-submit-revision
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-escalate-review
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-async-workflow
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-inbox-triage
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-workspace
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/design-effective-interactions
```

This installs standalone skills, not the native plugin wrapper or MCP configuration. Connect [MCP](../mcp.md) or install and authenticate the [CLI](../cli.md) when the selected workflow requires it. See [all installation methods](../plugins.md#choose-an-installation-method), including GitHub CLI and Microsoft Copilot Cowork.

## Next steps

- [Reach a human decision](../../workflows/reach-a-human-decision.md)
- [Compare the four plugins](../plugins.md#choose-a-plugin)
- [Browse every skill](../agent-skills.md#pick-a-task-specific-skill)
