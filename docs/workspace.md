# Workspace

The workspace is the signed-in view for finding review work across connected provider accounts.

![GitHub workspace overview](./assets/github-workspace-overview.png)

## What The Workspace Does

- shows active pull requests
- lists repositories in scope
- resumes recent review sessions from this browser
- shows provider access health
- opens PR review and branch review without copying URLs

GitHub workspace uses GitHub App installation scope. Azure DevOps workspace uses Microsoft Entra or Azure DevOps PAT access.

## Main Sections

### Overview

Use `Overview` to scan recent PR work, continue recent reviews, and jump into repositories in scope.

### Pull requests

Use `Pull requests` when you need a queue of active PRs. You can search by repository, PR title, branch, or author details shown by the provider.

### Repositories

Use `Repositories` to open branch review directly or narrow the PR queue to one repository.

### Access

Use `Access` to inspect connected installations, organizations, repository reachability, and provider permission state.

## GitHub Workspace

GitHub workspace depends on GitHub App installation. If a repository is missing, install Commentary for that repository, switch account, or use a PAT fallback when your organization requires token access.

## Azure DevOps Workspace

Azure DevOps workspace follows the organization, project, repository, and pull request hierarchy. Use the organization selector when your account can access more than one organization.

![Azure DevOps workspace overview](./assets/ado-workspace-overview.png)

## Opening A Review

Use `Open review` in the workspace header to paste a URL without returning to the homepage. Repository rows also include shortcuts for branch review and PR queues.
