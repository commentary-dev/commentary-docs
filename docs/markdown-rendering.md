# Markdown Rendering

Commentary renders GitHub-flavored Markdown with review anchors attached to semantic blocks.

## Supported Rendering

Commentary supports common Markdown review content, including:

- headings, paragraphs, lists, blockquotes, code, and tables
- GitHub-style task lists
- front matter rendered as reviewable metadata rows
- GitHub callouts
- Mermaid diagrams, with fallback for invalid diagrams
- unresolved wikilinks shown as readable text
- repository-relative links and images rewritten for the current review context

## Links And Images

Relative links inside rendered Markdown stay inside the current review when they point to another repository Markdown file. Relative images resolve against the provider file source. External links open separately.

## Diff Readability

Rendered diffs are optimized for prose:

- small edits can appear inline
- larger paragraph or section rewrites appear as clean replacement blocks
- table cell changes remain readable in context
- added Markdown files render as readable added-state documents

## Comment Anchors

Comment anchors attach to semantic blocks such as headings, paragraphs, list items, table rows, and front matter rows. This keeps feedback tied to the document structure instead of only a raw diff hunk.
