# API And MCP

Commentary exposes authenticated API and MCP access for tools that need to read document anchors, inspect comments, or create review feedback.

## Authentication Options

Clients can use:

- API tokens created by a signed-in Commentary user
- OAuth authorization code with PKCE
- OAuth device authorization for tools that cannot open a normal browser callback

The authorization metadata is available from:

- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`

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

Targets can be account-wide, repository-scoped, or review-scoped. GitHub targets use:

- `github:owner/repo`
- `github:owner/repo:pull:123`
- `github:owner/repo:branch:main`

## Scopes

Supported external scopes are:

- `commentary.review.read`
- `commentary.comments.read`
- `commentary.comments.write`
- `commentary.comments.status`
- `commentary.review.submit`

Read-only defaults include review and comments read access. MCP authorization defaults to review read, comments read, comments write, and comments status when no scopes are requested.

## Review Comment API

Use bearer tokens with these endpoints:

- `GET /api/v1/review/comments`
- `POST /api/v1/review/comments`
- `POST /api/v1/review/threads/{threadId}/comments`
- `POST /api/v1/review/threads/{threadId}/status`

The comment creation endpoint requires provider, owner, repository, file path, block anchor details, and comment body. A request must target a repository or review covered by the token.

## MCP Endpoint

The MCP endpoint is `/mcp`. It supports JSON-RPC initialization without auth, but tool listing and tool calls require bearer auth.

Available tools:

- `list_review_comments`
- `get_document_blocks`
- `create_comment`
- `reply_to_comment`
- `update_thread_status`

## Device Authorization

Device clients call `/oauth/device/code`, show the user code, and ask the reviewer to open `/device`. After approval, the client exchanges the device code at `/oauth/token`.

![Device and provider access use the same Commentary account model](./assets/auth-provider-dialog.png)
