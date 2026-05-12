# Review Pull Requests

Commentary's default workflow starts with a pull request URL.

![GitHub PR review workspace](./assets/github-pr-review-workspace.png)

## Open A Review

1. Copy a GitHub or Azure DevOps pull request URL.
2. Open [/](https://commentary.dev/).
3. Paste the URL.
4. Click `Open review`.

Public GitHub PRs can open read-only without login. Private PRs and Azure DevOps routes require provider access.

## Work In The Review Shell

- Use the file navigator to move between Markdown, MDX, and static HTML files.
- Use folder view when a PR changes several docs across directories.
- Stay in `Preview` for normal reading.
- Switch to `Raw` for Markdown or HTML source context.
- Start with `Latest`, then use `Diff` when you need the change.
- Use docs preview when a docs framework route is detected.
- Use Present mode when a rendered document or slide deck needs a meeting-friendly view.
- Use the change-set menu to review all changes or one commit.
- Use `Comments` to show or hide the thread rail.

Single-file Markdown PRs keep the shell tighter. Multi-file PRs show the file navigator.

## Review Specialized Content

- Markdown extension rendering covers MDX, Mermaid, wikilinks, embeds, docs frameworks, and slide decks. See [Markdown extensions](./markdown-extensions.md).
- Static HTML review opens `.html` and `.htm` files with sandboxed previews and semantic anchors. See [Static HTML review](./static-html-review.md).
- Knowledge Brain mode groups source, wiki, output, and control files for AI-maintained knowledge-base branches. See [Knowledge Brain](./knowledge-brain.md).

## Comment And Reply

Sign in before adding or replying to comments.

Once authenticated, you can:

- add a new thread from a rendered block
- select text and create a focused thread
- reply in the thread rail
- resolve or reopen threads
- keep pending PR threads staged until review submission

## Submit The Review

On PR routes, Commentary stages pending review work locally until you click `Submit review`.

![Submit review dialog](./assets/submit-review-dialog.png)

The submit dialog shows how many pending threads will sync before the provider review event is sent. Choose `Comment`, `Approve`, or `Request changes`, optionally add an overall summary, then submit.

## Use `Diff` Intentionally

`Diff` is useful when you need to answer:

- What changed in this paragraph, table row, or section?
- Did this file change in a selected commit?
- Is the rendered change clearer than the raw Markdown?

For normal reading, `Preview` plus `Latest` is usually faster.
