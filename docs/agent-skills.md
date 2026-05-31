# Agent Skills

Commentary publishes portable agent skills for review workflows.

Project: [commentary-dev/commentary-skills](https://github.com/commentary-dev/commentary-skills)

## Available Skills

- `commentary-draft-review`: use the Commentary CLI for live collaborative review of local Markdown, MDX, static HTML, and plain text artifacts.
- `commentary-brainstorm-review`: apply accepted consensus changes from Commentary Brainstorming Reviews through MCP-only or local file-backed workflows.

## When To Use Them

Use `commentary-draft-review` when an agent is creating or editing a local text artifact and a human should review it in Commentary before the work is committed.

Use `commentary-brainstorm-review` when a Commentary review is in Brainstorming mode and the agent should apply only accepted consensus changes.

The skills keep the same product boundaries as Commentary:

- use Commentary for review transport, comments, revisions, sharing, and consensus state
- keep local files as the editing surface for file-backed workflows
- use MCP only when the review is remote-only and the connected MCP tools expose the needed operations
- do not create Git branches, commits, pull requests, or provider reviews unless the user separately asks for that Git work
- do not store tokens, private review URLs, reviewer identities, or access grants in repository files

## Install Options

Skill-compatible agents can use the skill folders from the public repository.

GitHub Copilot cloud agent users can install the skills with GitHub CLI 2.90.0 or later:

```bash
gh skill preview commentary-dev/commentary-skills commentary-draft-review
gh skill install commentary-dev/commentary-skills commentary-draft-review
gh skill preview commentary-dev/commentary-skills commentary-brainstorm-review
gh skill install commentary-dev/commentary-skills commentary-brainstorm-review
```

GitHub Copilot CLI users can install the `commentary-review` plugin from the repository marketplace:

```bash
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-review@commentary-skills
```

Claude Code users can add the repository as a plugin marketplace and install the `commentary-review` plugin:

```text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-review@commentary-skills
```

See [Commentary CLI](./commentary-cli.md), [Draft reviews](./draft-reviews.md), and [Brainstorming Reviews](./brainstorming-reviews.md).
