---
title: "CLI: Projects and Trackers"
description: "Released command help for Project resources, typed Trackers, records, views, imports, and proposals."
slug: reference/cli/projects-trackers
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

Released command help for Project resources, typed Trackers, records, views, imports, and proposals.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary project --help`

```text
Usage: commentary project [options] [command]

Optional Projects and independently authorized Resource links.

Options:
  -h, --help          display help for command

Commands:
  create [options]    createProject; scopes: commentary.projects.write.
  list [options]      listProjects; scopes: commentary.projects.read.
  get [options]       getProject; scopes: commentary.projects.read.
  status [options]    getProjectStatus; scopes: commentary.projects.read.
  progress
  update [options]    updateProject; scopes: commentary.projects.write.
  archive [options]   archiveProject; scopes: commentary.projects.write.
  restore [options]   restoreProject; scopes: commentary.projects.write.
  complete [options]  completeProject; scopes: commentary.projects.write.
  resources
  relationships
  participants
  references
  history [options]   listProjectChanges; scopes: commentary.projects.read.
  workspaces
  activity [options]  listProjectActivity; scopes: commentary.projects.read.
  feedback [options]  listProjectFeedback; scopes: commentary.projects.read,
                      commentary.comments.read.
  help [command]      display help for command
```

### `commentary project activity --help`

```text
Usage: commentary project activity [options]

listProjectActivity; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  -h, --help             display help for command
```

### `commentary project archive --help`

```text
Usage: commentary project archive [options]

archiveProject; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project complete --help`

```text
Usage: commentary project complete [options]

completeProject; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project create --help`

```text
Usage: commentary project create [options]

createProject; scopes: commentary.projects.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary project feedback --help`

```text
Usage: commentary project feedback [options]

listProjectFeedback; scopes: commentary.projects.read, commentary.comments.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  -h, --help             display help for command
```

### `commentary project get --help`

```text
Usage: commentary project get [options]

getProject; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary project history --help`

```text
Usage: commentary project history [options]

listProjectChanges; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary project list --help`

```text
Usage: commentary project list [options]

listProjects; scopes: commentary.projects.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --search <value>       Server search query.
  --lifecycle <value>    Server lifecycle query.
  --visibility <value>   Server visibility query.
  --sort <value>         Server sort query.
  -h, --help             display help for command
```

### `commentary project participants --help`

```text
Usage: commentary project participants [options] [command]

Options:
  -h, --help                        display help for command

Commands:
  list [options]                    listProjectParticipants; scopes:
                                    commentary.projects.read.
  set [options]                     setProjectParticipant; scopes:
                                    commentary.projects.write.
  remove [options] <participantId>  removeProjectParticipant; scopes:
                                    commentary.projects.write.
  help [command]                    display help for command
```

#### `commentary project participants list --help`

```text
Usage: commentary project participants list [options]

listProjectParticipants; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary project participants remove --help`

```text
Usage: commentary project participants remove [options] <participantId>

removeProjectParticipant; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary project participants set --help`

```text
Usage: commentary project participants set [options]

setProjectParticipant; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary project progress --help`

```text
Usage: commentary project progress [options] [command]

Options:
  -h, --help      display help for command

Commands:
  policy
  help [command]  display help for command
```

#### `commentary project progress policy --help`

```text
Usage: commentary project progress policy [options] [command]

Options:
  -h, --help      display help for command

Commands:
  get [options]   getProjectProgressPolicy; scopes: commentary.projects.read.
  set [options]   setProjectProgressPolicy; scopes: commentary.projects.write.
  help [command]  display help for command
```

#### `commentary project progress policy get --help`

```text
Usage: commentary project progress policy get [options]

getProjectProgressPolicy; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary project progress policy set --help`

```text
Usage: commentary project progress policy set [options]

setProjectProgressPolicy; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary project references --help`

```text
Usage: commentary project references [options] [command]

Options:
  -h, --help                      display help for command

