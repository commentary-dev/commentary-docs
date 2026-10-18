# Projects quickstarts for humans and agents

Use a compatible deployment with [capability discovery](projects-compatibility.md). Tested code baselines are CLI 0.2.0, Agent SDK 0.2.0 and Tracker SDK 0.1.0; these are build/test versions, not a claim of registry publication or a minimum server semver. Install a reviewed compatible release artifact. All examples use neutral fixture identities; replace them with returned authorized IDs and ETags.

## UI without a terminal

Select a workspace, open Projects, create an initiative, optionally add a [Tracker](trackers.md), upload a [package](review-packages.md), select exact [Session](project-review-sessions.md) members, and discuss rendered pages. Invite an eligible human and request exact acceptance through Inbox. Projects/Trackers are optional; existing reviews can be opened directly.

## Authenticate and choose context

Use [Developer access](developer-access.md) to register an Agent/connection and consent to the specific read/write scopes. Bind its grant to the intended workspace. Existing tokens gain no new scopes. Keep credentials in an environment variable or secure profile; do not place them in files, renderer bundles, examples or logs. Human-only governance/Decisions remain unavailable to bearer clients.

CLI 0.2.0 uses its existing auth/profile flow (see [CLI](commentary-cli.md)); then set explicit workspace and project/tracker context:

~~~sh
commentary --workspace workspace-1 project list --json
commentary --workspace workspace-1 tracker validate --file checklist.json --json
commentary --workspace workspace-1 package validate ./walkthrough --manifest ./walkthrough/commentary.package.json
commentary --workspace workspace-1 package publish ./walkthrough --manifest ./walkthrough/commentary.package.json --idempotency-key walkthrough-1 --no-open
~~~

Download [checklist.json](examples/checklist.json). Populate the walkthrough directory as described in [packages](review-packages.md). Validation/dry-run does not publish. After changing pages use package sync with a fresh retry key. Native feedback retrieval uses package comments <packageId> --path README.md, with explicit revision/cursor where needed. Request-review requests human acceptance, never agent approval. Local collector/watch is CLI-only.

## HTTP

Set COMMENTARY_URL and COMMENTARY_TOKEN to the compatible deployment and a current workspace-bound Agent credential. Create and read a Project:

~~~sh
curl --fail-with-body "$COMMENTARY_URL/api/v1/projects" -H "Authorization: Bearer $COMMENTARY_TOKEN" -H "Content-Type: application/json" -H "Idempotency-Key: docs-project-1" --data '{"workspaceId":"workspace-1","name":"Release readiness","visibility":"workspace"}'
curl --fail-with-body "$COMMENTARY_URL/api/v1/projects?workspaceId=workspace-1&limit=25" -H "Authorization: Bearer $COMMENTARY_TOKEN"
~~~

Use returned IDs and response ETag for updates, with If-Match and Idempotency-Key. Repeating an unchanged request preserves body/ETag/key; changing intent requires a new key after reading current state. Missing preconditions fail 428, stale/invalid strong ETags fail 412, and reused keys with changed intent conflict. Responses use the existing data envelope and correlation identity; replay headers may be absent, which means unknown rather than false. Private denials expose no title/count/revision.

## MCP without filesystem access

Connect the authenticated /mcp endpoint and call tools/list first. A tools/call parameter example is:

~~~json
{"name":"commentary_projects","arguments":{"action":"create","input":{"workspaceId":"workspace-1","name":"Release readiness","visibility":"workspace"},"idempotencyKey":"docs-project-1"}}
~~~

Subsequent update calls use the returned identity and etag alongside input and a retry key. Six grouped tools use action/input/etag/idempotencyKey; strict schemas come from [MCP reference](api/mcp-tools.md). Terminal-free clients upload literal bounded base64 chunks via review_package actions; they cannot collect a local directory or start a persistent agent. Download [validated workflows](examples/projects-workflows.json) for exact requests, upload hashes, schema/view mappings, correction targets and error fixtures. Fixture outputs are illustrative, not live acceptance evidence.

## Agent SDK

~~~ts
import { createCommentaryClient } from "@commentary-dev/agent-sdk";
const commentary = createCommentaryClient({ baseUrl: process.env.COMMENTARY_URL!, token: process.env.COMMENTARY_TOKEN });
await commentary.operations.capabilities();
const created = await commentary.projects.create(
  { workspaceId: "workspace-1", name: "Release readiness", visibility: "workspace" },
  { idempotencyKey: "docs-project-1" },
);
const current = await commentary.projects.get({ projectId: created.data.data.id });
await commentary.projects.update(
  { projectId: current.data.data.id, name: "Ready for human review" },
  { etag: current.etag!, idempotencyKey: "docs-project-rename-1" },
);
~~~

Each domain group accepts typed path identities plus transport options. Method names camel-case [MCP actions](api/agent-capability-matrix.md). Pagination has explicit maxPages; repeated cursors fail. AbortSignal bounds requests/waits; timeout leaves work outstanding. Fetch current authorized state after event wakeups, duplicate deliveries or cursor gaps. See [SDK](agent-sdk.md) and [recovery](projects-compatibility.md).
