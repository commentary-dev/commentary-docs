---
title: HTTP API overview
description: Choose authentication, scope requests, and find exact HTTP request and response contracts.
slug: reference/api
section: reference
contentType: reference
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 2
---


The public API is organized under explicit versioned paths such as `/api/v1`; Research uses `/api/v2/research-studies`. The HTTP contract is also served as `/openapi.json` and `/openapi.yaml`. Browser-internal, test, and webhook implementation routes are not automatically public API.

## Authenticate and authorize

Use a Commentary API token, OAuth authorization code with PKCE, or OAuth device flow. Send bearer tokens over HTTPS. Targets and scopes constrain the token, and provider/repository/workspace/resource permission checks still apply. Create credentials in [Developer access](../build/developer-access.md).

Use `commentary.review.read` for review reads and separate write/status/submit scopes for mutations. Forms, Research, webhooks, Interactions, and workspace resources have their own scopes. Existing tokens do not gain new scopes automatically.

## Make reliable writes

Read the generated operation contract before calling a write. Some writes require both `If-Match` with a strong ETag and an `Idempotency-Key`; send the same key only when retrying the exact same intended operation. On a version conflict, refresh the current resource, retain the proposed edit, reconcile, and submit a new intent.

Pagination is bounded and may use opaque cursors. Follow the returned continuation cursor exactly. Do not assume an empty page means there are no more records without inspecting the response contract.

## Select a transport

- Use the **CLI** when local files are your source for a Draft Review.
- Use **HTTP** for a service or script that needs direct endpoint control.
- Use **MCP** for compatible assistants that discover tools at runtime.
- Use the **browser SDK** only for a browser preview integration such as Live Preview Review or custom Forms rendering.

Open the [generated endpoint reference](https://commentary.dev/docs/reference/api-operations) for route-specific payloads. The MCP side has its own [generated tool reference](https://commentary.dev/docs/reference/mcp-operations). Download the release's [OpenAPI JSON](https://commentary.dev/docs/reference/openapi.json), the HTTP contract used to build the route reference.

## Product-specific guides

[Interactions](interactions.md), [webhooks](../build/webhooks.md), [Forms](../build/forms.md), and [Projects/Trackers](../build/projects-trackers.md) explain workflow boundaries before you copy an operation example.
