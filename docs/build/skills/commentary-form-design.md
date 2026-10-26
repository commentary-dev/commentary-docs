---
title: Route Form design work
description: Route Form experience work to focused rendering or design skills.
slug: build/skills/commentary-form-design
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Route Form experience work to focused rendering or design skills.

**Use it when:** Use as a compatibility entry point when a task concerns a Commentary Form experience.

## Install

This skill is included in the [Commentary Forms plugin](../plugins/commentary-forms.md). Install the bundle for its related workflows, or install this skill on its own. [Copy the installation commands](#installation-options) at the end of this page.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-design` to classify this task: we need branded form UI, conditional questions, and a results chart. Route each part to the focused rendering, effective-form, or visualization skill and state which transport is needed.
```

**Expected result:** The agent identifies the focused skill or skills and required transport; it does not invent a separate Forms API or permission.

## Workflow

Clarify whether the need is contract authoring, renderer implementation, response design, results access, or visualization, then apply the corresponding focused skill and verify its boundaries.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-design/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. This is a compatibility router, not a separate Forms API or permission.

## Installation options

### Install just this skill with npx

With Node.js 22.20 or newer, run the release-pinned command and choose your supported agent and installation scope:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-design
```

The installer keeps the complete skill folder, including supporting references. It does not install the plugin’s MCP configuration. For agent selection and setup, see [the installer guide](../plugins.md#npx-skills-installer).

### Install with GitHub CLI

Use GitHub CLI 2.90.0 or newer to install the released skill for GitHub Copilot:

```bash
gh skill install commentary-dev/commentary-skills commentary-form-design@v0.6.2 --agent github-copilot
```

This is a project-local installation. For a cloud agent, review and commit the installed skill files to the target repository so its checkout includes them.

### Install the Commentary Forms plugin

In Claude Code:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-forms@commentary-skills
```

In a terminal for GitHub Copilot CLI:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-forms@commentary-skills
```

Marketplace installs follow the current repository branch. The [plugin guide](../plugins/commentary-forms.md#install-this-plugin) explains the included skills and the pinned v0.6.2 alternative. Microsoft Copilot Cowork supports the [released plugin ZIP](../plugins.md#microsoft-copilot-cowork).

### Manual installation and verification

For manual setup, download the [v0.6.2 source](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2) and copy the complete `skills/commentary-form-design/` folder into your agent’s documented skills directory. Preserve references and metadata rather than copying only `SKILL.md`.

Refresh the agent’s skill list or restart its session, confirm `commentary-form-design` is available, and try the [invocation above](#invoke). Complete the required [CLI](../cli.md), [MCP](../mcp.md), or [Developer access](../developer-access.md) setup separately. If the skill does not appear, check the selected agent and project/user scope; avoid installing a duplicate standalone copy when the plugin already provides it.
