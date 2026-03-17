# Access And Authentication

Commentary keeps public reading easy and moves authentication to the point where you actually need write access.

## Default Path: `Log in`

Use `Log in` when you want the normal GitHub sign-in flow.

This is the default path for:

- commenting
- replying
- private repository access
- pull request review submission

## Fallback Path: `Use PAT`

If OAuth is unavailable in your environment, use the advanced `Use PAT` path.

This is the right option when:

- repository policy blocks OAuth app approval
- you need explicit token-based access
- you are working in a locked-down environment

## Public vs Private Access

### Public pull requests

- open without login
- stay read-only until you authenticate

### Private pull requests or repositories

- require GitHub access first
- may look like "not found" until you sign in with access to that repo

## Rate Limits And Permissions

Anonymous GitHub access can hit rate limits, especially on direct repository review. When that happens, Commentary shows a direct user-facing message instead of a generic failure.

If your token is accepted but repository access still fails, the issue is usually permissions rather than Commentary itself.

## Practical Recommendation

- Start anonymously for public reading.
- Sign in only when you want to comment or open private content.
- Use `Use PAT` only when the default GitHub login path is not an option.
