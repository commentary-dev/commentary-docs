# Documentation browser verification

Run npm run build, npm test, and npm run test:ui. Playwright starts and stops the packaged local preview through its webServer fixture.

DOCS-001 covers reading/navigation, local search, mobile navigation, no-JavaScript use, and light/dark accessibility. The plugin hub and Forms plugin are included in the phone, tablet, desktop, wide-screen and axe checks. The plugin journey starts at Build, chooses a bundle by outcome, opens an included skill, reaches its installation commands, and finds the plugin through Pagefind.

## 2026-10-26 plugin documentation update

- Preserved all individual skill URLs and existing skill workflows.
- Added a plugin comparison hub and four released bundle guides, a separate Plugins by workflow navigation group, and installation choices on all 21 skill pages.
- Verified bundle membership against commentary-skills v0.6.2 (8 Inbox, 5 Review, 6 Forms, 2 Research); newer unreleased catalogs are excluded.
- Native marketplace commands follow the default branch; npx skill URLs, GitHub CLI skill versions and Cowork ZIP links explicitly select v0.6.2.
- Content/link checks and browser gates run before publication. Browser checks cover installation discovery, not authenticated operation of third-party agent hosts; those instructions are verified against their maintained source documentation.
