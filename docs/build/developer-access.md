---
title: Developer access and API tokens
description: Create scoped Commentary credentials for API, MCP, CLI, or agent work and revoke them when access should end.
slug: build/developer-access
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 3
---


Developer access is an account setting for credentials that call Commentary. Open **Settings → Developer access** after signing in. Credentials belong to your account; selecting a workspace does not change their reach.

## Issue a credential

1. Choose **Create token** and give it a recognizable label.
2. Select the narrowest target: account-owned work, one Draft Review, or one GitHub repository/review.
3. Select the smallest capability preset or custom scopes needed for the client.
4. Choose an expiry and inspect the credential target and capabilities.
5. Issue the credential and copy its secret immediately. Later views show only a hint.

Scopes cannot be changed after issue. To change access, create a replacement token and revoke the previous grant. If a successful issue response was lost, retrying does not reveal the secret; rotate or create a replacement deliberately.

## Common scopes and targets

Common presets include Read reviews and comments, Standard API and MCP, Draft review automation, Draft review deletion, Review and submit, and Brain evaluations. Custom scopes are available for precise integrations. Review scopes include `commentary.review.read`, `commentary.comments.read`, `commentary.comments.write`, `commentary.comments.status`, and `commentary.review.submit`. Forms, Research, Interactions, webhooks, Projects, Trackers, and evidence have distinct scopes; consult the [API reference](../reference/api.md) before granting them.

Example target forms include `github:owner/repo`, `github:owner/repo:pull:123`, `github:owner/repo:branch:main`, and `draft:<sessionId>`. Review-scoped tokens can access embedded Forms only when the request's source context identifies the covered review.

## Use and revoke safely

Send tokens as bearer credentials over HTTPS or use `COMMENTARY_TOKEN` for CLI automation. Do not embed long-lived tokens in a public browser bundle, commit them, or send them to a custom renderer. OAuth and device-flow grants can also be revoked from Developer access.

Workspace access, registered agent grants, provider authorization, and repository permissions are separate checks. A token target cannot override any of them. See [API overview](../reference/api.md), [MCP setup](mcp.md), and [CLI setup](cli-draft-reviews.md).
