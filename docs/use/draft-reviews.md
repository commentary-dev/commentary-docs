---
title: Draft reviews
description: Create a private review for content that is not in Git and understand revision, sharing, and publication boundaries.
slug: use/draft-reviews
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
order: 5
---


Draft Reviews let signed-in users collaborate on local, generated, or pre-branch content. Create one in **New review → Document review**, then paste or upload Markdown, MDX, HTML, plain text, Form Contracts, or supported visual artifacts.

Each upload creates an immutable revision. Reviewers can comment, reply, resolve, and reopen threads on the current revision; older revisions remain readable but are read-only. Partial uploads carry omitted files forward. You can optionally attach a GitHub base to establish comparison context; this does not create a branch or grant Git write access.

Use **Draft actions** to copy the link or session id, share, download the latest file, change the GitHub base, or delete. Owners can create anyone-link or user-targeted share grants and revoke them. A shared recipient must sign in before private content is shown. Shared reviewers cannot change the draft's source, delete it, reshare it, or see hidden Git base metadata.

The [CLI](../build/cli-draft-reviews.md) is useful when local files are the editing surface. Commentary does not read a local path or fetch an arbitrary URL supplied by an agent. A Draft Review never creates a provider branch, commit, PR, or provider review comment. Download or pull the content and use your normal Git workflow when it is ready.

For a complete edit-and-revise loop, see [review a local draft](../workflows/review-a-local-draft.md). For deletion behavior, deleted draft content disappears from active review surfaces immediately and active Commentary storage is purged within 24 hours.
