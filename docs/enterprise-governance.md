# Enterprise governance preview

Commentary’s enterprise governance controls are a Pro preview. They remain usable during the no-billing preview and show the standard Pro notice in the product. They provide administrative controls; they are not proof of regulatory compliance or a certification.

Open **Workspace → Manage → Governance** for the selected workspace. The page separates **Policy**, **Insights**, and **Audit**. Workspace **Automation** owns routing and attention-rule editing; personal Inbox and notification preferences stay in account settings.

## Workspace roles

Team workspaces use four administrative roles:

- **Owner** can manage membership and governance policy.
- **Admin** can manage membership and governance policy but cannot take over owner-only lifecycle duties.
- **Member** can read effective policy and use authorized workspace features.
- **Auditor** can read effective policy and export bounded governance audit events, but cannot change policy or operate queue items.

A custom approval-role label, such as “Release approver,” is separate. It can make a person eligible for a specific approval policy but does not grant administrative or source access. Repository and Resource permissions are checked independently for every person and agent.

## Typed policy controls

Owners and admins can configure explicit allowlists and ceilings rather than executable policy code:

- retention presets of 7, 30, 90, or 365 days, plus an authorized indefinite option;
- allowed Interaction types and actions;
- allowed agent scopes, per-agent and workspace request rates, and priority ceilings;
- notification channels; and
- review-escalation targets.

Thirty days is the default. Agent-specific settings are intersected with the workspace policy, so a local agent setting cannot broaden the effective workspace limit. Existing product and provider authorization still applies.

Retention changes apply to future governed work. A bounded resumable job removes eligible copied Interaction content when due and retains minimized purge markers and receipt metadata. Already purged content is never recreated. Source documents, app-native review threads, provider comments, and other Resource-specific retention contracts keep their existing authority.

## Effective values and audit export

The Governance workspace page shows whether each policy is inherited or a workspace override, the effective version and values, and a preview of consequences before saving. Retention changes require an explicit confirmation. If another administrator saves first, the page reports a version conflict so you can refresh before retrying.

Governance audit events are immutable and content-minimized. Authorized exports use filtered newline-delimited JSON with bounded row and byte limits. Export requests and completions are themselves audited. Subjects use privacy-safe hashes rather than raw provider identities or repository URLs, and purge markers remain visible without preserving removed content.

These events help administrators inspect Commentary policy changes. They are not a compliance report, regulatory attestation, or execution proof.

## Outcome Insights

Insights summarize content-free outcomes only after a minimum cohort of 20. Suggested attention-policy changes remain inactive until a human separately approves and enables the exact version. Auditor access is read-only. A suggestion never grants automatic approval or execution authority. See [Teams, agents, and automation](teams-and-agents.md).

## Identity provisioning boundary

Commentary stores stable internal workspace membership identifiers so a future identity-provisioning adapter can reconcile membership without changing audit attribution.

This preview does **not** implement SSO, SCIM, directory synchronization, group mapping, just-in-time provisioning, domain discovery or capture, or a new login protocol. Existing Commentary authentication and provider access remain unchanged.

## Availability and rollback

The feature key is `inbox.enterprise_governance`. It is labeled Pro preview and remains available during the current no-billing phase.

If the preview is rolled back, policy mutations, exports, enforcement hooks, and retention workers stop first. Existing policy versions, immutable audit receipts, stable membership identifiers, and purge markers remain. Rollback does not restore purged content or broaden access.
