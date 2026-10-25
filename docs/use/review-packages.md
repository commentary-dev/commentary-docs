---
title: Review packages
description: Share a rendered, versioned document walkthrough with private assets and native review comments.
slug: use/review-packages
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
---

A Review package is an immutable, rendered walkthrough built from text pages and private binary assets. It can be reviewed on its own or included as an exact target in a Review guide. Packages reuse document rendering, semantic anchors, and app-native threads; no Project or Tracker is required.

Open the package from the workspace or its review link. Use the entry page and in-package navigation to read the walkthrough, then comment on the relevant rendered page or section. Each published revision keeps its own manifest and discussion context. When a newer package is published, historical revisions remain readable and read-only for new comments. Preview/Raw and Document/Changes remain independent.

Package access follows the package owner/workspace and linked source authorization. A copied asset URL is not an access grant. Inaccessible pages or source files remain hidden. If a guide references a package, it pins the exact ready package revision; publishing a new package does not silently rewrite that guide.

See [publish a versioned package](../workflows/publish-review-package.md), [Review guides](review-guides.md), and [package integration](../build/review-packages.md).
