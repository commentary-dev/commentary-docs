---
title: Embed and render Trackers
description: Use declarative native embeds or understand the isolated hosted and external renderer boundaries.
slug: build/tracker-renderers
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

## Native Tracker embeds

Use a `commentary-tracker` fence inside Markdown or a package page to embed a saved view:

~~~~markdown
```commentary-tracker
trackerId: tracker_123
viewId: schema:checklist
display:
  height: 480
  readOnly: false
```
~~~~

Replace the IDs with the authorized Tracker and saved view. `viewId` can reference a stable saved view or a `schema:<key>` view. The optional version is `1`; height is bounded from 240 to 800. `readOnly` narrows UI controls but does not grant or revoke authorization.

The renderer accepts declarative configuration only. It rejects local scripts, URLs, arbitrary queries, and custom renderer overrides. Unauthorized embeds disappear without leaking private metadata; invalid field mappings return readable recovery information. Raw mode retains the literal fence.

Hydrated Tracker controls remain live even inside historical documents, so they are labeled **Live tracker** and do not become part of document acceptance. To include records in an exact accepted artifact, export the current bounded page as inert Markdown, publish it in an immutable revision, and explicitly add that revision to the Review guide.

## Custom renderer boundaries

Commentary supports registered hosted bundles and approved external renderer origins under their configured trust tier. A hosted bundle is published immutably through renderer registration and served from a separate cookieless gateway in an opaque sandbox with restrictive CSP and a nonce/window/channel-bound handshake. There is no application-origin dynamic fallback. Bundles must be built before registration; Commentary does not run customer npm, backend, or SSR builds.

Hosted renderers cannot use `eval`, service workers, WASM, or customer API calls. Each private asset and broker operation rechecks access. Mount withdrawal/reload/disconnect revokes the mount; Escape returns focus to the native view.

External renderer declarations require one exact approved HTTPS origin. Wildcards, arbitrary proxying, and private host access are rejected. A declaration digest identifies configuration but cannot guarantee that remote bytes stay immutable. In a hybrid Renderer, source/package/Tracker access remain separate checks.

The `@commentary-dev/tracker-sdk` package is not published to npm or CDN; do not add a package install or rely on a source-only SDK candidate. Use supported declarative embeds and the currently documented registration flow. If configuration or handshake fails, return to the native view, reload capabilities, and request only the missing explicit permission. Never send a host bearer token to the renderer.

Hosted/custom renderer and hosting features are Pro preview during the no-billing phase. See [Tracker usage](../use/trackers.md), [Projects and Tracker automation](projects-trackers.md), and [exact acceptance](../workflows/request-exact-acceptance.md).
