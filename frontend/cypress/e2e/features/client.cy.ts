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
        cy.get('[data-testid="newclient-streetname-field"]')
            .invoke('attr', 'value')
            .should('not.be.empty');
        cy.typeByTestId('newclient-steetnumber-field', '706');
        cy.typeByTestId('newclient-streetcomplement-field', 'Quadra QR 425 Conjunto 11');
        cy.clickByTestId('newclient-create-button');

        // verify created client in list
        cy.get('[data-testid="client-page-table"] > tbody > tr').eq(0).within(() => {
            cy.get('td').eq(0).should('have.text', 'Fábio Iago Corte Real');
        })
    })
})