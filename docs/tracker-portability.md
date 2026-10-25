# Export, import and recover Git-backed Trackers

## Canonical portability

Export an authorized Tracker to canonical JSON. IDs, schema hashes, order, archive markers and version metadata survive; credentials and writable acceptance/verification do not. JSON and core YAML normalize to the same contract identity. Use an explicit clone to create independent records or an explicit reconciliation into a destination. Preview first, inspect diagnostics, then apply with exact versions and a retry key. Import checkpoints are bounded, atomic and cancelable; retry an unchanged intent with the original key, and use a fresh key after changing intent. Never imply that importing a receipt reference imports a human Decision.

The Git layout contains commentary-tracker.yaml, schema.yaml, views/<stable-view-id>.yaml and records/<stable-record-id>.json. A downloaded export is data, not an instruction to fetch arbitrary URLs or run code.

## Choose authority explicitly

In Commentary mode, mutations save to Commentary. In Git mode, records materialize an authorized exact commit and edits become proposals until source confirmation. UI distinguishes **Saved to Commentary**, **Pending Git commit**, and **Committed**. Switching authority uses a transfer preview and requires a ready provider-confirmed source snapshot, exact base commit and tracker path, validated export, destination/base confirmation, expected current version and an explicit human-controlled authority change. Keep the old source and export for rollback; do not flip authority because a provider request merely returned successfully.

## Conflicts and provider recovery

GitHub writeback needs tracker write, separate commentary.trackers.writeback consent, approved binding and current provider write authority. The normal read-only GitHub App does not gain permissions. Azure supports authorized reads/imports/source/CI observations; writes return unsupported_provider_write without dispatch.

In Tracker settings under **Data & sync**, the Git sync drawer shows the confirmed source and retained proposal status. Refresh and confirm the source explicitly. For a retained proposal, inspect diagnostics and download the retained proposal when needed; reconcile against the pinned base, compare base/current/proposed values, and apply explicit conflict choices. A published branch is still pending until the provider merge is followed by a refresh confirming the exact source commit. Proposals pin the base SHA and record hashes. Three-way merge accepts disjoint changes and surfaces overlapping conflicts; it never force-pushes. Deleted refs, rewritten history, throttling, revoked access and partial writes retain recovery state. Retry/refresh/status are distinct from authority confirmation. Workers use bounded leases and recheck access before provider I/O.

For CLI conflicts, private .commentary/conflicts files preserve request/ETag/key/identity without credentials. Read the current version, reconcile, then use a new retry key for changed intent. Do not commit recovery files or private source data. See [quickstarts](projects-quickstarts.md) and [compatibility](projects-compatibility.md).
