---
title: Commentary Review plugin
description: Turn agent plans, drafts, pull requests, and live previews into focused human review and revision workflows.
slug: build/plugins/commentary-review
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Use the Review plugin to bring people into the point where an agent-generated artifact needs judgment. It combines skills for opening and operating reviews with a practice skill that checks whether a plan has enough evidence and clear tradeoffs to execute.

## When to use it

You have a proposed implementation plan, a local Markdown draft, a pull request, or a running web app. You want reviewers to comment on the artifact itself, then have the agent revise it with that feedback. The bundle helps choose the right review surface and keeps the revision loop explicit.

## Before you start

Start with an artifact you are allowed to review. Draft Review needs the installed Commentary CLI and local files; PR Review needs the appropriate repository access; Live Preview Review needs an app you own and its review SDK setup. Authorize the transport used by that workflow.

## A complete workflow

1. Use `review-agentic-plans` to surface missing evidence, risks, and unresolved decisions before execution. For open-ended ideation, use `commentary-brainstorm-review`.
2. Choose `commentary-draft-review` for local text, `commentary-pr-review` for a pull request, or `commentary-live-preview-review` for a running web app.
3. Create or open the review, confirm the target and revision, and share it with people only when authorized.
4. Read reviewer comments in context, make the requested changes, and publish or sync the next revision using the selected workflow.
5. Report what changed and what was checked. Resolve threads according to the workflow and reviewer authority.

Try this request after installation:

```text
Use the Review plugin to critique my release plan, create a Draft Review from ./docs/release-plan.md, and return its link. After reviewer feedback, revise the local source and sync a new revision. Ask before sharing it with anyone.
```

**Expected result:** A reviewable artifact with a clear revision history and a feedback loop tied to the source. Reviewers can see the proposal and changes rather than reconstructing them from agent messages.

## Included skills

The [published v0.6.2 catalog](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/catalog/plugins.yaml) contains 5 skills in this bundle (plugin version 0.4.2). Technical skills operate Commentary; practice skills improve the quality of the work. Each linked page has its own invocation, workflow, and limits.

| Skill | What it contributes |
| --- | --- |
| [Brainstorm Review](../skills/commentary-brainstorm-review.md) | Create and operate a structured Brainstorming Review for a proposal. |
| [Draft Review with the CLI](../skills/commentary-draft-review.md) | Use the Commentary CLI for live collaborative review of local text artifacts. |
| [Live Preview Review](../skills/commentary-live-preview-review.md) | Set up Commentary Live Preview Reviews and address live web app comments. |
| [PR Review with an agent](../skills/commentary-pr-review.md) | Operate rendered GitHub PR reviews with explicit provider and revision boundaries. |
| [Review an agent-generated plan](../skills/review-agentic-plans.md) | Review agent-generated plans for intent, evidence, risk, and decision completeness. |

## Recovery and limits

If a review target is inaccessible, verify provider access and transport authentication before retrying. For a missing live preview, check the SDK and preview URL. A review link or resolved thread does not itself mean the artifact has human approval. Local CLI and localhost workflows require an agent environment that can reach those resources.

## Install this plugin

Choose a native plugin install for the bundle and its Commentary MCP configuration. Complete the host’s connection flow separately; installation does not grant account or workspace access.

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-review@commentary-skills
```

### GitHub Copilot CLI

Run these commands in your terminal:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-review@commentary-skills
```

These marketplace commands use the repository's current default branch, which can be newer than the v0.6.2 contents described here. For the documented release, use the pinned individual-skill commands below or the [v0.6.2 plugin ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-review-cowork.zip) in Microsoft Copilot Cowork. See [installation choices](../plugins.md#choose-an-installation-method) for setup and version details.

### Other agents: install the skills with npx

Use Node.js 22.20 or newer and run a command for each skill you want. The installer lets you choose your supported agent and installation scope; it downloads the complete skill folder without a manual clone. These commands are pinned to v0.6.2:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-brainstorm-review
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-draft-review
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-live-preview-review
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-pr-review
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/review-agentic-plans
```

This installs standalone skills, not the native plugin wrapper or MCP configuration. Connect [MCP](../mcp.md) or install and authenticate the [CLI](../cli.md) when the selected workflow requires it. See [all installation methods](../plugins.md#choose-an-installation-method), including GitHub CLI and Microsoft Copilot Cowork.

## Next steps

- [Review a local draft](../../workflows/review-a-local-draft.md)
- [Compare the four plugins](../plugins.md#choose-a-plugin)
- [Browse every skill](../agent-skills.md#pick-a-task-specific-skill)
