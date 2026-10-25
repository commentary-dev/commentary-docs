import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  { path: '/docs', name: 'home' },
  { path: '/docs/start', name: 'start' },
  { path: '/docs/workflows/review-a-local-draft', name: 'local-draft' },
  { path: '/docs/reference/api/add-review-participant', name: 'api-operation' },
];

const axeTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

test.describe('public documentation pages', () => {
  for (const route of routes) {
    test(`${route.path} has a complete, responsive reading surface`, async ({ page }, testInfo) => {
      for (const viewport of [
        { name: 'wide', width: 1920, height: 1080 },
        { name: 'desktop', width: 1280, height: 800 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'phone', width: 375, height: 812 },
      ]) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        const response = await page.goto(route.path, { waitUntil: 'networkidle' });
        expect(response?.status(), `${route.path} response`).toBe(200);
        await expect(page).toHaveTitle(/Commentary Docs/);
        await expect(page.locator('main h1')).toHaveCount(1);
        await expect(page.locator('main h1')).toBeVisible();

        const layout = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          mainCount: document.querySelectorAll('main').length,
          brokenImages: [...document.images]
            .filter((image) => image.complete && image.naturalWidth === 0)
            .map((image) => image.getAttribute('src')),
        }));
        expect(layout.mainCount).toBe(1);
        expect(layout.scrollWidth - layout.clientWidth).toBeLessThanOrEqual(1);
        expect(layout.brokenImages).toEqual([]);

        if (route.name === 'local-draft' && viewport.name === 'desktop') {
          const sidebar = page.getByRole('navigation', { name: 'Main' });
          const toc = page.getByRole('navigation', { name: /On this page/ });
          await expect(sidebar).toHaveCount(1);
          await expect(sidebar.getByRole('link', { name: 'Start with Commentary' })).toBeVisible();
          await expect(toc).toHaveCount(1);
          await expect(toc.getByRole('link', { name: 'Create the review' })).toBeVisible();
        }

        await page.screenshot({
          path: testInfo.outputPath(`${route.name}-${viewport.name}.png`),
          fullPage: false,
        });
      }
    });
  }
});

test('Pagefind search supports keyboard opening, scoped filters, and Escape', async ({ page }) => {
  await page.goto('/docs');
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+k' : 'Control+k');
  const dialog = page.locator('dialog');
  await expect(dialog).toHaveAttribute('open', '');
  const search = page.locator('.pagefind-ui__search-input');
  await expect(search).toBeFocused();

  for (const query of ['CLI', 'token', 'comments', 'skill', 'exact scoped filter']) {
    await search.fill(query);
    await expect(page.locator('.pagefind-ui__result').first()).toBeVisible();
  }

  await search.fill('CLI');
  const section = page.locator('.pagefind-ui__filter-block').nth(0);
  await section.locator('summary').click();
  await section.locator('label[for="section-build"]').click();
  await expect(page.locator('#section-build')).toBeChecked();
  await expect.poll(async () => {
    const hrefs = await page.locator('.pagefind-ui__result-link').evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).getAttribute('href') ?? ''),
    );
    return hrefs.length > 0 && hrefs.every((href) => href === '/docs/build' || href.startsWith('/docs/build/'));
  }).toBe(true);

  await page.keyboard.press('Escape');
  await expect(dialog).not.toHaveAttribute('open', '');
  await expect(page.getByRole('button', { name: 'Search documentation' })).toBeFocused();
});

test('mobile navigation opens, closes with Escape, and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/docs/workflows/review-a-local-draft');
  const menuButton = page.getByRole('button', { name: 'Menu' });
  const mainNavigation = page.getByRole('navigation', { name: 'Main' });
  const draftLink = mainNavigation.getByRole('link', { name: 'Review and revise local draft content' });

  await expect(draftLink).toBeHidden();
  await menuButton.click();
  await expect(draftLink).toBeVisible();
  await expect(mainNavigation.getByRole('link', { name: 'Commentary agent skills' })).toBeVisible();
  await page.screenshot({ path: test.info().outputPath('mobile-menu-open.png') });
  await page.keyboard.press('Escape');
  await expect(draftLink).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test('system light and dark themes keep the docs pages accessible', async ({ page }) => {
  for (const route of routes) {
    for (const colorScheme of ['light', 'dark'] as const) {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.emulateMedia({ colorScheme });
      await page.goto(route.path, { waitUntil: 'networkidle' });
      await expect(page.locator('html')).toHaveAttribute('data-theme', colorScheme);
      const accessibility = await new AxeBuilder({ page }).withTags(axeTags).analyze();
      expect(accessibility.violations, `${route.path} in ${colorScheme} mode`).toEqual([]);
    }
  }

  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/docs/workflows/review-a-local-draft');
  await page.getByRole('button', { name: 'Menu' }).click();
  const mobileAccessibility = await new AxeBuilder({ page }).withTags(axeTags).analyze();
  expect(mobileAccessibility.violations, 'mobile navigation open').toEqual([]);
}, { timeout: 120_000 });

test('mobile readers retain working content and navigation without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4321/docs/start');
    await expect(page.locator('main h1')).toHaveText('Start with Commentary');
    const navigation = page.getByRole('navigation', { name: 'Main' });
    const draftWorkflow = navigation.getByRole('link', { name: 'Review and revise local draft content' });
    await expect(draftWorkflow).toBeVisible();
    await page.screenshot({ path: test.info().outputPath('no-javascript-phone.png') });
    await draftWorkflow.click();
    await expect(page).toHaveURL(/\/docs\/workflows\/review-a-local-draft$/);
    await expect(page.locator('main h1')).toHaveText('Review and revise local draft content');
  } finally {
    await context.close();
  }
});
