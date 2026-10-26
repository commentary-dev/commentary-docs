---
title: Manage members, agents, and governance
description: Set workspace roles, control agent participation, route requests, and review policy changes without granting source access.
slug: use/team-workspace-governance
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: b2486cd5911817911a0b153ac444c8d695e91bf1
---

Use team settings when work needs more than individual sharing. Select the team workspace first, then open **Manage → Members**, **Agents**, **Automation**, or **Governance**. Workspace identity, member role, Agent grant, provider connection, and Resource permission are separate checks.

## Manage members and roles

Owners and admins can manage permitted membership and governance settings. Members use authorized workspace features. Auditors can inspect policy and export bounded audit events without changing policy or operating queues. An approval-role label such as “Release approver” is separate from administrative role and provider access; it affects eligibility only where an approval policy names it.

When removing a member, their assigned queue work becomes unassigned and pending targeted deliveries stop. Assignment history and already delivered receipts remain. Reassign work only after checking the latest assignment state.

## Manage Agent participation

The Agent inventory lets workspace admins inspect registered participation and permitted controls without exposing another owner's credential or token hint. Credential owners manage secrets in [Developer access](../build/developer-access.md). Admins can change a workspace participation control without changing another person's token scopes. Re-enabling participation rechecks owner membership and effective governance.

**Mute** keeps future requests as drafts outside the human-attention feed; it does not erase history. Disabling workspace participation is a separate access control. Neither state gives an Agent human Decision authority.

## Route and assign requests

Open **Manage → Automation** to define routing. Rules can match supported request types, source categories, registered agents, priority bands, and approval roles. The most specific enabled match selects a queue and eligible role. Eligible reviewers claim work; permitted assignees and admins delegate or reassign it.

For multi-approver requests, the effective policy determines required distinct eligible humans and roles. A person's approval can complete their part while the team chain remains open; one person holding multiple roles does not count as multiple people. A changed proposal needs approval of the new revision.

## Change a policy safely

Create an attention-rule draft, select supported typed conditions and effects, and run the bounded simulation against an authorized Inbox item. Review why the item matches and what the effects would change. A human approves the exact policy version before enablement; editing an approved policy requires fresh approval. Rules cannot run arbitrary code or approve requests. If a rule is invalid or unsafe, baseline attention behavior remains the fallback.

## Inspect Governance and Insights

**Governance** separates effective Policy, content-minimized Insights, and Audit. Owners/admins can set supported retention presets (7, 30, 90, or 365 days, plus authorized indefinite retention), allowed Interaction types/actions, Agent scope and rate ceilings, priority ceilings, notification channels, and review escalation targets. Thirty days is the default. Per-Agent controls are intersected with workspace policy, so they cannot broaden the effective limit. Policy edits show inheritance/override and consequences; a version conflict requires refresh before retrying.

Retention changes apply to future governed work. A bounded resumable job removes eligible copied Interaction content and preserves minimized purge markers and receipt metadata; purged content is not recreated. Review threads, provider comments, and other Resource-specific retention retain their own contracts.

Insights show content-free outcomes only after a minimum cohort of 20. Suggestions remain inactive until a human separately approves and enables the exact policy version. Audits are immutable and content-minimized; exports are bounded NDJSON and use privacy-safe hashed subjects. These controls support administration; they are not a compliance attestation or execution proof.

Team routing and governance are Pro preview and usable during the no-billing phase. This preview does not add SSO, SCIM, directory sync, group mapping, just-in-time provisioning, or a new login protocol. See [Inbox](inbox.md) and [Interaction webhooks](../build/webhooks.md).
