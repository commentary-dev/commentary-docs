---
title: "CLI: Review packages"
description: "Released command help for validating and publishing static walkthrough packages."
slug: reference/cli/packages
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

Released command help for validating and publishing static walkthrough packages.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary package --help`

```text
Usage: commentary package [options] [command]

Publish and review complete static walkthrough directories.

Options:
  -h, --help                                   display help for command

Commands:
  validate [options] <directory>
  publish [options] <directory>
  sync [options] <directory>
  watch [options] <directory>
  get [options] <packageId>
  revisions [options] <packageId>
  manifest [options] <packageId> <revisionId>
  comments [options] <packageId>
  activity [options] <packageId>
  feedback [options] <packageId>
  upload
  files
  indexing
  renderers
  impact [options] <package-id>                comparePackageRevisions; scopes: commentary.review_packages.read.
  help [command]                               display help for command
```

### `commentary package activity --help`

```text
Usage: commentary package activity [options] <packageId>

Options:
  --revision-id <id>        Exact package comment revision.
  --path <path>             Exact package semantic page for comments.
  --limit <count>           Bounded page size. (default: "25")
  --cursor <cursor>         Continuation.
  --timeout <milliseconds>  Total bounded event wait budget.
  -h, --help                display help for command
```

### `commentary package comments --help`

```text
Usage: commentary package comments [options] [command] <packageId>

Options:
  --revision-id <id>                           Exact package comment revision.
  --path <path>                                Exact package semantic page for comments.
  --limit <count>                              Bounded page size. (default: "25")
  --cursor <cursor>                            Continuation.
  --timeout <milliseconds>                     Total bounded event wait budget.
  -h, --help                                   display help for command

Commands:
  mutate [options] <package-id> <revision-id>  mutatePackageReviewComment; scopes: commentary.review_packages.read, commentary.comments.write.
```

#### `commentary package comments mutate --help`

```text
Usage: commentary package comments mutate [options] <package-id> <revision-id>

mutatePackageReviewComment; scopes: commentary.review_packages.read,
commentary.comments.write.

Options:
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/core YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

### `commentary package feedback --help`

```text
Usage: commentary package feedback [options] <packageId>

Options:
  --revision-id <id>        Exact package comment revision.
  --path <path>             Exact package semantic page for comments.
  --limit <count>           Bounded page size. (default: "25")
  --cursor <cursor>         Continuation.
  --timeout <milliseconds>  Total bounded event wait budget.
  -h, --help                display help for command
```

### `commentary package files --help`

```text
Usage: commentary package files [options] [command]

Options:
  -h, --help                                     display help for command

Commands:
  download [options] <package-id> <revision-id>  downloadPackageFile; scopes: commentary.review_packages.read.
  help [command]                                 display help for command
```

#### `commentary package files download --help`

```text
Usage: commentary package files download [options] <package-id> <revision-id>

downloadPackageFile; scopes: commentary.review_packages.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --path <value>         Server path query; exact relative file path.
  --output <path>        Write bytes to a new file; existing files are never
                         replaced.
  -h, --help             display help for command
```

### `commentary package get --help`

```text
Usage: commentary package get [options] <packageId>

Options:
  --revision-id <id>        Exact package comment revision.
  --path <path>             Exact package semantic page for comments.
  --limit <count>           Bounded page size. (default: "25")
  --cursor <cursor>         Continuation.
  --timeout <milliseconds>  Total bounded event wait budget.
  -h, --help                display help for command
```

### `commentary package impact --help`

```text
Usage: commentary package impact [options] <package-id>

comparePackageRevisions; scopes: commentary.review_packages.read.

Options:
  --correlation-id <id>       Request correlation ID.
  --from-revision-id <value>  Server fromRevisionId query.
  --to-revision-id <value>    Server toRevisionId query.
  --offset <value>            Server offset query.
  -h, --help                  display help for command
```

### `commentary package indexing --help`

```text
Usage: commentary package indexing [options] [command]

Options:
  -h, --help                                  display help for command

Commands:
  retry [options] <package-id> <revision-id>  retryPackageIndexing; scopes: commentary.review_packages.write.
  help [command]                              display help for command
```

