var baseUrl = 'http://localhost:3000/'

const quotation = {
  name: 'Spartan',
  email: 'oneofthemidk@threehundred.gr',
  phone: '40912345678',
  audience: '300',
  eventType: 'Campeonato'
}

describe('Quotations', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  })

  it('Should send a Quote request successfully', () => {
    cy.contains('button > span', 'Solicite um orçamento').click();

    cy.get('input[placeholder="Digite o nome completo"]').type("Lucas Inutilismo");
    cy.get('input[placeholder="Digite o email"]').type("avidasemcontrole@email.com");
    cy.get('input[placeholder="Digite o telefone"]').type("11966601666");
    cy.get('input[placeholder="Digite o público estimado"]').type("15");
    cy.contains('button > h1', 'Selecione o tipo do evento').click();
    cy.contains('div[role="menuitem"]', 'Workshop').click();
    cy.contains('button > span', 'Enviar solicitação').click();
    
    cy.get('[data-sonner-toaster="true"]').within(() => {
      cy.get('li > div > div').should('include.text', 'Seu orçamento foi criado com sucesso!');
    })
  })

  it('Should correctly show sent requests on "Orçamentos" page', () => {
    //Send a new quote request
    cy.contains('button > span', 'Solicite um orçamento').click();
    cy.get('input[placeholder="Digite o nome completo"]').type(quotation.name);
    cy.get('input[placeholder="Digite o email"]').type(quotation.email);
    cy.get('input[placeholder="Digite o telefone"]').type(quotation.phone);
    cy.get('input[placeholder="Digite o público estimado"]').type(quotation.audience);
    cy.contains('button > h1', 'Selecione o tipo do evento').click();
    cy.contains('div[role="menuitem"]', quotation.eventType).click();
    cy.contains('button > span', 'Enviar solicitação').click();
    
    //Log in and open Orçamentos page
    cy.login();
    cy.get('a[href="/quote"]').click();

    cy.get('tbody > tr').eq(1).within(() => {
      cy.get('td').eq(1).should('have.text', quotation.name)
    });









  })
})