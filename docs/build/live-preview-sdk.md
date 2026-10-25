---
title: Live Preview Review SDK
description: Connect a browser app you own to embedded and standalone Commentary Live Preview Reviews.
slug: build/live-preview-sdk
section: build
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 5
---


The published browser package is `@commentary-dev/review-sdk` version **0.3.3**. It is a browser and DOM integration for an app you own; load it only in a review or preview build. It supports selected-element comments when running inside an authorized Live Preview Review.

## Install and initialize

```bash
npm install @commentary-dev/review-sdk@0.3.3
```

Set the parent origin before loading the SDK. Include only origins you intend to trust:

```ts
if (import.meta.env.VITE_COMMENTARY_REVIEW === "true") {
  window.__COMMENTARY_PARENT_ORIGIN__ = "https://commentary.dev";
  window.__COMMENTARY_PARENT_ORIGINS__ = ["https://commentary.dev"];
  window.__COMMENTARY_COMMIT_SHA__ = import.meta.env.VITE_COMMIT_SHA;
  window.__COMMENTARY_BUILD_ID__ = import.meta.env.VITE_BUILD_ID;
  await import("@commentary-dev/review-sdk");
}
```

The CDN alternative is `https://cdn.commentary.dev/review-sdk/latest/commentary-review-sdk.js`. Set the same globals in a preceding script tag. Optional `data-commentary-component` and `data-commentary-source` attributes make an element easier to identify.

## Configure delivery

Embedded previews need a narrow host policy such as `Content-Security-Policy: frame-ancestors https://commentary.dev`. New-tab reviews also need the app to allow `frame-src https://commentary.dev` for the isolated Commentary overlay. Test the policy in a preview environment; do not broadly remove production security headers.

The SDK uses a strict `postMessage` bridge. Commentary does not inspect `iframe.contentWindow.document`. Selected-element context is bounded: route, selectors, accessible name, short text, geometry, viewport, and optional build/source metadata. It does not store DOM dumps, cookies, browser storage, input values, or raw app HTML.

## Verify and recover

1. Create a deployed HTTPS Live Preview Review or run a localhost review from the same browser.
2. Confirm the SDK connection state appears in the review.
3. Switch to Comment and select a rendered element; verify the composer opens outside the app frame.
4. Switch to Interact and confirm the app works normally.
5. If selection fails, check the SDK is loaded in the current build, the configured parent origin matches, and CSP allows the chosen delivery mode.

When the SDK is unavailable, use screenshot feedback for a framed preview. It records only the explicitly selected cropped region and cannot recover DOM selectors. Localhost is loaded directly in the reviewer browser and cannot be shared as a working target.

**Package availability:** `@commentary-dev/agent-sdk` does not have a published npm package. Do not use `npm install` for it. Use the public HTTP API and MCP contracts instead. See [the Live Preview workflow](../workflows/review-a-live-preview.md).
