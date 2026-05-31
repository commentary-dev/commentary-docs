# Commentary CLI

The Commentary CLI is the terminal companion for draft reviews and Brainstorming Reviews. It creates hosted reviews from local Markdown, MDX, static HTML, and plain text files, then syncs new revisions as local files change.

Project: [commentary-dev/commentary-cli](https://github.com/commentary-dev/commentary-cli)

Package: `@commentary-dev/cli`

## Install

Use it without installing:

```bash
npx @commentary-dev/cli --help
```

Or install it globally:

```bash
npm install -g @commentary-dev/cli
commentary --help
```

The CLI requires Node.js 22 or newer.

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

## Brainstorming Reviews

Create or convert a Brainstorming Review:

```bash
commentary review ./docs/spec.md --mode brainstorming --title "Product spec"
commentary brainstorm enable
```

Inspect and act on accepted consensus:

```bash
commentary brainstorm status --json
commentary brainstorm next --consensus-state accepted_for_change --timeout 60s --json
commentary sync --message "Apply brainstorming consensus" --addressed-thread <thread-id>
```

Set feedback or owner decisions only when that is part of your workflow:

```bash
commentary brainstorm signal <thread-id> agree --alias "Docs agent"
commentary brainstorm decide <thread-id> accepted_for_change
commentary brainstorm rule --consensus-mode no_open_blockers --min-response-count 2
```

## What The CLI Does Not Do

The CLI does not create GitHub branches, commits, pull requests, provider comments, or GitHub tokens. It sends literal file content to Commentary through the public API and leaves local Git operations to you.

See [Draft reviews](./draft-reviews.md), [Brainstorming Reviews](./brainstorming-reviews.md), and [Developer access](./developer-access.md).
