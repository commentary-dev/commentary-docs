---
title: Commentary CLI
description: Install and use the published CLI for Draft Reviews, durable Interactions, workspace tasks, packages, Projects, Trackers, source snapshots, and evidence.
slug: build/cli
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 2
---

The published package `@commentary-dev/cli` version **0.3.0** provides local Draft Review workflows and hosted HTTP v1 commands for Interactions and workspace resources. It requires Node.js **22 or newer**.

## Install and sign in

```bash
npx @commentary-dev/cli@0.3.0 --help
npm install --global @commentary-dev/cli@0.3.0
commentary login
```

Use `commentary login --token <commentary-api-token>` for a scoped API token, or `COMMENTARY_TOKEN` for automation. Credentials are stored outside project metadata. `.commentary/session.json` keeps Draft Review session metadata only. Named profiles can isolate credentials for different workspace grants; a missing named profile never falls back to the default.

Global options include `--base-url`, `--token`, `--json`, `--verbose`, `--quiet`, `--no-color`, `--session-file`, and `--profile`. Environment settings include `COMMENTARY_BASE_URL`, `COMMENTARY_TOKEN`, `COMMENTARY_CONFIG_DIR`, and `COMMENTARY_AGENT_ALIAS`.

## Review local files

```bash
commentary review ./docs/spec.md --title "Product spec" --git-base auto
commentary comments --format markdown --open
commentary next-comment --file docs/spec.md --timeout 60s --json
commentary sync --message "Address review comments"
commentary reply <thread-id> "Updated in revision 2."
commentary resolve <thread-id> --message "Addressed in revision 2."
```

Use `commentary track ./docs/new-page.md` to add files. `commentary restore <session-id> --dry-run --json` previews recovery before local state changes. `commentary abandon --session <id> --yes` permanently deletes a remote review; confirm that deletion is intended first. `commentary pull --dry-run` previews content coming from Commentary before writing it to disk. The supported source types are Markdown, MDX, HTML, and plain text. See the [Draft Review workflow](../workflows/review-a-local-draft.md) for the full human loop.

## Create and wait on an Interaction

Create request JSON in a file to keep content out of process arguments:

```json
{"title":"Review the updated migration plan"}
```

```bash
commentary interaction create \
  --resource-type draft_review \
  --resource-id draft_123 \
  --file interaction.json \
  --idempotency-key run-42 \
  --json
commentary interaction get ixn_123 --json
commentary interaction wait ixn_123 --timeout 300 --poll-interval 1000 --json
```

Supported Interaction resource types include repository, pull_request, document, draft_review, form, research_study, knowledge_brain, and web_app_review. Creation accepts `request`, `notification`, or `decision_request` types and bounded priority values. `interaction revise` requires the exact current strong ETag, a literal content file, and an idempotency key; `interaction cancel` also uses ETag and key. Lists use opaque cursors passed back unchanged.

Human Decision commands are read-only:

```bash
commentary decision get ixn_123 ixd_123 --json
commentary decision wait ixn_123 --timeout 300 --poll-interval 1000 --json
commentary decision wait ixn_123 --approval --timeout 300 --json
```

There is no CLI command to approve or reject. `fulfillment report` appends an agent self-report against the exact Decision; it is not proof of verification or completion.

## Use workspace and Inbox commands

The credential fixes its permitted workspace authority. `--workspace` must match the grant; it does not switch the browser user's workspace or bypass membership/resource authorization.

```bash
commentary --profile team --workspace ws_123 --json workspace get
commentary --profile team --workspace ws_123 --json workspace resources list --section reviews --filter state=active
commentary --profile team --workspace ws_123 --json workspace queue list --assignment unassigned
commentary --profile team --json inbox list --mode active --sort recommended
commentary --profile team --json inbox view list
```

Lists return one bounded page and an opaque continuation. Mutations read JSON through exactly one of `--file` or `--stdin`. Resource linking, renaming, and policy/view proposals have separate scopes and human activation boundaries. Inbox policy simulation applies no effects. The CLI does not author human replies, guidance, or Decisions.

## Publish packages and organize Projects

Package workflows are separate from local Draft collection:

```bash
commentary --workspace ws_123 package validate ./walkthrough --manifest ./walkthrough/commentary.package.json
commentary --workspace ws_123 package publish ./walkthrough --manifest ./walkthrough/commentary.package.json --idempotency-key package-1 --no-open
commentary --workspace ws_123 package sync ./walkthrough --idempotency-key package-2 --no-open
```

Package publication collects local bytes, records hashes in `.commentary/package.json`, uploads in bounded chunks, and publishes an immutable revision. Use exact current ETags for existing-package changes. Validation and dry-run do not publish. A changed intent needs a fresh retry key. The directory collector/watch path is CLI-specific; the server does not execute project scripts or builds. For the contract and recovery path, see [Review package integration](review-packages.md).

Project and Tracker commands expose the published CLI's singular families. Confirm current operations with `--help` and deployment capability before writing:

```bash
commentary --workspace ws_123 project list --json
commentary --workspace ws_123 tracker validate --file checklist.yaml --json
commentary --workspace ws_123 package validate ./walkthrough --manifest ./walkthrough/commentary.package.json
commentary --workspace ws_123 package publish ./walkthrough --manifest ./walkthrough/commentary.package.json --idempotency-key package-1 --no-open
```

Commands are generated from implemented operation contracts. Confirm current actions with `commentary project --help` or `commentary tracker --help` and deployment capability before writing. Mutations declare exact ETag/idempotency requirements; use typed JSON/YAML request files or stdin, not guessed flags. Preview schema changes/imports before applying. On conflicts, retain the intended values, read current state, reconcile, then send the revised operation with a new key.

## Review guides, snapshots, and evidence

The CLI can compose immutable Project Review Sessions (shown in the UI as Review guides), publish and inspect source snapshots, and attach evidence. It can request exact human acceptance but cannot supply it:

```bash
commentary --workspace ws_123 review-session create --file session.json --idempotency-key session-1 --json
commentary --workspace ws_123 review-session manifest session_123 session_revision_1 --json
commentary --workspace ws_123 review-session request-review session_123 --file acceptance.json --etag '"session_123:v1"' --idempotency-key acceptance-1 --json
commentary --workspace ws_123 review-session acceptance get session_123 --json
commentary --workspace ws_123 evidence attach --file evidence.json --idempotency-key evidence-1 --json
```

Build the complete exact target manifest from authorized reads. `request-review` creates an Interaction for an eligible human; later revisions do not inherit the Decision. Supplied reports remain caller claims. Independent provider verification requires its own consent, source access, and server observation workflow.

## Recovery and limits

Use the original idempotency key only for retrying the identical request. On a stale ETag, refresh and reconcile before a new intent. `interaction wait` is bounded and interruptible; timeout leaves the request outstanding. The CLI does not create GitHub commits, branches, pull requests, provider comments, or GitHub credentials.

For Draft-specific session handling, see [CLI Draft Reviews](cli-draft-reviews.md). For project lifecycle, typed records, and human acceptance, see [Projects and Trackers](../workflows/project-tracker-acceptance.md) and [exact acceptance](../workflows/request-exact-acceptance.md).
