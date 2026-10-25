---
title: Reach and record a human decision
description: Separate discussion, proposal decisions, poll results, applied changes, conversation resolution, and human sign-off.
slug: workflows/reach-a-human-decision
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 7
---


Use this workflow when a review needs an explicit decision on a proposal. A comment thread, poll outcome, accepted proposal, applied revision, resolved conversation, and human approval are separate facts. Record each at the point it becomes true.

## Prepare the review

Polls and Consensus are configured independently per review and are off by default for new reviews. Open **Review settings** and enable only what the team needs. Polls support structured feedback; Consensus adds proposal decisions and a readiness gate. Both are usable in the current no-billing preview, with Consensus marked Pro preview.

Before asking for a decision, confirm the reviewers have access to the exact current review revision. Keep the proposal narrow enough to accept or reject and name its consequences.

Example proposal artifact: “Replace the current 30-day cache with a 7-day cache for authenticated profile responses; expected effect is lower stale-data exposure and higher origin load.” Pin the decision thread to that exact revision. If a later revision changes the duration, the earlier receipt remains historical and the new proposal needs a fresh decision.

## Run the decision

1. Start a new thread on the proposal and choose **Request decision**.
2. Eligible participants signal **Agree**, **Object**, **Needs clarification**, or **Blocker**. An agent's input is advisory unless the review explicitly allows it to count.
3. An authorized human manager reads the configured agreement rule and chooses **Accept proposal**, **Reject**, or **Out of scope**.
4. Resolve clarification and blockers with an attributed explanation. Only an authorized human manager can clear another person's blocker.
5. If a poll is useful, create one with explicit outcome meanings. Standard polls are non-binding. Decision polls require both Polls and Consensus and cannot bypass a blocker.

The default agreement mode is **Manager decides**. Do not infer acceptance from a vote tally or a provider reaction.

## Apply and record the result

If accepted, make the authorized change using the normal source workflow. Upload or commit the resulting content, then record an application claim against the exact accessible resulting revision. This says which revision applies the proposal; it does not resolve the conversation or create human sign-off.

Re-read the gate after the content changes. A later revision can make earlier decisions stale. Human sign-off remains a separate action and is available only to authorized humans.

## Expected result and recovery

The review history shows who expressed a stance, who made the decision, what exact revision applied it, and whether the discussion or human approval is complete. If the review changes while a decision is underway, refresh the current gate and resolve against the new revision. Do not replay stale intent; clients should use conditional versions and stable operation keys.

If a feature is turned off, participation freezes while history remains readable. Re-enabling evaluates current content and requires re-reading the decision state. Continue to [project evidence and acceptance](project-tracker-acceptance.md) when the review belongs to a larger initiative.
