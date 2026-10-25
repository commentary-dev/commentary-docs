---
title: Run a participant Research Study
description: Build, launch, and review a linear study that combines consent, documents, interactive activities, and Forms.
slug: workflows/run-a-research-study
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 9
---


Use a Research Study when participants should follow a planned sequence and the team needs step-centered results. The sequence is always **Consent → ordered steps → Complete**. A step may be Content, Activity, or Form; position defines order.

## Design the participant flow

1. Open **Research & knowledge → Research studies**, then choose **New research study**.
2. Write a research goal, audience, and participant-facing consent copy. Keep researcher hypotheses separate from neutral participant instructions.
3. Add an ordered mix of Content, Activity, and Form steps. For example: consent → concept deck → navigation activity → feedback Form → complete.
4. Select authorized source artifacts. A Content step pins a Draft, PR, or branch review file; a Form step pins a source-backed Form Contract; an Activity step names the preview URL and delivery/evidence modes.
5. Check the Plan in order and resolve all launch-readiness issues.

Recipes such as Usability test, Concept review, and Guided interview are editable starting points. They do not preconfigure a complete participant study.

Sample plan: Consent → `concept-v2.pdf` as Presentation → `/checkout` Activity with “Find the annual plan” instructions and Manual evidence → `plan-feedback.form.yaml` → Complete. The Plan should show this order, and each participant session starts at Consent rather than jumping to the Form.

## Pause, version, and launch

Saving browser-authored study content creates a Draft Review with the authoritative Research Contract v2. Subsequent edits version that source. While collection is active, pause before editing participant-facing structure; existing sessions stay on the revision on which they started.

At launch, Commentary rechecks consent, source access, Forms, Content, and Activity readiness and publishes an immutable workflow revision. Invite participants with the study link. They enter through the consent gate and progress through the pinned sequence.

## Guide an Activity

Choose **Embedded** or **New tab** delivery separately from **SDK-tracked** or **Manual** evidence. With a tracked standalone Activity, the participant uses **Done and return** in the isolated overlay. Manual participants return to the Research tab to report completion. Missing telemetry does not imply failure, success, or abandonment. Completion is not itself a success outcome.

## Review results

Open **Results** for a summary-first, step-centered collection. Inspect participant sessions for sequence, comments, Form responses, and events. Keep observed evidence, researcher interpretation, and recommendations distinct. Export or synchronize only to an explicitly configured, authorized destination.

Expected result: every participant remains tied to the workflow version they started with and results can be read step by step. If launch is blocked, use the readiness diagnostics to fix the source or access problem; do not treat a database working copy as a published protocol.

Research Studies are Pro preview and remain usable in the current no-billing phase. Continue with [Research Study details](../use/research-studies.md), [Form response collection](collect-form-responses.md), and the [API/MCP guide](../reference/api.md).
