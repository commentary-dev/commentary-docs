# Commentary Docs

Commentary helps teams review Markdown and static HTML like documents instead of diffs. It opens GitHub and Azure DevOps pull requests, branches, files, folders, and repositories in a reading-first workspace, keeps rendered documents at the center, and lets reviewers comment on paragraphs and semantic blocks instead of raw line numbers.

These docs are written for people using [commentary.dev](https://commentary.dev). They cover public read-only review, authenticated commenting, GitHub App access, Azure DevOps access, personal access token fallbacks, Markdown extensions, static HTML review, Knowledge Brain review, the workspace, API access, and MCP.

## Start Here

- New to Commentary: [Getting started](./docs/getting-started.md)
- Need the product model first: [Core concepts](./docs/core-concepts.md)
- Reviewing a pull request: [Review pull requests](./docs/review-pull-requests.md)
- Reviewing docs before a PR exists: [Review repository branches](./docs/review-repository-branches.md)
- Managing repository queues: [Workspace](./docs/workspace.md)
- Using Azure DevOps: [Azure DevOps](./docs/azure-devops.md)
- Understanding review modes: [Review modes](./docs/review-modes.md)
- Markdown behavior: [Markdown rendering](./docs/markdown-rendering.md)
- Markdown extensions and docs previews: [Markdown extensions](./docs/markdown-extensions.md)
- Reviewing static HTML: [Static HTML review](./docs/static-html-review.md)
- Reviewing Knowledge Brain branches: [Knowledge Brain](./docs/knowledge-brain.md)
- Connecting accounts: [Access and authentication](./docs/access-and-authentication.md)
- Using API or MCP clients: [API and MCP](./docs/api-and-mcp.md)
- Creating a GitHub fallback token: [Generate a GitHub PAT](./docs/generate-a-github-pat.md)
- Trying the sandbox: [Demo walkthrough](./docs/demo-walkthrough.md)
- Hit a rough edge: [Troubleshooting and FAQ](./docs/troubleshooting-and-faq.md)

## Fast Paths

1. Open [/](https://commentary.dev/).
2. Paste a GitHub or Azure DevOps PR, branch, repository, file, or folder URL.
3. Click `Open review`.
4. Read in `Preview` and `Latest`.
5. Sign in when you want to comment, reply, refresh private content, or submit a review.

![Homepage review intake](./docs/assets/homepage-intake.png)

For a guided sample, open [/demo](https://commentary.dev/demo). For cross-repository work, sign in and open [/workspace](https://commentary.dev/workspace).

## Current Product Shape

- Public GitHub PRs open without login for read-only review.
- Commenting, replies, review submission, private content, workspaces, API tokens, and MCP access require authentication.
- GitHub App is the default GitHub connection for workspace discovery and private access. GitHub PAT remains the advanced fallback.
- Azure DevOps supports Microsoft Entra sign-in and PAT fallback.
- Pull request review supports `Preview`, `Raw`, `Latest`, `Diff`, docs preview, Present mode, all-change and commit-specific change sets, comments, refresh, and review submission.
- Direct document review supports branches, folders, Markdown and static HTML files, branch selectors, commit-specific diff context, and Commentary-only comments.
- Markdown rendering supports common docs-framework syntax, MDX safety fallbacks, wikilinks, embeds, Mermaid, slides, docs previews, and repository-aware links.
- Knowledge Brain mode groups source, wiki, output, and control files, adds health and review context, and supports public reader pages for published public brains.
- The public API and MCP endpoint let approved clients read anchors and comments, create comments, reply, update thread status, and inspect Knowledge Brain review state.

## In This Repo

This repository is also the public branch review example for Commentary's direct document review flow. The root `README.md` is the landing page for `/docs`, and the rest of the guides live in `docs/` with relative Markdown links between them.
