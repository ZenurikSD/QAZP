describe("Client API Tests", () => {
    const apiUrl = 'http://localhost:5196/api';

    it('GET Clients list', () => {
        cy.request({
            method: 'GET', 
            url: `${apiUrl}/Client`
        }).then((response) => {
            expect(response).to.not.be.empty;
        })
    })
    
    it('POST Client', () => {
        cy.request({
            method: 'POST', 
            url: `${apiUrl}/Client`,
            body: {
                "id": "47a012b6-e918-42b3-b5a2-d979bac97462",
                "fullName": "Someone",
                "documentId": "03623640280",
                "phoneNumber": "11912345678",
                "email": "someone@email.com",
                "zipCode": "12345678",
                "addressName": "Someplace",
                "addressNumber": "123",
                "addressComplement": "string",
                "district": "Somewhere",
                "state": "SW",
                "city": "Rainbow",
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.documentId).be.eq('03623640280');
        })
    })

    it('DELETE Client', () => {
        let idToDelete = '47a012b6-e918-42b3-b5a2-d979bac97462';
        let nameToDelete = 'Someone';

        cy.request({
            method: 'DELETE', 
            url: `${apiUrl}/Client/${idToDelete}`
        }).then((response) => {
            expect(response.status).to.eq(204);

            cy.request({
                method: 'GET', 
                url: `${apiUrl}/Client`
            }).then((response) => {
                const clients = response.body;

                clients.forEach((client: any) => {
                    expect(client.id).to.not.eq(idToDelete);
                    expect(client.fullName).to.not.eq(nameToDelete);
                });
            })
        })
    })
})