---
title: "CLI: Workspace and Inbox"
description: "Released command help for delegated workspace resources, queues, and Inbox operations."
slug: reference/cli/workspace-inbox
section: reference
contentType: reference
published: true
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
updated: 2026-10-25
---

Released command help for delegated workspace resources, queues, and Inbox operations.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary inbox --help`

```text
Usage: commentary inbox [options] [command]

Read delegated Inbox work and submit inactive proposals.

Options:
  -h, --help                               display help for command

Commands:
  list [options]                           Read ranked work without changing recipient state.
  get [options] <workspace-id> <entry-id>  Read one authorized item independently of feed pagination.
  view                                     Read saved views and propose new views to their human owner.
  policy                                   Inspect, propose, and simulate typed attention policies.
  insights [options]                       Read content-free, privacy-thresholded outcome insights.
  notifications                            Read delivery receipts without changing consent.
  help [command]                           display help for command
```

### `commentary inbox get --help`

```text
Usage: commentary inbox get [options] <workspace-id> <entry-id>

Read one authorized item independently of feed pagination.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

### `commentary inbox insights --help`

```text
Usage: commentary inbox insights [options]

Read content-free, privacy-thresholded outcome insights.

Options:
  --correlation-id <id>  Request correlation id.
  --window <days>        30 or 90 days.
  -h, --help             display help for command
```

### `commentary inbox list --help`

```text
Usage: commentary inbox list [options]

Read ranked work without changing recipient state.

Options:
  --correlation-id <id>      Request correlation id.
  --limit <count>            Page size, at most 100. (default: "50")
  --cursor <cursor>          Opaque continuation from the previous page.
  --mode <mode>              active or history.
  --sort <sort>              recommended, newest, or due_soon.
  --bucket <bucket>          Attention bucket.
  --resource-type <type>     Resource type.
  --source-kind <kind>       Source category.
  --agent-id <id>            Registered sender.
  --status <status>          Recipient status.
  --deadline <deadline>      Deadline window.
  --assignment <assignment>  any, me, or unassigned.
  --interaction-type <type>  Interaction type.
  --priority-band <band>     Priority band.
  -h, --help                 display help for command
```

### `commentary inbox notifications --help`

```text
Usage: commentary inbox notifications [options] [command]

Read delivery receipts without changing consent.

Options:
  -h, --help      display help for command

Commands:
  list [options]  Read minimized notification history.
  help [command]  display help for command
```

#### `commentary inbox notifications list --help`

```text
Usage: commentary inbox notifications list [options]

Read minimized notification history.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 20. (default: "20")
  --cursor <cursor>      Opaque continuation from the previous page.
  -h, --help             display help for command
```

### `commentary inbox policy --help`

```text
Usage: commentary inbox policy [options] [command]

Inspect, propose, and simulate typed attention policies.

Options:
  -h, --help                 display help for command

Commands:
  list [options]             Read authorized policy versions.
  get [options] <policy-id>  Read an authorized policy.
  propose [options]          Submit a disabled pending policy proposal.
  simulate [options]         Evaluate a proposal against authorized metadata
                             without applying effects.
  help [command]             display help for command
```

#### `commentary inbox policy get --help`

```text
Usage: commentary inbox policy get [options] <policy-id>

Read an authorized policy.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

#### `commentary inbox policy list --help`

```text
Usage: commentary inbox policy list [options]

Read authorized policy versions.

Options:
  --correlation-id <id>  Request correlation id.
  --scope <scope>        personal or workspace.
  -h, --help             display help for command
```

#### `commentary inbox policy propose --help`

```text
Usage: commentary inbox policy propose [options]

Submit a disabled pending policy proposal.

Options:
  --correlation-id <id>    Request correlation id.
  --file <path>            Read the JSON request from a file.
  --stdin                  Read the JSON request from standard input.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  -h, --help               display help for command
```

#### `commentary inbox policy simulate --help`

```text
Usage: commentary inbox policy simulate [options]

Evaluate a proposal against authorized metadata without applying effects.

Options:
  --correlation-id <id>  Request correlation id.
  --file <path>          Read the JSON request from a file.
  --stdin                Read the JSON request from standard input.
  -h, --help             display help for command
