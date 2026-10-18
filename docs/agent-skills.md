# Install Commentary agent skills

Canonical source: [commentary-dev/commentary-skills](https://github.com/commentary-dev/commentary-skills). Skills guide current authorized transports; installing one grants no access or human authority. Catalog 0.7.0 includes all existing Inbox, Review, Forms and Research skills and eleven Projects/engineering additions at 0.1.0.

## Complete canonical inventory

| Skill | Version | Purpose |
| --- | --- | --- |
| [commentary-ask-human](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-ask-human) | 0.2.0 | Create a durable Inbox question when a response must survive the current chat. |
| [commentary-request-approval](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-request-approval) | 0.2.0 | Request a human Decision bound to an exact proposal and consequence. |
| [commentary-submit-revision](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-submit-revision) | 0.2.0 | Address durable feedback with a new immutable Interaction revision. |
| [commentary-escalate-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-escalate-review) | 0.2.0 | Prepare and follow a human-confirmed handoff to canonical full Review. |
| [commentary-async-workflow](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-async-workflow) | 0.2.0 | Orchestrate a durable Interaction across polling, Decision, revision, and fulfillment. |
| [commentary-inbox-triage](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-inbox-triage) | 0.1.0 | Inspect authorized Inbox attention and route work to canonical Resources. |
| [commentary-workspace](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-workspace) | 0.1.0 | Discover granted workspace Resources and team queues; link and rename authorized reviews. |
| [design-effective-interactions](https://github.com/commentary-dev/commentary-skills/tree/main/skills/design-effective-interactions) | 0.1.0 | Design clear notifications, durable questions, choices, and exact approval requests. |
| [commentary-brainstorm-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-brainstorm-review) | 0.1.1 | Apply accepted consensus changes from Commentary Brainstorming Reviews. |
| [commentary-draft-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-draft-review) | 0.1.1 | Use the Commentary CLI for live collaborative review of local text artifacts. |
| [commentary-live-preview-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-live-preview-review) | 0.1.1 | Set up Commentary Live Preview Reviews and address live web app comments. |
| [commentary-pr-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-pr-review) | 0.1.1 | Operate rendered GitHub PR reviews with explicit provider and revision boundaries. |
| [review-agentic-plans](https://github.com/commentary-dev/commentary-skills/tree/main/skills/review-agentic-plans) | 0.1.0 | Review agent-generated plans for intent, evidence, risk, and decision completeness. |
| [commentary-form-creation](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-form-creation) | 0.1.1 | Design and create Commentary Form Contract v1 forms. |
| [commentary-form-design](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-form-design) | 0.1.1 | Build rich Markdown, MDX, HTML, and custom renderer form experiences. |
| [commentary-form-rendering](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-form-rendering) | 0.1.0 | Implement Commentary Form renderers, bindings, and SDK bridges. |
| [design-effective-forms](https://github.com/commentary-dev/commentary-skills/tree/main/skills/design-effective-forms) | 0.1.0 | Design clear, accessible, unbiased, and adaptive forms. |
| [commentary-form-results](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-form-results) | 0.1.0 | Fetch, poll, normalize, and export Commentary Forms results. |
| [commentary-form-result-visualizations](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-form-result-visualizations) | 0.1.0 | Create accessible visualizations from Commentary Forms results. |
| [commentary-research-workflow](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-research-workflow) | 0.1.1 | Operate source-backed Commentary Research Studies through MCP and Draft Review. |
| [design-product-research](https://github.com/commentary-dev/commentary-skills/tree/main/skills/design-product-research) | 0.1.0 | Design ethical, decision-focused product research using established UX methods. |
| [commentary-project-management](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-project-management) | 0.1.0 | Organize Projects and linked Resources. |
| [commentary-tracker-creation](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-tracker-creation) | 0.1.0 | Create portable Trackers and native views. |
| [commentary-tracker-operations](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-tracker-operations) | 0.1.0 | Edit Trackers with explicit conflict recovery. |
| [commentary-custom-renderer-development](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-custom-renderer-development) | 0.1.0 | Build isolated capability-bound renderers. |
| [commentary-review-package-creation](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-review-package-creation) | 0.1.0 | Publish immutable document walkthroughs. |
| [commentary-engineering-project-review](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-engineering-project-review) | 0.1.0 | Review pinned source and honest evidence. |
| [commentary-project-feedback-loop](https://github.com/commentary-dev/commentary-skills/tree/main/skills/commentary-project-feedback-loop) | 0.1.0 | Revise feedback without carrying acceptance. |
| [design-effective-project-reviews](https://github.com/commentary-dev/commentary-skills/tree/main/skills/design-effective-project-reviews) | 0.1.0 | Make project reviews useful to each audience. |
| [explain-and-defend-an-implementation](https://github.com/commentary-dev/commentary-skills/tree/main/skills/explain-and-defend-an-implementation) | 0.1.0 | Explain tradeoffs with bounded source evidence. |
| [design-effective-project-trackers](https://github.com/commentary-dev/commentary-skills/tree/main/skills/design-effective-project-trackers) | 0.1.0 | Choose useful records, fields and native views. |
| [build-reviewable-architecture-walkthroughs](https://github.com/commentary-dev/commentary-skills/tree/main/skills/build-reviewable-architecture-walkthroughs) | 0.1.0 | Build navigable diagrams backed by exact source. |

## Install portable folders

Clone the canonical repository and copy the complete selected skills/<name> folder into your agent's skill directory, preserving references and agents/openai.yaml. Codex and other SKILL.md-compatible consumers can use those folders. OpenClaw uses complete portable folders; that is not a native marketplace/plugin guarantee. Match the deployment's [capabilities](projects-compatibility.md) before a skill chooses CLI, HTTP or MCP.

GitHub Copilot cloud agents can use a compatible GitHub CLI skill command:

~~~sh
gh skill preview commentary-dev/commentary-skills commentary-project-management
gh skill install commentary-dev/commentary-skills commentary-project-management
~~~

Repeat with any of the eleven new names in the inventory (seven technical, four practice). See the [canonical installation guides](https://github.com/commentary-dev/commentary-skills/tree/main/docs) for harness prerequisites.

## Install plugin bundles

commentary-projects groups organization, Tracker, renderer and Tracker practice. commentary-engineering-review groups package/engineering/feedback operations with review/explanation/architecture practices and existing exact-approval guidance. Both generated bundles are 0.1.0. Existing commentary-inbox, commentary-review, commentary-forms and commentary-research remain available.

Copilot CLI:

~~~sh
copilot plugin marketplace add commentary-dev/commentary-skills
copilot plugin install commentary-projects@commentary-skills
copilot plugin install commentary-engineering-review@commentary-skills
~~~

Claude Code:

~~~text
/plugin marketplace add commentary-dev/commentary-skills
/plugin install commentary-projects@commentary-skills
/plugin install commentary-engineering-review@commentary-skills
~~~

Codex wrappers are generated under .agents/plugins/marketplace.json; use the [canonical wrapper instructions](https://github.com/commentary-dev/commentary-skills/blob/main/README.md) supported by your installed client. Microsoft Copilot Cowork accepts generated plugin ZIPs from a reviewed GitHub Release through Customize > Plugins. Verify the supplied checksum and version against release-assets; repository build candidates do not prove an uploaded release exists. See [Cowork installation](https://github.com/commentary-dev/commentary-skills/blob/main/docs/copilot-cowork.md).

Generated wrappers derive from canonical skills/catalogs; do not hand-edit plugin copies. Installation smoke validates folder/ZIP structure, not native-client execution. Native harness installs, hosted provider/renderer workflows and genuine human Decisions retain independent release obligations. Skills never create Git branches/commits/PRs or send messages without separate user authorization, fabricate acceptance, or pass host credentials into custom renderers.

Continue with [quickstarts](projects-quickstarts.md), [CLI](commentary-cli.md), [MCP](api-and-mcp.md) and [human acceptance](project-acceptance.md).
