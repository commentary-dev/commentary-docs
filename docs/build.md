---
title: Build with Commentary
description: Developer guides for CLI, tokens, APIs, MCP, browser integrations, Forms, webhooks, and agent skills.
slug: build
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 1
---


Use the transport that matches your environment. The CLI sends local file content to Draft Reviews. The HTTP API and MCP expose authenticated server operations. Browser SDKs connect an app you own to a live review or Form bridge.

- [Full CLI reference](build/cli.md)
- [CLI Draft Review walkthrough](build/cli-draft-reviews.md)
- [Developer access and API tokens](build/developer-access.md)
- [HTTP API overview](reference/api.md)
- [MCP clients](build/mcp.md)
- [Review SDK for live previews](build/live-preview-sdk.md)
- [Forms contracts and SDK bridge](build/forms.md)
- [Projects, Trackers, and evidence](build/projects-trackers.md)
- [Embed and render Trackers](build/tracker-renderers.md)
- [Publish Review packages](build/review-packages.md)
- [Research Studies integration](build/research-studies.md)
- [Agent skills](build/agent-skills.md)
- [Outbound webhooks](build/webhooks.md)

## Before automating

Create credentials deliberately, use the smallest scope and target, and pass literal content rather than a local path or arbitrary URL. API and MCP data does not grant provider permission or human decision authority. Read the exact operation schema before writing; conditional versions and idempotency keys are part of several mutation contracts.

