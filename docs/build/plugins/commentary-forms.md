---
title: Commentary Forms plugin
description: Build useful Forms from question design through source-backed creation, rendering, response analysis, and accessible charts.
slug: build/plugins/commentary-forms
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Use the Forms plugin when you need structured feedback that people can answer clearly and your team can act on. The bundle covers both the implementation and the quality of the questions, so collecting responses is connected to a real decision.

## When to use it

You are collecting release feedback, evaluating a proposal, or building an onboarding questionnaire. You need a reliable Form contract, an appropriate respondent experience, and a clear explanation of the permitted results. The plugin helps carry that work across design, implementation, and analysis.

## Before you start

Define the decision the Form supports, the intended respondents, and the data you need. Have access to the source-backed Form and an authorized Commentary transport for operations. Custom rendering also needs a compatible app and the Forms SDK bridge.

## A complete workflow

1. Use `design-effective-forms` to choose understandable questions, useful response options, accessible layout, and appropriate conditional or adaptive behavior.
2. Use `commentary-form-creation` to prepare and validate the source-backed Form contract.
3. Use `commentary-form-rendering` when you need a custom respondent UI. Preserve the contract and supported SDK bridge rather than inventing submission semantics.
4. Collect responses through the authorized product flow. Use `commentary-form-results` to read only the results the current caller may access.
5. Use `commentary-form-result-visualizations` to explain those results with accessible charts and text. Keep limitations and incomplete evidence visible.

Try this request after installation:

```text
Use the Forms plugin to design a short release-feedback Form. Start with the decision we need to make, propose clear questions, then prepare the source contract for review. When authorized responses are available, summarize them with an accessible chart and explain the limits of the data.
```

**Expected result:** A coherent Form experience with a validated source contract, understandable questions, and a results explanation grounded in permitted responses.

## Included skills

The [published v0.6.2 catalog](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/catalog/plugins.yaml) contains 6 skills in this bundle (plugin version 0.4.3). Technical skills operate Commentary; practice skills improve the quality of the work. Each linked page has its own invocation, workflow, and limits.

| Skill | What it contributes |
| --- | --- |
| [Create a Commentary Form](../skills/commentary-form-creation.md) | Design and create Commentary Form Contract v1 forms. |
| [Route Form design work](../skills/commentary-form-design.md) | Route Form experience work to focused rendering or design skills. |
| [Render a Commentary Form](../skills/commentary-form-rendering.md) | Implement Commentary Form renderers, bindings, and SDK bridges. |
| [Read Form results](../skills/commentary-form-results.md) | Fetch, poll, normalize, and export Commentary Forms results. |
| [Visualize Form results](../skills/commentary-form-result-visualizations.md) | Create accessible visualizations from permitted Form result data. |
| [Design an effective Form](../skills/design-effective-forms.md) | Design clear, accessible, unbiased, and adaptive forms. |

## Recovery and limits

If a renderer cannot submit, check its bridge setup and the exact Form contract before changing questions. If results are unavailable, check the caller grant and response state; do not infer missing answers. `commentary-form-design` is a compatibility router to the focused skills, so it may direct work to another skill in this bundle.

## Install this plugin

Choose a native plugin install for the bundle and its Commentary MCP configuration. Complete the host’s connection flow separately; installation does not grant account or workspace access.

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-forms@commentary-skills
```

### GitHub Copilot CLI

Run these commands in your terminal:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-forms@commentary-skills
```

These marketplace commands use the repository's current default branch, which can be newer than the v0.6.2 contents described here. For the documented release, use the pinned individual-skill commands below or the [v0.6.2 plugin ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-forms-cowork.zip) in Microsoft Copilot Cowork. See [installation choices](../plugins.md#choose-an-installation-method) for setup and version details.

### Other agents: install the skills with npx

Use Node.js 22.20 or newer and run a command for each skill you want. The installer lets you choose your supported agent and installation scope; it downloads the complete skill folder without a manual clone. These commands are pinned to v0.6.2:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-creation
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-design
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-rendering
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-results
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-result-visualizations
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/design-effective-forms
```

This installs standalone skills, not the native plugin wrapper or MCP configuration. Connect [MCP](../mcp.md) or install and authenticate the [CLI](../cli.md) when the selected workflow requires it. See [all installation methods](../plugins.md#choose-an-installation-method), including GitHub CLI and Microsoft Copilot Cowork.

## Next steps

- [Forms integration and SDK bridge](../forms.md)
- [Compare the four plugins](../plugins.md#choose-a-plugin)
- [Browse every skill](../agent-skills.md#pick-a-task-specific-skill)
