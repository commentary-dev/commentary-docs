# Getting Started

Use Commentary when you want to review Markdown, MDX, static HTML, or draft text as a readable document instead of parsing changed lines.

## Fastest First Run

1. Open [/](https://commentary.dev/).
2. Paste a GitHub or Azure DevOps URL.
3. Click `Open review`.
4. Start in `Preview` and `Latest`.
5. Sign in only when you need to comment, reply, refresh private content, submit a review, create a draft review, or use developer access.

Commentary accepts pull request, repository, branch, file, and folder URLs. It resolves the URL to the matching review surface for Markdown, MDX, and static `.html` or `.htm` documents.

![Homepage review intake](./assets/homepage-intake.png)

## What Works Before You Sign In

- Public GitHub pull requests can open read-only.
- You can read rendered Markdown, inspect raw Markdown, and move through files when public data is available.
- You can review static HTML previews when public HTML files are available.
- Commentary keeps the document centered so prose reads like a spec, ADR, README, or rollout plan.

## When You Need An Account

Sign in when you want to:

- add a new thread
- reply to a thread
- resolve or reopen a thread
- submit a pull request review
- open private repositories
- create or share draft reviews
- create or share Brainstorming Reviews
- use the GitHub or Azure DevOps workspace
- create API tokens, use the Commentary CLI, connect an MCP client, or authorize an agent

GitHub App is the default GitHub path. Azure DevOps uses Microsoft Entra by default. PAT options remain available for restricted environments.

![Sign-in provider dialog](./assets/auth-provider-dialog.png)

## Two Good Ways To Explore

- Want a safe sandbox: open [/demo](https://commentary.dev/demo) and follow [Demo walkthrough](./demo-walkthrough.md).
- Want to review docs before a PR exists: paste a repository, branch, file, or folder URL and read [Review repository branches](./review-repository-branches.md).
- Want to review a local or agent-generated draft before it is in Git: open [Draft reviews](./draft-reviews.md).
- Want a group to converge on a plan before implementation: read [Brainstorming Reviews](./brainstorming-reviews.md).
- Want to create or sync draft reviews from a terminal: read [Commentary CLI](./commentary-cli.md).
- Want an agent to participate in the review loop: read [Agent skills](./agent-skills.md).
- Want to track what you have already reviewed: read [Review progress](./review-progress.md).
- Want to review generated docs or site content: read [Markdown extensions](./markdown-extensions.md) and [Static HTML review](./static-html-review.md).
- Want to review AI-maintained knowledge bases: read [Knowledge Brain](./knowledge-brain.md).

For team queue work, open the [Workspace](./workspace.md) after signing in.
