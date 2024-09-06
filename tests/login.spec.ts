import {test, expect, devices} from '@playwright/test';

test.use({
    browserName: 'chromium',
    viewport: devices['Galaxy S9+'].viewport,
    userAgent: devices['Galaxy S9+'].userAgent,
});

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});
