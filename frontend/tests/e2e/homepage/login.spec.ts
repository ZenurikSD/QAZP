import { test, expect } from '@playwright/test';

test('Login into QAZP', async ({page}) => {
    await page.goto('/');
    await page.getByTestId('login-open-button').click();

    await page.getByTestId('login-username-input').fill('admin');
    await page.getByTestId('login-password-input').fill('123');
    const responsePromise = page.waitForResponse('**/api/Dashboard');   
    await page.getByTestId('login-enter-button').click();
    const response = await responsePromise;

    expect(response.status()).toEqual(200);
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
})