---
title: Trackers
description: Define typed records and choose checklist, list, board, table, calendar, timeline, Gantt, or summary views.
slug: use/trackers
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 12
---


A Tracker stores typed records that can be viewed in multiple layouts without copying data. Create one under **Coordinate → Trackers**, name it, define a schema, and add a record or import a portable bundle. Field IDs are stable identities; labels can change without changing a field's identity. A schema preview shows affected records and saved-view mappings before applying a change.

Supported contract v1 field types include text and Markdown, finite numbers, booleans, choices/status/priority, dates and instants, actor/record/Resource/artifact references, and bounded metadata. A reference is resolved against current authorization; its identifier does not grant access. Defaults apply only when a new record omits a field; schema changes do not retroactively populate old records.

| View | Helpful fields |
| --- | --- |
| Checklist | title and completed boolean/status |
| List or Table | title and typed display fields |
| Board | title and enum/status grouping |
| Calendar | date and timezone |
| Timeline | date or start/end and timezone |
| Gantt | title, dates, dependencies |
| Summary | execution plus optional read-only acceptance dimension |

Saved views can be personal or shared. Configure bounded filters, sorting, grouping, visible fields, and density for the task. Use List or Table for detailed records, Board for status flow, calendar/timeline for dated work, and Gantt when dependencies matter. Unscheduled records remain visible in the relevant lane. Incompatible mappings return diagnostics instead of an empty-looking view.

Use explicit timezone for date-axis views. Unscheduled records remain visible. A dependency cycle is rejected; date changes should be previewed before commit. Conditional writes use current versions; on a conflict, load the latest record or schema, compare the changed fields, and reconcile before retrying.

Defaults apply to absent fields at record creation. A partial patch preserves omitted values; use the explicit unset mechanism to clear an optional field. `null` is not a clear operation, and `false` or `0` are valid values. Keep execution status separate from evidence verification and human acceptance.

## Keep edits and schema changes recoverable

Record updates use the record's current version. If another editor changed it, the draft is retained; load the latest version, compare the fields, and reconcile before saving. A view-order conflict shows the intended move beside the current placement. A schema conflict keeps the entered schema draft; load current schema and preview again. Import conflicts keep blocked entries so you can refresh the preview. Do not reuse a retry key for changed intent.

Schema evolution is a preview-and-apply flow. Stable IDs preserve value history. Adding a required field, removing or changing a type, changing defaults, or altering a mapping may require an explicit bounded transformation. Apply against expected schema and record versions, inspect retained old values/revisions, repair invalid view mappings, then resume a conflicted checkpoint. Limits include 100 fields, 100 options per choice field, 64 KiB of record values, and 100 records per bulk operation.

## Portability and Git source

Export an authorized Tracker as canonical JSON or core YAML. The portable bundle includes stable IDs, schema hashes, order, archive markers, and version metadata; it excludes credentials and writable acceptance/verification. Preview import, inspect diagnostics, choose clone or reconciliation, then apply against exact versions. A receipt reference does not import a human Decision.

In Commentary mode, edits save to Commentary. In Git mode, the Tracker is materialized from an authorized exact commit and edits become proposals until source confirmation. The UI distinguishes **Saved to Commentary**, **Pending Git commit**, and **Committed**. Switching authority uses a transfer preview, a ready provider-confirmed source snapshot, an exact base commit and Tracker path, a validated export, and explicit human confirmation.

GitHub writeback requires separate writeback consent, an approved binding, and current provider write permission; the default GitHub App remains read-only. Azure DevOps supports authorized reads/imports/source and CI observations, not Tracker writes. A published branch remains pending until refresh confirms the exact source commit. The sync drawer retains proposals and diagnostics; reconcile against the pinned base, inspect base/current/proposed values, and choose explicit conflict resolutions. Three-way merge accepts disjoint changes, surfaces overlaps, and never force-pushes. Deleted refs, history rewrites, throttling, revocation, and partial writes keep recovery state.

## Embed a Tracker in a document

Use a declarative fenced block with an authorized Tracker and saved view:

~~~~markdown
```commentary-tracker
trackerId: tracker_123
viewId: schema:checklist
display:
  height: 480
  readOnly: true
```
~~~~

`height` is bounded from 240 to 800. `readOnly` narrows the embed UI only; the user's actual permissions still control access. Local scripts, arbitrary URLs, queries, and renderer overrides are rejected. Unauthorized embeds disappear without leaking private metadata. An invalid mapping returns a readable recovery state.

Historical documents label hydrated records **Live tracker** because they are mutable and exclude them from document acceptance. If these records belong in an exact approval target, export a bounded inert snapshot and publish it in an immutable revision.

For hosted or external custom rendering, see [Tracker renderer boundaries](../build/tracker-renderers.md). The Tracker SDK does not have a published npm package; do not add it as an install dependency.

Portable fixtures: [checklist JSON](../examples/checklist.json) and [checklist YAML](../examples/checklist.yaml). See [the workflow for preserving human acceptance](../workflows/project-tracker-acceptance.md) and [API reference](../reference/api.md).
