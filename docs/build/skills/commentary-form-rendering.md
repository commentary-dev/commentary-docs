---
title: Render a Commentary Form
description: Implement Commentary Form renderers, bindings, and SDK bridges.
slug: build/skills/commentary-form-rendering
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

**Purpose:** Implement Commentary Form renderers, bindings, and SDK bridges.

**Use it when:** Use when adding a native, static HTML, or custom Live Preview Form rendering path.

## Install

This skill is included in the [Commentary Forms plugin](../plugins/commentary-forms.md). Install the bundle for its related workflows, or install this skill on its own. [Copy the installation commands](#installation-options) at the end of this page.

## Invoke

Copy this request into a compatible agent:

```text
Use `commentary-form-rendering` to add a customer-owned form renderer inside our existing Live Preview Review. Use the published Forms SDK bridge, preserve the Form Contract version, and return server validation errors to the participant.
```

**Expected result:** The agent returns renderer code and a test flow for the nonce/origin-bound bridge; no credential is included in the renderer.

## Workflow

Choose native rendering, sanitized HTML bindings, or the Forms SDK bridge; preserve the contract id/version, submit structured values, and surface server validation diagnostics.

## Environment and limits

Read the published v0.6.2 [SKILL.md](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/skills/commentary-form-rendering/SKILL.md) and its referenced files for the exact transport, scopes, target, and environment settings; those instructions are authoritative for this skill. For transport setup, see [CLI](../cli.md), [MCP](../mcp.md), and [Developer access](../developer-access.md). Never store credentials in the skill folder or send them to a renderer. Custom rendering requires an existing authorized Live Preview Review and the nonce-bound origin-aware bridge. Do not fetch renderer URLs server-side or execute renderer code inside Commentary.

## Installation options

### Install just this skill with npx

With Node.js 22.20 or newer, run the release-pinned command and choose your supported agent and installation scope:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-form-rendering
```

The installer keeps the complete skill folder, including supporting references. It does not install the plugin’s MCP configuration. For agent selection and setup, see [the installer guide](../plugins.md#npx-skills-installer).

### Install with GitHub CLI

Use GitHub CLI 2.90.0 or newer to install the released skill for GitHub Copilot:

```bash
gh skill install commentary-dev/commentary-skills commentary-form-rendering@v0.6.2 --agent github-copilot
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

For manual setup, download the [v0.6.2 source](https://github.com/commentary-dev/commentary-skills/tree/v0.6.2) and copy the complete `skills/commentary-form-rendering/` folder into your agent’s documented skills directory. Preserve references and metadata rather than copying only `SKILL.md`.

Refresh the agent’s skill list or restart its session, confirm `commentary-form-rendering` is available, and try the [invocation above](#invoke). Complete the required [CLI](../cli.md), [MCP](../mcp.md), or [Developer access](../developer-access.md) setup separately. If the skill does not appear, check the selected agent and project/user scope; avoid installing a duplicate standalone copy when the plugin already provides it.
