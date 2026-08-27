# Commentary Docs

Commentary turns Markdown, MDX, static HTML, private local drafts, structured Forms, and interactive preview apps into readable review surfaces instead of raw diffs. It opens GitHub and Azure DevOps pull requests, branches, files, folders, repositories, draft review sessions, and review-hosted form sources in a document-first workspace, keeps rendered content at the center, and lets reviewers comment on paragraphs and semantic blocks instead of raw line numbers.

These docs are written for people using [commentary.dev](https://commentary.dev). They cover public read-only review, authenticated commenting, GitHub App access, Azure DevOps access, personal access token fallbacks, draft reviews, Brainstorming Reviews, Commentary Forms, Markdown extensions, static HTML review, Live Preview Reviews, Knowledge Brain review, workspace queues, developer access, the Commentary CLI, agent skills, API access, and MCP.

## Start Here

- New to Commentary: [Getting started](./docs/getting-started.md)
- Need the product model first: [Core concepts](./docs/core-concepts.md)
- Reviewing a pull request: [Review pull requests](./docs/review-pull-requests.md)
- Reviewing docs before a PR exists: [Review repository branches](./docs/review-repository-branches.md)
- Reviewing a local or agent-generated draft: [Draft reviews](./docs/draft-reviews.md)
- Refining a plan with consensus: [Brainstorming Reviews](./docs/brainstorming-reviews.md)
- Collecting structured answers: [Commentary Forms](./docs/commentary-forms.md)
- Reviewing a running app preview: [Live Preview Reviews](./docs/web-app-reviews.md)
- Tracking reviewed files and sections: [Review progress](./docs/review-progress.md)
- Managing repository queues: [Workspace](./docs/workspace.md)
- Managing preview workspace governance: [Enterprise governance](./docs/enterprise-governance.md)
- Using Azure DevOps: [Azure DevOps](./docs/azure-devops.md)
- Understanding review modes: [Review modes](./docs/review-modes.md)
- Markdown behavior: [Markdown rendering](./docs/markdown-rendering.md)
- Markdown extensions and docs previews: [Markdown extensions](./docs/markdown-extensions.md)
- Reviewing static HTML: [Static HTML review](./docs/static-html-review.md)
- Reviewing Knowledge Brain and OKF bundles: [Knowledge Brain](./docs/knowledge-brain.md)
- Connecting accounts: [Access and authentication](./docs/access-and-authentication.md)
- Creating API tokens and grants: [Developer access](./docs/developer-access.md)
- Using the terminal companion: [Commentary CLI](./docs/commentary-cli.md)
- Using agent workflows: [Agent skills](./docs/agent-skills.md)
- Using API or MCP clients: [API and MCP](./docs/api-and-mcp.md)
- Using stateless MCP Interactions: [MCP 2026 Interactions](./docs/mcp-interactions.md)
- API endpoint reference: [API reference](./docs/api/reference.md)
- Using the TypeScript transport client: [TypeScript Agent SDK](./docs/agent-sdk.md)
- MCP tool reference: [MCP tools](./docs/api/mcp-tools.md)
- Creating a GitHub fallback token: [Generate a GitHub PAT](./docs/generate-a-github-pat.md)
- Trying the sandbox: [Demo walkthrough](./docs/demo-walkthrough.md)
- Reading field notes: [Blog](./docs/blog.md)
- Hit a rough edge: [Troubleshooting and FAQ](./docs/troubleshooting-and-faq.md)

## Fast Paths

1. Open [/](https://commentary.dev/).
2. Paste a GitHub or Azure DevOps PR, branch, repository, file, or folder URL.
3. Click `Open review`.
4. Read in `Preview` and `Latest`.
5. Sign in when you want to comment, reply, submit a review, create or share drafts, create Live Preview Reviews, manage Forms, or use API/MCP access.

![Homepage review intake](./docs/assets/homepage-intake.png)

For a guided sample, open [/demo/select](https://commentary.dev/demo/select). For cross-repository work, sign in and open [/workspace](https://commentary.dev/workspace). For source-backed form results, open [/workspace/forms](https://commentary.dev/workspace/forms). For draft review before content exists in Git, open [/workspace/drafts/new](https://commentary.dev/workspace/drafts/new). For interactive preview apps, open [/workspace/web-app-reviews/new](https://commentary.dev/workspace/web-app-reviews/new).

## Current Product Shape

- Public GitHub PRs open without login for read-only review.
- Commenting, replies, review submission, private content, workspaces, draft reviews, Forms management, API tokens, and MCP access require authentication.
- GitHub App is the default GitHub connection for workspace discovery and private access. GitHub PAT remains the advanced fallback.
- Azure DevOps supports Microsoft Entra sign-in and PAT fallback.
- Pull request review supports `Preview`, `Raw`, `Latest`, `Diff`, docs preview, Present mode, all-change and commit-specific change sets, comments, live GitHub comment sync, refresh, and review submission.
- Direct document review supports branches, folders, Markdown, MDX, static HTML files, standalone Form Contract files, branch selectors, commit-specific diff context, and Commentary-only comments.
- Latest rendered Markdown supports H2-H6 heading folding, collapse-all URL state, folded comment counts, and copyable heading deep links.
- Draft reviews support pasted or uploaded Markdown, MDX, HTML, plain text, and Form Contract files before content exists in Git, with revisions, live updates, sharing, export, agent instructions, CLI workflows, API access, and MCP access.
- Brainstorming Reviews extend draft reviews with plan-of-record revisions, feedback signals, consensus rules, decision polls, and agent-ready accepted-change workflows.
- Commentary Forms collect structured answers from review-hosted YAML/JSON contracts, Markdown embeds, static HTML bindings, draft uploads, response links, custom renderer bridges, and API/MCP workflows.
- Live Preview Reviews load customer-owned deployed or localhost preview apps in your browser, use the opt-in Review SDK for element selection, support full page mode, and let deployed review owners create share links.
- Signed-in reviewers can track personal file and section progress, resume later, and filter by progress.
- Review comments can render safe Markdown, support long-form reading, sync eligible GitHub PR comments, and include poll comments when structured feedback is useful.
- Markdown rendering supports common docs-framework syntax, MDX safety fallbacks, wikilinks, embeds, Mermaid, slides, safe raw HTML, docs previews, repository-aware links, heading folding, and heading deep links.
- Knowledge Brain mode groups source, wiki, output, and control files, supports Open Knowledge Format review profiles, adds health and review context, and supports public reader pages for published public brains.
- The Interaction preview keeps proposals inside a human review and correction loop. A signed-in person can explicitly link an exact Interaction revision to the appropriate existing Document Review, Form workflow, Knowledge Brain review, or Live Preview Review; Commentary returns accepted content or requested corrections as a new immutable revision. Review approval accepts the reviewed artifact revision—it does not execute an external proposal.
- The public API lets agents create durable requests, retrieve human Decision receipts, append authorized self-reported Fulfillment for an exact approval fingerprint, and poll state. Agents cannot approve, and completion is never labeled verified without proof.

## In This Repo

This repository is also the public branch review example for Commentary's direct document review flow. The root `README.md` is the landing page for `/docs`, and the rest of the guides live in `docs/` with relative Markdown links between them.
