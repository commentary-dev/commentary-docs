# Core Concepts

Commentary is a document-review layer on top of Git providers. GitHub is the default provider, and Azure DevOps is also supported.

## Pull Request Review vs Document Review

### Pull request review

- Opens a provider PR in Commentary.
- Supports `Submit review`.
- Staged Commentary threads can sync to the provider review when you submit.
- Best when the document change is already in a PR.

### Document review

- Opens Markdown directly from a repository branch, folder, or file.
- Uses the same reading shell and comment rail.
- Comments stay app-native in Commentary.
- Best for docs, specs, and ADRs before a PR exists.

## `Preview` vs `Raw`

- `Preview` renders the Markdown as a document.
- `Raw` shows the underlying Markdown source with line context.

Stay in `Preview` for normal review. Use `Raw` when exact Markdown source matters.

## `Latest` vs `Diff`

- `Latest` shows the current selected file.
- `Diff` shows what changed against the base or selected change set.
- PR and document routes can expose all-change and commit-specific change sets.

![Review mode toolbar](./assets/review-mode-toolbar.png)

## Files, Branches, And Change Sets

The file navigator shows changed or available Markdown files. Review routes may also expose:

- file search
- flat and folder views
- file status indicators
- branch selector on direct document review
- change-set selector on PR and document diff routes
- disabled rows when a commit does not include a selected Markdown file

## Threads And Anchors

Commentary comments on semantic Markdown blocks, not only raw diff lines. That means comments can attach to headings, paragraphs, tables, front matter rows, and other rendered blocks.

## Provider Sync vs Commentary-Only Threads

- PR review can submit pending Commentary threads back to the provider.
- Direct document review keeps comments in Commentary.
- Azure DevOps and GitHub use provider-aware labels and links, but the review model stays document-first.
