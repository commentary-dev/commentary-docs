---
title: Integrate with Research Studies
description: Read or participate in Research Study workflows using authorized API and MCP capabilities.
slug: build/research-studies
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 8
---


Research integrations use `/api/v2/research-studies` and MCP capability `commentary_research` version 2. The contract marker is `commentaryResearch: 2`; the former v1 route is retired and returns `410 Gone` during its compatibility window. There is no automatic v1 conversion.

Use `commentary.research.read` and `.write` only for the permitted study data and agent participation. They do not grant owner-only authoring, launch authority, or provider access. Reads expose authorized studies, sessions, results, steps, and events. External agent intervention can reply or ask a follow-up on the active workflow step when allowed.

Evidence and interventions are tied to `stepId` and `stepRunId`, so preserve them when reading or submitting context. A study launch pins participants to an immutable workflow revision. Do not write to a database projection instead of the source-authorized protocol flow.

Research Studies are Pro preview and usable during the no-billing phase. See [run a study](../workflows/run-a-research-study.md), [generated API operations](https://commentary.dev/docs/reference/api-operations), and [MCP tools](https://commentary.dev/docs/reference/mcp-operations).
