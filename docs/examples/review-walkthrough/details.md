# Rollout details

## Before rollout

The release owner records the target revision and the verification results.
The reviewer checks that those results apply to that exact revision.

## Recovery

If the smoke check fails, stop the rollout, restore the previous known-good
release, and record the outcome. Keep the failed result as evidence.

Return to the [release walkthrough](README.md).
