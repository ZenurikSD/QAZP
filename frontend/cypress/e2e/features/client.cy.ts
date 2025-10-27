describe('Client', () => {
    let documentId:string = '54894415003';

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should create a new client', () => {
        cy.login('admin', '123');
        cy.visit('/clients');

        cy.clickByTestId('create-client-button');

        cy.typeByTestId('newclient-fullname-field', 'Fábio Iago Corte Real');
        cy.typeByTestId('newclient-document-field', '54894415003');
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

        cy.get('[data-testid="client-page-table"] > tbody > tr').eq(0).within(() => {
            cy.get('td').eq(0).should('have.text', 'Fábio Iago Corte Real');
        })
    })

    //Remove data
    after(() => {
        cy.request({
            method: 'GET',
            url: `http://localhost:5196/api/Client/documentId/${documentId}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            let clientId = response.body.id;

            cy.request({
                method: 'DELETE',
                url: `http://localhost:5196/api/Client/${clientId}`
            }).then((response) => {
                expect(response.status).to.eq(204);
            })
        })
    })
})
