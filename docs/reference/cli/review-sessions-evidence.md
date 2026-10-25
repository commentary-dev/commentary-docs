---
title: "CLI: Review sessions, snapshots, and evidence"
description: "Released command help for immutable review sessions, source snapshots, and evidence records."
slug: reference/cli/review-sessions-evidence
section: reference
contentType: reference
published: true
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
updated: 2026-10-25
---

Released command help for immutable review sessions, source snapshots, and evidence records.

Every block is the exact output of the released `commentary <command> --help` invocation. Use these snapshots to confirm command paths and accepted flags; use the [task-oriented CLI guide](/docs/build/cli) for workflows and request semantics.

## `commentary review-session --help`

```text
Usage: commentary review-session [options] [command]

Compose immutable review manifests and request exact human Decisions.

Options:
  -h, --help                                   display help for command

Commands:
  create [options]                             createProjectReviewSession; scopes: commentary.project_reviews.write.
  list [options]                               listProjectReviewSessions; scopes: commentary.project_reviews.read.
  candidates [options]                         listProjectReviewCandidates; scopes: commentary.project_reviews.read.
  get|status [options] <sessionId>             getProjectReviewSession; scopes: commentary.project_reviews.read.
  revision [options] <sessionId>               reviseProjectReviewSession; scopes: commentary.project_reviews.write.
  manifest [options] <sessionId> <revisionId>  getProjectReviewManifest; scopes: commentary.project_reviews.read.
  update [options] <sessionId>                 updateProjectReviewSession; scopes: commentary.project_reviews.write.
  archive [options] <sessionId>                archiveProjectReviewSession; scopes: commentary.project_reviews.write.
  restore [options] <sessionId>                restoreProjectReviewSession; scopes: commentary.project_reviews.write.
  revisions [options] <sessionId>              listProjectReviewRevisions; scopes: commentary.project_reviews.read.
  resources
  participants
  discussion
  request
  request-review [options] <sessionId>         requestProjectAcceptance; scopes: commentary.project_reviews.write, commentary.interactions.create.
  acceptance
  impact
  activity [options] <sessionId>               listProjectReviewActivity; scopes: commentary.project_reviews.read.
  feedback [options] <sessionId>               listProjectReviewFeedback; scopes: commentary.project_reviews.read, commentary.comments.read.
  help [command]                               display help for command
```

### `commentary review-session acceptance --help`

```text
Usage: commentary review-session acceptance [options] [command]

Options:
  -h, --help                 display help for command

Commands:
  get [options] <sessionId>  getProjectAcceptance; scopes:
                             commentary.project_reviews.read,
                             commentary.interactions.read.
  help [command]             display help for command
```

#### `commentary review-session acceptance get --help`

```text
Usage: commentary review-session acceptance get [options] <sessionId>

getProjectAcceptance; scopes: commentary.project_reviews.read,
commentary.interactions.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --after <value>        Server after query.
  -h, --help             display help for command
```

### `commentary review-session activity --help`

```text
Usage: commentary review-session activity [options] <sessionId>

listProjectReviewActivity; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  --timeout <seconds>    Bounded wait (1 to 3600 seconds); durable cursor is
                         returned.
  -h, --help             display help for command
```

### `commentary review-session archive --help`

```text
Usage: commentary review-session archive [options] <sessionId>

archiveProjectReviewSession; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

### `commentary review-session candidates --help`

```text
Usage: commentary review-session candidates [options]

listProjectReviewCandidates; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary review-session create --help`

```text
Usage: commentary review-session create [options]

createProjectReviewSession; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session discussion --help`

```text
Usage: commentary review-session discussion [options] [command]

Options:
  -h, --help                                 display help for command

