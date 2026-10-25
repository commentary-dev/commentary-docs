---
title: Research Studies
description: Plan a consent-first linear study and use step-centered results while keeping source and evidence permissions explicit.
slug: use/research-studies
section: use
contentType: guide
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 13
---


Research Studies combine documents, interactive activities, and structured Forms into one participant workflow. In the selected workspace, open **Research & knowledge → Research studies**, then choose **New research study**.

## Build a linear workflow

The sequence is always **Consent → your ordered steps → Complete**. Consent and Complete are locked. Add any ordered mix of Content, Activity, and Form steps, including repeats. Position defines sequence: there are no nested task wrappers, Form placements, branches, loops, or automation triggers.

| Step | Participant action | Author configuration |
| --- | --- | --- |
| Content | Read a document or presentation | An authorized Draft, PR, or branch review file and its path; Document or Presentation mode |
| Activity | Try an interactive website | Instructions, URL/route, delivery mode, evidence mode, optional success criteria/outcome |
| Form | Answer structured questions | A source-backed Form, purpose, required/optional setting, and supported adaptive behavior |

Give the study a title, research goal, audience, and participant-appropriate consent copy. Keep research hypotheses and researcher guidance out of neutral participant instructions. Usability test, Concept review, and Guided interview recipes are editable starting points, not preconfigured studies.

Use compatible workspace pickers or configure an authorized source explicitly where available. New Content steps default to Presentation. Reorder collapsed step rows by dragging, move buttons, or Alt+Arrow keyboard controls. Configure a step before saving. Example: Consent → introduction deck → navigation Activity → feedback Form → Complete.

## Source, launch, and revisions

The study includes **Overview**, **Plan**, **Participants**, **Results**, and **Settings**. Overview reports launch readiness and study progress; Plan shows the sequence; Participants manages participant access; Results opens the step-centered collection; Settings holds authorized study configuration.

Browser authoring creates a Draft Review containing the authoritative Research Contract v2. Saving edits versions that source. Git-backed protocols use their authorized source flow; a database-only working projection is insufficient for launch.

Resolve readiness issues before launch. At launch, Commentary rechecks consent, current source access, exact Form contracts, Content artifacts, and Activity readiness. It publishes an immutable workflow revision and pins each participant session to the revision on which it starts.

While collection is active, Plan remains readable with its full configuration. Use **Pause to edit** before changing participant-facing structure. Existing sessions remain on their original revision. Archived studies lead to Results rather than an active editor. Study authorship, launch, pause, archive, and broad results access remain owner/source-authorized actions; research API scopes do not grant them.

## Activity delivery and evidence

Delivery and evidence are independent choices. **Embedded** keeps the website in the participant shell; **New tab** opens it separately. **SDK-tracked** requires compatible Review SDK capability and successful validation; **Manual** collects explicit participant feedback without claiming observed behavior.

Tracked standalone Activities show instructions, conversation, optional outcome, and **Done and return** in the isolated overlay. The original Research tab receives server-owned progress and advances after completion. Closing the target early leaves the step active with **Reopen** available. Manual Activities have no Commentary overlay; participants return to the Research tab to report completion.

Missing telemetry is not evidence of failure, success, or abandonment. Completing an Activity does not itself indicate success; optional outcomes distinguish success, partial success, and failure. An SDK timeout means the preview did not connect; it does not reliably identify a host's frame policy. Use offered recovery or a manual workflow when appropriate.

## Participants, Results, and privacy

After launch, use participant-link controls to invite participants through Consent. Participant access follows the study flow; it does not grant ordinary owner-workspace access. Each session retains step progress and one conversation. Comments and Form answers remain associated with their step and run.

Results start with summary information and step-level evidence. Open a participant session to inspect its sequence, comments, responses, and events. Keep observed evidence, researcher interpretation, and recommendations separate. Choose progress/submitted feedback, privacy-filtered behavioral signals, or no behavioral telemetry according to the study need. Sampled pointer paths are bounded evidence, not full DOM replay; the SDK excludes sensitive/private regions and does not capture raw typed values.

Source-backed evidence destinations and analysis artifacts require explicit authorized configuration and deliberate export/synchronization. Saving a study does not publish results automatically or grant an agent provider write access. Recheck destination permission before export. For an end-to-end example, see [run a participant Research Study](../workflows/run-a-research-study.md).

## API and availability

Research uses `/api/v2/research-studies` and `commentary_research` capability version 2. The contract marker is `commentaryResearch: 2`; evidence and interventions use `stepId` and `stepRunId`. Research v1 is retired without automatic conversion; `/api/v1/research-studies` returns `410 Gone` during its compatibility window. Authorized agents can read studies, sessions, results, steps, and events, and may reply or ask a follow-up on the active step when permitted. `commentary.research.read` and `.write` do not grant owner-only authoring or launch authority.

Research Studies and specified agent/destination features are Pro preview and usable during the no-billing phase. Forms keep their own authorization and availability rules. See [Research integration](../build/research-studies.md) and [Forms](forms-and-knowledge.md).
