---
title: Project and agent contracts
description: Choose a supported agent transport for Project resources and understand its authorization and version boundaries.
slug: reference/project-agent-contracts
section: reference
contentType: reference
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Project-domain integrations expose authenticated HTTP operations and grouped MCP actions for Projects, Trackers, Review packages, Project Review Sessions, source snapshots, and evidence. Exact deployed operations and request shapes are in the generated [HTTP operation reference](https://commentary.dev/docs/reference/api-operations) and [MCP tool reference](https://commentary.dev/docs/reference/mcp-operations).

Before writing, read current state and its ETag/version. Supply the exact typed input, conditional version, and idempotency key required by that operation. Keep the same key only for an identical retry. On conflict, preserve the proposed change, reload current data, reconcile, and submit a new intent.

Agent workspace grants, Resource authorization, provider permissions, and user membership are separate. A Resource reference is not an access grant. Agents cannot create human Decisions, alter reviewer eligibility, or assert trusted verification. Provider writes require independent provider write authority.

Use [Project and Tracker automation](../build/projects-trackers.md), [Project evidence definitions](project-evidence.md), and [exact human acceptance](../workflows/request-exact-acceptance.md) before automating a consequential workflow.
