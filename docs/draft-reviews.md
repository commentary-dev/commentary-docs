# Draft Reviews

Draft reviews let signed-in users review Markdown, MDX, static HTML, or plain text before the content exists in a Git branch or pull request.

Open [/workspace/drafts/new](https://commentary.dev/workspace/drafts/new) to start a private draft review.

![New draft review](./assets/draft-review-create.png)

## Create A Draft Review

1. Sign in to Commentary.
2. Open `New review` from the homepage or workspace.
3. Choose `Paste` or `Upload`.
4. Add a title.
5. Paste Markdown, HTML, MDX, or plain text, or upload one text file.
6. Click `Create review`.

Pasted content can be auto-detected or explicitly marked as Markdown, HTML, or plain text. Upload accepts `.md`, `.markdown`, `.mdx`, `.html`, `.htm`, and `.txt` files.

## Optional GitHub Base

Use `Use a GitHub base` when a local draft is related to an existing GitHub file, branch, or commit. Commentary stores owner, repository, ref, sha, and path metadata so agents and tools can compare draft revisions to a GitHub source and update the base later.

A GitHub base does not create a branch, open a pull request, or grant repository write access.

## Review The Draft

Draft review pages use the same document-first review shell as Git-backed reviews:

- `Preview` renders the document for reading.
- `Raw` shows the source.
- Comments attach to semantic blocks and selected text.
- Replies, resolve, reopen, and filters behave like ordinary review threads.
- Previous revisions remain readable but are read-only for new comments.

Draft comments stay in Commentary. They do not sync to GitHub or Azure DevOps provider reviews.

## Revisions And Live Updates

Use `Upload new revision` to paste or upload replacement content. API, MCP, CLI, and agent clients can also create an empty draft first and upload the first revision later.

Revision uploads can be partial. If a tool uploads only changed files, Commentary carries omitted files forward into the new immutable revision.

Open draft pages listen for live comment, reply, status, revision, rebase, and deletion events. The `Live` control can pause or resume updates. Latest-mode pages refresh when a new revision arrives, while pinned previous-revision views stay on the selected revision.

## Draft Actions

Use `Draft actions` from the review toolbar to:

- copy the review link
- copy the session id
- copy agent instructions
- share the draft review
- download the latest file
- change the GitHub base
- delete the draft review

Agent instructions are meant for coding agents or CLIs that are updating local files. Commentary expects the client to read local files and send literal content; it does not read local paths or fetch arbitrary URLs for the agent.

## Sharing

Owners can create share links from `Draft actions`.

- Anyone-link sharing gives signed-in users access after they open the share URL.
- User-link sharing can target a GitHub username or email when Commentary can resolve the recipient.
- Owners can revoke links and remove claimed access grants.
- Shared viewers can comment, reply, and resolve when allowed, but cannot upload revisions, rebase, delete, reshare, or see hidden Git base metadata.

Shared draft URLs use `/review/draft/share/{token}` and still require sign-in before private content is shown.

## API And MCP Use

Draft review automation is available through the public API and MCP:

- HTTP endpoints under `/api/v1/draft-reviews`
- the `draft_review`, `review_comments`, and `review_document` MCP tools
- scoped API tokens from [Developer access](./developer-access.md)

See [API and MCP](./api-and-mcp.md), [API reference](./api/reference.md), and [MCP tools](./api/mcp-tools.md).

## What Draft Reviews Do Not Do

Draft reviews do not publish content to GitHub, create branches, commit files, open pull requests, or post provider review comments. Download or apply the latest content locally, then commit and push with your own Git credentials when the draft is ready.

Deleted drafts disappear from review pages, workspace lists, API responses, MCP reads, and live update streams immediately. Active Commentary storage, including uploaded or pasted raw/rendered draft artifacts, is purged within 24 hours. Provider systems, local checkouts, and platform backups have separate retention behavior.
