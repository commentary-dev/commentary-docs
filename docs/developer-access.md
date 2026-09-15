# Developer Access

Developer access is the signed-in account settings area for managing Commentary credentials used by scripts, API clients, MCP clients, CLIs, and agents.

Open [/settings/developer](https://commentary.dev/settings/developer) after signing in.

Credentials belong to your connected account. Selecting a workspace does not change their access. Workspace Developer settings contain integrations such as webhooks; they link back here for account credentials. The older `/workspace/developer` link redirects here.

## What You Can Manage

Developer access shows and manages:

- API tokens created by the signed-in account
- OAuth authorization grants
- OAuth device-flow grants used by terminal and MCP clients
- active, expired, and revoked grant state

New API tokens are shown once. Copy the token before leaving the page. Later lists only show the token hint.

## Create An API Token

1. Open account **Developer access** and choose **Create token**.
2. Enter a label.
3. Choose a Target: **Account-owned Commentary work**, **One draft review**, or **One GitHub repository or review**.
4. Choose the **Capabilities** preset or **Custom scopes** and an expiry.
5. Choose **Review credential** and inspect the target and capabilities.
6. Choose **Issue credential** and copy the one-time secret.

If issuing fails, **Retry same issue** checks the same operation. A successful replay does not reveal the secret again. Use deliberate rotation if the secret was lost.

Scopes are immutable after creation. To change access, create a replacement token and revoke the old grant.

## Scope Presets

Developer access offers common presets:

- `Read reviews and comments` for tools that inspect review sessions and comments.
- `Standard API and MCP` for trusted clients that need the full supported Commentary automation surface.
- `Draft review automation` for API, MCP, and CLI draft-review workflows.
- `Draft review deletion` for trusted cleanup tools.
- `Review and submit` for trusted tools that can submit provider review decisions.
- `Brain evaluations` for agents that submit or read Knowledge Brain evaluations.
- `Custom scopes` for selecting individual scopes.

Brainstorming Review automation uses the same review and comment scopes as draft-review automation, plus Brainstorming feature access when the operation reads or updates consensus state.

Forms automation uses `commentary.forms.read`, `commentary.forms.write`, `commentary.forms.submit`, and `commentary.forms.writeback`. Live Preview Review sharing uses `commentary.review.share`.

Interaction preview clients choose only the required
`commentary.interactions.create`, `.read`, `.update`, and `.cancel`
scopes. Creation requires an account-wide target because initial requests are
addressed only to the credential owner in their personal workspace.

The generated token stores the concrete scope names, such as `commentary.review.read`, `commentary.comments.write`, `commentary.forms.submit`, or `commentary.draft_reviews.share`.

## Available External Scopes

Current public scopes are:

- `commentary.review.read`
- `commentary.comments.read`
- `commentary.comments.write`
- `commentary.comments.status`
- `commentary.review.share`
- `commentary.draft_reviews.delete`
- `commentary.draft_reviews.share`
- `commentary.review.submit`
- `commentary.forms.read`
- `commentary.forms.write`
- `commentary.forms.submit`
- `commentary.forms.writeback`
- `commentary.brain.evals.read`
- `commentary.brain.evals.write`
- `commentary.interactions.create`
- `commentary.interactions.read`
- `commentary.interactions.update`
- `commentary.interactions.cancel`
- `commentary.interactions.fulfillment`
- `commentary.research.read`
- `commentary.research.write`
- `commentary.webhooks.read`
- `commentary.webhooks.write`

Use the smallest scope set that covers the client workflow.

## Targets

Targets limit where a token can operate.

Common target formats are:

- account-wide: leave the target blank
- repository: `github:owner/repo`
- pull request: `github:owner/repo:pull:123`
- branch: `github:owner/repo:branch:main`
- draft review: `draft:{sessionId}`

Use account-wide targets for Live Preview Review automation, owned draft-review automation, and owned Forms result management. Use draft targets when an agent should only access one draft or Brainstorming Review. Use GitHub targets when a token should stay limited to one repository, branch, or pull request. Review-scoped tokens can read or submit embedded Forms only when their `sourceContext` identifies the covered review.

## MCP And Device Flow

MCP clients can use the `/mcp` endpoint with bearer authentication. Device-flow clients start at `/oauth/device/code`, show the user code, ask the reviewer to open `/device`, and exchange the approved device code at `/oauth/token`.

The developer access page lists device-flow and OAuth grants so they can be revoked from the same place as API tokens.

The [Commentary CLI](./commentary-cli.md) can authenticate through device flow with `commentary login` or through an API token with `commentary login --token <token>`.

See [Agent skills](./agent-skills.md) for agent workflows that use the CLI or MCP.

## Rotate Or Replace

Use **Rotate** on an active API token to replace its secret immediately while preserving target, capabilities, and expiry. Update the client with the new one-time secret; the old one stops working. To change target or capabilities, create a replacement credential and revoke the old grant. OAuth/device-flow grants are managed as grants rather than rotated as API-token secrets.

Research scopes cover authorized study reads and permitted agent participation, not owner-only study authoring. Webhook scopes still require workspace owner/admin permission. Fulfillment uses its separate scope and the exact human-approved fingerprint.

## Revoking Access

Use `Revoke` on an active grant when a token or client should stop working. Revocation affects API, OAuth, and MCP use immediately for that grant.

See [API and MCP](./api-and-mcp.md) for endpoint details.
