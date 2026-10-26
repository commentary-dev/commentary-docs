---
title: MCP reference overview
description: Understand MCP version negotiation, deployed tool discovery, authentication, and the exact generated tool schemas.
slug: reference/mcp
section: reference
contentType: reference
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 3
---


Commentary's MCP endpoint is `/mcp`. All tool listing and calls require bearer authentication, including discovery. Current deployments support MCP `2026-07-28`; retained clients can use JSON-RPC initialization where supported. Follow the server's negotiated protocol and required headers.

Tool discovery on your deployment is authoritative. Current tool families cover profile and Inbox tasks, Interactions, Forms, Research, provider access, Draft Reviews, comments and review documents, Live Preview Reviews, collaboration settings/polls/gates, Knowledge Brain, Projects, Trackers, packages, Project Review Sessions, codebase reviews, and evidence. Older one-off draft/comment tools have been consolidated.

For exact inputs and outputs, use the [generated tool reference](https://commentary.dev/docs/reference/mcp-operations), not an example copied from a different deployment. The [MCP setup guide](../build/mcp.md) explains authorization. The [HTTP API reference](https://commentary.dev/docs/reference/api-operations) describes corresponding endpoints where available.

MCP grants do not imply agent workspace participation, provider repository access, human management authority, or permission to send messages. Literal content is required where an operation accepts content; Commentary does not read local paths from an agent's machine.
