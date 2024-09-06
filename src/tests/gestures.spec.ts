import {test, expect, devices} from '@playwright/test';
import {describe} from "node:test";

test.describe('Gestures', () => {
    test('login using touchscreen gestures in mobile mode', async ({playwright}) => {
        // Use a specific mobile device configuration
        const iPhone = devices['iPhone 12'];

        // Create a new context with mobile emulation
        const context = await playwright.chromium.launchPersistentContext('', {
            ...iPhone,
            viewport: {width: 390, height: 844},
            isMobile: true,
            hasTouch: true,
        });

        // Get a new page instance
        const page = await context.newPage(); // Navigate to the login page
        await page.goto('/');

        // Tap on the username input field
        const usernameSelector = 'input[name="user-name"]';
        const usernameBox = await page.$(usernameSelector);
        if (usernameBox) {
            const usernameBoxBoundingBox = await usernameBox.boundingBox();
            if (usernameBoxBoundingBox) {
                const {x, y, width, height} = usernameBoxBoundingBox;
                await page.touchscreen.tap(x + width / 2, y + height / 2);
            }
        }
        // Fill the username
        await page.fill(usernameSelector, 'standard_user');

        // Tap on the password input field
        const passwordSelector = 'input[name="password"]';
        const passwordBox = await page.$(passwordSelector);
        if (passwordBox) {
            const passwordBoxBoundingBox = await passwordBox.boundingBox();
            if (passwordBoxBoundingBox) {
                const {x, y, width, height} = passwordBoxBoundingBox;
                await page.touchscreen.tap(x + width / 2, y + height / 2);
            }
        }
        // Fill the password
        await page.fill(passwordSelector, 'secret_sauce');

        // Tap on the login button
        const loginButtonSelector = 'input[type="submit"]'; // Adjust the selector to match your login button
        const loginButton = await page.$(loginButtonSelector);
        if (loginButton) {
            const loginButtonBoundingBox = await loginButton.boundingBox();
            if (loginButtonBoundingBox) {
                const {x, y, width, height} = loginButtonBoundingBox;
                await page.touchscreen.tap(x + width / 2, y + height / 2);
            }
        }

        // Verify that login was successful
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('scroll gesture', async ({ page }) => {
        await page.goto('/');
        await page.mouse.wheel(0, 1000); // Scroll down 1000 pixels
    });


    test('double tap gesture', async ({ page }) => {
        await page.goto('/');
        const element = await page.$('input[name="user-name"]'); // Replace with your element selector
        if (element) {
            await element.dblclick();
        }
    });

    test('tap gesture', async ({ page }) => {
        await page.goto('/');
        await page.tap('input[name="user-name"]'); // Replace with your element selector
    });
});
