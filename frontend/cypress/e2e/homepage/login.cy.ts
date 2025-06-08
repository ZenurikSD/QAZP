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
})

