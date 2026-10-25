# Review an implementation with source and evidence

Start a [package](review-packages.md) with intent, design alternatives, constraints, tradeoffs and residual risk. Explain architecture with accessible rendered diagrams and source links. Add a [Session](project-review-sessions.md) selecting exact deliverables; keep source inspection a secondary tool within the same reading shell.

## Pin and inspect source

Source Snapshots capture an exact authorized provider commit or bounded uploaded source tied to an authorized repository. Uploaded source retains uploaded provenance; it does not claim provider confirmation. Default capture selects review/evidence files; broader capture is explicit and bounded. Retention is independent of PR closure/merge. Open `/review/source/{snapshotId}` for a lazy tree, bounded file windows and search. If capture is partial, failed or canceled, a manager can retry the remaining capture or cancel an eligible in-progress capture; already captured files remain available. Refresh capture status before choosing a new action after a version conflict, and restore source access before retrying a revoked-access failure. Uncaptured, deleted, purged and inaccessible content remain explicit; no latest-branch fallback is allowed.

Source anchors include snapshot, path, blob hash, range/text/context and optional explicit symbol. Native threads remain app-only without a defensible PR mapping. Exact/mapped/uncertain/unresolved placement is visible; only exact placement is silently retained. After changes, use conservative resumable repair and inspect uncertain mappings instead of moving comments to guessed code.

## Map architecture and APIs

Architecture/API occurrences link authored diagram/component/page anchors to exact source and evidence relations. Relationships are attributed explanations; symbols and impact are heuristics unless independently supported. Native occurrence discussion, historical mapping and safe return to the rendered page preserve context. A diagram link does not bypass source permissions or establish that an implementation satisfies a requirement.

## Review the argument

Define versioned requirements and attach attributed claims with exact supporting targets. Use [evidence](project-evidence.md) to distinguish supplied reports from independent observations. Inspect the provider/run/commit scope of a passing result, note untested paths, and retain failed/unknown/revoked outcomes. Request a [human Decision](project-acceptance.md) for the precise deliverable/action; an agent may report execution but cannot accept its work.

A correction publishes new immutable artifacts and a new Session composition. Explain material differences against the saved exact baseline. Retained source stays under current source authority even after a PR closes. See [skills](agent-skills.md) for walkthrough/review practice and [quickstarts](projects-quickstarts.md) for transports.
