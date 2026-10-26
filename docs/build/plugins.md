---
title: Commentary plugins
description: Choose an Inbox, Review, Forms, or Research plugin and install its skills with Claude Code, GitHub Copilot, npx, or Cowork.
slug: build/plugins
section: build
contentType: guide
published: true
updated: 2026-10-26
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

A plugin bundles related skills for a complete kind of work. Choose one by the outcome you need, then use its individual skills as the work moves from planning to execution and feedback. Commentary’s plugin packages also include an MCP server definition; you still authorize the connection yourself.

A **skill** is a portable folder containing instructions and supporting files for one task. A **plugin** packages several skills for a host’s installer. The **commentary-skills marketplace** is the catalog from which that host discovers plugins. You can use either a whole plugin or individual skills.

## Choose a plugin

These four bundles and their 21 skills are verified against [Commentary Skills v0.6.2](https://github.com/commentary-dev/commentary-skills/releases/tag/v0.6.2).

| Plugin | When to choose it | Outcome |
| --- | --- | --- |
| [Inbox](plugins/commentary-inbox.md) | An agent needs a human answer or exact approval to continue. | A durable request, decision, revision, and follow-up instead of a lost chat handoff. |
| [Review](plugins/commentary-review.md) | People need to critique a plan, document, pull request, or running web app. | Feedback connected to an artifact and a clear revision loop. |
| [Forms](plugins/commentary-forms.md) | You need structured feedback from design through analysis. | Clear questions, a source-backed Form, and useful results explanations. |
| [Research](plugins/commentary-research.md) | You need evidence to inform a product decision. | A credible study plan and authorized participation in an existing study. |

For example, start with Review to refine a proposal, use Inbox to request its exact approval, and use Forms or Research to gather evidence when the decision needs user input. Install only the bundles relevant to your work. The [individual skill catalog](agent-skills.md#pick-a-task-specific-skill) remains available when you know the task you need.

## Choose an installation method

| Your environment | Recommended path | What gets installed |
| --- | --- | --- |
| Claude Code | [Plugin marketplace](#claude-code) | A skill bundle and MCP configuration. |
| GitHub Copilot CLI | [Plugin marketplace](#github-copilot-cli) | A skill bundle and MCP configuration. |
| A supported local agent | [npx skills installer](#npx-skills-installer) | Selected standalone skill folders. |
| GitHub Copilot repository/cloud workflow | [GitHub CLI](#github-cli-for-individual-skills) | Skill folders in the target project. |
| Microsoft Copilot Cowork | [Released ZIP upload](#microsoft-copilot-cowork) | A converted plugin with skills and its MCP connector. |

### Claude Code

Inside Claude Code, add the marketplace once, then install the bundle you want. This example installs Review:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-review@commentary-skills
```

Replace `commentary-review` with `commentary-inbox`, `commentary-forms`, or `commentary-research` for another bundle. Enable the plugin in your session and complete its Commentary connection flow. See [Claude Code’s plugin guide](https://code.claude.com/docs/en/discover-plugins).

### GitHub Copilot CLI

In your terminal, register the same marketplace and install the chosen bundle:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-review@commentary-skills
```

The other bundle names work in the same command. See [GitHub’s plugin installation guide](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing).

**Version choice:** These short marketplace commands follow the repository’s current default branch. The skill breakdown on this site describes v0.6.2. Use the pinned npx or GitHub CLI commands below, or the versioned Cowork ZIPs, when you need that exact release.

### npx skills installer

Install [Vercel’s Skills CLI](https://github.com/vercel-labs/skills) through npx with Node.js 22.20 or newer. Run this from the project in which you want the skill:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-draft-review
```

Follow the prompts to select a supported agent and project or user scope. This GitHub tree URL pins the **skill content** to v0.6.2. Replace the final folder name to install another skill; every skill page has its own ready-to-copy command.

You can select an agent explicitly, for example:

```bash
npx skills add https://github.com/commentary-dev/commentary-skills/tree/v0.6.2/skills/commentary-draft-review -a github-copilot
```

Use `-g` for user-wide installation when that is what you intend. Check the [supported agent list](https://github.com/vercel-labs/skills/blob/main/docs/agents.md) for your tool and the [installer options](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) for other choices. This route installs portable skill folders; it does not register a native plugin or configure MCP.

### GitHub CLI for individual skills

With GitHub CLI 2.90.0 or newer, install a pinned skill directly:

```bash
gh skill install commentary-dev/commentary-skills commentary-draft-review@v0.6.2 --agent github-copilot
```

The default scope is the current project. For GitHub Copilot cloud work, review and commit the installed files to the repository the agent will check out. A local installation alone does not change a cloud checkout. See [gh skill install](https://cli.github.com/manual/gh_skill_install) for preview, scope, and other supported agent options.

### Microsoft Copilot Cowork

Download one of the published v0.6.2 plugin packages:

- [Commentary Inbox ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-inbox-cowork.zip)
- [Commentary Review ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-review-cowork.zip)
- [Commentary Forms ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-forms-cowork.zip)
- [Commentary Research ZIP](https://github.com/commentary-dev/commentary-skills/releases/download/v0.6.2/commentary-research-cowork.zip)

1. In Cowork, open **Customize → Plugins → Upload plugin** and select the ZIP without extracting it.
2. Choose the intended sharing scope. Start with **Only you** for a private setup.
3. Enable the plugin in **Sources & Skills** and complete the Commentary connection flow.
4. Confirm the plugin’s skills and connector are available before starting work.

Your organization must permit uploads and sharing. These packages are direct uploads, not Microsoft 365 marketplace listings. For checksums, updates, and host-specific limitations, see the [release installation guide](https://github.com/commentary-dev/commentary-skills/blob/v0.6.2/docs/copilot-cowork.md). Local CLI and localhost workflows also require an environment that can reach those resources.

## Verify the installation

1. Refresh the host’s skill list or start a new session. Confirm the plugin or individual skill appears in the selected scope.
2. Follow [MCP setup](mcp.md) or [CLI authentication](cli.md) for the workflow you chose. A bundled server definition is not an access grant.
3. Open an individual skill page and try its invocation against an artifact or workspace you are authorized to use.
4. Check that the agent reports the expected target and result before authorizing writes or sharing.

If a command is unavailable, check your host version and plugin support; the npx path is an alternative for supported skill-based agents. If the skill is missing, check project versus user scope and restart discovery. If Commentary access fails, inspect the connection and target permissions rather than reinstalling the skill. Avoid duplicate copies of the same skill from both a plugin and a standalone installation.

## Next steps

- [Browse all 21 individual skills](agent-skills.md#pick-a-task-specific-skill)
- [Reach a human decision](../workflows/reach-a-human-decision.md)
- [Set up developer access](developer-access.md)
