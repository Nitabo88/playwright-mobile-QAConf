import {test, expect} from '@playwright/test';


test.describe('Network Conditions Tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://playwright.dev/');
    });

    test('should show an error message when trying to login offline', async ({page}) => {
        // Simulate offline mode
        await page.context().setOffline(true);
        await page.getByRole('link', {name: 'Get started'}).click();
        // Check for offline error message
        const errorMessage = await page.locator('.error-code').textContent();
        expect(errorMessage).toContain('ERR_INTERNET_DISCONNECTED');
        // Simulate online mode again
        await page.context().setOffline(false);
    });

    test('test with slow 3G network', async ({ page }) => {
        // Emulating slow 3G network conditions
        await page.context().route('**', route => {
            route.continue({
                // Slow 3G settings
                headers: {
                    ...route.request().headers(),
                    'x-traffic-type': 'slow3g',
                },
                postData: route.request().postData(),
                method: route.request().method(),
                url: route.request().url()
            });
        });

        await page.goto('https://playwright.dev/');

        const title = await page.title();
        expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');

    });
});