Commands:
  list [options]                  listProjectExternalReferences; scopes:
                                  commentary.projects.read.
  link [options]                  linkProjectExternalReference; scopes:
                                  commentary.projects.write.
  unlink [options] <referenceId>  unlinkProjectExternalReference; scopes:
                                  commentary.projects.write.
  help [command]                  display help for command
```

#### `commentary project references link --help`

```text
Usage: commentary project references link [options]

linkProjectExternalReference; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary project references list --help`

```text
Usage: commentary project references list [options]

listProjectExternalReferences; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary project references unlink --help`

```text
Usage: commentary project references unlink [options] <referenceId>

unlinkProjectExternalReference; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project relationships --help`

```text
Usage: commentary project relationships [options] [command]

Options:
  -h, --help                         display help for command

Commands:
  list [options]                     listProjectRelationships; scopes:
                                     commentary.projects.read.
  link [options]                     linkProjectRelationship; scopes:
                                     commentary.projects.write.
  unlink [options] <relationshipId>  unlinkProjectRelationship; scopes:
                                     commentary.projects.write.
  help [command]                     display help for command
```

#### `commentary project relationships link --help`

```text
Usage: commentary project relationships link [options]

linkProjectRelationship; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary project relationships list --help`

```text
Usage: commentary project relationships list [options]

listProjectRelationships; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary project relationships unlink --help`

```text
Usage: commentary project relationships unlink [options] <relationshipId>

unlinkProjectRelationship; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project resources --help`

```text
Usage: commentary project resources [options] [command]

Options:
  -h, --help                 display help for command

Commands:
  list [options]             listProjectResources; scopes:
                             commentary.projects.read.
  link [options]             linkProjectResource; scopes:
                             commentary.projects.write.
  unlink [options] <linkId>  unlinkProjectResource; scopes:
                             commentary.projects.write.
  help [command]             display help for command
```

#### `commentary project resources link --help`

```text
Usage: commentary project resources link [options]

linkProjectResource; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary project resources list --help`

```text
Usage: commentary project resources list [options]

listProjectResources; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --section <value>      Server section query.
  -h, --help             display help for command
```

#### `commentary project resources unlink --help`

```text
Usage: commentary project resources unlink [options] <linkId>

unlinkProjectResource; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project restore --help`

```text
Usage: commentary project restore [options]

restoreProject; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary project status --help`

```text
Usage: commentary project status [options]

getProjectStatus; scopes: commentary.projects.read.

Options:
  --project <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  -h, --help             display help for command
```

### `commentary project update --help`

```text
Usage: commentary project update [options]

updateProject; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary project workspaces --help`

```text
Usage: commentary project workspaces [options] [command]

Options:
  -h, --help      display help for command

Commands:
  link [options]  linkProjectWorkspace; scopes: commentary.projects.write.
  help [command]  display help for command
```

#### `commentary project workspaces link --help`

```text
Usage: commentary project workspaces link [options]

linkProjectWorkspace; scopes: commentary.projects.write.

Options:
  --project <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

## `commentary tracker --help`

```text
Usage: commentary tracker [options] [command]

Schema-defined Trackers, records, native views and portable Git proposals.

Options:
  -h, --help          display help for command

Commands:
  progress
  review
  validate [options]  validateTrackerContract; scopes: commentary.trackers.read.
  create [options]    createTracker; scopes: commentary.trackers.write.
  list [options]      listTrackers; scopes: commentary.trackers.read.
  get [options]       getTracker; scopes: commentary.trackers.read.
  update [options]    updateTracker; scopes: commentary.trackers.write.
  schema
  archive [options]   archiveTracker; scopes: commentary.trackers.write.
  restore [options]   restoreTracker; scopes: commentary.trackers.write.
  records
  views
  export [options]    exportTracker; scopes: commentary.trackers.read.
  import
  authority
  proposals
  sync
  renderers
  activity [options]  listTrackerActivity; scopes: commentary.trackers.read.
  feedback [options]  listTrackerFeedback; scopes: commentary.trackers.read,
                      commentary.comments.read.
  help [command]      display help for command
```

