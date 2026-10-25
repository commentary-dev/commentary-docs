---
title: Create a GitHub personal access token
description: Use a narrowly scoped GitHub token only when the default GitHub App sign-in route cannot work.
slug: start/github-pat
section: start
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 3
---


A GitHub App connection is the normal path. Use a PAT only for a restricted environment or recovery case where OAuth cannot be completed.

## Create and connect a token

1. In GitHub, open **Settings → Developer settings → Personal access tokens**.
2. Choose the token type supported by your organization policy. Prefer a fine-grained token when the required access can be expressed there.
3. Limit repository access to the repositories you need to review.
4. Grant only the permissions required for your operation. Read-only review needs less access than submitting a provider review; follow GitHub's current permission descriptions and your organization's policy.
5. Set an expiration and create the token.
6. Copy it once, return to Commentary's advanced provider setup, and enter it there. Do not paste it into a draft, issue, command history, or source file.
7. Confirm the intended repository opens, then revoke the token when the recovery need ends.

GitHub may change its token screens and permissions. Use the permission descriptions shown by GitHub at creation time rather than copying a broad permission set from an old screenshot.

## Keep token handling safe

- Do not commit the token or store it in `.commentary/session.json`.
- For CLI automation, use a Commentary API token in an environment variable instead of reusing a GitHub PAT.
- If a token was exposed, revoke it in GitHub immediately and create a replacement only if still needed.

If the repository remains unavailable, check repository selection, organization approval, and the token's expiration. See [sign in and manage access](account-and-access.md) for the default OAuth route.
