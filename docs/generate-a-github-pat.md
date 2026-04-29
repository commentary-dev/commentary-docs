# Generate A GitHub PAT

Use a GitHub personal access token only when Commentary's normal GitHub App sign-in is not available. For most users, `Continue with GitHub` is simpler and gives Commentary installation-aware access.

Prefer a fine-grained PAT instead of a classic token.

## Create The Token

1. Sign in to GitHub.
2. Open `Settings`.
3. Open `Developer settings`.
4. Open `Personal access tokens`, then `Fine-grained tokens`.
5. Click `Generate new token`.
6. Give the token a clear name and choose an expiration date.
7. Set the resource owner that owns the repository you want to review.
8. Limit repository access to only the repository or repositories you need.
9. Grant the minimum repository permissions for your task.
10. Generate the token.
11. Copy it immediately. GitHub will not show the full token again.
12. In Commentary, click `Sign in`.
13. Open `Use personal access token`.
14. Paste the token and submit.

## Repository Permissions

Use GitHub's fine-grained repository permissions:

- To view a repository in Commentary, grant `Contents` with `Read-only` access.
- To view a pull request, grant `Contents` with `Read-only` access and `Pull requests` with `Read-only` access.
- To comment on a pull request from Commentary, keep `Contents` as `Read-only` and grant `Pull requests` with `Read and write` access.

## Keep It Narrow

- Use fine-grained tokens.
- Limit the token to the smallest repository set that works.
- Set an expiration date.
- Revoke tokens you no longer need.

If Commentary says the token is accepted but the repository still fails, the token usually lacks a repository or permission GitHub requires for the attempted action.

## GitHub Docs

- Managing personal access tokens: [GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- Fine-grained PAT permissions reference: [GitHub Docs](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens)