### `commentary tracker activity --help`

```text
Usage: commentary tracker activity [options]

listTrackerActivity; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  -h, --help             display help for command
```

### `commentary tracker archive --help`

```text
Usage: commentary tracker archive [options]

archiveTracker; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary tracker authority --help`

```text
Usage: commentary tracker authority [options] [command]

Options:
  -h, --help         display help for command

Commands:
  preview [options]  previewTrackerAuthority; scopes: commentary.trackers.write.
  apply [options]    migrateTrackerAuthority; scopes: commentary.trackers.write.
  help [command]     display help for command
```

#### `commentary tracker authority apply --help`

```text
Usage: commentary tracker authority apply [options]

migrateTrackerAuthority; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker authority preview --help`

```text
Usage: commentary tracker authority preview [options]

previewTrackerAuthority; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker create --help`

```text
Usage: commentary tracker create [options]

createTracker; scopes: commentary.trackers.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker export --help`

```text
Usage: commentary tracker export [options]

exportTracker; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --output <path>        Write canonical data to a new JSON file.
  -h, --help             display help for command
```

### `commentary tracker feedback --help`

```text
Usage: commentary tracker feedback [options]

listTrackerFeedback; scopes: commentary.trackers.read, commentary.comments.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  -h, --help             display help for command
```

### `commentary tracker get --help`

```text
Usage: commentary tracker get [options]

getTracker; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary tracker import --help`

```text
Usage: commentary tracker import [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  preview [options]             previewTrackerImport; scopes:
                                commentary.trackers.write.
  new-preview [options]         previewNewTrackerImport; scopes:
                                commentary.trackers.write.
  apply [options]               applyTrackerImport; scopes:
                                commentary.trackers.write.
  get [options] <previewId>     getTrackerImport; scopes:
                                commentary.trackers.read.
  cancel [options] <previewId>  cancelTrackerImport; scopes:
                                commentary.trackers.write.
  help [command]                display help for command
```

#### `commentary tracker import apply --help`

```text
Usage: commentary tracker import apply [options]

applyTrackerImport; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker import cancel --help`

```text
Usage: commentary tracker import cancel [options] <previewId>

cancelTrackerImport; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary tracker import get --help`

```text
Usage: commentary tracker import get [options] <previewId>

getTrackerImport; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker import new-preview --help`

```text
Usage: commentary tracker import new-preview [options]

previewNewTrackerImport; scopes: commentary.trackers.write.

Options:
  --correlation-id <id>               Request correlation ID.
  --idempotency-key <key>             Reuse only for an exact retry.
  --file <path>                       JSON/YAML request object.
  --stdin                             Read the request object from standard
                                      input.
  --dry-run                           Preview only; does not apply records or
                                      dispatch provider writes.
  --mode <mode>                       Explicit import mode for a canonical
                                      bundle.
  --expected-schema-revision-id <id>  Exact schema for a canonical bundle.
  --base-commit-sha <sha>             Exact source base for a canonical
                                      proposal.
  -h, --help                          display help for command
```

#### `commentary tracker import preview --help`

```text
Usage: commentary tracker import preview [options]

previewTrackerImport; scopes: commentary.trackers.write.

Options:
  --tracker <id>                      Explicit Resource identity.
  --correlation-id <id>               Request correlation ID.
  --etag <etag>                       Exact strong ETag from the previous read.
  --idempotency-key <key>             Reuse only for an exact retry.
  --file <path>                       JSON/YAML request object.
  --stdin                             Read the request object from standard
                                      input.
  --dry-run                           Preview only; does not apply records or
                                      dispatch provider writes.
  --mode <mode>                       Explicit import mode for a canonical
                                      bundle.
  --expected-schema-revision-id <id>  Exact schema for a canonical bundle.
  --base-commit-sha <sha>             Exact source base for a canonical
                                      proposal.
  -h, --help                          display help for command
```

