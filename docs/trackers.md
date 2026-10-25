# Create and use Trackers

Trackers hold typed records with stable identities. They can stand alone or link to Projects. Native views share the same records; saving a view does not copy data. Core organization, native views and portability are Free.

## Start with a portable contract

Download the equivalent [JSON checklist](examples/checklist.json) or [YAML checklist](examples/checklist.yaml). They are canonical app fixtures, validated by the real Tracker parser. Create from that contract in the selected workspace, then add a record with values:

~~~json
{"title":"Review the release note","done":false}
~~~

Contract v1 declares kind commentary_tracker, contractVersion 1, name, stable field IDs and views. Labels may change without renaming field identity. Supported types include text/Markdown, finite numbers, booleans, choices/status/priority, dates/instants, actor/record/Resource/artifact references and bounded metadata. References resolve through current authorization; an identifier grants no access.

Defaults apply only to absent fields at creation. Partial patches preserve omitted fields; use an explicit unset list to clear optional fields. Null is not clearing. Required values cannot be unset; false and zero remain valid values. Dates are ISO calendar dates; datetimes carry an RFC3339 offset. Never create user fields that impersonate acceptance, Decisions or trusted verification.

## Choose a native view

| View | Required mapping / behavior |
| --- | --- |
| Checklist | title + completed boolean, or explicit status completion values |
| List / Table | title; Table may map display fields and edit typed values |
| Board | title + enum/status group; status/rank edits use conditional versions |
| Timeline | date or start/end; explicit timezone |
| Calendar | date; explicit timezone |
| Gantt | title/start/end/dependencies; no cascade rescheduling |
| Summary | execution plus optional read-only acceptance dimension |

Shared and personal saved views may configure bounded filters, sorting, grouping, visible fields and density. Incompatible mappings return diagnostics instead of an empty successful view. Unscheduled records remain visible in the appropriate lane. Native record editing retains your draft on a version conflict and offers **Load latest version** so you can compare changed fields before reconciling. View-order conflicts show the intended move beside the current authoritative placement, with controls to reload or choose a new move. Schema conflicts keep the entered schema and require loading the current schema before a new preview. Import conflicts retain the blocked entries and require refreshing the preview against current data. Do not retry changed intent as though it were the same write. Preview date changes before committing; schedule dependency cycles are rejected.

## Evolve schema safely

Preview a schema change before applying. Stable IDs preserve labels/history; required additions, removals, type/default changes and affected mappings may require explicit bounded transformations. Apply against the expected schema and record versions. Inspect retained old values/revisions, repair invalid saved-view mappings, and restart a conflicted checkpoint after reconciliation. Defaults do not retroactively populate old records.

Ceilings include 100 fields, 100 options per choice field, 64 KiB record values and 100 records per bulk operation. Errors name safe field paths without echoing secrets. Unknown keys, executable expressions, unsafe prototype keys and malformed references are rejected. See [portability and Git recovery](tracker-portability.md), [embeds and renderers](tracker-renderers.md), and [API actions](api/agent-capability-matrix.md).
