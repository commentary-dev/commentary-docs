# Core Concepts

Commentary is a document-review layer on top of Git providers, private draft review sessions, source-backed structured Forms, and customer-owned app previews. GitHub is the default provider, and Azure DevOps is also supported.

## Review Surfaces

### Pull request review

- Opens a provider PR in Commentary.
- Supports `Submit review`.
- Staged Commentary threads can sync to the provider review when you submit.
- GitHub PR comment sync can drain eligible provider-pending comments before submission and live pages receive comment events.
- Best when the document change is already in a PR.

### Document review

- Opens Markdown, MDX, static HTML, or standalone Form Contract files directly from a repository branch, folder, or file.
- Uses the same reading shell and comment rail.
- Comments stay app-native in Commentary.
- Best for docs, specs, forms, generated reports, and ADRs before a PR exists.

### Draft review

- Opens pasted or uploaded Markdown, MDX, HTML, plain text, or Form Contract files before they exist in Git.
- Supports revisions, live updates, sharing, export, agent instructions, CLI workflows, API access, and MCP access.
- Comments stay app-native in Commentary.
- Best for local edits, generated drafts, no-git Forms authoring, and agent workflows before a branch or PR is ready.

### Brainstorming Review

- Extends draft review with a plan-of-record workflow.
- Supports feedback signals, consensus rules, decision polls, and accepted-change states for agents.
- Uses the same `/review/draft/{sessionId}` review links, comments, revisions, sharing, API, MCP, and CLI foundation.
- Best when a group needs to discuss options before an agent or author applies accepted changes.

### Commentary Forms

- Collects structured answers from review-hosted Form Contract files, Markdown embeds, static HTML bindings, draft uploads, response links, and custom renderer bridges.
- Keeps Forms results separate from comment threads and poll comments.
- Supports result ownership, result-share links, exports, API/MCP handoff, and optional GitHub writeback.
- Best when the review needs structured values instead of free-form comment discussion.

### Live Preview Review

- Opens a customer-owned deployed or localhost preview app in Commentary.
- Requires the preview app to opt in with the Commentary Review SDK.
- Stores selected-element comments with route, selector, viewport, and optional source metadata.
- Supports full page mode and deployed review sharing.
- Best for reviewing interactive UI changes before or during implementation handoff.

## `Preview` vs `Raw`

- `Preview` renders Markdown, static HTML, or standalone Form Contract files as a document.
- `Raw` shows the underlying Markdown, HTML, YAML, or JSON source with line context.

Stay in `Preview` for normal review. Use `Raw` when exact source matters.

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
- source-backed Forms and result links in the Forms workspace

## Threads, Anchors, Folding, And Deep Links

Commentary comments on semantic document blocks, not only raw diff lines. That means comments can attach to headings, paragraphs, tables, front matter rows, HTML sections, form blocks, and other rendered blocks.

Latest rendered Markdown can collapse and expand H2-H6 sections, keep H1 headings visible, preserve collapse-all state in the URL, show folded comment counts, and copy heading deep links from the heading row. Hash links reveal only the folded ancestors needed for the target.

Comment bodies can render safe Markdown in the thread rail. Longer or wider comments can open in a focused reading surface. Poll comments can collect structured choices while staying attached to ordinary review threads.

## Review Progress

Signed-in reviewers can mark files and rendered sections reviewed or skipped, filter the navigator by progress, and revisit content that changed after it was reviewed. Progress is personal and hidden from anonymous read-only viewers.

## Knowledge Brain Mode

Knowledge Brain mode is an optional review layer for AI-maintained knowledge-base branches. It keeps the same document review shell, but groups source, wiki, output, and control files and adds Brain-specific review context. Open Knowledge Format bundles can use the OKF profile for concept, index, and log navigation.

## Provider Sync vs Commentary-Only Threads

- PR review can submit pending Commentary threads back to the provider.
- GitHub PR review can synchronize eligible comments before review submission and import provider comments through refresh or webhook processing.
- Direct document review keeps comments in Commentary.
- Draft review keeps comments in Commentary.
- Brainstorming Review keeps comments, feedback, consensus, and revisions in Commentary.
- Forms keep structured submissions separate from comments and polls.
- Azure DevOps and GitHub use provider-aware labels and links, but the review model stays document-first.
