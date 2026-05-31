# Review Progress

Review progress helps signed-in reviewers track which files and sections they have already reviewed.

Progress is personal to the signed-in reviewer. Anonymous and read-only viewers do not see progress controls.

## What You Can Track

On Markdown and static HTML reviews, signed-in reviewers can:

- mark files reviewed or skipped
- mark sections reviewed from the rendered document
- resume later from the same review state
- filter the file navigator by progress
- see changed-since-reviewed state after content updates
- inspect status and change timestamps from navigator controls

Progress works across pull request review, repository document review, and draft review surfaces when the reviewer has write-capable Commentary access.

## Navigator Status

The file navigator shows compact status controls for reviewable files. Use them to update review state without leaving the document.

Progress status is separate from comment status. A file can be reviewed while it still has open comments, or it can have no comments while remaining unreviewed.

## Changed Content

When a file or section changes after you marked it reviewed, Commentary can show that the content changed since your review. Use this to revisit only the parts that need attention.

## API And MCP

API and MCP clients can read review progress for reporting and agent context. Agents cannot mutate human progress through the read-only progress tools.

See [API and MCP](./api-and-mcp.md) and [MCP tools](./api/mcp-tools.md).
