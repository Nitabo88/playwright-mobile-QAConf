// src/pages/LoginPage.ts
import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly menuButton: Locator;
    readonly errorLabel: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator(('[data-test="username"]'));
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.getByRole('button', { name: 'LOGIN' });
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.errorLabel = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('./');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
