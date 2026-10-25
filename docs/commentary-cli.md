# Commentary CLI

The Commentary CLI supports local Draft review and package publication, Interactions, workspace discovery, Projects, Trackers, exact Review guides, source snapshots and evidence. Its Draft workflow creates hosted reviews from local Markdown, MDX, static HTML and plain text, then syncs new revisions as files change. Per-review Polls and Consensus use the shared collaboration workflow.

Project: [commentary-dev/commentary-cli](https://github.com/commentary-dev/commentary-cli)

Package: `@commentary-dev/cli`

## Install

For a published compatible release, use it without installing:

```bash
npx @commentary-dev/cli --help
```

Or install it globally:

```bash
npm install -g @commentary-dev/cli
commentary --help
```

The CLI requires Node.js 22 or newer. The 0.2.0 branch baseline is a tested candidate, not a registry-publication claim; install a reviewed package artifact when testing an unpublished candidate.

## Authentication

Use browser/device login:

```bash
commentary login
```

Use a Commentary API token when a token was created for automation:

```bash
commentary login --token <commentary-api-token>
COMMENTARY_TOKEN=<token> commentary whoami --json
```

CLI authentication state is stored outside project metadata. The local `.commentary/session.json` file stores review metadata, not secrets.

## Draft Review Workflow

Create a review:

```bash
commentary review ./docs/spec.md --title "Product spec"
commentary review ./docs/spec.md --title "Product spec" --git-base auto
commentary review ./docs ./README.md
```

Upload a new revision after editing local files:

```bash
commentary sync --message "Address review comments"
```

Add a file to the same review:

```bash
commentary track ./docs/new-page.md --message "Add requested page"
```

List comments for an agent loop:

```bash
commentary comments --format markdown --open
commentary next-comment --timeout 60s --json
```

Reply or resolve:

```bash
commentary reply <thread-id> "Updated this in revision 3." --alias "Docs agent"
commentary resolve <thread-id> --message "Addressed in revision 3." --alias "Docs agent"
```

Share a review:

```bash
commentary share --anyone
commentary share --user reviewer@example.com
commentary share --list
```

Restore local metadata for an existing review:

```bash
commentary restore <session-id> --dry-run --json
commentary restore <session-id>
```

Pull reviewed content back to disk only when you intend to use Commentary-side content as the source:

```bash
commentary pull --dry-run
commentary pull --output reviewed
commentary pull --backup --yes
```

## Review collaboration

Use the [shared Polls and Consensus workflow](review-collaboration.md).

## What The CLI Does Not Do

The CLI does not create GitHub branches, commits, pull requests, provider comments, or GitHub tokens. It sends literal file content to Commentary through the public API and leaves local Git operations to you.

See [Draft reviews](./draft-reviews.md), [Polls and Consensus](./review-collaboration.md), and [Developer access](./developer-access.md).

## Projects and engineering commands (0.2.0 candidate)

Singular project, tracker, package, review-session, source-snapshot and evidence families extend existing commands. Choose --workspace and explicit --project/--tracker context, use strict JSON/core-YAML files or stdin, and pass exact ETags/retry keys where declared. Package directory collection/watch is separate from Draft collection. Read [runnable quickstarts](projects-quickstarts.md), [Git recovery](tracker-portability.md) and the [exact command/action matrix](api/agent-capability-matrix.md). Scope does not authorize human governance or Decisions. These are tested build versions; inspect deployed capability and reviewed release assets before installation.
