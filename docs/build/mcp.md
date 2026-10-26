---
title: Connect an MCP client
description: Configure an authenticated MCP client, discover tools on the deployment, and use server-owned authorization correctly.
slug: build/mcp
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 4
---


Commentary exposes MCP at `/mcp`. Tool listing and calls require bearer authentication. Create a scoped credential through [Developer access](developer-access.md), then configure your MCP client to use the Commentary endpoint and the token supported by that client.

## Authorize through device flow

For a client that can request a user-approved device grant, start at `/oauth/device/code`, show the returned user code, and ask the user to open `/device`. After approval, exchange the device code at `/oauth/token`. The user can review and revoke the grant in Developer access.

## Discover before calling

Tool availability and schemas can vary by deployed capability. Call `tools/list` on the target deployment and inspect each exact input before relying on a tool name or feature. Current tool families include review comments/documents/settings, drafts, Forms, Research, Inbox and Interactions, Live Preview Reviews, Projects, Trackers, Review packages/guides, and evidence.

The current MCP protocol version is `2026-07-28`; older retained clients may use JSON-RPC initialization. Use the version negotiation and headers required by the client and server response. Do not infer that an undocumented tool or input is available from a sample.

## Respect the boundary

MCP tools operate with the authenticated user's and agent's grants. They do not read local filesystem paths or fetch arbitrary URLs from arguments. Supply literal content. Use ETags/conditional versions and idempotency keys for writes when the tool declares them. Read server-returned gate status for decisions and do not fabricate human approval.

Exact input schemas are in [generated MCP operation reference](https://commentary.dev/docs/reference/mcp-operations); endpoint contracts are in the [HTTP API reference](https://commentary.dev/docs/reference/api-operations). See [agent skills](agent-skills.md) for portable workflows.
