---
title: Commentary agent skills
description: Install portable Commentary skill folders into a compatible agent and choose a skill for a specific task.
slug: build/agent-skills
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 10
---


This guide covers the published [commentary-skills v0.6.2 release](https://github.com/commentary-dev/commentary-skills/releases/tag/v0.6.2), at source commit `6903701f26de9076dc47823adca92037be3edd1e`. Its portable skills guide compatible agents through authorized Commentary workflows. A skill is instruction content, not an access grant, API token, human decision, or provider permission.

## Install a skill folder

1. Check that your agent harness supports the `SKILL.md` folder format.
2. Clone or download the published `v0.6.2` tag. For Git, use `git clone --branch v0.6.2 --depth 1 https://github.com/commentary-dev/commentary-skills.git`.
3. Copy the complete selected `skills/<skill-name>/` folder to the skill directory documented by your agent. Preserve `SKILL.md`, `references/`, `agents/`, and other files.
4. Restart or refresh the agent harness if it only discovers skills at startup.
5. Ask the agent to use the installed skill by name for a task that matches its purpose.

The skill repository also provides generated plugin bundles for compatible plugin hosts. Use its own installation guide and reviewed release assets for those hosts; a source checkout or ZIP build candidate does not prove a plugin release was published.

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

## Canonical skill pages

