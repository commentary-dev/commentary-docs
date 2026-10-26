---
title: "CLI: Draft Reviews"
description: "Released command help for local Draft Review sessions, comments, collaboration, authentication, recovery, and sharing."
slug: reference/cli/draft-reviews
section: reference
contentType: reference
published: true
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
updated: 2026-10-25
---

Released command help for local Draft Review sessions, comments, collaboration, authentication, recovery, and sharing.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary abandon --help`

```text
Usage: commentary abandon [options]

Permanently delete a draft review.

Options:
  --session <id>  Delete an explicit draft review session instead of the linked
                  review.
  --yes           Confirm permanent deletion.
  -h, --help      display help for command

Details:
  Permanently deletes the selected review from Commentary. Linked local session metadata is removed only after Commentary confirms deletion.

Examples:
  commentary abandon --yes
  commentary abandon --session draft_123 --yes
  commentary abandon --yes --json
```

## `commentary collaboration --help`

```text
Usage: commentary collaboration [options] [command]

Read or configure collaboration on any review source.

Options:
  -h, --help           display help for command

Commands:
  settings [options]   Use the shared review collaboration API.
  configure [options]  Conditionally update Polls and Consensus settings.
  decision [options]   Use the shared review collaboration API.
  decide [options]     Use the shared review collaboration API.
  polls [options]      Use the shared review collaboration API.
  poll [options]       Use the shared review collaboration API.
  gate [options]       Use the shared review collaboration API.
  help [command]       display help for command
```

### `commentary collaboration configure --help`

```text
Usage: commentary collaboration configure [options]