### `commentary tracker list --help`

```text
Usage: commentary tracker list [options]

listTrackers; scopes: commentary.trackers.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary tracker progress --help`

```text
Usage: commentary tracker progress [options] [command]

Options:
  -h, --help      display help for command

Commands:
  policy
  help [command]  display help for command
```

#### `commentary tracker progress policy --help`

```text
Usage: commentary tracker progress policy [options] [command]

Options:
  -h, --help      display help for command

Commands:
  get [options]   getTrackerProgressPolicy; scopes: commentary.trackers.read.
  set [options]   setTrackerProgressPolicy; scopes: commentary.trackers.write.
  help [command]  display help for command
```

#### `commentary tracker progress policy get --help`

```text
Usage: commentary tracker progress policy get [options]

getTrackerProgressPolicy; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker progress policy set --help`

```text
Usage: commentary tracker progress policy set [options]

setTrackerProgressPolicy; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker proposals --help`

```text
Usage: commentary tracker proposals [options] [command]

Options:
  -h, --help       display help for command

Commands:
  stage [options]  stageTrackerProposal; scopes: commentary.trackers.write.
  help [command]   display help for command
```

#### `commentary tracker proposals stage --help`

```text
Usage: commentary tracker proposals stage [options]

stageTrackerProposal; scopes: commentary.trackers.write.

Options:
  --tracker <id>                      Explicit Resource identity.
  --correlation-id <id>               Request correlation ID.
  --etag <etag>                       Exact strong ETag from the previous read.
  --idempotency-key <key>             Reuse only for an exact retry.
  --file <path>                       JSON/YAML request object.
  --stdin                             Read the request object from standard
                                      input.
  --mode <mode>                       Explicit import mode for a canonical
                                      bundle.
  --expected-schema-revision-id <id>  Exact schema for a canonical bundle.
  --base-commit-sha <sha>             Exact source base for a canonical
                                      proposal.
  -h, --help                          display help for command
```

### `commentary tracker records --help`

```text
Usage: commentary tracker records [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  query [options]               queryTrackerRecords; scopes:
                                commentary.trackers.read.
  get [options] <recordId>      getTrackerRecord; scopes:
                                commentary.trackers.read.
  history [options] <recordId>  listTrackerRecordHistory; scopes:
                                commentary.trackers.read.
  create [options]              createTrackerRecord; scopes:
                                commentary.trackers.write.
  update [options] <recordId>   patchTrackerRecord; scopes:
                                commentary.trackers.write.
  archive [options] <recordId>  archiveTrackerRecord; scopes:
                                commentary.trackers.write.
  bulk [options]                bulkTrackerRecords; scopes:
                                commentary.trackers.write.
  reorder [options]             reorderTrackerRecords; scopes:
                                commentary.trackers.write.
  help [command]                display help for command
```

#### `commentary tracker records archive --help`

```text
Usage: commentary tracker records archive [options] <recordId>

archiveTrackerRecord; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary tracker records bulk --help`

```text
Usage: commentary tracker records bulk [options]

bulkTrackerRecords; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker records create --help`

```text
Usage: commentary tracker records create [options]

createTrackerRecord; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker records get --help`

```text
Usage: commentary tracker records get [options] <recordId>

getTrackerRecord; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker records history --help`

```text
Usage: commentary tracker records history [options] <recordId>

listTrackerRecordHistory; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary tracker records query --help`

```text
Usage: commentary tracker records query [options]

queryTrackerRecords; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

#### `commentary tracker records reorder --help`

```text
Usage: commentary tracker records reorder [options]

reorderTrackerRecords; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker records update --help`

```text
Usage: commentary tracker records update [options] <recordId>

patchTrackerRecord; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker renderers --help`

```text
Usage: commentary tracker renderers [options] [command]

Options:
  -h, --help        display help for command

