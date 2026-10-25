---
title: "Commentary CLI reference"
description: "Complete recursive command and option reference captured from the published Commentary CLI 0.3.0 binary."
slug: reference/cli
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

This command reference is captured from the published `@commentary-dev/cli@0.3.0` package. It records the executable’s own `--help` output, including command descriptions, options, required arguments, aliases, and nested command lists. The capture uses read-only help invocations; no authenticated or write command runs.

The npm tarball SHA-256 is `8213004c10627d7fa2e57e60465133906664fa5b32171eb70d879fcf025f1d20`; the packaged executable SHA-256 is `a379829d988fed621dc17431a1f42bbc7391a216d5f644eb85008181095ceb48`. The generator verifies both receipts when `--tarball` is supplied and always verifies the executable hash before running it.

Family pages preserve the recursive help snapshots for every command family and subcommand. For task-oriented installation and examples, see [CLI setup and workflows](/docs/build/cli) and [Draft Review CLI workflow](/docs/build/cli-draft-reviews).

## Command families

- [Draft Reviews](/docs/reference/cli/draft-reviews) — Released command help for local Draft Review sessions, comments, collaboration, authentication, recovery, and sharing.

- [Interactions and Decisions](/docs/reference/cli/interactions) — Released command help for durable Interactions, immutable Decisions, and agent-reported Fulfillment.

- [Workspace and Inbox](/docs/reference/cli/workspace-inbox) — Released command help for delegated workspace resources, queues, and Inbox operations.

- [Webhooks](/docs/reference/cli/webhooks) — Released command help for scoped webhook subscriptions and delivery receipts.

- [Projects and Trackers](/docs/reference/cli/projects-trackers) — Released command help for Project resources, typed Trackers, records, views, imports, and proposals.

- [Review packages](/docs/reference/cli/packages) — Released command help for validating and publishing static walkthrough packages.

- [Review sessions, snapshots, and evidence](/docs/reference/cli/review-sessions-evidence) — Released command help for immutable review sessions, source snapshots, and evidence records.

## Global help

Root help output from the released executable:

```text
Usage: commentary [options] [command]

Create and manage Commentary draft review sessions from local Markdown, MDX,
HTML, and text files.

Options:
  -V, --version                   output the version number
  --base-url <url>                Commentary base URL. Defaults to
                                  COMMENTARY_BASE_URL or https://commentary.dev.
  --token <token>                 Commentary API token. Defaults to
                                  COMMENTARY_TOKEN or the stored login token.
  --json                          Print machine-readable JSON output for agent
                                  automation.
  --profile <name>                Select a named stored credential; never falls
                                  back to the default login.
  --workspace <id>                Select a workspace within the credential's
                                  authority.
  --verbose                       Print verbose diagnostics, including
                                  live-event reconnect notices.
  --quiet                         Suppress non-essential human-readable output.
  --no-color                      Disable color output
  --session-file <path>           Path to project session metadata. Defaults to
                                  .commentary/session.json.
  -h, --help                      display help for command

Commands:
  collaboration                   Read or configure collaboration on any review
                                  source.
  interaction                     Create, inspect, revise, cancel, and wait for
                                  durable Interactions.
  decision                        Read or wait for immutable human Decision
                                  receipts.
  fulfillment                     Report append-only, self-reported Fulfillment
                                  for an approved proposal.
  workspace                       Discover and update work within delegated
                                  workspace authority.
  inbox                           Read delegated Inbox work and submit inactive
                                  proposals.
  webhook                         Manage scoped outbound subscriptions and
                                  delivery receipts.
  project                         Optional Projects and independently authorized
                                  Resource links.
  tracker                         Schema-defined Trackers, records, native views
                                  and portable Git proposals.
  package                         Publish and review complete static walkthrough
                                  directories.
  review-session                  Compose immutable review manifests and request
                                  exact human Decisions.
  source-snapshot                 Publish and inspect authorized exact source
                                  provenance.
  evidence                        Caller reports and independent verification
                                  receipts remain distinct.
  login [options]                 Authenticate with Commentary.
  logout                          Remove the stored Commentary token for the
                                  selected base URL.
  whoami                          Validate the configured Commentary token.
  restore [options] <session-id>  Restore local session metadata for an existing
                                  draft review.
  abandon [options]               Permanently delete a draft review.
  review [options] <paths...>     Create a draft review from files or folders.
  sync|upload [options]           Upload current tracked files as a new
                                  revision.
  revision [options]              Alias for sync.
  rebase [options]                Update or clear the GitHub base for the linked
                                  review.
  track [options] <paths...>      Add files to the linked draft review and
                                  upload a new revision.
  watch [options]                 Watch tracked files and sync revisions.
  comments [options]              List draft review comments.
  wait-comment [options]          Wait for the next draft review comment event.
  next-comment [options]          Return currently open comments, or wait for
                                  the next live comment event.
  share [options]                 Share the linked draft review or manage
                                  existing access.
  reply [options] [args...]       Reply to a comment thread.
  resolve [options] [thread-id]   Resolve a comment thread.
  pull [options]                  Download latest reviewed files safely.
  open [options]                  Open the linked review in a browser, or print
                                  the URL in headless output.
  status                          Show current linked review status.
  sessions                        List draft review sessions for the
                                  authenticated account.
  revisions [options]             List revisions for the linked or specified
                                  draft review.
  help [command]                  display help for command

Agent loop:
  1. commentary review ./docs/spec.md --title "Spec" --git-base auto
  2. commentary next-comment --timeout 15m --json
  3. edit files, then commentary sync --message "Address comments"
  4. commentary reply <thread-id> "Fixed." --alias "Docs agent"

Collaboration:
  commentary review ./docs/spec.md --polls --consensus
  commentary collaboration settings --file review.json

Examples:
  npx @commentary-dev/cli review ./docs/spec.md
  commentary comments --format markdown --open
  commentary next-comment --json
  commentary resolve <thread-id> --message "Addressed."
```
