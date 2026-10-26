---
title: Pull request reviews
description: Open, read, comment on, and submit review work for GitHub and Azure DevOps pull requests.
slug: use/pull-requests
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 2
---


Commentary keeps the changed document readable while retaining file, change, and provider context. Use the [pull request workflow](../workflows/review-a-pull-request.md) for a complete first review.

## Read before you comment

Open a PR URL from the home page. Public GitHub PRs are readable without an account; private repositories and Azure DevOps require provider authorization. Single-file Markdown PRs open directly. Multi-file PRs include a collapsible file navigator.

Stay in **Preview → Document** for normal reading. Use **Raw** for exact source or **Changes** for a comparison. These are separate controls: selecting a version or comparison does not force the surface to Preview or Raw. Use Present for a meeting-friendly rendered view.

## Keep review state clear

Threads attach to semantic content or selected text. New PR threads are staged in Commentary as `provider_pending` until review submission. When ready, open **Submit review**, inspect what remains to sync, and choose Comment, Approve, or Request changes.

Use the change selector for an intentional question: all PR changes, a recorded update, a commit, or a custom comparison. If an exact range is unavailable, Commentary explains the unavailable state rather than silently substituting a wider range.

## Special cases

- When a GitHub PR is merged, keep the historical PR URL for its discussion or follow the offered redirect to a branch review of the PR's files.
- Markdown/MDX may include Mermaid, wikilinks, embeds, docs preview, or slide content; see [rendered content](rendered-content.md).
- Static HTML is sandboxed; scripts and unsafe active content do not run.
- Polls and Consensus are optional; neither is enabled by default for new reviews.

If a repository is missing, reauthorize provider access. If an annotation is pending, submit the review before expecting a provider review event.