```

### `commentary inbox view --help`

```text
Usage: commentary inbox view [options] [command]

Read saved views and propose new views to their human owner.

Options:
  -h, --help         display help for command

Commands:
  list [options]     Read private saved views.
  propose [options]  Submit an inactive name/definition proposal.
  help [command]     display help for command
```

#### `commentary inbox view list --help`

```text
Usage: commentary inbox view list [options]

Read private saved views.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

#### `commentary inbox view propose --help`

```text
Usage: commentary inbox view propose [options]

Submit an inactive name/definition proposal.

Options:
  --correlation-id <id>  Request correlation id.
  --file <path>          Read the JSON request from a file.
  --stdin                Read the JSON request from standard input.
  -h, --help             display help for command
```

## `commentary workspace --help`

```text
Usage: commentary workspace [options] [command]

Discover and update work within delegated workspace authority.

Options:
  -h, --help                    display help for command

Commands:
  list [options]                List workspaces authorized by this credential.
  get [options] [workspace-id]  Read workspace context and effective agent
                                capabilities.
  resources                     Source-authorized workspace collections;
                                requires --workspace.
  queue                         Read eligible team work; assignment remains
                                human-owned.
  help [command]                display help for command
```

### `commentary workspace get --help`

```text
Usage: commentary workspace get [options] [workspace-id]

Read workspace context and effective agent capabilities.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

### `commentary workspace list --help`

```text
Usage: commentary workspace list [options]

List workspaces authorized by this credential.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

### `commentary workspace queue --help`

```text
Usage: commentary workspace queue [options] [command]

Read eligible team work; assignment remains human-owned.

Options:
  -h, --help      display help for command

Commands:
  list [options]  Read the authorized team queue.
  help [command]  display help for command
```

#### `commentary workspace queue list --help`

```text
Usage: commentary workspace queue list [options]

Read the authorized team queue.

Options:
  --correlation-id <id>  Request correlation id.
  --queue-name <name>    Queue name.
  --assignment <value>   any, me, or unassigned.
  -h, --help             display help for command
```

### `commentary workspace resources --help`

```text
Usage: commentary workspace resources [options] [command]

Source-authorized workspace collections; requires --workspace.

Options:
  -h, --help                                      display help for command

Commands:
  list [options]                                  Read a resource collection page.
  get [options] <resource-type> <resource-id>     Read an authorized resource summary.
  link [options]                                  Link a resource using a JSON type/id request.
  rename [options] <resource-type> <resource-id>  Rename an authorized draft or preview using title/expectedUpdatedAt JSON.
  help [command]                                  display help for command
```

#### `commentary workspace resources get --help`

```text
Usage: commentary workspace resources get [options] <resource-type> <resource-id>

Read an authorized resource summary.

Options:
  --correlation-id <id>  Request correlation id.
  -h, --help             display help for command
```

#### `commentary workspace resources link --help`

```text
Usage: commentary workspace resources link [options]

Link a resource using a JSON type/id request.

Options:
  --correlation-id <id>    Request correlation id.
  --file <path>            Read the JSON request from a file.
  --stdin                  Read the JSON request from standard input.
  --idempotency-key <key>  Caller-generated retry key, at most 200 characters.
  -h, --help               display help for command
```

#### `commentary workspace resources list --help`

```text
Usage: commentary workspace resources list [options]

Read a resource collection page.

Options:
  --correlation-id <id>  Request correlation id.
  --limit <count>        Page size, at most 25. (default: "25")
  --cursor <cursor>      Opaque continuation from the previous page.
  --section <section>    reviews, forms, research, brain, or sources.
  --q <query>            Search names and source context.
  --sort <sort>          Collection sort.
  --filter <key=value>   Repeat a collection filter.
  -h, --help             display help for command
```

#### `commentary workspace resources rename --help`

```text
Usage: commentary workspace resources rename [options] <resource-type> <resource-id>

Rename an authorized draft or preview using title/expectedUpdatedAt JSON.

Options:
  --correlation-id <id>  Request correlation id.
  --file <path>          Read the JSON request from a file.
  --stdin                Read the JSON request from standard input.
  -h, --help             display help for command
```
