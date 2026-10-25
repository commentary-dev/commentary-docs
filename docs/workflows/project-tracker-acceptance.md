---
title: Coordinate project work and preserve human acceptance
description: Organize resources and execution in a Project and Tracker while keeping evidence, verification, and human acceptance distinct.
slug: workflows/project-tracker-acceptance
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 8
---


Use a Project to align an initiative around a goal, desired outcomes, deliverables, reviews, and evidence. Use a Tracker when the work needs typed records and more than one useful view. Both are optional; neither changes the access rights or lifecycle of linked resources.

## Create the Project

1. Open **Coordinate → Projects** in the workspace where the initiative belongs.
2. Select **New project**, write the goal and desired outcomes, and optionally choose an editable template.
3. Decide who may see the Project. Add workspace members before project participation; project participation is a separate permission.
4. In **Overview**, keep the authored goal and blockers visible. Use **Contents** to link original resources and **Reviews & guides** for review sessions and individual artifacts.

Example: create “Checkout latency reduction” with outcome “p95 checkout latency below 500 ms,” then link the design review, API change, and benchmark report. The Overview should show the goal and outcome; Contents shows the original linked resources rather than copies.

Link existing Reviews, Guides, Forms, Research, or other resources as appropriate. Linking creates an association; it does not copy the resource or grant access to its source. Users who cannot access a linked object should not see its title or metadata.

## Track execution without manufacturing acceptance

Create or link a Tracker with typed fields suited to the work. A checklist can use a boolean or explicit completion status; a board needs a status/enum grouping field; calendar and timeline views need dates. Keep execution fields honest: a task being `done` is not proof that its evidence is verified or accepted by a human.

Add source-backed evidence to the Project's **Evidence** collection and inspect it through the evidence inspector. Record what was observed, how it was checked, and who accepted the outcome as separate facts. Avoid creating user fields that impersonate trusted verification or human acceptance.

## Review and close out

1. Open the relevant review or Review guide and discuss the exact source.
2. Record decisions and their applied revisions using [the decision workflow](reach-a-human-decision.md).
3. Capture evidence in the Project and verify that the linked source remains accessible to the intended audience.
4. Complete Tracker execution when the work is done.
5. Mark Project lifecycle complete only when that administrative state is accurate. Completion does not itself create acceptance or verification.

Expected result: people can see the initiative, execution, source evidence, review discussion, and authorized acceptance without conflating them. If a link is inaccessible, ask its owner to grant source access; adding Project participants alone cannot repair provider permissions.

Next: [Project workflow details](../use/projects.md), [Tracker views](../use/trackers.md), or [Research Studies](run-a-research-study.md).
