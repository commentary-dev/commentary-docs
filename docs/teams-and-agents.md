# Teams, Agents, And Automation

Choose a team in the [Workspace](workspace.md) switcher before managing its people, agents, or rules. Workspace identity and provider access remain separate.

## Members And Invitations

**Manage → Members** shows membership and invitation controls according to your role. Owners and admins manage permitted membership changes. Members use authorized workspace features; auditors have policy/audit read duties rather than operational approval authority. An approval-role label is separate from these administrative roles.

Invitations and membership do not confer repository or Resource access. Removing a member makes their assigned queue work unassigned and stops pending targeted deliveries; prior assignment history and already delivered receipts remain.

## Agent Inventory And Credentials

**Manage → Agents** gives owners/admins a paginated inventory of registrations participating in the workspace, including those owned by other members. It shows activity and permitted controls without exposing another owner's token hints or secrets.

Credential owners manage the underlying tokens in [Developer access](developer-access.md). Workspace administrators can control permitted participation without changing another person's credential scopes. Re-enabling participation rechecks owner membership and effective governance.

**Mute** keeps subsequent requests as drafts, outside the human-attention feed; it does not delete history. Unmute affects later requests. Disabling workspace participation is a separate access control. Neither action authorizes an agent to make human Decisions.

## Routing And Assignment

Use **Manage → Automation** for the workspace's routing and attention configuration. Routing can match supported request types, source categories, agents, priority bands, and approval roles. The most specific enabled match selects its queue and eligible role.

Eligible reviewers can claim work; permitted assignees/admins can delegate or reassign it. If someone else changes assignment first, refresh the current state before retrying. Assignment and notification targeting do not replace source access or approval eligibility.

For multi-approver requests, the current policy determines how many distinct eligible humans and which roles must respond. Your recorded approval can complete your part while other approvers are still needed. A changed proposal requires approval of the new revision; one person holding multiple roles does not count as multiple people.

## Attention Policies

Create a draft rule, choose supported conditions and effects, and test it against the bounded simulation before enabling it. Rules use typed fields and effects; they cannot run arbitrary code or approve work. The explanation and simulation show why an item matches and what would change.

A human approves the exact policy version before enabling it. Editing an approved version requires a fresh approval. If a policy is invalid or cannot be applied safely, the baseline attention behavior remains the fallback.

## Insights And Governance

**Governance** separates effective policy, Insights, and Audit. Trust insights use content-free outcome aggregates with a minimum cohort of 20. They can suggest a policy change, but suggestions remain inactive until a person reviews, approves, and enables the exact proposed version. Raw request content is not used for insight training.

See [Enterprise governance](enterprise-governance.md) for retention, allowlists, rate ceilings, administrative roles, and bounded audit exports. See [Outbound webhooks](outbound-webhooks.md) for external state notifications.

## Availability

Workspace containers and basic agent inventory/participation are Free. Team routing, multi-approver policies, agent policy controls, attention policies, trust insights, and governance use their existing Pro-preview features. They remain usable during the no-billing preview.
