---
title: Resume review progress
description: Mark files and sections reviewed and return to changed content using your own saved review state.
slug: use/review-progress
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 7
---


Use review progress when a PR or branch review spans several files or sessions. Mark a file or supported section reviewed as you work, then return to the progress view to find unfinished or changed-since-reviewed material.

Progress belongs to the reviewer. It does not alter provider state or determine whether a review has been submitted. For PRs, the provider review event remains a separate final action. For branch documents, comments remain app-native.

The progress API is read-only for API and MCP clients; agents can inspect progress but do not mutate a human's progress through that read path. Continue with [PR reviews](pull-requests.md) or [branch reviews](branch-reviews.md).
