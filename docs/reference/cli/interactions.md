---
title: "CLI: Interactions and Decisions"
description: "Released command help for durable Interactions, immutable Decisions, and agent-reported Fulfillment."
slug: reference/cli/interactions
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

Released command help for durable Interactions, immutable Decisions, and agent-reported Fulfillment.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary decision --help`

```text
Usage: commentary decision [options] [command]

Read or wait for immutable human Decision receipts.

Options:
  -h, --help                                    display help for command

Commands:
  get [options] <interaction-id> <decision-id>  Get one privacy-safe immutable Decision receipt.
  wait [options] <interaction-id>               Poll until a Decision receipt is available or the timeout expires.
  help [command]                                display help for command

HTTP v1 read-only: agents cannot approve, reject, choose, answer, or otherwise write Decisions.

Examples:
  commentary decision get ixn_123 ixd_123 --json
  commentary decision wait ixn_123 --timeout 300 --json
  commentary decision wait ixn_123 --after ixd_previous --timeout 300 --json
```

### `commentary decision get --help`

```text
Usage: commentary decision get [options] <interaction-id> <decision-id>

Get one privacy-safe immutable Decision receipt.

Options:
  --correlation-id <id>  Opaque correlation id returned by the server.
  -h, --help             display help for command
```

### `commentary decision wait --help`

```text
Usage: commentary decision wait [options] <interaction-id>

Poll until a Decision receipt is available or the timeout expires.

Options:
  --after <decision-id>  Wait for a receipt after this opaque Decision id.
  --approval             Wait for an approving receipt whose exact current
                         approval policy is satisfied.
  --timeout <seconds>    Bounded timeout from 1 to 3600 seconds. (default:
                         "300")
  --poll-interval <ms>   Polling interval from 250 to 60000 milliseconds.
                         (default: "1000")
  --correlation-id <id>  Opaque correlation id returned by the server.
  -h, --help             display help for command
```

## `commentary fulfillment --help`

```text
Usage: commentary fulfillment [options] [command]

Report append-only, self-reported Fulfillment for an approved proposal.

Options:
  -h, --help                         display help for command

Commands:
  report [options] <interaction-id>  Append a retry-safe Fulfillment report for
                                     an exact approved fingerprint.
  get [options] <interaction-id>     Read current self-reported fulfillment and
                                     retained history.
  help [command]                     display help for command

HTTP v1 only. Reports are retry-safe self-reports, not verified provider-success proof.

Example:
  commentary fulfillment report ixn_123 --decision-id ixd_123 --revision-id ixr_123 --action-id ixa_123 --proposal-fingerprint <sha256> --status completed --idempotency-key report-42 --evidence-file evidence.json --json
```

### `commentary fulfillment get --help`

```text
Usage: commentary fulfillment get [options] <interaction-id>

Read current self-reported fulfillment and retained history.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

### `commentary fulfillment report --help`

```text
Usage: commentary fulfillment report [options] <interaction-id>

Append a retry-safe Fulfillment report for an exact approved fingerprint.

Options:
  --decision-id <id>               Exact opaque approved Decision id.
  --revision-id <id>               Exact opaque approved revision id.
  --action-id <id>                 Exact opaque approved action id.
  --proposal-fingerprint <sha256>  Exact approved proposal fingerprint.
  --status <status>                Self-reported status. (choices: "received",
                                   "started", "completed", "failed", "unknown")
  --idempotency-key <key>          Caller-generated retry key (maximum 200
                                   chars).
  --evidence-file <path>           Read bounded structured evidence from a JSON
                                   file.
  --evidence-stdin                 Read bounded structured evidence from
                                   standard input.
  --correlation-id <id>            Opaque correlation id returned by the server.
  -h, --help                       display help for command
```

## `commentary interaction --help`

```text
Usage: commentary interaction [options] [command]

Create, inspect, revise, cancel, and wait for durable Interactions.

Options:
  -h, --help                         display help for command

Commands:
  create [options]                   Create an Interaction for an authorized
                                     Resource.
  get [options] <interaction-id>     Get one Interaction and its current strong
                                     ETag.
  list [options]                     List a deterministic cursor page of
                                     Interactions.
  revise [options] <interaction-id>  Create an immutable revision using the
                                     current ETag.
  cancel [options] <interaction-id>  Cancel an Interaction using the current
                                     ETag.
  wait [options] <interaction-id>    Poll until an Interaction reaches a
                                     terminal state or the timeout expires.
  update [options] <interaction-id>  Conditionally update a non-decision
                                     lifecycle state.
  messages                           Read conversation and send new agent
                                     replies.
  guidance                           Retrieve and acknowledge future guidance as
                                     the creating agent.
  help [command]                     display help for command

HTTP v1 only: the server owns validation, authorization, policy, and lifecycle rules.

Examples:
  commentary interaction create --resource-type draft_review --resource-id draft_123 --file request.json --idempotency-key run-42
  commentary interaction get ixn_123 --json
  commentary interaction wait ixn_123 --timeout 300 --json
```

### `commentary interaction cancel --help`

```text
Usage: commentary interaction cancel [options] <interaction-id>

Cancel an Interaction using the current ETag.

Options:
  --etag <etag>            Exact strong ETag returned by get or a prior
                           mutation.
  --idempotency-key <key>  Caller-generated retry key (maximum 200 chars).
  --correlation-id <id>    Opaque correlation id returned by the server.
  -h, --help               display help for command
```

