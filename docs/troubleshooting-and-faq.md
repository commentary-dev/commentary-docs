# Troubleshooting And FAQ

## Troubleshooting

### Commentary says the URL is invalid

Paste a full GitHub or Azure DevOps PR, repository, branch, file, or folder URL. GitHub PR URLs look like:

`https://github.com/{owner}/{repo}/pull/{number}`

GitHub repository document URLs can be repository roots, `/tree/...`, or `/blob/...` Markdown URLs.

Static HTML URLs are supported for `.html` and `.htm` files. Standalone Forms use `forms/*.form.yaml`, `forms/*.form.yml`, or `forms/*.form.json`. Other file types stay outside the document review surface. To review local content before it exists in Git, use [Draft reviews](./draft-reviews.md).

### A private repository or PR looks missing

Sign in with an account that can access the repository. For GitHub, also confirm the GitHub App is installed for that repository or use a PAT fallback.

### I can read a public review but cannot comment

That is expected. Public reading works without login, but comments, replies, status changes, refreshes that require private access, form submission, and review submission require authentication.

### Direct repository review says GitHub is rate-limiting the request

Anonymous GitHub API limits are lower than authenticated ones. Sign in and try again, or wait for the reset window.

### I expected `Submit review`, but it is not there

`Submit review` only exists on pull request routes. Direct document review, Forms, and draft review are app-native and do not create a provider review event.

### A shared draft review link asks me to sign in

That is expected. Draft review content is private. Shared links grant access only after the viewer signs in to Commentary. Anyone-link share routes may show a public preview before sign-in.

### A draft review cannot upload, rebase, delete, or reshare

You may be viewing a shared draft. Shared viewers can review and comment, but owner-only actions stay hidden.

### A form cannot be submitted from a public read-only review

Public read-only review access does not grant anonymous review-hosted form submission. Use a dedicated response link configured for anonymous replies, or sign in with an account that can access the review.

### A Forms result list is unavailable

Fill access and result-list access are separate. Draft results default to the draft owner, PR and branch result lists require trusted source write access, and dedicated response-link result lists belong to the response-link owner unless a result-share link grants read access.

### GitHub Forms writeback is unavailable

Forms work without writeback. Optional GitHub writeback requires the separate write-capable GitHub App, the `forms.github_writeback` feature, `commentary.forms.writeback`, and an explicit target repository, branch, and path.

### A static HTML preview looks different from the live page

Static HTML preview is sandboxed. Scripts do not run, event handlers are removed, dangerous URLs are stripped, and active embeds are blocked. Use `Raw` when you need to inspect exact source.

### A docs preview button is missing

Docs preview appears only when Commentary detects a supported docs-framework structure for the selected file. Switch back to `Preview` for ordinary Markdown files or files outside the detected docs navigation.

### Knowledge Brain mode is not active

Use the `Knowledge Brain` control when it appears in the review status area, or add `brain=1` to a GitHub review URL for a Brain-shaped fixture or branch. Use the OKF profile only for Open Knowledge Format-shaped bundles. Repositories without reviewable Brain-style files open as normal Markdown or HTML reviews.

### My Azure DevOps workspace is empty

Confirm you are signed in with the Microsoft account that can access the organization. The access page shows connected organizations, projects, repositories, pull requests, and granted scopes.

### My API or MCP request is rejected

Check that the bearer token is active, not expired, and includes the required scope. Repository-scoped, review-scoped, and draft-scoped tokens cannot operate outside their target.

Forms operations require the relevant `commentary.forms.*` scope. Live Preview Review sharing requires `commentary.review.share`. Knowledge Brain evaluation writes also require `commentary.brain.evals.write`; read-only Brain review tools still need a target that covers the repository, branch, or PR. Draft sharing and draft deletion require their explicit scopes.

### I cannot change token scopes

Scopes are immutable after token creation. Create a replacement token from [Developer access](./developer-access.md), update the client, then revoke the old grant.

## FAQ

### Should I start in `Preview` or `Raw`?

Start in `Preview`. Switch to `Raw` only when you need source-level Markdown, HTML, YAML, or JSON context.

### Should I start in `Document` or `Changes`?

Start in `Document` for reading. Use `Changes` when you need to inspect the actual change.

### Can I review a repository branch before a PR exists?

Yes. Paste a repository, branch, file, or folder URL from the homepage.

### Can I review a local draft before it exists in Git?

Yes. Sign in and create a [Draft review](./draft-reviews.md) from pasted content or uploaded text files.

### Can I collect structured answers in a review?

Yes. Use [Commentary Forms](./commentary-forms.md) from a source-backed Form Contract, Markdown embed, static HTML binding, draft upload, or dedicated response link.

### Do document review comments sync to GitHub or Azure DevOps?

No. Direct document review comments stay in Commentary.

### Do draft review comments sync to GitHub or Azure DevOps?

No. Draft review comments stay in Commentary. Draft reviews do not create commits, branches, pull requests, or provider review comments.

### Do GitHub PR comments sync before review submission?

Eligible GitHub PR comments can sync before review submission when Commentary drains provider-pending work after comment, reply, or status-comment writes. Pending review submission still stages the provider review event until you choose `Submit review`.

### Does Commentary work for public repositories without login?

Yes, for public GitHub read-only review when GitHub's anonymous API limit allows it. Writing actions still require authentication.

## Inbox And Workspace

### Where did the workspace Inbox go?

Open [Inbox](https://commentary.dev/inbox). It is one account-level feed across your authorized workspaces, with Active and History. The separate Workspace destination opens your selected personal/team workbench.

### Why did Workspace open a team instead of Personal?

`/workspace` restores your latest accessible selection. Use the workspace-name switcher, or [Open Personal](https://commentary.dev/workspace?personal=1). Source and Resource access are still checked separately from membership.

### Does Dismiss cancel a request, or Teach this agent answer it?

No. Dismiss moves the current event to your History. Teach this agent sends future guidance. Reply discusses the current instance; use its requested action to answer or decide it. See [Agent Inbox](agent-inbox.md).

### Why is an email or push option missing?

The deployment must support the channel before it is offered. Only enabled channels appear in [Notification settings](https://commentary.dev/settings/notifications). A queued test is not yet a delivery receipt.

## Live Preview Reviews

### Why does my preview show SDK not detected?

The reviewed app must load the Commentary Review SDK in the preview page. Add `@commentary-dev/review-sdk` or the CDN script only in review or preview builds, then reload the review.

### Why is my preview blocked in the frame?

The preview host controls whether Commentary can embed it. A connection timeout alone does not prove framing was blocked. For embedded review, configure a narrow `frame-ancestors https://commentary.dev` policy. Alternatively use New tab with a compatible Review SDK and permission to frame Commentary controls. If a frame renders without the SDK, screenshot feedback may be available. See [Live Preview delivery and recovery](web-app-reviews.md#new-tab-delivery).

### Can other reviewers open my localhost review?

Only if they run the same app locally. Localhost previews load from each reviewer's browser; Commentary cloud services do not fetch your machine. Deployed HTTPS Live Preview Reviews can be shared by owner-created links.
