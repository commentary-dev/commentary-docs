# Core Concepts

Commentary is a document-review layer on top of Git providers and private draft review sessions. GitHub is the default provider, and Azure DevOps is also supported.

## Pull Request Review vs Document Review vs Draft Review vs Brainstorming Review

### Pull request review

- Opens a provider PR in Commentary.
- Supports `Submit review`.
- Staged Commentary threads can sync to the provider review when you submit.
- Best when the document change is already in a PR.

### Document review

- Opens Markdown, MDX, or static HTML directly from a repository branch, folder, or file.
- Uses the same reading shell and comment rail.
- Comments stay app-native in Commentary.
- Best for docs, specs, and ADRs before a PR exists.

### Draft review

- Opens pasted or uploaded Markdown, MDX, HTML, or plain text before it exists in Git.
- Supports revisions, live updates, sharing, export, agent instructions, CLI workflows, API access, and MCP access.
- Comments stay app-native in Commentary.
- Best for local edits, generated drafts, and agent workflows before a branch or PR is ready.

### Brainstorming Review

- Extends draft review with a plan-of-record workflow.
- Supports feedback signals, consensus rules, decision polls, and accepted-change states for agents.
- Uses the same `/review/draft/{sessionId}` review links, comments, revisions, sharing, API, MCP, and CLI foundation.
- Best when a group needs to discuss options before an agent or author applies accepted changes.

## `Preview` vs `Raw`

- `Preview` renders Markdown or static HTML as a document.
- `Raw` shows the underlying Markdown or HTML source with line context.

Stay in `Preview` for normal review. Use `Raw` when exact document source matters.

## `Latest` vs `Diff`

- `Latest` shows the current selected file.
- `Diff` shows what changed against the base or selected change set.
- PR and document routes can expose all-change and commit-specific change sets.
- Draft review latest mode follows the newest revision; previous revisions are readable history.

![Review mode toolbar](./assets/review-mode-toolbar.png)

## Files, Branches, Revisions, And Change Sets

The file navigator shows changed or available reviewable documents. Review routes may also expose:

- file search
- flat and folder views
- file status indicators
- personal review progress indicators
- branch selector on direct document review
- change-set selector on PR and document diff routes
- revision controls on draft reviews
- disabled rows when a commit does not include a selected reviewable file

## Threads And Anchors

Commentary comments on semantic document blocks, not only raw diff lines. That means comments can attach to headings, paragraphs, tables, front matter rows, HTML sections, and other rendered blocks.

Comment bodies can render safe Markdown in the thread rail. Longer or wider comments can open in a focused reading surface. Poll comments can collect structured choices while staying attached to ordinary review threads.

## Review Progress

Signed-in reviewers can mark files and rendered sections reviewed or skipped, filter the navigator by progress, and revisit content that changed after it was reviewed. Progress is personal and hidden from anonymous read-only viewers.

## Knowledge Brain Mode

Knowledge Brain mode is an optional review layer for AI-maintained knowledge-base branches. It keeps the same document review shell, but groups source, wiki, output, and control files and adds Brain-specific review context.

## Provider Sync vs Commentary-Only Threads

- PR review can submit pending Commentary threads back to the provider.
- Direct document review keeps comments in Commentary.
- Draft review keeps comments in Commentary.
- Brainstorming Review keeps comments, feedback, consensus, and revisions in Commentary.
- Azure DevOps and GitHub use provider-aware labels and links, but the review model stays document-first.
