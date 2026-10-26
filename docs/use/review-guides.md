---
title: Review guides
description: Compose a versioned walkthrough from exact deliverables and keep guide discussion scoped to the source it reviewed.
slug: use/review-guides
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

A Review guide brings ordered deliverables into one document-first reading flow. Create it from **Reviews & guides** in a Project or the relevant workspace, choose a purpose and version, then add exact ready package, document, source, or other supported immutable revisions.

## Compose a reliable guide

1. Write a short purpose that helps a reviewer understand why the guide exists.
2. Add only source targets the intended reviewers can access. Each target records its Resource reference, revision, and digest; a mutable branch URL or `latest` pointer is not an exact identity.
3. Order the contents for the reader. Publish a composition when the set or order changes. The published manifest is immutable; choosing another target revision creates a new composition.
4. Review the guide in its ordered reading shell. Use Previous/Next or Contents to move between items. Keep Preview/Raw independent from the selected target version.
5. Use Questions for discussion tied to the guide composition or exact artifact. Investigations are assigned work through Interactions, not a second conversation history.

Questions preserve original context. Updating or detaching an item does not retarget old comments. Reading and replying checks current access again; inaccessible source history is withheld. New artifact-scoped questions require the active composition.

## Revise and accept

Read the current guide manifest before editing. Make corrected source artifacts first, revise only affected targets, and preserve unaffected pinned revisions. If an earlier Decision was tied to the old manifest, it remains historical and does not carry to the new composition. Request exact human acceptance against the complete new target set when required.

The ordinary UI calls this a **Review guide**; the API/domain uses Project Review Session and routes such as `/api/project-review-sessions`. See [exact acceptance](../workflows/request-exact-acceptance.md), [Project coordination](../workflows/project-tracker-acceptance.md), and [generated API operations](https://commentary.dev/docs/reference/api-operations).
