# Access And Authentication

Commentary keeps public reading easy and asks for authentication when a workflow needs provider access, write permission, private draft access, or developer credentials.

![Sign-in provider dialog](./assets/auth-provider-dialog.png)

## Provider Sign-In

Use the normal sign-in paths first:

- `Continue with GitHub` for GitHub App access, workspace discovery, private repositories, comments, PR review submission, draft reviews, and API/MCP credentials.
- `Continue with Azure DevOps` for Microsoft Entra access to Azure DevOps organizations, projects, repositories, and pull requests.

## Account And Installation Recovery

GitHub workspace discovery depends on GitHub App installation scope. If Commentary cannot access a repository, the recovery surface may offer:

- install Commentary for the repository
- switch account
- add another GitHub account
- use a PAT fallback

Azure DevOps recovery depends on the active Microsoft account, granted scopes, organization access, and optional review-decision consent.

## PAT Fallbacks

Use a personal access token only when the normal provider sign-in path is unavailable or blocked by organization policy.

PAT is useful when:

- OAuth or app installation is blocked
- you need explicit token-scoped access
- you are working in a locked-down environment

For GitHub token setup, see [Generate a GitHub PAT](./generate-a-github-pat.md). For Azure DevOps, use the Azure DevOps PAT option in the sign-in dialog and keep the token scoped to the repositories you need.

## Public vs Private Access

### Public GitHub pull requests

- can open without login
- stay read-only until you authenticate
- may show a rate-limit message if anonymous GitHub API access is exhausted

### Private repositories and workspaces

- require provider access
- may look unavailable until you sign in with an account that can reach the repository
- may require GitHub App installation or Azure DevOps organization permission

### Draft reviews

- require sign-in to create
- are private to Commentary unless shared by the owner
- require sign-in to claim or open a shared link
- do not grant provider repository write access

## API And MCP Access

API tokens, OAuth grants, device authorization, and MCP access require an authenticated Commentary session. Manage credentials in [Developer access](./developer-access.md), then use the endpoints and tools documented in [API and MCP](./api-and-mcp.md).
