# Commentary Docs

Commentary helps teams review Markdown like a document instead of a diff. It opens GitHub pull requests and repository branches in a reading-first workspace, keeps rendered Markdown at the center, and lets reviewers comment on paragraphs instead of raw line numbers.

These docs are written for customers using [commentary.dev](https://commentary.dev). They focus on the product as it works today: public PR review, authenticated commenting, GitHub OAuth with a PAT fallback, and direct branch review outside a pull request.

## Start Here

- New to Commentary: [Getting started](./docs/getting-started.md)
- Need the product model first: [Core concepts](./docs/core-concepts.md)
- Reviewing a pull request: [Review pull requests](./docs/review-pull-requests.md)
- Reviewing docs before a PR exists: [Review repository branches](./docs/review-repository-branches.md)
- Connecting GitHub: [Access and authentication](./docs/access-and-authentication.md)
- Want a guided sandbox: [Demo walkthrough](./docs/demo-walkthrough.md)
- Hit a rough edge: [Troubleshooting and FAQ](./docs/troubleshooting-and-faq.md)

## Fast Paths

1. Open the homepage at [/](https://commentary.dev/).
2. Paste a public GitHub pull request URL and click `Open review`.
3. Read the document in `Preview` mode.
4. When you want to comment or reply, click `Log in` and continue with GitHub or use `Use PAT` from the advanced path.

If you want to explore Commentary without bringing your own repository first, open [/demo](https://commentary.dev/demo).

If you want to review Markdown directly from a branch before a PR exists, open [/](https://commentary.dev/), expand the repository path, and click `Open docs`.

## What Commentary Is Best At

- Product specs, launch plans, ADRs, and long-form Markdown docs
- Readable review for people who do not want to work in raw diffs all day
- Mixed review flows where some comments need to sync back to GitHub and some stay native to Commentary
- Early feedback on repository docs before a pull request exists

## Current Product Shape

- Public PRs open without login for read-only review.
- Commenting and replies require GitHub authentication.
- Pull request review supports `Preview` and `Raw`, plus `Latest` and `Diff`.
- Branch review uses the same shell, but comments stay app-native and there is no `Submit review` step.
- OAuth is the default sign-in path. `Use PAT` is available as the fallback path.

## In This Repo

This repository is also the public branch-review example for Commentary's direct document review flow. The root `README.md` is the landing page for `/docs`, and the rest of the guides live in `docs/` with relative Markdown links between them.
