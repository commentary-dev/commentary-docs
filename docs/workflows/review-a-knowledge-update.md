---
title: Review a knowledge-base update
description: Inspect source notes, generated knowledge pages, provenance, and health findings together before merging a knowledge update.
slug: workflows/review-a-knowledge-update
section: workflows
contentType: workflow
published: true
updated: 2026-10-25
appBaselineSha: 4e7ac7718cfb098807ce32a01b8223f575ab7cf7
order: 10
---


Use Knowledge Brain review for a branch that changes source notes, generated wiki pages, claims, citations, an Open Knowledge Format bundle, or agent-maintained project memory.

## Open the review

Try the [public OKF knowledge-base example](https://commentary.dev/review/github/commentary-dev/commentary-demo-reviews/document?branch=demo%2Fknowledge-brain-okf&file=knowledge%2Findex.md&brain=1&brainProfile=okf).
Start at its index, follow a linked concept, and compare the claim with its source
before using the workflow on your own knowledge base.

1. Paste the GitHub or Azure DevOps branch/repository URL on the Commentary home page.
2. Sign in if the repository is private or you need to comment.
3. Open the Brain-aware review and inspect the file navigator groups: sources, wiki, outputs, and supporting/control files. For an OKF bundle, also inspect concept, index, and log groups.
4. Read changed documents in Preview. Use Raw or Changes for exact source and revision comparison.

Example artifact set: `sources/cache-policy.md` explains a 7-day retention decision, `wiki/session-cache.md` summarizes it, and `outputs/release-brief.md` recommends rollout. Trace the brief back to the source, then check whether the wiki and claim citations reflect the same policy. The navigator should expose each role together so reviewers can catch a generated page that cites an old source.

![Knowledge Brain workspace](../assets/knowledge-brain-review.png)

## Check trust and consistency

Review generated claims against their source trail. Follow wikilinks/backlinks, inspect provenance and relevant source-to-wiki comparisons, then review health findings such as broken links, missing citations, duplicates, schema issues, or risky content. For relationship changes, inspect the knowledge diff and graph context. Treat automated findings as review aids, not as proof that a claim is true.

Use an evaluation ledger for explicit golden-question checks when the project has one. Distinguish a manual evaluation from a published or verified result.

## Discuss and publish

Create comments on the relevant source or generated block. If reviewing a PR, submit a provider review when ready. If reviewing a branch, comments remain app-native and do not submit a provider event. Merge or publish through the repository's normal human-controlled process.

Expected result: reviewers can trace an output back to source and see the exact branch change under discussion. A public reader is read-only and does not expose private comments. Private Brain publishing requires sign-in. Continue to [Knowledge Brain capabilities](../use/knowledge-brain.md).
