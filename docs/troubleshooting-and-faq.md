# Troubleshooting And FAQ

## Troubleshooting

### Commentary says the URL is invalid

Paste a full GitHub or Azure DevOps PR, repository, branch, file, or folder URL. GitHub PR URLs look like:

`https://github.com/{owner}/{repo}/pull/{number}`

GitHub repository document URLs can be repository roots, `/tree/...`, or `/blob/...` Markdown URLs.

Static HTML URLs are supported for `.html` and `.htm` files. Other file types stay outside the document review surface. To review local content before it exists in Git, use [Draft reviews](./draft-reviews.md).

### A private repository or PR looks missing

Sign in with an account that can access the repository. For GitHub, also confirm the GitHub App is installed for that repository or use a PAT fallback.

### I can read a public review but cannot comment

That is expected. Public reading works without login, but comments, replies, status changes, refreshes that require private access, and review submission require authentication.

### Direct repository review says GitHub is rate-limiting the request

Anonymous GitHub API limits are lower than authenticated ones. Sign in and try again, or wait for the reset window.

### I expected `Submit review`, but it is not there

`Submit review` only exists on pull request routes. Direct document review and draft review are app-native and do not create a provider review event.

### A shared draft review link asks me to sign in

That is expected. Draft review content is private. Shared links grant access only after the viewer signs in to Commentary.

### A draft review cannot upload, rebase, delete, or reshare

You may be viewing a shared draft. Shared viewers can review and comment, but owner-only actions stay hidden.

### A static HTML preview looks different from the live page

Static HTML preview is sandboxed. Scripts do not run, event handlers are removed, dangerous URLs are stripped, and active embeds are blocked. Use `Raw` when you need to inspect exact source.

### A docs preview button is missing

Docs preview appears only when Commentary detects a supported docs-framework structure for the selected file. Switch back to `Preview` for ordinary Markdown files or files outside the detected docs navigation.

### Knowledge Brain mode is not active

Use the `Knowledge Brain` control when it appears in the review status area, or add `brain=1` to a GitHub review URL for a Brain-shaped fixture or branch. Repositories without reviewable Brain-style files open as normal Markdown or HTML reviews.

### My Azure DevOps workspace is empty

Confirm you are signed in with the Microsoft account that can access the organization. The access page shows connected organizations, projects, repositories, pull requests, and granted scopes.

### My API or MCP request is rejected

Check that the bearer token is active, not expired, and includes the required scope. Repository-scoped, review-scoped, and draft-scoped tokens cannot operate outside their target.

Knowledge Brain evaluation writes also require `commentary.brain.evals.write`; read-only Brain review tools still need a target that covers the repository, branch, or PR. Draft sharing and draft deletion require their explicit scopes.

### I cannot change token scopes

Scopes are immutable after token creation. Create a replacement token from [Developer access](./developer-access.md), update the client, then revoke the old grant.

## FAQ

### Should I start in `Preview` or `Raw`?

Start in `Preview`. Switch to `Raw` only when you need source-level Markdown context.

### Should I start in `Latest` or `Diff`?

Start in `Latest` for reading. Use `Diff` when you need to inspect the actual change.

### Can I review a repository branch before a PR exists?

Yes. Paste a repository, branch, file, or folder URL from the homepage.

### Can I review a local draft before it exists in Git?

Yes. Sign in and create a [Draft review](./draft-reviews.md) from pasted content or one uploaded text file.

### Do document review comments sync to GitHub or Azure DevOps?

No. Direct document review comments stay in Commentary.

### Do draft review comments sync to GitHub or Azure DevOps?

No. Draft review comments stay in Commentary. Draft reviews do not create commits, branches, pull requests, or provider review comments.

### Does Commentary work for public repositories without login?

Yes, for public GitHub read-only review when GitHub's anonymous API limit allows it. Writing actions still require authentication.

## Live Preview Reviews

### Why does my preview show SDK not detected?

The reviewed app must load the Commentary Review SDK in the preview page. Add `@commentary-dev/review-sdk` or the CDN script only in review or preview builds, then reload the review.

### Why is my preview blocked in the frame?

The preview host controls whether Commentary can embed it. Configure a narrow `frame-ancestors https://commentary.dev` policy for review environments instead of trying to proxy or bypass the host policy.

### Can other reviewers open my localhost review?

Only if they run the same app locally. Localhost previews load from each reviewer's browser; Commentary cloud services do not fetch your machine.
