---
title: Projects
description: Organize an initiative around a goal, linked source resources, review guides, evidence, and lifecycle.
slug: use/projects
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 11
---


A Project coordinates an initiative; it does not replace the original Reviews, Forms, or other linked objects. Open **Coordinate → Projects** and select **New project**. Write a title, goal, desired outcomes, and optional background, then choose visibility and any participants.

Start empty or choose an editable template:

- Simple checklist
- PM feature initiative
- Product research / strategy
- Software implementation review
- Launch readiness
- Architecture review
- Agent-generated walkthrough

For a template, choose whether to include its editable Tracker and example records. Planned deliverables are suggestions; they do not create review artifacts. Software and Architecture review templates can also download a stakeholder-review ZIP with an overview and six audience pages, or a portable JSON template. Downloads create no Commentary resources.

Use the sections this way:

- **Overview:** authored goal, desired outcomes, blockers, and progress context.
- **Contents:** original resources grouped by role; titles open objects and separate options inspect associations.
- **Reviews & guides:** individual reviews and ordered Review guides.
- **Evidence:** a searchable evidence collection and bounded inspector.
- **Activity:** changes to the Project.
- **Settings:** visibility, participants, and lifecycle.

## Link and govern resources

Bring people into the workspace through Members before adding them to Project participation. Managers govern participation and lifecycle; contributors maintain authorized Project content; reviewers read and comment within their existing access. Registered agents need a workspace-bound Agent grant and do not govern human reviewer eligibility.

Use a Resource title to open the original object. Use its separate options to inspect or remove the association. A Resource may link to multiple workspaces or Projects without being copied. Linking does not grant source access: if a reader lacks authorization, the Resource is omitted, including its title, count, and revision. Related/implements relationships are associations only; they do not create an access hierarchy.

Search and lifecycle/visibility filters apply before pagination. **Recently changed** reflects shared changes; it is not personal visit history. Keep the selected section and filters in the URL when sharing a Project location.

## Change lifecycle safely

Completing a Project changes its lifecycle status; it does not imply human acceptance, verification, or evidence currency. Archive preserves linked Resources but blocks ordinary Project edits. An authorized manager can restore it. Unlink removes only the association and leaves the original Resource intact.

When two people edit concurrently, retain your local draft, load the latest Project version, compare the change, and explicitly reconcile before saving. Do not retry stale edits against a new version without reviewing the difference.

Filters apply before pagination. Search and continuation remain in the URL where applicable. See the [Project and Tracker workflow](../workflows/project-tracker-acceptance.md) and [exact human acceptance](../workflows/request-exact-acceptance.md).
