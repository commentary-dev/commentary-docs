---
title: Commentary CLI for Draft Reviews
description: Install the published CLI, authenticate, create a hosted draft from local files, and revise it from the terminal.
slug: build/cli-draft-reviews
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 2
---


Use the CLI when local files are the editing surface and reviewers need a shared hosted review. The published package is `@commentary-dev/cli` version **0.3.0**. Node.js **22 or newer** is required.

## Install and authenticate

Try it without a global install:

```bash
npx @commentary-dev/cli@0.3.0 --help
```

Or install it globally:

```bash
npm install --global @commentary-dev/cli@0.3.0
commentary --help
```

Sign in through the browser/device flow:

```bash
commentary login
```

For automation, create a scoped Commentary API token and provide it through an environment variable:

```bash
COMMENTARY_TOKEN="<token>" commentary whoami --json
```

The CLI stores review metadata under `.commentary/session.json`, not secrets. Do not commit tokens or paste them into command arguments if shell history is retained.

## Create and revise a review

```bash
commentary review ./docs/spec.md --title "Product spec"
commentary comments --format markdown --open
```

Edit the local file based on feedback, then publish the next immutable revision:

```bash
commentary sync --message "Address review comments"
commentary next-comment --timeout 60s --json
```

Other useful commands include `commentary reply <thread-id> "..."`, `commentary resolve <thread-id>`, `commentary track ./docs/new-page.md`, and `commentary share --anyone`. Use `commentary --help` for the exact current options. For metadata recovery, `commentary restore <session-id> --dry-run --json` previews before changing local state.

## Keep review sessions in sync

The CLI can watch files while you edit:

```bash
commentary review ./docs/spec.md --watch
commentary watch
```

`commentary comments --format markdown --open` shows unresolved feedback. `commentary next-comment` checks open threads and waits for a live event only when none are open; `wait-comment` waits specifically for a future event. For a long-running listener, use cooperative stop-file support:

```bash
commentary comments --watch --jsonl
commentary comments --stop
```

If a draft has a GitHub base, set or clear it explicitly with `commentary rebase --git-base auto` or `commentary rebase --clear-git-base`. The inferred base uses the local `origin` owner/repository, current `HEAD`, and repository-relative file path. A GitHub base only records comparison metadata; it does not write to GitHub.

Share a draft with `commentary share --anyone` or `commentary share --user <recipient>`. Check grants with `commentary share --list`. Pulling content back to disk is explicit; preview first and request a backup before overwriting files:

```bash
commentary pull --dry-run
commentary pull --backup --yes
commentary pull --output reviewed
```

The default text file set is `.md`, `.markdown`, `.mdx`, `.html`, `.htm`, and `.txt`. The server enforces up to 20 files per revision, 512 KiB per file, and 2 MiB total. Excluded directories include `.git`, `node_modules`, build outputs, `coverage`, and `.commentary` metadata. Keep file paths within the intended source folder.

## Expected result and limits

The CLI creates a Commentary Draft Review from literal file content; `sync` sends a new revision. It does not create GitHub branches, commits, pull requests, or provider comments and does not use a GitHub token for Git operations. Keep Git publishing in your existing toolchain.

If a draft cannot be found, restore from the correct session id. If uploads are partial, omitted files carry forward. If comments are returned as empty, confirm the CLI is pointed at the intended draft session and current revision. See [the full draft workflow](../workflows/review-a-local-draft.md).