### `commentary interaction create --help`

```text
Usage: commentary interaction create [options]

Create an Interaction for an authorized Resource.

Options:
  --resource-type <type>     Resource type.
  --resource-id <id>         Opaque Resource id.
  --initial-state <state>    (choices: "draft", "active")
  --interaction-type <type>  (choices: "request", "notification",
                             "decision_request")
  --priority <priority>      (choices: "low", "normal", "high", "urgent")
  --file <path>              Read the JSON content object from a file.
  --stdin                    Read the JSON content object from standard input.
  --idempotency-key <key>    Caller-generated retry key (maximum 200 chars).
  --correlation-id <id>      Opaque correlation id returned by the server.
  -h, --help                 display help for command
```

### `commentary interaction get --help`

```text
Usage: commentary interaction get [options] <interaction-id>

Get one Interaction and its current strong ETag.

Options:
  --correlation-id <id>  Opaque correlation id returned by the server.
  -h, --help             display help for command
```

### `commentary interaction guidance --help`

```text
Usage: commentary interaction guidance [options] [command]

Retrieve and acknowledge future guidance as the creating agent.

Options:
  -h, --help                                            display help for command

Commands:
  list [options] <interaction-id>                       Read immutable guidance and delivery receipts.
  acknowledge [options] <interaction-id> <guidance-id>  Acknowledge delivery; this does not claim learning or application.
  help [command]                                        display help for command
```

#### `commentary interaction guidance acknowledge --help`

```text
Usage: commentary interaction guidance acknowledge [options] <interaction-id> <guidance-id>

Acknowledge delivery; this does not claim learning or application.

Options:
  --correlation-id <id>    Request correlation id.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  -h, --help               display help for command
```

#### `commentary interaction guidance list --help`

```text
Usage: commentary interaction guidance list [options] <interaction-id>

Read immutable guidance and delivery receipts.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 100. (default: "50")
  --cursor <cursor>      Opaque continuation from the previous page.
  -h, --help             display help for command
```

### `commentary interaction list --help`

```text
Usage: commentary interaction list [options]

List a deterministic cursor page of Interactions.

Options:
  --limit <count>         Page size from 1 to 100. (default: "50")
  --cursor <cursor>       Opaque cursor from a previous page.
  --state <state>         Filter by lifecycle state. (choices: "draft",
                          "active", "waiting_for_human", "waiting_for_agent",
                          "completed", "rejected", "canceled", "expired",
                          "failed")
  --resource-type <type>  Filter by Resource type. (choices: "repository",
                          "pull_request", "document", "draft_review", "form",
                          "research_study", "knowledge_brain", "web_app_review",
                          "project", "tracker", "review_package",
                          "project_review_session", "source_snapshot")
  --correlation-id <id>   Opaque correlation id returned by the server.
  -h, --help              display help for command
```

### `commentary interaction messages --help`

```text
Usage: commentary interaction messages [options] [command]

Read conversation and send new agent replies.

Options:
  -h, --help                       display help for command

Commands:
  list [options] <interaction-id>  Read one conversation page without marking it
                                   read.
  send [options] <interaction-id>  Append an agent message from a JSON
                                   body/revisionId request.
  help [command]                   display help for command
```

#### `commentary interaction messages list --help`

```text
Usage: commentary interaction messages list [options] <interaction-id>

Read one conversation page without marking it read.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 100. (default: "50")
  --cursor <cursor>      Opaque continuation from the previous page.
  -h, --help             display help for command
```

#### `commentary interaction messages send --help`

```text
Usage: commentary interaction messages send [options] <interaction-id>

Append an agent message from a JSON body/revisionId request.

Options:
  --correlation-id <id>    Request correlation id.
  --file <path>            Read the JSON request from a file.
  --stdin                  Read the JSON request from standard input.
  --etag <etag>            Exact strong ETag from the previous read or mutation.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  -h, --help               display help for command
```

### `commentary interaction revise --help`

```text
Usage: commentary interaction revise [options] <interaction-id>

Create an immutable revision using the current ETag.

Options:
  --etag <etag>            Exact strong ETag returned by get or a prior
                           mutation.
  --file <path>            Read the JSON content object from a file.
  --stdin                  Read the JSON content object from standard input.
  --idempotency-key <key>  Caller-generated retry key (maximum 200 chars).
  --correlation-id <id>    Opaque correlation id returned by the server.
  -h, --help               display help for command
```

### `commentary interaction update --help`

```text
Usage: commentary interaction update [options] <interaction-id>

Conditionally update a non-decision lifecycle state.

Options:
  --correlation-id <id>    Request correlation id.
  --etag <etag>            Exact strong ETag from the previous read or mutation.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  --state <state>          Non-decision lifecycle state. (choices: "active",
                           "waiting_for_human", "waiting_for_agent", "expired",
                           "failed")
  -h, --help               display help for command
```

### `commentary interaction wait --help`

```text
Usage: commentary interaction wait [options] <interaction-id>

Poll until an Interaction reaches a terminal state or the timeout expires.

Options:
  --timeout <seconds>    Bounded timeout from 1 to 3600 seconds. (default:
                         "300")
  --poll-interval <ms>   Polling interval from 250 to 60000 milliseconds.
                         (default: "1000")
  --correlation-id <id>  Opaque correlation id returned by the server.
  -h, --help             display help for command
```
