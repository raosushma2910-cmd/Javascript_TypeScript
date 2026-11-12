import { expect, test } from '@playwright/test';

async function getExample() {
    return 'abc';
}

test('opens the Playwright site and returns example data', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    expect(await getExample()).toBe('abc');
});