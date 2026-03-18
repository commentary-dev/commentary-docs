# Troubleshooting And FAQ

## Troubleshooting

### "Enter a valid GitHub pull request URL"

Use a full GitHub PR URL in the form:

`https://github.com/{owner}/{repo}/pull/{number}`

### "Enter a valid GitHub repository URL"

Use a full GitHub repository URL in the form:

`https://github.com/{owner}/{repo}`

You can also use a GitHub tree URL when you already know the branch.

### A private repository or PR looks missing

Sign in first. Private GitHub content cannot load anonymously.

### I can read a public review but cannot comment

That is expected. Public reading works without login, but commenting and replies require authentication.

### Direct repository review says GitHub is rate-limiting the request

Anonymous GitHub API limits are lower than authenticated ones. Sign in and try again, or wait for the reset window.

### I expected `Submit review`, but it is not there

`Submit review` only exists on pull request routes. Branch review is app-native and does not submit a GitHub review event.

## FAQ

### Should I start in `Preview` or `Raw`?

Start in `Preview`. Switch to `Raw` only when you need source-level Markdown context.

### Should I start in `Latest` or `Diff`?

Start in `Latest` for reading. Use `Diff` when you need to inspect the actual change.

### Can I review a repository branch before a PR exists?

Yes. Use `Open docs` from the homepage.

### Do branch review comments sync to GitHub?

No. Branch review comments stay in Commentary.

### Does Commentary work for public repositories without login?

Yes, for read-only review. Writing actions still require authentication.
