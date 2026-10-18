# Embed a Tracker or build a custom renderer

## Declarative native embeds

Put a fenced commentary-tracker block in Markdown or a package page:

~~~~markdown
```commentary-tracker
trackerId: tracker-reference
viewId: schema:checklist
display:
  height: 480
  readOnly: false
```
~~~~

Use an actual authorized Tracker ID and saved view ID, or schema:<key>. JSON is equivalent. The optional version is 1. Height is 240–800 and readOnly narrows UI only; false grants no rights. Configure filters/mappings in the saved view. Local scripts, URLs, queries and renderer overrides are rejected. Unauthorized embeds disappear without private metadata; invalid mappings give readable recovery. Raw retains the literal fence.

Embeds label mutable data **Live tracker**, including in historical documents. Hydrated controls do not retarget narrative threads. Export snapshot produces inert Markdown for the current bounded page, exact versions and a digest; additional pages are excluded. Publish that snapshot immutably for exact acceptance.

## Framework-neutral SDK

Tracker SDK 0.1.0 is an ESM/browser build candidate under @commentary-dev/tracker-sdk. It has not been attested as published to npm/CDN. Build or install a reviewed release artifact before using this import inside an approved mount:

~~~js
import { createTrackerClient } from "@commentary-dev/tracker-sdk";
const tracker = createTrackerClient({ parentOrigin: "https://commentary.example" });
await tracker.ready;
const { data: page } = await tracker.queryRecords({ query: { limit: 25 } });
const stop = tracker.watchChanges({ onChange: () => { /* Refetch authorized state. */ } });
// On unmount: stop(); tracker.destroy();
~~~

Use the exact configured parent origin. Host pins workspace/Tracker/mount identity. The broker intersects declared operations with current permissions for schema, records, views, conditional edits, change hints and authorized navigation. Navigation selects a record reference, never an arbitrary URL. No bearer tokens, human Decisions, verification writes or provider dispatch are exposed. Patch with the returned strong ETag and a stable retry key; reconcile on conflict/timeout before changing intent. Limits include 100 rows/page, ten concurrent calls, 60 calls/minute and 30-second deadlines; poll at least five seconds apart.

## Hosted and external bundles

Publish an already built client bundle through immutable renderer registration. Hosted content runs on a separately configured cookieless gateway with an opaque sandbox, restrictive CSP and nonce/window/channel-bound handshake. No app-origin dynamic fallback is allowed. No server build, backend, eval, service worker, WASM or customer API calls are supported. Every private asset and broker operation rechecks access. Withdrawal/reload/disconnect revokes mounts; Escape restores native-view focus.

External renderer declarations require an exact approved HTTPS origin; wildcards and arbitrary proxying are rejected. Declaration digests identify configuration, not immutable remote bytes. External apps remain a separate trust tier. Source/package/Tracker access stays independent for hybrid mappings. Already displayed data cannot be remotely erased.

If configuration, protocol, permissions or handshake fails, use the native view, reload capabilities and request only the missing explicit grant. Never fix a denial by passing a host token into the frame. Hosting/custom renderer keys are Pro-preview and usable during no billing. Deployed cross-origin/browser/provider behavior remains separately validated. See [compatibility](projects-compatibility.md) and [packages](review-packages.md).
