# Markdown Rendering

Commentary renders GitHub-flavored Markdown with review anchors attached to semantic blocks.

## Supported Markdown

Commentary supports common Markdown review content, including:

- headings, paragraphs, blockquotes, lists, tables, and task lists
- fenced code blocks and inline code
- footnotes and common callout syntax
- Mermaid diagrams when extension rendering is available
- front matter rendered as reviewable metadata rows
- wikilinks, backlinks, and unresolved wikilinks shown as readable text
- Markdown embeds and safe MDX placeholders
- repository-relative links and images rewritten for the current review context
- embedded Commentary Forms through native form blocks
- GitHub-style safe raw HTML, including inline tags such as `<br>`, semantic tags such as `<details>`/`<summary>`, and sanitized links/images

See [Markdown extensions](./markdown-extensions.md) for docs-framework compatibility, slide rendering, docs preview, and Pro preview behavior.

## Links And Images

Relative links inside rendered Markdown stay inside the current review when they point to another repository Markdown file. Relative images resolve against the provider file source. External links open separately. Safe raw HTML links and images use the same repository-aware rewriting when they point at files in the reviewed repository.

Repository-aware links can also route across docs preview pages, embedded Markdown sources, and Knowledge Brain pages when enough repository context is available.

## Heading Folding And Deep Links

Document-mode rendered Markdown can collapse and expand H2-H6 sections from compact heading-row controls. H1 headings stay visible. The toolbar can collapse all sections, collapse-all state is reflected in the URL, and folded sections show comment counts when they contain comments.

Heading rows also expose copyable deep links. Opening a hash link reveals only the folded ancestors needed for the target so the destination can be read without losing the rest of the folding state.

Folding is for Document-mode rendered Markdown. Raw mode, static HTML preview, rendered Changes, and slide-deck Present mode keep their own behavior.

## Forms In Markdown

Markdown and MDX can embed Forms while preserving rendered review comments, polls, anchors, completion state, and agent-readable answers. The machine-readable Form Contract remains the source of truth, and the native renderer hydrates inside the review surface.

See [Commentary Forms](./commentary-forms.md).

## Safe Raw HTML

Commentary accepts GitHub-style safe raw HTML inside Markdown so existing READMEs and docs pages can render closer to their repository view.

The renderer keeps review-safe structure and inline formatting, sanitizes links and images, and strips unsafe behavior such as scripts, event handlers, and dangerous URLs. HTML inside Markdown remains part of the Markdown document review surface; full standalone `.html` files use the separate [Static HTML review](./static-html-review.md) sandbox.

## Review Anchors

Rendered blocks receive stable review anchors so comments can attach to the document structure instead of only line numbers. When a file changes, Commentary tries to re-anchor comments using semantic block identity, source line context, selected text, and neighboring text.

## Raw Mode

Use `Raw` when exact Markdown source matters. Raw mode keeps source text literal while still sharing the same review context and thread rail.
