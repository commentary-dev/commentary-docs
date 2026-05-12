# Review Modes

Commentary separates two decisions: the surface you read and the version scope you inspect.

![Review mode toolbar](./assets/review-mode-toolbar.png)

## Surface

- `Preview` renders Markdown as a document.
- `Preview` also renders supported static HTML in a sandboxed document frame.
- `Raw` shows Markdown or HTML source.
- `Docs preview` appears when Commentary detects a supported docs-site structure.
- `Present` opens a cleaner rendered-document or slide-deck view for meetings and screen sharing.

Use `Preview` for prose review. Use `Raw` when exact document syntax, source line context, or wrapping behavior matters.

![Presentation mode](./assets/presentation-mode.png)

## Scope

- `Latest` shows the current selected file.
- `Diff` shows the change for the selected file and change set.

## Change Sets

Pull request and document diff routes can expose a change-set selector:

- `All changes` shows the combined change.
- A commit-specific option shows only that commit's Markdown change.
- Files that do not participate in the selected commit may appear disabled.
- If a commit has no Markdown changes, Commentary shows an explicit empty state.

## Raw Word Wrap

Raw latest and raw diff views support word wrap. Keep word wrap on for reading prose source, and turn it off when exact horizontal layout matters.

## Docs Preview And Present Mode

Docs preview keeps docs-framework navigation near the rendered page and adds PR docs summary context when available. Present mode hides normal review chrome, supports heading or slide navigation, and can show optional comment markers and speaker notes.

## Comments Rail And Files Rail

Use the `Comments` control to show or hide the thread rail. Use the file control to collapse or reopen the navigator when you need more document width.
