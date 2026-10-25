# Publish an immutable review package

A package is a rendered document walkthrough with private binary assets and immutable revisions. It reuses Draft documents, semantic anchors and app-native threads. It can be reviewed without a Project or Tracker.

## Prepare a directory

Create README.md and details.md, then save commentary.package.json:

~~~json
{"kind":"commentary_review_package","manifestVersion":1,"title":"Release walkthrough","entryPageId":"overview","pages":[{"id":"overview","path":"README.md"},{"id":"details","path":"details.md"}],"trustTier":"static"}
~~~

Publish through the workspace upload flow, [CLI](projects-quickstarts.md) or literal HTTP/MCP/SDK uploads. Without a manifest, the service can infer supported documents and an entry page. Explicit stable page IDs survive moves more reliably than inferred path identities. Keep relative navigation/assets inside the package. Navigation and heading/semantic anchors support reading and contextual discussion; historical comments retain their original revision scope.

The dedicated collector hashes bytes without executing scripts. Symlinks, traversal, case-colliding paths, missing assets, secret/config files, unsupported MIME and oversized content fail validation. No customer npm, MDX, SSR or backend build runs on the server. Initial safety bounds: 250 MiB total, 10,000 entries, 25 MiB per binary asset, 2 MiB per semantic text page and 4 MiB decoded transfer chunk.

## Resume and publish

Prepare an actor/workspace-bound upload, transfer bounded checksummed chunks, inspect status and resend missing chunks with the same intent. Finalize verifies actual bytes, hashes and graph before publication. Expired uploads fail explicitly; prepare a fresh upload. Existing-package changes use the exact current ETag and idempotency key. States are uploading, validating, indexing, ready or failed. Failed indexing can retry; content is available only for ready revisions. Published content is immutable; sync publishes another revision, preserving old manifests and native discussion.

Abandoned uploads expire after 24 hours. Reference-safe cleanup observes a minimum 24-hour orphan grace and protects committed package/renderer references. Asset fetches recheck original access, including linked private source; a copied URL is not a grant.

Static Markdown/HTML is sanitized. Executable client bundles require the [isolated renderer trust tier](tracker-renderers.md). External running apps remain [Live Preview](web-app-reviews.md); remote declarations do not prove immutable external bytes. Review packages support exact [Review guide composition](project-review-sessions.md) and [changed-revision impact](project-acceptance.md).

## History, recovery, and guide navigation

Package revisions are immutable and ordered by publication version. The version chooser is bounded and newest-first; when history is dense it remains searchable/scrollable, keeps the last choice reachable, and returns focus to its trigger. A pinned historical page remains clearly labeled historical and read-only for new comments. Preview/Raw is independent of Document/Changes and revision selection, so navigating history does not silently switch the reading surface.

For an indeterminate upload or publication, retry the identical intent with its original idempotency key/receipt before changing the request. A lost or missing historical endpoint is reported as unavailable; the reader must not substitute latest content. Package visit links resolve the authorized saved ready head before a later indexing publication, and private visit receipts remain viewer/workspace scoped. Refresh or retry always rechecks current source authorization. Guide package search retains the selected exact guide/package versions through browser Back/Forward, reload, and Preview/Raw changes.
