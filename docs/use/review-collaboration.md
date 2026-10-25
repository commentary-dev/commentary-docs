---
title: Polls and Consensus
description: Configure optional review polls and record human proposal decisions without conflating votes, application, or approval.
slug: use/review-collaboration
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 6
---


Polls and Consensus are independently configured per review; both are off for new reviews. Open **Review settings** to enable the feature needed. Settings persist across files and revisions; packages and backing drafts share one canonical review, while Review guides keep independent discussions.

Standard polls collect non-binding feedback. Decision polls require Polls and Consensus together, explicit outcomes, and the configured threshold. A poll does not clear a blocker.

Consensus adds a decision thread: participants can agree, object, request clarification, or raise a blocker. The default rule is **Manager decides**; agent input is advisory unless the review allows it to count. An authorized manager accepts, rejects, or marks a proposal out of scope. Only an authorized human manager can clear another participant's blocker, with an attributed reason.

After the change is applied, record the exact resulting revision as an application claim. Application, proposal acceptance, conversation resolution, and human sign-off remain separate. New content can make prior decisions stale, so re-read the gate after a revision.

Turning a feature off freezes participation while keeping history readable. Re-enabling evaluates current content. Polls are Free; Consensus is Pro preview and usable during the no-billing period. See [reach and record a human decision](../workflows/reach-a-human-decision.md).
