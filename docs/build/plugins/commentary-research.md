---
title: Commentary Research plugin
description: Connect decision-focused research planning with authorized, source-backed Research Study participation.
slug: build/plugins/commentary-research
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Use the Research plugin to connect a product question to a credible study plan and disciplined study participation. It pairs research-design practice with technical guidance for working inside an existing Commentary Research Study.

## When to use it

Your team needs to learn whether users can complete a task, understand a concept, or find the right information. You want the method, participant tasks, and evidence to answer that question. Once a human launches the study, an authorized agent can work with its current step and pinned workflow context.

## Before you start

Identify the product decision, audience, consent needs, and evidence to collect. Research operations require a supported deployed capability, an authorized MCP connection, and access to the existing study and participant context.

## A complete workflow

1. Use `design-product-research` to select a suitable method, write neutral participant tasks, and define what evidence would inform the decision.
2. Map the plan to Commentary’s Consent, Content, Activity, Form, and Complete steps. Have the responsible human review the plan and handle authoring, consent, and launch.
3. Use `commentary-research-workflow` to inspect the authorized study and its exact pinned workflow revision.
4. Preserve `stepId` and `stepRunId` and contribute only the permitted response for the active step.
5. Report the evidence available and its limits. Keep recommendations separate from observed participant outcomes.

Try this request after installation:

```text
Use the Research plugin to plan a study of whether first-time users can find the annual plan. Recommend the method, neutral tasks, consent points, and evidence. Do not launch the study. Once a human has launched it, inspect only the authorized current-step context.
```

**Expected result:** A decision-focused study plan and, where authorized, an exact-context contribution to a launched study. Findings remain tied to evidence rather than assumed success.

## Included skills

The [published v0.6.2 catalog](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/catalog/plugins.yaml) contains 2 skills in this bundle (plugin version 0.1.2). Technical skills operate Commentary; practice skills improve the quality of the work. Each linked page has its own invocation, workflow, and limits.

| Skill | What it contributes |
| --- | --- |
| [Operate a Research Study](../skills/commentary-research-workflow.md) | Operate source-backed Commentary Research Studies through MCP and Draft Review. |
| [Design product research](../skills/design-product-research.md) | Design ethical, decision-focused product research using established UX methods. |

## Recovery and limits

If the capability, participant context, or expected revision is missing, stop and inspect the returned state. An agent grant does not permit study authoring, launch, participant consent, or publication. Missing telemetry is not an outcome. Use the Forms plugin when the primary need is building a questionnaire rather than planning a research study.

## Install this plugin

Choose a native plugin install for the bundle and its Commentary MCP configuration. Complete the host’s connection flow separately; installation does not grant account or workspace access.

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-research@commentary-skills
```

### GitHub Copilot CLI

Run these commands in your terminal:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-research@commentary-skills
```

These marketplace commands use the repository's current default branch, which can be newer than the v0.6.2 contents described here. For the documented release, use the pinned individual-skill commands below or the [v0.6.2 plugin ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-research-cowork.zip) in Microsoft Copilot Cowork. See [installation choices](../plugins.md#choose-an-installation-method) for setup and version details.

### Other agents: install the skills with npx

Use Node.js 22.20 or newer and run a command for each skill you want. The installer lets you choose your supported agent and installation scope; it downloads the complete skill folder without a manual clone. These commands are pinned to v0.6.2:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-research-workflow
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/design-product-research
```

This installs standalone skills, not the native plugin wrapper or MCP configuration. Connect [MCP](../mcp.md) or install and authenticate the [CLI](../cli.md) when the selected workflow requires it. See [all installation methods](../plugins.md#choose-an-installation-method), including GitHub CLI and Microsoft Copilot Cowork.

## Next steps

- [Research Studies integration](../research-studies.md)
- [Compare the four plugins](../plugins.md#choose-a-plugin)
- [Browse every skill](../agent-skills.md#pick-a-task-specific-skill)
