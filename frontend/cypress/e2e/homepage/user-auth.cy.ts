import { LoginModal } from "../page-objects/homepage/login-modal-po.cy";

describe('User authentication', () => {
  const loginModal = new LoginModal();

  beforeEach(() => {
    cy.visit('/');
  })

  it('Should login into QAZP Dashboard with valid credentials successfully', () => {
    loginModal.open();
    loginModal.login('admin', '123');

    cy.get('.ant-modal-content').should('not.exist');
    cy.get('[data-sonner-toaster="true"]').should('be.visible').and('have.text', 'Bem-vindo, Administrador!')
    cy.url({timeout: 10000}).should('eq', Cypress.config().baseUrl + '/dashboard');
  });

  it('Should log out of QAZP successfully', () => {
    loginModal.open();
    loginModal.login('admin', '123');
    cy.logout();

    cy.url().should('eq', Cypress.config().baseUrl + "/");
  })
})