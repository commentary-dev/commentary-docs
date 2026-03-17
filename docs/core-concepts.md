# Core Concepts

Commentary is easiest to use when you think about it as a document-review layer on top of GitHub.

## Pull Request Review vs Branch Review

### Pull request review

- Opens a GitHub PR in Commentary.
- Supports `Submit review`.
- Pending Commentary threads sync to GitHub when you submit the review.
- Best when the document change is already in a pull request.

### Branch review

- Opens Markdown directly from a repository branch.
- Uses the same reading shell and comment rail.
- Comments stay app-native in Commentary.
- Best when you want feedback before a PR exists.

## `Preview` vs `Raw`

- `Preview` renders the Markdown as a document.
- `Raw` shows the underlying Markdown text.

Most people should stay in `Preview` unless they need exact source lines or formatting details.

## `Latest` vs `Diff`

- `Latest` shows the current version of the selected document.
- `Diff` shows the rendered or raw change compared with the base or selected commit.

Start with `Latest` for reading. Switch to `Diff` when you need to inspect what changed.

## Threads and Anchors

Commentary comments on document blocks, not just raw diff lines. In practice that means:

- comments feel closer to Word or Google Docs than code review
- the UI can keep the rendered document as the default surface
- threads stay tied to the document structure, not only to one diff hunk

## GitHub Sync vs Commentary-Only Threads

- PR review threads can sync back to GitHub when you use `Submit review`.
- Branch review threads stay in Commentary only.

That split is intentional. A branch review is for repository documents outside the PR flow.
