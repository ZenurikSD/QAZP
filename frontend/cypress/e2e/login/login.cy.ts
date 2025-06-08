var baseUrl = 'http://localhost:3000/'

describe('Login', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  })

  it('Should login into QAZP Dashboard with Admin account successfully', () => {
    cy.contains('button > span', 'Login').click();

    cy.get('input[id="username"]').type('admin');
    cy.get('input[id="password"]').type('123');
    cy.get('[data-testid="login-button"]').click();

    cy.get('.ant-modal-content').should('not.exist');
    cy.get('[data-sonner-toaster="true"]').should('be.visible').and('have.text', 'Bem-vindo, Administrador!')
    cy.url({timeout: 10000}).should('eq', baseUrl+'dashboard');
  });
  
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

  it('Should be able to create a new Client', () => {
    cy.login();
  })
})

