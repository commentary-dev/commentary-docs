# Workspace

The workspace is the signed-in view for finding review work, managing source-backed Forms, creating drafts, and managing developer access across connected provider accounts.

![GitHub workspace overview](./assets/github-workspace-overview.png)

## What The Workspace Does

- shows active pull requests
- lists repositories in scope
- resumes recent review sessions from this browser
- shows provider access health
- opens PR review and branch review without copying URLs
- creates and resumes draft reviews
- creates and resumes Brainstorming Reviews
- lists source-backed Forms, response links, result-share links, submissions, exports, and destination status
- creates and resumes Live Preview Reviews
- manages API, OAuth, device-flow, and MCP grants
- supports CLI and agent workflows through developer access
- exposes Knowledge Brain-oriented review queues when available

GitHub workspace uses GitHub App installation scope. Azure DevOps workspace uses Microsoft Entra or Azure DevOps PAT access. Draft reviews, Forms records, Live Preview Reviews, and developer credentials are tied to the signed-in Commentary account.

## Main Sections

### Inbox

`/workspace/inbox` is the authenticated, workspace-scoped default for work that
needs attention. It combines authorized Review and product updates with durable
agent Interactions while leaving Resources and app-native review threads
authoritative. `/workspace` keeps its broader overview meaning. See
[Agent Inbox](./agent-inbox.md).

### Overview

Use `Overview` to scan recent PR work, continue recent reviews, jump into repositories in scope, and resume draft reviews.

### Pull requests

Use `Pull requests` when you need a queue of active PRs. You can search by repository, PR title, branch, or author details shown by the provider.

### Repositories

Use `Repositories` to open branch review directly or narrow the PR queue to one repository.

### Draft reviews

Use `New review` or the draft review list when you need document-style feedback before a branch or pull request exists. Draft reviews can be created from pasted Markdown, HTML, MDX, plain text, Form Contract files, or uploaded text files. See [Draft reviews](./draft-reviews.md).

Use Brainstorming Reviews when collaborators need to discuss options, signal agreement or blockers, and let agents apply accepted changes. See [Brainstorming Reviews](./brainstorming-reviews.md).

### Forms

Use `Forms` for source-backed form collections the current user can manage or has discovered from review surfaces. The Forms workspace can show source links, response links, result-share links, submissions, exports, diagnostics, and destination status.

Form authoring stays in PR, branch, draft, Markdown, HTML, MDX, standalone YAML/JSON, or dedicated fillout source artifacts instead of a standalone workspace editor. See [Commentary Forms](./commentary-forms.md).

### Live Preview Reviews

Use `Live Preview Reviews` for customer-owned deployed or localhost app previews. The reviewed app loads in your browser, connects through the opt-in Review SDK, and lets reviewers leave comments on selected UI elements. Deployed reviews can be shared by owner-created links; localhost reviews cannot be shared. See [Live Preview Reviews](./web-app-reviews.md).

### Agent review

Use `Agent review` when it is available to scan likely agent-maintained Knowledge Brain pull requests, unresolved review notes, and requested-revision follow-up work.

### Access

Use `Access` to inspect connected installations, organizations, repository reachability, and provider permission state.

### Developer access

Use `Developer access` to create API tokens, inspect OAuth/device-flow grants, choose standard or custom scopes, and revoke credentials used by API clients, MCP clients, the [Commentary CLI](./commentary-cli.md), and agents. See [Developer access](./developer-access.md).

## GitHub Workspace

GitHub workspace depends on GitHub App installation. If a repository is missing, install Commentary for that repository, switch account, or use a PAT fallback when your organization requires token access.

## Azure DevOps Workspace

Azure DevOps workspace follows the organization, project, repository, and pull request hierarchy. Use the organization selector when your account can access more than one organization.

![Azure DevOps workspace overview](./assets/ado-workspace-overview.png)

## Opening A Review

Use `Open review` in the workspace header to paste a URL without returning to the homepage. Repository rows also include shortcuts for branch review and PR queues.

For draft work, create a [Draft review](./draft-reviews.md). For structured answers, open [Commentary Forms](./commentary-forms.md). For Knowledge Brain work, open a Brain branch or PR in the review shell and use Brain mode to group source, wiki, output, and control files. See [Knowledge Brain](./knowledge-brain.md).
