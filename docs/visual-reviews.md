# Images And Diagram Reviews

Review static images and diagrams in the ordinary document-review shell and attach comments to a rectangular region. Visual threads use the same replies, resolution, sharing, and review lifecycle as other app-native threads.

## Supported Artifacts

- Raster images: PNG, JPEG, WebP, and AVIF.
- Static SVG source.
- Mermaid source: `.mmd` and `.mermaid`, plus supported embedded diagrams.

Standalone artifacts and supported embedded occurrences share visual review controls. SVG and Mermaid retain **Raw** source; raster images have no text Raw mode. Active SVG content is sanitized, and animation/video/audio are outside this workflow.

## Comment On A Region

1. Open the artifact in **Preview** and select a clean **Document** version.
2. Use **Fit**, **100%**, zoom, and pan to position it.
3. Select a rectangular region and write the comment.
4. Reopen the thread to locate the region on that occurrence of the artifact.

The region is stored proportionally to the image, so viewport resizing does not move its meaning. Repeated embedded images keep separate occurrence identity. If a source changes, Commentary may mark its anchor moved/degraded; missing occurrences need reattachment. Mermaid source changes can rearrange the diagram, so old regions are not treated as exact after such changes.

## Draft Uploads And Agents

Draft and Brainstorming Reviews accept supported raster uploads and SVG/Mermaid revisions. Raster uploads reject animation and images over 10 MB or 40 megapixels.

API clients prepare an upload with path, MIME type, byte length, and SHA-256, PUT the declared bytes before expiry, and pass the single-use `assetUploadId` to draft creation or revision upload. See the [API reference](api/reference.md). SVG and Mermaid use bounded UTF-8 source revisions.

REST/MCP comment reads omit visual bytes by default. Request `includeVisualContent=true` where supported for bounded authorized context, marked as untrusted review content. Commentary does not fetch arbitrary external image URLs for the agent.

## Provider Sync And Comparisons

Raster and standalone SVG/Mermaid region comments use file-level provider fallbacks. Some embedded diagrams can synchronize inline when their host block has reliable source lines. App-native threads remain primary.

Document mode shows immutable visual revisions. Changes uses the standard rendered change projection; synchronized before/after visual comparison, pixel diffs, opacity overlays, freehand drawing, and animation timelines are not currently supported.

Visual artifact review uses the Free `review.visual_artifacts` feature. For interactive websites and browser screenshot feedback, see [Live Preview Reviews](web-app-reviews.md).