#### `commentary package indexing retry --help`

```text
Usage: commentary package indexing retry [options] <package-id> <revision-id>

retryPackageIndexing; scopes: commentary.review_packages.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary package manifest --help`

```text
Usage: commentary package manifest [options] <packageId> <revisionId>

Options:
  --revision-id <id>        Exact package comment revision.
  --path <path>             Exact package semantic page for comments.
  --limit <count>           Bounded page size. (default: "25")
  --cursor <cursor>         Continuation.
  --timeout <milliseconds>  Total bounded event wait budget.
  -h, --help                display help for command
```

### `commentary package publish --help`

```text
Usage: commentary package publish [options] <directory>

Options:
  --manifest <file>        Explicit portable manifest JSON/YAML.
  --package <id>           Explicit package identity for sync.
  --etag <etag>            Exact acknowledged package ETag.
  --idempotency-key <key>  Stable exact publication retry key.
  --dry-run                Validate and hash only.
  --no-open                Do not open a browser.
  -h, --help               display help for command
```

### `commentary package renderers --help`

```text
Usage: commentary package renderers [options] [command]

Options:
  -h, --help                     display help for command

Commands:
  list [options] <package-id>    listPackageRenderers; scopes:
                                 commentary.review_packages.read.
  manage [options] <package-id>  managePackageRendererPublication; scopes:
                                 commentary.review_packages.write.
  help [command]                 display help for command
```

#### `commentary package renderers list --help`

```text
Usage: commentary package renderers list [options] <package-id>

listPackageRenderers; scopes: commentary.review_packages.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --revision-id <value>  Server revisionId query.
  -h, --help             display help for command
```

#### `commentary package renderers manage --help`

```text
Usage: commentary package renderers manage [options] <package-id>

managePackageRendererPublication; scopes: commentary.review_packages.write.

Options:
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/core YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

### `commentary package revisions --help`

```text
Usage: commentary package revisions [options] <packageId>

Options:
  --revision-id <id>        Exact package comment revision.
  --path <path>             Exact package semantic page for comments.
  --limit <count>           Bounded page size. (default: "25")
  --cursor <cursor>         Continuation.
  --timeout <milliseconds>  Total bounded event wait budget.
  -h, --help                display help for command
```

### `commentary package sync --help`

```text
Usage: commentary package sync [options] <directory>

Options:
  --manifest <file>        Explicit portable manifest JSON/YAML.
  --package <id>           Explicit package identity for sync.
  --etag <etag>            Exact acknowledged package ETag.
  --idempotency-key <key>  Stable exact publication retry key.
  --dry-run                Validate and hash only.
  --no-open                Do not open a browser.
  -h, --help               display help for command
```

### `commentary package upload --help`

```text
Usage: commentary package upload [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  status <uploadId>
  cancel [options] <upload-id>  cancelPackageUpload; scopes:
                                commentary.review_packages.write.
  help [command]                display help for command
```

#### `commentary package upload cancel --help`

```text
Usage: commentary package upload cancel [options] <upload-id>

cancelPackageUpload; scopes: commentary.review_packages.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary package upload status --help`

```text
Usage: commentary package upload status [options] <uploadId>

Options:
  -h, --help  display help for command
```

### `commentary package validate --help`

```text
Usage: commentary package validate [options] <directory>

Options:
  --manifest <file>        Explicit portable manifest JSON/YAML.
  --package <id>           Explicit package identity for sync.
  --etag <etag>            Exact acknowledged package ETag.
  --idempotency-key <key>  Stable exact publication retry key.
  --dry-run                Validate and hash only.
  --no-open                Do not open a browser.
  -h, --help               display help for command
```

### `commentary package watch --help`

```text
Usage: commentary package watch [options] <directory>

Options:
  --manifest <file>        Explicit portable manifest JSON/YAML.
  --package <id>           Explicit package identity for sync.
  --etag <etag>            Exact acknowledged package ETag.
  --idempotency-key <key>  Stable exact publication retry key.
  --dry-run                Validate and hash only.
  --no-open                Do not open a browser.
  -h, --help               display help for command
```
