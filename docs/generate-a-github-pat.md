# Generate A GitHub PAT

Use this only when Commentary's normal `Sign in` flow is not available in your environment. For most users, OAuth is still the simpler path.

For Commentary, prefer a fine-grained personal access token instead of a classic token.

## Happy Path

1. Sign in to GitHub.
2. Open `Settings`.
3. Open `Developer settings`.
4. Open `Personal access tokens`, then `Fine-grained tokens`.
5. Click `Generate new token`.
6. Give the token a clear name and choose an expiration date.
7. Set the resource owner that owns the repository you want to review.
8. Limit repository access to only the repository or repositories you need.
9. Under repository permissions, grant the minimum access Commentary needs for your task.
10. Generate the token.
11. Copy the token immediately. GitHub will not show the full token again.
12. In Commentary, click `Sign in`.
13. Open the advanced `Use personal access token` section.
14. Paste the token and click `Use PAT`.

## Repository Permissions For Commentary

Use GitHub's fine-grained repository permissions:

- To view a repository in Commentary, grant `Contents` with `Read-only` access.
- To view a pull request in Commentary, grant `Contents` with `Read-only` access and `Pull requests` with `Read-only` access.
- To comment on a pull request from Commentary, keep `Contents` with `Read-only` access and grant `Pull requests` with `Read and write` access.

## Keep It Narrow

- Use fine-grained tokens.
- Limit the token to the smallest repository set that works for your review.
- If you only need to read a public pull request, you usually do not need a PAT at all.

## If Commentary Says Permissions Are Missing

Start with the minimal repository access you need. If Commentary later says GitHub accepted the token but rejected a repository request, edit the token and grant the specific repository permissions GitHub asks for.

This usually means the token can see the repository, but not enough of it for the action you tried to perform.

## GitHub Docs

- Managing personal access tokens: [GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- Fine-grained PAT permissions reference: [GitHub Docs](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens)