Conditionally update Polls and Consensus settings.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration decide --help`

```text
Usage: commentary collaboration decide [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration decision --help`

```text
Usage: commentary collaboration decision [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration gate --help`

```text
Usage: commentary collaboration gate [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration poll --help`

```text
Usage: commentary collaboration poll [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration polls --help`

```text
Usage: commentary collaboration polls [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

### `commentary collaboration settings --help`

```text
Usage: commentary collaboration settings [options]

Use the shared review collaboration API.

Options:
  --file <path>  JSON request file; use review, threadId and revision as
                 appropriate.
  --stdin        Read JSON from standard input.
  -h, --help     display help for command
```

## `commentary comments --help`

```text
Usage: commentary comments [options]

List draft review comments.

Options:
  --format <format>          Output format (choices: "text", "markdown", "json",
                             default: "text")
  --open                     Show open threads. This is the default unless
                             --resolved or --all is used.
  --resolved                 Show resolved threads.
  --all                      Show open and resolved threads.
  --file <path>              Filter by review file path, e.g. docs/spec.md.
  --consensus-state <state>  Filter decision threads by consensus state
                             (choices: "pending", "accepted_for_change",
                             "blocked", "needs_owner_decision", "rejected",
                             "out_of_scope", "applied", "resolved")
  --session <id>             Use an explicit draft review session id instead of
                             local metadata.
  --watch                    Stream open and future comment events as JSON lines
                             until stopped.
  --jsonl                    Use newline-delimited JSON output for watch mode.
  --stop-file <path>         Stop-file path for --watch or --stop.
  --stop                     Request a running comments --watch process to stop.
  --include-replies          Return reply.created events in watch mode. This is
                             enabled by default.
  --no-include-replies       Ignore reply.created events in watch mode and
                             stream only new top-level comments.
  -h, --help                 display help for command

Details:
  Prints thread ids, file anchors, comment bodies, and replies for the selected session.

Examples:
  commentary comments --format markdown --open
  commentary comments --all --json
  commentary comments --file docs/spec.md --format text
  commentary comments --session draft_123 --json
  commentary comments --watch --jsonl
  commentary comments --stop
```

## `commentary login --help`

```text
Usage: commentary login [options]

Authenticate with Commentary.

Options:
  --scope <scope>  Repeat scopes to replace default permissions.
  --token <token>  Store an existing API token instead of starting
                   browser/device login.
  --no-open        Print the device login URL instead of opening a browser.
  -h, --help       display help for command

Details:
  Stores the token outside project metadata. Session files never contain secrets.

Examples:
  commentary login
  commentary login --token <commentary-api-token>
  commentary --base-url https://commentary.example.com login
```

## `commentary logout --help`

```text
Usage: commentary logout [options]

Remove the stored Commentary token for the selected base URL.

Options:
  -h, --help  display help for command

Details:
  Removes only local CLI authentication state for the selected Commentary base URL.

Examples:
  commentary logout
  commentary --base-url https://commentary.example.com logout
```

## `commentary next-comment --help`

```text
Usage: commentary next-comment [options]

Return currently open comments, or wait for the next live comment event.

Options:
  --session <id>        Use an explicit draft review session id instead of local
                        metadata.
  --file <path>         Filter by review file path, e.g. docs/spec.md.
  --include-replies     Return reply.created events. This is enabled by default.
  --no-include-replies  Ignore reply.created events and wait only for new
                        top-level comments.
  --timeout <duration>  Maximum wait time, e.g. 30m, 10s, or 0 for no timeout.
                        (default: "30m")
  --format <format>     Output format (choices: "text", "markdown", "json",
                        default: "markdown")
  -h, --help            display help for command

Details:
  Agent-safe loop primitive: starts the live stream, checks open threads, then waits only if none are open.

Examples:
  commentary next-comment --json
  commentary next-comment --timeout 15m --json
  commentary next-comment --file docs/spec.md --format markdown
  commentary next-comment --no-include-replies --json
```

## `commentary open --help`

```text
Usage: commentary open [options]

Open the linked review in a browser, or print the URL in headless output.

Options:
  --session <id>  Open an explicit draft review session id instead of local
                  metadata.
  -h, --help      display help for command

Details:
  In CI or non-TTY output this prints the URL instead of launching a browser.

Examples:
  commentary open
  commentary open --session draft_123
```

## `commentary pull --help`

```text
Usage: commentary pull [options]

Download latest reviewed files safely.

Options:
  --dry-run       Show which files would change without writing to disk.
  --yes           Allow overwriting changed local files.
  --backup        Create .bak files before overwriting existing files.
  --output <dir>  Write files to a separate directory instead of overwriting
                  tracked files.
  -h, --help      display help for command

Details:
  Downloads the latest Commentary file content for the linked draft review.

Examples:
  commentary pull --dry-run
  commentary pull --output reviewed
  commentary pull --backup --yes
```

## `commentary rebase --help`

```text
Usage: commentary rebase [options]

Update or clear the GitHub base for the linked review.

Options:
  --git-base <mode>             Use a GitHub base. Supported value: auto.
  --git-base-repo <owner/repo>  GitHub owner/repo for explicit base metadata.
  --git-base-sha <sha>          GitHub commit sha for explicit base metadata.
  --git-base-ref <ref>          GitHub branch or ref label for base metadata.
  --git-base-path <path>        GitHub file path for base metadata. Defaults to
                                the reviewed file path.
  --git-remote <name>           Git remote used by --git-base auto. (default:
                                "origin")
  --clear-git-base              Clear the linked GitHub base metadata.
  --dry-run                     Resolve and print the base metadata without
                                updating Commentary.
  -h, --help                    display help for command

Details:
  Updates only hosted draft-review base metadata. It does not create branches, commits, pull requests, or provider reviews.

Examples:
  commentary rebase --git-base auto
  commentary rebase --git-base-repo commentary-dev/commentary-docs --git-base-sha abc123
  commentary rebase --clear-git-base
  commentary rebase --git-base auto --dry-run --json
```

## `commentary reply --help`

```text
Usage: commentary reply [options] <thread-id> <message>

Reply to a comment thread.

Options:
  --thread <id>   Thread id. Use this when the id starts with a dash.
  --session <id>  Use an explicit draft review session id instead of local
                  metadata.
  --alias <name>  Agent alias for reply attribution. Overrides
                  COMMENTARY_AGENT_ALIAS.
  -h, --help      display help for command

Details:
  Adds a reply to the thread id printed by comments, next-comment, or wait-comment. Replies reopen resolved threads.

Examples:
  commentary reply thread_123 "Updated this in revision 3."
  commentary reply --thread -thread_123 "Fixed."
  commentary reply thread_123 "Fixed." --alias "Docs agent"
  COMMENTARY_AGENT_ALIAS="Docs agent" commentary reply thread_123 "Fixed." --json
```

## `commentary resolve --help`

```text
Usage: commentary resolve [options] <thread-id>

Resolve a comment thread.

Options:
  --thread <id>        Thread id. Use this when the id starts with a dash.
  --session <id>       Use an explicit draft review session id instead of local
                       metadata.
  --message <message>  Add a closing reply before resolving the thread.
  --alias <name>       Agent alias for the closing reply. Overrides
                       COMMENTARY_AGENT_ALIAS.
  -h, --help           display help for command

Details:
  Marks a thread resolved. Use --message when the final response should be visible in the thread.

Examples:
  commentary resolve thread_123
  commentary resolve --thread -thread_123 --message "Fixed."
  commentary resolve thread_123 --message "Addressed in revision 3."
  commentary resolve thread_123 --message "Fixed." --alias "Docs agent" --json
```

## `commentary restore --help`

```text
Usage: commentary restore [options] <session-id>

Restore local session metadata for an existing draft review.

Options:
  --yes       Replace existing local session metadata.
  --dry-run   Show what would be restored without writing metadata or syncing.
  --no-sync   Restore metadata without uploading changed local files.
  -h, --help  display help for command

Details:
  Recreates .commentary/session.json from review metadata, then syncs changed local files from the current directory.

Examples:
  commentary restore draft_123
  commentary restore draft_123 --dry-run --json
  commentary restore draft_123 --yes
  commentary restore draft_123 --no-sync
```

## `commentary review --help`

```text
Usage: commentary review [options] <paths...>

Create a draft review from files or folders.

Options:
  --title <title>               Review title shown in Commentary.
  --polls                       Enable Polls on the new review.
  --consensus                   Enable Consensus on the new review.
  --description <description>   Optional review description shown in Commentary.
  --content-type <type>         Content type (choices: "auto", "markdown",
                                "html", "plain_text", default: "auto")
  --watch                       Keep running and upload a new revision whenever
                                tracked files change.
  --no-open                     Do not open the browser after creating the
                                review.
  --root <path>                 Root used for relative review paths. Defaults to
                                the current directory.
  --include <glob>              Include glob for directory review. May be
                                repeated.
  --exclude <glob>              Exclude glob for directory review. May be
                                repeated.
  --git-base <mode>             Use a GitHub base. Supported value: auto.
  --git-base-repo <owner/repo>  GitHub owner/repo for explicit base metadata.
  --git-base-sha <sha>          GitHub commit sha for explicit base metadata.
  --git-base-ref <ref>          GitHub branch or ref label for base metadata.
  --git-base-path <path>        GitHub file path for base metadata. Defaults to
                                the reviewed file path.
  --git-remote <name>           Git remote used by --git-base auto. (default:
                                "origin")
  -h, --help                    display help for command

Details:
  Creates a hosted draft review and writes .commentary/session.json for later commands.

Examples:
  commentary review ./docs/spec.md --title "Product spec" --git-base auto
  commentary review ./docs --include "**/*.md" --exclude "drafts/**"
  commentary review ./docs/spec.md --watch --no-open
  commentary review ./docs/spec.md --json
```

## `commentary revision --help`

```text
Usage: commentary revision [options]

Alias for sync.

Options:
  --message <summary>  Revision summary shown in Commentary.
  --all                Upload even when tracked file hashes have not changed.
  --dry-run            Print pending changed paths without uploading a revision.
  -h, --help           display help for command

Details:
  Alias for commentary sync.

Examples:
  commentary revision --message "Address review comments"
  commentary revision --dry-run
```

## `commentary revisions --help`

```text
Usage: commentary revisions [options]

List revisions for the linked or specified draft review.

Options:
  --session <id>  Use an explicit draft review session id instead of local
                  metadata.
  -h, --help      display help for command

Details:
  Shows uploaded revisions for the selected draft review.

Examples:
  commentary revisions
  commentary revisions --session draft_123 --json
```

## `commentary sessions --help`

```text
Usage: commentary sessions [options]

List draft review sessions for the authenticated account.

Options:
  -h, --help  display help for command

Details:
  Lists draft reviews visible to the configured token.

Examples:
  commentary sessions
  commentary sessions --json
```

## `commentary share --help`

```text
Usage: commentary share [options]

Share the linked draft review or manage existing access.

Options:
  --session <id>        Use an explicit draft review session id instead of local
                        metadata.
  --list                List existing share links and user access grants. This
                        is the default.
  --anyone              Create or return a share link for anyone with the URL.
  --user <recipient>    Grant access to a specific user or email address.
  --revoke-link <id>    Revoke an anyone share link by id.
  --remove-access <id>  Remove a user access grant by id.
  -h, --help            display help for command

Details:
  Uses the draft-review sharing API. Share data is kept in Commentary, not local session metadata.

Examples:
  commentary share --anyone
  commentary share --user reviewer@example.com
  commentary share --list --json
  commentary share --revoke-link share_123
  commentary share --remove-access grant_123
```

## `commentary status --help`

```text
Usage: commentary status [options]

Show current linked review status.

Options:
  -h, --help  display help for command

Details:
  Summarizes local metadata, changed tracked files, and open/resolved thread counts.

Examples:
  commentary status
  commentary status --json
```

## `commentary sync --help`

```text
Usage: commentary sync|upload [options]

Upload current tracked files as a new revision.

Options:
  --message <summary>  Revision summary shown in Commentary.
  --all                Upload even when tracked file hashes have not changed.
  --dry-run            Print pending changed paths without uploading a revision.
  -h, --help           display help for command

Details:
  Reads the linked session, compares tracked files, and uploads changed content.

Examples:
  commentary sync --message "Address review comments"
  commentary sync --dry-run --json
  commentary sync --all --message "Refresh rendered output"
```

## `commentary track --help`

```text
Usage: commentary track [options] <paths...>

Add files to the linked draft review and upload a new revision.

Options:
  --message <summary>    Revision summary shown in Commentary.
  --content-type <type>  Content type (choices: "auto", "markdown", "html",
                         "plain_text", default: "auto")
  --include <glob>       Include glob for directory tracking. May be repeated.
  --exclude <glob>       Exclude glob for directory tracking. May be repeated.
  --dry-run              Print files that would be tracked without uploading a
                         revision.
  -h, --help             display help for command

Details:
  Merges new paths with existing tracked files, uploads a full revision, and updates .commentary/session.json.

Examples:
  commentary track docs/new-page.md --message "Add docs page"
  commentary track docs --include "**/*.md" --dry-run --json
```

## `commentary upload --help`

```text
Usage: commentary sync|upload [options]

Upload current tracked files as a new revision.

Options:
  --message <summary>  Revision summary shown in Commentary.
  --all                Upload even when tracked file hashes have not changed.
  --dry-run            Print pending changed paths without uploading a revision.
  -h, --help           display help for command

Details:
  Reads the linked session, compares tracked files, and uploads changed content.

Examples:
  commentary sync --message "Address review comments"
  commentary sync --dry-run --json
  commentary sync --all --message "Refresh rendered output"
```

## `commentary wait-comment --help`

```text
Usage: commentary wait-comment [options]

Wait for the next draft review comment event.

Options:
  --session <id>        Use an explicit draft review session id instead of local
                        metadata.
  --file <path>         Filter by review file path, e.g. docs/spec.md.
  --include-replies     Return reply.created events. This is enabled by default.
  --no-include-replies  Ignore reply.created events and wait only for new
                        top-level comments.
  --cursor <id>         Resume after a specific live-event cursor returned by a
                        previous wait.
  --from <position>     Where to start when no cursor is provided (choices:
                        "beginning", "latest", default: "latest")
  --timeout <duration>  Maximum wait time, e.g. 30m, 10s, or 0 for no timeout.
                        (default: "30m")
  --format <format>     Output format (choices: "text", "markdown", "json",
                        default: "markdown")
  -h, --help            display help for command

Details:
  Streams draft-review live events, auto-reconnects on stream drops, and exits after the first matching comment or reply.

Examples:
  commentary wait-comment --json
  commentary wait-comment --file docs/spec.md --timeout 15m
  commentary wait-comment --cursor event_123 --json
  commentary wait-comment --from beginning --no-include-replies
  commentary wait-comment --timeout 0 --format markdown
```

## `commentary watch --help`

```text
Usage: commentary watch [options]

Watch tracked files and sync revisions.

Options:
  --debounce <ms>      Milliseconds to wait after a file event before syncing.
                       (default: "1500")
  --message <summary>  Revision summary used for watch-triggered uploads.
  -h, --help           display help for command

Details:
  Runs until interrupted. It watches files already listed in .commentary/session.json.

Examples:
  commentary watch
  commentary watch --debounce 3000 --message "Watch sync"
```

## `commentary whoami --help`

```text
Usage: commentary whoami [options]

Validate the configured Commentary token.

Options:
  -h, --help  display help for command

Details:
  Checks whether the active token can reach the draft-review API.

Examples:
  commentary whoami
  COMMENTARY_TOKEN=<token> commentary whoami --json
```
