# Core Concepts

Commentary is a document-review layer on top of Git providers, private draft review sessions, source-backed structured Forms, and customer-owned app previews. GitHub is the default provider, and Azure DevOps is also supported.

## Inbox, Workspace, And Resources

[Inbox](agent-inbox.md) is your account-level attention feed across authorized workspaces. [Workspace](workspace.md) opens Reviews by default and is the selected personal/team workbench. Coordinate groups Projects and Trackers; Research & knowledge groups Research studies, Forms, and Knowledge. Inbox remains a separate peer destination. A Resource is the underlying review, Form, study, Brain, or preview; it can link to multiple workspaces without being copied or gaining broader access.

Agents create durable Interactions that request human input. A Decision binds to the exact revision/action a person approved; Fulfillment is the agent's later execution report. Replies discuss the instance, while **Teach this agent** records future guidance separately.

[Research Studies](research-studies.md) arrange Consent, Content/Activity/Form steps, and Complete. [Visual reviews](visual-reviews.md) add image and diagram region comments to the standard Review model.

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

### Review collaboration

Use the [shared Polls and Consensus workflow](review-collaboration.md).

## `Preview` vs `Raw`

- `Preview` renders Markdown, static HTML, or standalone Form Contract files as a document.
- `Raw` shows the underlying Markdown, HTML, YAML, or JSON source with line context.

Stay in `Preview` for normal review. Use `Raw` when exact source matters.

## `Document` vs `Changes`

- `Document` shows a clean current or historical snapshot of the selected file.
- `Changes` shows what changed against the base or selected change set.
- PR and document routes can expose all-change and commit-specific change sets.
- Current Document follows new revisions; pinned historical snapshots and comparisons stay on the selected versions. Preview/Raw is independent of Document/Changes. See [Review modes](review-modes.md).

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

Document-mode rendered Markdown can collapse and expand H2-H6 sections, keep H1 headings visible, preserve collapse-all state in the URL, show folded comment counts, and copy heading deep links from the heading row. Hash links reveal only the folded ancestors needed for the target.

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
- Polls and Consensus are optional on any review. Votes, decisions, blockers, application records, and human acceptance remain authoritative in Commentary.
- Forms keep structured submissions separate from comments and polls.
- Azure DevOps and GitHub use provider-aware labels and links, but the review model stays document-first.

## Projects and exact deliverables

[Projects](projects.md) optionally organize Resources; [Trackers](trackers.md) optionally structure work. Neither is required for existing reviews, and links never grant source access. [Packages](review-packages.md) publish immutable walkthroughs. [Sessions](project-review-sessions.md) compose exact revisions. [Source exploration](engineering-project-reviews.md) and [evidence](project-evidence.md) support the argument. [Human acceptance](project-acceptance.md), reported execution, artifact existence, review and independent verification remain separate facts.