Commands:
  list [options] <sessionId>                 listProjectReviewDiscussion; scopes: commentary.project_reviews.read, commentary.comments.read.
  create [options] <sessionId>               createProjectReviewDiscussion; scopes: commentary.project_reviews.write, commentary.comments.write.
  comments [options] <sessionId> <threadId>  listProjectReviewDiscussionComments; scopes: commentary.project_reviews.read, commentary.comments.read.
  reply [options] <sessionId> <threadId>     replyProjectReviewDiscussion; scopes: commentary.project_reviews.write, commentary.comments.write.
  help [command]                             display help for command
```

#### `commentary review-session discussion comments --help`

```text
Usage: commentary review-session discussion comments [options] <sessionId> <threadId>

listProjectReviewDiscussionComments; scopes: commentary.project_reviews.read,
commentary.comments.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary review-session discussion create --help`

```text
Usage: commentary review-session discussion create [options] <sessionId>

createProjectReviewDiscussion; scopes: commentary.project_reviews.write,
commentary.comments.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary review-session discussion list --help`

```text
Usage: commentary review-session discussion list [options] <sessionId>

listProjectReviewDiscussion; scopes: commentary.project_reviews.read,
commentary.comments.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary review-session discussion reply --help`

```text
Usage: commentary review-session discussion reply [options] <sessionId> <threadId>

replyProjectReviewDiscussion; scopes: commentary.project_reviews.write,
commentary.comments.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session feedback --help`

```text
Usage: commentary review-session feedback [options] <sessionId>

listProjectReviewFeedback; scopes: commentary.project_reviews.read,
commentary.comments.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --wait-ms <value>      Server waitMs query.
  --timeout <seconds>    Bounded wait (1 to 3600 seconds); durable cursor is
                         returned.
  -h, --help             display help for command
```

### `commentary review-session get --help`

```text
Usage: commentary review-session get|status [options] <sessionId>

getProjectReviewSession; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary review-session impact --help`

```text
Usage: commentary review-session impact [options] [command]

Options:
  -h, --help                     display help for command

Commands:
  compare [options] <sessionId>  compareProjectReviewRevisions; scopes:
                                 commentary.project_reviews.read.
  help [command]                 display help for command
```

#### `commentary review-session impact compare --help`

```text
Usage: commentary review-session impact compare [options] <sessionId>

compareProjectReviewRevisions; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>       Request correlation ID.
  --from-revision-id <value>  Server fromRevisionId query.
  --to-revision-id <value>    Server toRevisionId query.
  --offset <value>            Server offset query.
  -h, --help                  display help for command
```

### `commentary review-session list --help`

```text
Usage: commentary review-session list [options]

listProjectReviewSessions; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary review-session manifest --help`

```text
Usage: commentary review-session manifest [options] <sessionId> <revisionId>

