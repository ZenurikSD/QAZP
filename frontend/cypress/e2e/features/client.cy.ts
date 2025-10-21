describe('Client', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should create a new client', () => {
        // login
        cy.login('admin', '123');
        // go to client page
        cy.visit('/clients');

        // click on "create" button
        cy.clickByTestId('create-client-button');
        // fill in form data
        cy.typeByTestId('newclient-fullname-field', 'Fábio Iago Corte Real');
        cy.typeByTestId('newclient-document-field', '47584368786');
        cy.typeByTestId('newclient-phone-field', '(61) 98471-5344');
        cy.typeByTestId('newclient-email-field', 'fabioiagocortereal@imagemeaudio.com.br');
        cy.typeByTestId('newclient-zipcode-field', '72327-011');
        cy.clickByTestId('newclient-searchzipcode-button');
        cy.typeByTestId('newclient-steetnumber-field', '706');
        cy.typeByTestId('newclient-streetcomplement-field', 'Quadra QR 425 Conjunto 11');
        cy.clickByTestId('newclient-create-button');

        // verify created client in list
    })
})