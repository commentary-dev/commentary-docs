---
title: Automate Projects and Trackers
description: Use scoped agent transports with typed workspace records, exact versions, and explicit recovery after conflicts.
slug: build/projects-trackers
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 7
---


Projects, Trackers, Review packages, Project Review Sessions, source snapshots, and evidence are available through authenticated HTTP and grouped MCP tools. Discover deployed capabilities before sending writes; the server checks scopes, workspace grants, resource authorization, and versions independently.

## Prepare the client

Use a token targeted to the correct account or workspace flow and include the exact scopes for the object family. Project read/write, Tracker read/write/writeback, package, Project Review Session, snapshot, and evidence scopes are distinct. Agent workspace binding and original source authority remain additional checks.

## Write with version context

1. Read the object and current ETag/version.
2. Send one typed action with the exact resource identity.
3. Include the required `If-Match` and stable idempotency key where declared.
4. On conflict, keep the intended change, reload current state, reconcile, and create a fresh write intent.
5. For bulk imports or portable contracts, preview first and retain diagnostics.

Tracker fields are typed and reference resolution is permission-checked; a record ID does not grant access. Use contract fixtures and preserve stable field IDs. Defaults apply to absent values at creation, not old records. Do not model trusted human acceptance or verification as agent-authored fields.

## What automation cannot infer

An Agent grant does not make the agent a human manager or reviewer. It cannot grant source access, manufacture human decisions, clear a human's blocker, or claim verified evidence. Git writes require independent provider write authority. Human Decisions and personal visits retain browser authority.

See [Project and Tracker usage](../use/projects.md), [the end-to-end acceptance workflow](../workflows/project-tracker-acceptance.md), and [generated operation contracts](https://commentary.dev/docs/reference/api-operations).
