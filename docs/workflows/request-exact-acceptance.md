---
title: Request exact human acceptance
description: Prepare the complete authorized target set, bind a human Decision to exact material and action, and recover when revisions stale it.
slug: workflows/request-exact-acceptance
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 11
---

Use exact acceptance when a human must accept a specific set of deliverables and evidence before downstream work proceeds. The acceptance record is an Interaction Decision bound to an exact Session, Resource, source, requirement, evidence revision set, and proposed action. The Project Evidence inspector reports acceptance as **Not assessed**; the human response belongs to the review/Inbox flow.

## Prepare a complete target set

1. Open the Project's **Evidence** section and inspect Requirements, Claims, and Evidence. Read each selected item's source revision, result, verification status, and supporting-version currency separately.
2. Open the relevant **Review guide** or canonical review. Check the complete authorized manifest: target Resource, exact revision and digest, source identity, requirement, evidence revisions, and proposed action.
3. Check that the manifest includes every target required for this acceptance. A filtered or permission-limited subset cannot be represented as the complete set. If an expected Resource is inaccessible, restore source access or remove it from the requested scope with a human decision; do not infer it.
4. Inspect evidence provenance. A supplied report, screenshot, log, or provider link is an attributed claim. It becomes independent verification only after an authorized adapter retrieves and checks the exact provider/run/commit result. Passing CI proves only that scoped run, not whole-project correctness.
5. Explain the consequence of acceptance, supporting evidence, and residual risk in plain language.

## Ask the eligible human

Create or link an Interaction Decision for the exact manifest and action, then send the request through the authorized Review/Inbox flow. The eligible signed-in human decides under current policy. The agent may request and read acceptance, but cannot create, import, patch, or impersonate the human approval or reviewer eligibility.

Example request summary:

> Accept release candidate `v2.4` for deployment to production. Target set: Review guide revision `rgv_18`; API contract snapshot `snap_42`; evidence revisions `ev_31` and `ev_34`. Verification: CI run `run_881` passed for commit `a17c...`; remaining risk: the migration rehearsal used the prior production-size dataset. This approval authorizes deployment of the listed revision only.

Do not replace this exact list with “the project is ready,” “all checks pass,” or a mutable `latest` link.

## Read the Decision and recover changes

After the human responds, read the Decision receipt and confirm its target fingerprint and action match the requested manifest. A comment, poll tally, Board completion, agent fulfillment report, or successful CI run is not a Decision.

New material revisions can make the acceptance stale. Prior receipts remain historical. Impact is assessed from exact scoped targets and deterministic material changes, not timestamps or an agent's assertion. After a correction, publish the ready replacement revision, preserve unaffected targets, read the new manifest, and request fresh human acceptance. Never carry approval forward to changed content.

Since-your-last-visit comparison uses an immutable visit receipt and exact snapshots. If the baseline is unavailable, recover explicitly; do not fall back to all PR changes. Live Tracker embeds inside historical pages are labeled **Live tracker** and excluded from document acceptance. If tracker rows are in scope, export a bounded inert snapshot, save it in an immutable revision, and explicitly include that target.

## Expected result and limits

The Project shows evidence and execution state separately from the exact human Decision. The Decision receipt identifies the accepted action and immutable target set; it does not prove the external action happened. Any later execution report is Fulfillment, and any independent verification is a separate evidence fact.

If eligibility changes, a role is revoked, or a required reviewer becomes unavailable, ask the human manager to repair the chain. Never substitute agent approval. See [Projects and Trackers](../use/projects.md), [Project evidence](../reference/project-evidence.md), and [Interactions](../reference/interactions.md).