getProjectReviewManifest; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary review-session participants --help`

```text
Usage: commentary review-session participants [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  set [options] <sessionId>     setProjectReviewParticipant; scopes:
                                commentary.project_reviews.write.
  remove [options] <sessionId>  removeProjectReviewParticipant; scopes:
                                commentary.project_reviews.write.
  help [command]                display help for command
```

#### `commentary review-session participants remove --help`

```text
Usage: commentary review-session participants remove [options] <sessionId>

removeProjectReviewParticipant; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary review-session participants set --help`

```text
Usage: commentary review-session participants set [options] <sessionId>

setProjectReviewParticipant; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session request --help`

```text
Usage: commentary review-session request [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  review [options] <sessionId>  requestProjectReview; scopes:
                                commentary.project_reviews.write,
                                commentary.interactions.create.
  help [command]                display help for command
```

#### `commentary review-session request review --help`

```text
Usage: commentary review-session request review [options] <sessionId>

requestProjectReview; scopes: commentary.project_reviews.write,
commentary.interactions.create.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session request-review --help`

```text
Usage: commentary review-session request-review [options] <sessionId>

requestProjectAcceptance; scopes: commentary.project_reviews.write,
commentary.interactions.create.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session resources --help`

```text
Usage: commentary review-session resources [options] [command]

Options:
  -h, --help                    display help for command

Commands:
  list [options] <sessionId>    listProjectReviewTargets; scopes:
                                commentary.project_reviews.read.
  link [options] <sessionId>    Create an immutable manifest revision from one
                                exact target; no source access is granted.
  unlink [options] <sessionId>  Create an immutable manifest revision from one
                                exact target; no source access is granted.
  help [command]                display help for command
```

#### `commentary review-session resources link --help`

```text
Usage: commentary review-session resources link [options] <sessionId>

Create an immutable manifest revision from one exact target; no source access is
granted.

Options:
  --file <path>            Object containing exactly one exact target.
  --stdin                  Read target object from standard input.
  --etag <etag>            Exact Session ETag.
  --idempotency-key <key>  Exact retry identity.
  --correlation-id <id>    Request correlation ID.
  -h, --help               display help for command
```

#### `commentary review-session resources list --help`

```text
Usage: commentary review-session resources list [options] <sessionId>

listProjectReviewTargets; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

#### `commentary review-session resources unlink --help`

```text
Usage: commentary review-session resources unlink [options] <sessionId>

Create an immutable manifest revision from one exact target; no source access is
granted.

Options:
  --file <path>            Object containing exactly one exact target.
  --stdin                  Read target object from standard input.
  --etag <etag>            Exact Session ETag.
  --idempotency-key <key>  Exact retry identity.
  --correlation-id <id>    Request correlation ID.
  -h, --help               display help for command
```

### `commentary review-session restore --help`

```text
Usage: commentary review-session restore [options] <sessionId>

restoreProjectReviewSession; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

### `commentary review-session revision --help`

```text
Usage: commentary review-session revision [options] <sessionId>

reviseProjectReviewSession; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary review-session revisions --help`

```text
Usage: commentary review-session revisions [options] <sessionId>

listProjectReviewRevisions; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary review-session status --help`

```text
Usage: commentary review-session get|status [options] <sessionId>

getProjectReviewSession; scopes: commentary.project_reviews.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary review-session update --help`

```text
Usage: commentary review-session update [options] <sessionId>

updateProjectReviewSession; scopes: commentary.project_reviews.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

## `commentary source-snapshot --help`

```text
Usage: commentary source-snapshot [options] [command]

Publish and inspect authorized exact source provenance.

Options:
  -h, --help                               display help for command

Commands:
  publish|reference [options]              publishSourceSnapshot; scopes: commentary.source_snapshots.write.
  get [options] <snapshotId>               getSourceSnapshot; scopes: commentary.source_snapshots.read.
  tree [options] <snapshotId>              getSourceTree; scopes: commentary.source_snapshots.read.
  file [options] <snapshotId>              getSourceFile; scopes: commentary.source_snapshots.read.
  capture
  purge [options] <snapshotId>             purgeSourceSnapshot; scopes: commentary.source_snapshots.write.
  export [options] <snapshotId>            exportSourceSnapshot; scopes: commentary.source_snapshots.read.
  search [options] <snapshotId>            searchSourceSnapshot; scopes: commentary.source_snapshots.read.
  threads
  publish-directory [options] <directory>  Freeze bounded local source bytes, resume their transfer, and publish an uploaded-provenance snapshot.
  help [command]                           display help for command
```

### `commentary source-snapshot capture --help`

```text
Usage: commentary source-snapshot capture [options] [command]

Options:
  -h, --help                     display help for command

Commands:
  status [options] <snapshotId>  getSourceCapture; scopes:
                                 commentary.source_snapshots.read.
  retry [options] <snapshotId>   retrySourceCapture; scopes:
                                 commentary.source_snapshots.write.
  cancel [options] <snapshotId>  cancelSourceCapture; scopes:
                                 commentary.source_snapshots.write.
  help [command]                 display help for command
```

#### `commentary source-snapshot capture cancel --help`

```text
Usage: commentary source-snapshot capture cancel [options] <snapshotId>

cancelSourceCapture; scopes: commentary.source_snapshots.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

#### `commentary source-snapshot capture retry --help`

```text
Usage: commentary source-snapshot capture retry [options] <snapshotId>

retrySourceCapture; scopes: commentary.source_snapshots.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

#### `commentary source-snapshot capture status --help`

```text
Usage: commentary source-snapshot capture status [options] <snapshotId>

getSourceCapture; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary source-snapshot export --help`

```text
Usage: commentary source-snapshot export [options] <snapshotId>

exportSourceSnapshot; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary source-snapshot file --help`

```text
Usage: commentary source-snapshot file [options] <snapshotId>

getSourceFile; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --path <value>         Server path query.
  --start-line <value>   Server startLine query.
  --line-count <value>   Server lineCount query.
  -h, --help             display help for command
```

### `commentary source-snapshot get --help`

```text
Usage: commentary source-snapshot get [options] <snapshotId>

getSourceSnapshot; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary source-snapshot publish --help`

```text
Usage: commentary source-snapshot publish|reference [options]

publishSourceSnapshot; scopes: commentary.source_snapshots.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary source-snapshot publish-directory --help`

```text
Usage: commentary source-snapshot publish-directory [options] <directory>

Freeze bounded local source bytes, resume their transfer, and publish an
uploaded-provenance snapshot.

Options:
  --file <path>            Source request JSON/YAML with uploaded reference and
                           repository Resource.
  --stdin                  Read the source request object.
  --idempotency-key <key>  Reuse for exact retries only.
  --correlation-id <id>    Request correlation ID.
  --dry-run                Collect and validate without upload or local metadata
                           writes.
  --no-open                Keep publication non-interactive.
  -h, --help               display help for command
```

### `commentary source-snapshot purge --help`

```text
Usage: commentary source-snapshot purge [options] <snapshotId>

purgeSourceSnapshot; scopes: commentary.source_snapshots.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

### `commentary source-snapshot reference --help`

```text
Usage: commentary source-snapshot publish|reference [options]

publishSourceSnapshot; scopes: commentary.source_snapshots.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary source-snapshot search --help`

```text
Usage: commentary source-snapshot search [options] <snapshotId>

searchSourceSnapshot; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --file <path>          JSON/core YAML request.
  --stdin                Read request from standard input.
  -h, --help             display help for command
```

### `commentary source-snapshot threads --help`

```text
Usage: commentary source-snapshot threads [options] [command]

Options:
  -h, --help                     display help for command

Commands:
  list [options] <snapshotId>    listSourceReviewThreads; scopes:
                                 commentary.source_snapshots.read.
  mutate [options] <snapshotId>  mutateSourceReviewThread; scopes:
                                 commentary.comments.write,
                                 commentary.source_snapshots.read.
  repair [options] <snapshotId>  repairSourceReviewThreads; scopes:
                                 commentary.comments.write,
                                 commentary.source_snapshots.read.
  help [command]                 display help for command
```

#### `commentary source-snapshot threads list --help`

```text
Usage: commentary source-snapshot threads list [options] <snapshotId>

listSourceReviewThreads; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --path <value>         Server path query.
  --cursor <value>       Server cursor query.
  -h, --help             display help for command
```

#### `commentary source-snapshot threads mutate --help`

```text
Usage: commentary source-snapshot threads mutate [options] <snapshotId>

mutateSourceReviewThread; scopes: commentary.comments.write,
commentary.source_snapshots.read.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary source-snapshot threads repair --help`

```text
Usage: commentary source-snapshot threads repair [options] <snapshotId>

repairSourceReviewThreads; scopes: commentary.comments.write,
commentary.source_snapshots.read.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary source-snapshot tree --help`

```text
Usage: commentary source-snapshot tree [options] <snapshotId>

getSourceTree; scopes: commentary.source_snapshots.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --path <value>         Server path query.
  -h, --help             display help for command
```

## `commentary evidence --help`

```text
Usage: commentary evidence [options] [command]

Caller reports and independent verification receipts remain distinct.

Options:
  -h, --help                                            display help for command

Commands:
  attach [options]                                      attachProjectEvidence; scopes: commentary.evidence.write.
  requirements
  claims
  get [options] <evidenceId>                            getProjectEvidence; scopes: commentary.evidence.read.
  list [options]                                        listProjectEvidence; scopes: commentary.evidence.read.
  reconcile [options] <evidenceId>                      updateProjectEvidence; scopes: commentary.evidence.write.
  archive [options] <evidenceId>                        archiveProjectEvidence; scopes: commentary.evidence.write.
  history [options] <evidenceId>                        listProjectEvidenceHistory; scopes: commentary.evidence.read.
  link [options] <evidenceId>                           linkProjectEvidence; scopes: commentary.evidence.write.
  report [options] <evidenceId>                         readProjectEvidenceReport; scopes: commentary.evidence.read.
  export [options]                                      exportProjectEvidence; scopes: commentary.evidence.read.
  import [options]                                      importProjectEvidence; scopes: commentary.evidence.write.
  request-verification [options] <evidenceId>           requestProjectVerification; scopes: commentary.evidence.verify.
  read-results [options] <evidenceId> <verificationId>  getProjectVerification; scopes: commentary.evidence.read.
  verification
  help [command]                                        display help for command
```

### `commentary evidence archive --help`

```text
Usage: commentary evidence archive [options] <evidenceId>

archiveProjectEvidence; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence attach --help`

```text
Usage: commentary evidence attach [options]

attachProjectEvidence; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence claims --help`

```text
Usage: commentary evidence claims [options] [command]

Options:
  -h, --help                   display help for command

Commands:
  create [options]             createProjectClaim; scopes:
                               commentary.evidence.write.
  get [options] <claimId>      getProjectClaim; scopes:
                               commentary.evidence.read.
  list [options]               listProjectClaims; scopes:
                               commentary.evidence.read.
  update [options] <claimId>   updateProjectClaim; scopes:
                               commentary.evidence.write.
  archive [options] <claimId>  archiveProjectClaim; scopes:
                               commentary.evidence.write.
  help [command]               display help for command
```

#### `commentary evidence claims archive --help`

```text
Usage: commentary evidence claims archive [options] <claimId>

archiveProjectClaim; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary evidence claims create --help`

```text
Usage: commentary evidence claims create [options]

createProjectClaim; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary evidence claims get --help`

```text
Usage: commentary evidence claims get [options] <claimId>

getProjectClaim; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --revision-id <value>  Server revisionId query.
  -h, --help             display help for command
```

#### `commentary evidence claims list --help`

```text
Usage: commentary evidence claims list [options]

listProjectClaims; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --context <value>      Server context query as a JSON object.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --archived <value>     Server archived query.
  --search <value>       Server search query.
  -h, --help             display help for command
```

#### `commentary evidence claims update --help`

```text
Usage: commentary evidence claims update [options] <claimId>

updateProjectClaim; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence export --help`

```text
Usage: commentary evidence export [options]

exportProjectEvidence; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --context <value>      Server context query as a JSON object.
  -h, --help             display help for command
```

### `commentary evidence get --help`

```text
Usage: commentary evidence get [options] <evidenceId>

getProjectEvidence; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --revision-id <value>  Server revisionId query.
  -h, --help             display help for command
```

### `commentary evidence history --help`

```text
Usage: commentary evidence history [options] <evidenceId>

listProjectEvidenceHistory; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  -h, --help             display help for command
```

### `commentary evidence import --help`

```text
Usage: commentary evidence import [options]

importProjectEvidence; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence link --help`

```text
Usage: commentary evidence link [options] <evidenceId>

linkProjectEvidence; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence list --help`

```text
Usage: commentary evidence list [options]

listProjectEvidence; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --context <value>      Server context query as a JSON object.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --archived <value>     Server archived query.
  --search <value>       Server search query.
  -h, --help             display help for command
```

### `commentary evidence read-results --help`

```text
Usage: commentary evidence read-results [options] <evidenceId> <verificationId>

getProjectVerification; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

### `commentary evidence reconcile --help`

```text
Usage: commentary evidence reconcile [options] <evidenceId>

updateProjectEvidence; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence report --help`

```text
Usage: commentary evidence report [options] <evidenceId>

readProjectEvidenceReport; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --revision-id <value>  Server revisionId query.
  -h, --help             display help for command
```

### `commentary evidence request-verification --help`

```text
Usage: commentary evidence request-verification [options] <evidenceId>

requestProjectVerification; scopes: commentary.evidence.verify.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence requirements --help`

```text
Usage: commentary evidence requirements [options] [command]

Options:
  -h, --help                         display help for command

Commands:
  create [options]                   createProjectRequirement; scopes:
                                     commentary.evidence.write.
  get [options] <requirementId>      getProjectRequirement; scopes:
                                     commentary.evidence.read.
  list [options]                     listProjectRequirements; scopes:
                                     commentary.evidence.read.
  update [options] <requirementId>   updateProjectRequirement; scopes:
                                     commentary.evidence.write.
  archive [options] <requirementId>  archiveProjectRequirement; scopes:
                                     commentary.evidence.write.
  help [command]                     display help for command
```

#### `commentary evidence requirements archive --help`

```text
Usage: commentary evidence requirements archive [options] <requirementId>

archiveProjectRequirement; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary evidence requirements create --help`

```text
Usage: commentary evidence requirements create [options]

createProjectRequirement; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

#### `commentary evidence requirements get --help`

```text
Usage: commentary evidence requirements get [options] <requirementId>

getProjectRequirement; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --revision-id <value>  Server revisionId query.
  -h, --help             display help for command
```

#### `commentary evidence requirements list --help`

```text
Usage: commentary evidence requirements list [options]

listProjectRequirements; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  --context <value>      Server context query as a JSON object.
  --cursor <value>       Server cursor query.
  --limit <value>        Server limit query. (default: "25")
  --archived <value>     Server archived query.
  --search <value>       Server search query.
  -h, --help             display help for command
```

#### `commentary evidence requirements update --help`

```text
Usage: commentary evidence requirements update [options] <requirementId>

updateProjectRequirement; scopes: commentary.evidence.write.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  --file <path>            JSON/core YAML request.
  --stdin                  Read request from standard input.
  -h, --help               display help for command
```

### `commentary evidence verification --help`

```text
Usage: commentary evidence verification [options] [command]

Options:
  -h, --help                                                    display help for command

Commands:
  cancel [options] <evidenceId> <verificationId>                cancelProjectVerification; scopes: commentary.evidence.verify.
  retry [options] <evidenceId> <verificationId>                 retryProjectVerification; scopes: commentary.evidence.verify.
  artifact [options] <evidenceId> <verificationId> <contentId>  downloadProjectVerificationArtifact; scopes: commentary.evidence.read.
  help [command]                                                display help for command
```

#### `commentary evidence verification artifact --help`

```text
Usage: commentary evidence verification artifact [options] <evidenceId> <verificationId> <contentId>

downloadProjectVerificationArtifact; scopes: commentary.evidence.read.

Options:
  --correlation-id <id>  Request correlation ID.
  -h, --help             display help for command
```

#### `commentary evidence verification cancel --help`

```text
Usage: commentary evidence verification cancel [options] <evidenceId> <verificationId>

cancelProjectVerification; scopes: commentary.evidence.verify.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```

#### `commentary evidence verification retry --help`

```text
Usage: commentary evidence verification retry [options] <evidenceId> <verificationId>

retryProjectVerification; scopes: commentary.evidence.verify.

Options:
  --correlation-id <id>    Request correlation ID.
  --etag <etag>            Exact strong ETag from the prior read.
  --idempotency-key <key>  Reuse for an exact retry only.
  -h, --help               display help for command
```
