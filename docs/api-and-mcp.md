# API And MCP

Commentary exposes authenticated API and MCP access for tools that need to read document anchors, inspect comments, create review feedback, manage draft reviews, or inspect Knowledge Brain review state.

## Authentication Options

Clients can use:

- API tokens created by a signed-in Commentary user
- OAuth authorization code with PKCE
- OAuth device authorization for tools that cannot open a normal browser callback

The authorization metadata is available from:

- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`

Manage human-created tokens and active grants from [Developer access](./developer-access.md).

## OpenAPI Contract

The public HTTP contract is available at:

- `/openapi.json`
- `/openapi.yaml`

The generated reference committed with these docs is [API reference](./api/reference.md). Browser, internal, webhook, and test routes are intentionally outside the public contract.

## API Tokens

Use `/api/v1/tokens` while signed in:

- `GET /api/v1/tokens` lists active and revoked API tokens for the current provider connection.
- `POST /api/v1/tokens` creates a token.
- `DELETE /api/v1/tokens/{tokenId}` revokes a token.

Token creation accepts:

- `label`
- `scopes`
- `target`
- `expiresAt`

Targets can be account-wide, repository-scoped, review-scoped, or draft-scoped. Common target formats are:

- `github:owner/repo`
- `github:owner/repo:pull:123`
- `github:owner/repo:branch:main`
- `draft:{sessionId}`

## Scopes

Supported external scopes are:

- `commentary.review.read`
- `commentary.comments.read`
- `commentary.comments.write`
- `commentary.comments.status`
- `commentary.draft_reviews.delete`
- `commentary.draft_reviews.share`
- `commentary.review.submit`
- `commentary.brain.evals.read`
- `commentary.brain.evals.write`

Read-only defaults include review and comments read access. MCP authorization defaults to review read, comments read, comments write, and comments status when no scopes are requested.

## Review Comment API

Use bearer tokens with these endpoints:

- `GET /api/v1/review/comments`
- `POST /api/v1/review/comments`
- `POST /api/v1/review/threads/{threadId}/comments`
- `POST /api/v1/review/threads/{threadId}/status`

The comment creation endpoint requires provider, owner, repository, file path, block anchor details, and comment body. A request must target a repository or review covered by the token.

## Draft Review API

Draft review endpoints support agent and CLI workflows before a file is in Git:

- `GET /api/v1/draft-reviews`
- `POST /api/v1/draft-reviews`
- `GET /api/v1/draft-reviews/{sessionId}`
- `PATCH /api/v1/draft-reviews/{sessionId}`
- `DELETE /api/v1/draft-reviews/{sessionId}`
- `GET /api/v1/draft-reviews/{sessionId}/files`
- `GET /api/v1/draft-reviews/{sessionId}/files/{fileId}/content`
- `GET /api/v1/draft-reviews/{sessionId}/revisions`
- `POST /api/v1/draft-reviews/{sessionId}/revisions`
- `GET /api/v1/draft-reviews/{sessionId}/comments`
- `POST /api/v1/draft-reviews/{sessionId}/comments`
- `POST /api/v1/draft-reviews/{sessionId}/comments/{threadId}/replies`
- `POST /api/v1/draft-reviews/{sessionId}/comments/{threadId}/status`
- `GET /api/v1/draft-reviews/{sessionId}/events`
- `GET /api/v1/draft-reviews/{sessionId}/shares`
- `POST /api/v1/draft-reviews/{sessionId}/shares`
- `DELETE /api/v1/draft-reviews/{sessionId}/shares/{shareLinkId}`
- `DELETE /api/v1/draft-reviews/{sessionId}/access/{accessGrantId}`

Create and revision payloads contain literal UTF-8 content. Commentary does not read local paths or fetch arbitrary URLs on a client's behalf.

## Knowledge Brain API

Knowledge Brain agent workflows use bearer tokens with repository or review targets. Available endpoints include:

- `GET /api/v1/brain/reviews`
- `GET /api/v1/brain/review/changed-files`
- `GET /api/v1/brain/review/comments`
- `GET /api/v1/brain/review/health-findings`
- `GET /api/v1/brain/review/requested-revisions`
- `POST /api/v1/brain/review/ready`
- `GET /api/v1/brain/review/evaluations`
- `POST /api/v1/brain/review/evaluations`
- `PATCH /api/v1/brain/review/evaluations`

Read operations require review read scope and a token target that covers the repository, branch, or PR. Evaluation writes require `commentary.brain.evals.write`. Ready-for-review replies require comment write scope.

## MCP Endpoint

The MCP endpoint is `/mcp`. It supports JSON-RPC initialization without auth, but tool listing and tool calls require bearer auth.

Current consolidated tools are:

- `draft_review`
- `review_comments`
- `review_document`
- `brain_review`

See [MCP tools](./api/mcp-tools.md) for generated input schemas. Older one-off draft or comment tools are replaced by these consolidated tools.

## Device Authorization

Device clients call `/oauth/device/code`, show the user code, and ask the reviewer to open `/device`. After approval, the client exchanges the device code at `/oauth/token`.

![Device and provider access use the same Commentary account model](./assets/auth-provider-dialog.png)
