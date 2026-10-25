---
title: "CLI: Webhooks"
description: "Released command help for scoped webhook subscriptions and delivery receipts."
slug: reference/cli/webhooks
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

Released command help for scoped webhook subscriptions and delivery receipts.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary webhook --help`

```text
Usage: commentary webhook [options] [command]

Manage scoped outbound subscriptions and delivery receipts.

Options:
  -h, --help                                 display help for command

Commands:
  list [options]                             Read a subscription page.
  get [options] <subscription-id>            Read a subscription and its ETag.
  create [options]                           Create a subscription from endpointUrl/eventTypes JSON.
  update [options] <subscription-id>         Conditionally change a subscription using its exact ETag.
  disable [options] <subscription-id>        Conditionally change a subscription using its exact ETag.
  rotate-secret [options] <subscription-id>  Conditionally change a subscription using its exact ETag.
  deliveries                                 Inspect and deliberately replay delivery attempts.
  help [command]                             display help for command
```

### `commentary webhook create --help`

```text
Usage: commentary webhook create [options]

Create a subscription from endpointUrl/eventTypes JSON.

Options:
  --correlation-id <id>    Request correlation id.
  --file <path>            Read the JSON request from a file.
  --stdin                  Read the JSON request from standard input.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  --secret-file <path>     Write the one-time signing secret to a new file
                           outside the project.
  -h, --help               display help for command
```

### `commentary webhook deliveries --help`

```text
Usage: commentary webhook deliveries [options] [command]

Inspect and deliberately replay delivery attempts.

Options:
  -h, --help                                        display help for command

Commands:
  list [options] <subscription-id>                  Read delivery receipts.
  replay [options] <subscription-id> <delivery-id>  Replay one delivery with explicit confirmation.
  help [command]                                    display help for command
```

#### `commentary webhook deliveries list --help`

```text
Usage: commentary webhook deliveries list [options] <subscription-id>

Read delivery receipts.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 100. (default: "50")
  --cursor <cursor>      Opaque continuation from the previous page.
  --status <status>      Delivery status.
  -h, --help             display help for command
```

#### `commentary webhook deliveries replay --help`

```text
Usage: commentary webhook deliveries replay [options] <subscription-id> <delivery-id>

Replay one delivery with explicit confirmation.

Options:
  --correlation-id <id>  Request correlation id.
  --yes                  Confirm replay of this delivery.
  -h, --help             display help for command
```

### `commentary webhook disable --help`

```text
Usage: commentary webhook disable [options] <subscription-id>

Conditionally change a subscription using its exact ETag.

Options:
  --correlation-id <id>  Request correlation id.
  --etag <etag>          Exact strong ETag from the previous read or mutation.
  -h, --help             display help for command
```

### `commentary webhook get --help`

```text
Usage: commentary webhook get [options] <subscription-id>

Read a subscription and its ETag.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

### `commentary webhook list --help`

```text
Usage: commentary webhook list [options]

Read a subscription page.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 100. (default: "50")
  --cursor <cursor>      Opaque continuation from the previous page.
  -h, --help             display help for command
```

### `commentary webhook rotate-secret --help`

```text
Usage: commentary webhook rotate-secret [options] <subscription-id>

Conditionally change a subscription using its exact ETag.

Options:
  --correlation-id <id>  Request correlation id.
  --etag <etag>          Exact strong ETag from the previous read or mutation.
  --secret-file <path>   Write the one-time signing secret to a new file outside
                         the project.
  -h, --help             display help for command
```

### `commentary webhook update --help`

```text
Usage: commentary webhook update [options] <subscription-id>

Conditionally change a subscription using its exact ETag.

Options:
  --correlation-id <id>  Request correlation id.
  --file <path>          Read the JSON request from a file.
  --stdin                Read the JSON request from standard input.
  --etag <etag>          Exact strong ETag from the previous read or mutation.
  -h, --help             display help for command
```