Commands:
  list [options]    listTrackerRenderers; scopes: commentary.trackers.read.
  manage [options]  manageTrackerRendererPublication; scopes:
                    commentary.trackers.write.
  help [command]    display help for command
```

#### `commentary tracker renderers list --help`

```text
Usage: commentary tracker renderers list [options]

listTrackerRenderers; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker renderers manage --help`

```text
Usage: commentary tracker renderers manage [options]

manageTrackerRendererPublication; scopes: commentary.trackers.write.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

### `commentary tracker restore --help`

```text
Usage: commentary tracker restore [options]

restoreTracker; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

### `commentary tracker review --help`

```text
Usage: commentary tracker review [options] [command]

Options:
  -h, --help           display help for command

Commands:
  progress [options]   getTrackerReviewProgress; scopes:
                       commentary.trackers.read.
  reconcile [options]  reconcileTrackerReviewProgress; scopes:
                       commentary.trackers.write.
  relation
  help [command]       display help for command
```

#### `commentary tracker review progress --help`

```text
Usage: commentary tracker review progress [options]

getTrackerReviewProgress; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  -h, --help             display help for command
```

#### `commentary tracker review reconcile --help`

```text
Usage: commentary tracker review reconcile [options]

reconcileTrackerReviewProgress; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary tracker review relation --help`

```text
Usage: commentary tracker review relation [options] [command]

Options:
  -h, --help                               display help for command

Commands:
  set [options] <recordId>                 configureTrackerReviewRelation; scopes: commentary.trackers.write, commentary.project_reviews.read.
  remove [options] <recordId> <sessionId>  removeTrackerReviewRelation; scopes: commentary.trackers.write, commentary.project_reviews.read.
  help [command]                           display help for command
```

#### `commentary tracker review relation remove --help`

```text
Usage: commentary tracker review relation remove [options] <recordId> <sessionId>

removeTrackerReviewRelation; scopes: commentary.trackers.write,
commentary.project_reviews.read.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker review relation set --help`

```text
Usage: commentary tracker review relation set [options] <recordId>

configureTrackerReviewRelation; scopes: commentary.trackers.write,
commentary.project_reviews.read.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker schema --help`

```text
Usage: commentary tracker schema [options] [command]

Options:
  -h, --help         display help for command

Commands:
  get [options]      getTrackerSchema; scopes: commentary.trackers.read.
  list [options]     listTrackerSchemas; scopes: commentary.trackers.read.
  preview [options]  previewTrackerSchema; scopes: commentary.trackers.read.
  apply [options]    applyTrackerSchema; scopes: commentary.trackers.write.
  help [command]     display help for command
```

#### `commentary tracker schema apply --help`

```text
Usage: commentary tracker schema apply [options]

applyTrackerSchema; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker schema get --help`

```text
Usage: commentary tracker schema get [options]

getTrackerSchema; scopes: commentary.trackers.read.

Options:
  --tracker <id>                Explicit Resource identity.
  --correlation-id <id>         Request correlation ID.
  --schema-revision-id <value>  Server schemaRevisionId query.
  -h, --help                    display help for command
```

#### `commentary tracker schema list --help`

```text
Usage: commentary tracker schema list [options]

listTrackerSchemas; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary tracker schema preview --help`

```text
Usage: commentary tracker schema preview [options]

previewTrackerSchema; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --etag <etag>          Exact strong ETag from the previous read.
  --file <path>          JSON/YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

### `commentary tracker sync --help`

