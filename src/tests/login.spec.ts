// tests/login2.spec.ts
import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/login-page";


test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('successful login', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        // Add assertions to verify successful login
        await expect(loginPage.menuButton).toBeVisible();
    });

    test('login with invalid credentials', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce1');
        // Add assertions to verify unsuccessful login
        await expect(loginPage.errorLabel).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});
