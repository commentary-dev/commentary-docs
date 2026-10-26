---
title: Commentary agent skills
description: Choose a skill for a specific task, explore its plugin bundle, and install it with a marketplace or a skill installer.
slug: build/agent-skills
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 10
---


This guide covers the published [commentary-skills v0.6.2 release](https://github.com/commentary-dev/commentary-skills/releases/tag/v0.6.2), at source commit `6903701f26de9076dc47823adca92037be3edd1e`. Its portable skills guide compatible agents through authorized Commentary workflows. A skill is instruction content, not an access grant, API token, human decision, or provider permission.

## Choose a plugin or a skill

Start with [Commentary plugins](plugins.md) when you want a complete workflow: [Inbox](plugins/commentary-inbox.md) for human decisions, [Review](plugins/commentary-review.md) for artifact feedback, [Forms](plugins/commentary-forms.md) for structured responses, or [Research](plugins/commentary-research.md) for product evidence. Each plugin combines related technical and practice skills.

Keep using the individual pages below when you know the task you need. Every skill page links to its plugin and ends with copyable installation commands.

## Install a skill folder

For a supported agent, use the npx installer to download a complete skill without cloning the repository:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-draft-review
```

Use Node.js 22.20 or newer and follow the prompts to select your agent and scope. Native [Claude Code and GitHub Copilot plugin installs](plugins.md#choose-an-installation-method) add the whole bundle. GitHub CLI and Microsoft Copilot Cowork installation are also covered there.

For manual installation, download the published [v0.6.2 source](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2) and copy the complete selected `skills/<skill-name>/` folder into your agent’s documented skills directory. Preserve references and metadata. Refresh the agent’s skill list, then try the invocation on that skill’s page.

## Pick a task-specific skill

The published v0.6.2 release contains the following 21 skills. Each page explains purpose, installation, invocation, workflow, environment, and authority limits.

### Durable human-in-the-loop work

- [Ask Human](skills/commentary-ask-human.md)
- [Request Approval](skills/commentary-request-approval.md)
- [Submit Revision](skills/commentary-submit-revision.md)
- [Escalate Review](skills/commentary-escalate-review.md)
- [Async Workflow](skills/commentary-async-workflow.md)
- [Inbox Triage](skills/commentary-inbox-triage.md)
- [Workspace discovery](skills/commentary-workspace.md)

### Review workflows

- [Draft Review](skills/commentary-draft-review.md)
- [Brainstorm Review](skills/commentary-brainstorm-review.md)
- [PR Review](skills/commentary-pr-review.md)
- [Live Preview Review](skills/commentary-live-preview-review.md)
- [Review agentic plans](skills/review-agentic-plans.md)

### Forms and research

- [Form creation](skills/commentary-form-creation.md)
- [Form rendering](skills/commentary-form-rendering.md)
- [Form results](skills/commentary-form-results.md)
- [Form result visualizations](skills/commentary-form-result-visualizations.md)
- [Research workflow](skills/commentary-research-workflow.md)
- [Effective Forms](skills/design-effective-forms.md)
- [Product research design](skills/design-product-research.md)
- [Form design compatibility router](skills/commentary-form-design.md)

### Request and question design

- [Effective Interactions](skills/design-effective-interactions.md)

## Authority and environment

Skills use the CLI, HTTP API, or MCP as appropriate for the installed toolchain. Install and authorize those transports separately. Prefer short-lived, narrowly scoped credentials. Never give an agent authority to fabricate a human Decision, send a message without authorization, create Git commits or PRs, or claim verification without evidence.

There is no published `@commentary-dev/agent-sdk` npm package. Use HTTP or MCP. No `COMMENTARY_TOKEN` is included in or stored by a skill. Configure credentials using the transport's own secure mechanism.