```text
Usage: commentary tracker sync [options] [command]

Options:
  -h, --help                        display help for command

Commands:
  bind [options]                    bindTrackerGitSource; scopes:
                                    commentary.trackers.write.
  status [options]                  getTrackerSync; scopes:
                                    commentary.trackers.read.
  proposal [options] <operationId>  getTrackerSyncProposal; scopes:
                                    commentary.trackers.read.
  preview [options]                 previewTrackerSync; scopes:
                                    commentary.trackers.write.
  apply [options]                   applyTrackerSync; scopes:
                                    commentary.trackers.writeback,
                                    commentary.trackers.write.
  resolve [options]                 resolveTrackerSync; scopes:
                                    commentary.trackers.write.
  retry [options]                   retryTrackerSync; scopes:
                                    commentary.trackers.writeback,
                                    commentary.trackers.write.
  cancel [options]                  cancelTrackerSync; scopes:
                                    commentary.trackers.write.
  refresh [options]                 refreshTrackerGitSource; scopes:
                                    commentary.trackers.write.
  help [command]                    display help for command
```

#### `commentary tracker sync apply --help`

```text
Usage: commentary tracker sync apply [options]

applyTrackerSync; scopes: commentary.trackers.writeback,
commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  --provider-intent        Explicitly authorize the named server provider
                           operation.
  -h, --help               display help for command
```

#### `commentary tracker sync bind --help`

```text
Usage: commentary tracker sync bind [options]

bindTrackerGitSource; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker sync cancel --help`

```text
Usage: commentary tracker sync cancel [options]

cancelTrackerSync; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker sync preview --help`

```text
Usage: commentary tracker sync preview [options]

previewTrackerSync; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  --dry-run                Preview only; does not apply records or dispatch
                           provider writes.
  -h, --help               display help for command
```

#### `commentary tracker sync proposal --help`

```text
Usage: commentary tracker sync proposal [options] <operationId>

getTrackerSyncProposal; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker sync refresh --help`

```text
Usage: commentary tracker sync refresh [options]

refreshTrackerGitSource; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary tracker sync resolve --help`

```text
Usage: commentary tracker sync resolve [options]

resolveTrackerSync; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker sync retry --help`

```text
Usage: commentary tracker sync retry [options]

retryTrackerSync; scopes: commentary.trackers.writeback,
commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  --provider-intent        Explicitly authorize the named server provider
                           operation.
  -h, --help               display help for command
```

#### `commentary tracker sync status --help`

```text
Usage: commentary tracker sync status [options]

getTrackerSync; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary tracker update --help`

```text
Usage: commentary tracker update [options]

updateTracker; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

### `commentary tracker validate --help`

```text
Usage: commentary tracker validate [options]

validateTrackerContract; scopes: commentary.trackers.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/YAML request object.
  --stdin                Read the request object from standard input.
  -h, --help             display help for command
```

### `commentary tracker views --help`

```text
Usage: commentary tracker views [options] [command]

Options:
  -h, --help                 display help for command

Commands:
  list [options]             listTrackerViews; scopes: commentary.trackers.read.
  get [options] <viewId>     getTrackerView; scopes: commentary.trackers.read.
  create [options]           createTrackerView; scopes:
                             commentary.trackers.write.
  update [options] <viewId>  updateTrackerView; scopes:
                             commentary.trackers.write.
  delete [options] <viewId>  deleteTrackerView; scopes:
                             commentary.trackers.write.
  help [command]             display help for command
```

#### `commentary tracker views create --help`

```text
Usage: commentary tracker views create [options]

createTrackerView; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```

#### `commentary tracker views delete --help`

```text
Usage: commentary tracker views delete [options] <viewId>

deleteTrackerView; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  -h, --help               display help for command
```

#### `commentary tracker views get --help`

```text
Usage: commentary tracker views get [options] <viewId>

getTrackerView; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary tracker views list --help`

```text
Usage: commentary tracker views list [options]

listTrackerViews; scopes: commentary.trackers.read.

Options:
  --tracker <id>         Explicit Resource identity.
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary tracker views update --help`

```text
Usage: commentary tracker views update [options] <viewId>

updateTrackerView; scopes: commentary.trackers.write.

Options:
  --tracker <id>           Explicit Resource identity.
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the previous read.
  --idempotency-key <key>  Reuse only for an exact retry.
  --file <path>            JSON/YAML request object.
  --stdin                  Read the request object from standard input.
  -h, --help               display help for command
```
