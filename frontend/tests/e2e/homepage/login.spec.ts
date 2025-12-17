import { test, expect } from '@playwright/test';

test('Login into QAZP', async ({page}) => {
    await page.goto('http://localhost:3000');
    await page.getByTestId('login-open-button').click();

    await page.getByTestId('login-username-input').fill('admin');
    await page.getByTestId('login-password-input').fill('123');
    await page.getByTestId('login-enter-button').click();

    await expect(page).toHaveURL('http://localhost:3000/dashboard')
})