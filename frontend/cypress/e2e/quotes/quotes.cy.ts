var baseUrl = 'http://localhost:3000/'

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
})