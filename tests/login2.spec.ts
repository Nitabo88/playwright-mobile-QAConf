import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});
