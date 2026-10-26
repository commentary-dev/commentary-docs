---
title: Project evidence and provenance
description: Distinguish requirements, claims, supplied reports, independent observations, fulfillment, and human Decisions.
slug: reference/project-evidence
section: reference
contentType: reference
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Project evidence keeps assertions, artifacts, verification, and acceptance as separate records. A Tracker is optional; a file existing does not mean a requirement is fulfilled.

| Record | Meaning |
| --- | --- |
| Requirement | Expected outcome and acceptance scope |
| Claim | Authenticated actor's assertion tied to exact targets |
| Supplied report, screenshot, or log | Attributed content; inert and not independently verified |
| Provider reference | A reference only; attaching it does not retrieve the provider result |
| Observed receipt | Independent adapter retrieved the exact provider/run/commit outcome |
| Passing observation | Proves only the scoped run or result |
| Fulfillment | Agent's later report of work, separate from artifact, review, and acceptance |
| Human Decision | Eligible person accepted the exact target and action |

Independent verification requires a configured GitHub/Azure read adapter, exact source authority, and `commentary.evidence.verify` consent. The adapter checks repository/run/check/commit association, result, time, and available artifact digest. Unknown, failed, unavailable, mismatched, stale, and revoked remain explicit results.

Supplied JSON, HTML, XML, and logs are bounded and rendered inert. Remove secrets before upload; secret detection is diagnostic, not a guarantee. Evidence references grant no source access. Retention and export are controlled by the owning workspace and source authorization.

See [request exact human acceptance](../workflows/request-exact-acceptance.md), [Project workflow](../workflows/project-tracker-acceptance.md), and [generated evidence operations](https://commentary.dev/docs/reference/api-operations).
