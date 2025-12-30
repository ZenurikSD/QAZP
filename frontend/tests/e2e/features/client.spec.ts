import { test, expect } from '@playwright/test';

/**
 * TO-DO: 
 * 1. Improve the test setup and destuction
 *    - move login and client deletion to before/after hooks?
 * 2. Move client info to an external object / "fixture"?
 */
test('Create a new Client', async ({ page }) => {
    // login
    await page.goto('/');
    await page.getByTestId('login-open-button').click();

    await page.getByTestId('login-username-input').fill('admin');
    await page.getByTestId('login-password-input').fill('123');
    const responsePromise = page.waitForResponse('**/api/Dashboard');
    await page.getByTestId('login-enter-button').click();
    await responsePromise;

    // go to clients page
    await page.getByTestId('sidepanel-clients').click();
    await page.waitForURL('/clients');
    // open new client modal
    await page.getByTestId('create-client-button').click();
    // fill in required fields
    await page.getByTestId('newclient-fullname-field').fill('Kleber Paiva');
    await page.getByTestId('newclient-document-field').fill('192.630.250-88');
    await page.getByTestId('newclient-zipcode-field').fill('25055-009');
    await page.getByTestId('newclient-streetnumber-field').fill('255');
    // search for CEP
    const cepResponsePromise = page.waitForResponse('https://viacep.com.br/**');
    await page.getByTestId('newclient-searchzipcode-button').click();
    // assert that viaCEP endpoint returns 200
    expect((await cepResponsePromise).status()).toEqual(200);
    // assert that response information is correctly inserted into fields
    await expect(page.getByTestId('newclient-streetname-field')).toHaveValue('Rodovia Washington Luiz');
    await expect(page.getByTestId('newclient-district-field')).toHaveValue('Vila São Luís');
    await expect(page.getByTestId('newclient-state-field')).toHaveValue('RJ');
    await expect(page.getByTestId('newclient-city-field')).toHaveValue('Duque de Caxias');

    // Click on "Create Client" button
    await page.getByTestId('newclient-create-button').click();
    // assert that client is listed in Clients page
    //  is there a better way to do this?
    await expect(
        page
            .getByTestId('clients-page-table')
            .getByRole('row', { name: 'Kleber Paiva' })
    ).toBeVisible();

    //remove client via API
    //1. get client Id via their documentId
    const apiResponse = await page.request.get(`http://localhost:5196/api/Client/documentId/${19263025088}`);
    const clientId = (await apiResponse.json()).id;
    //2. delete client with this Id
    expect((await
        page.request
            .delete(`http://localhost:5196/api/Client/${clientId}`))
            .status()
    ).toBe(204);
});