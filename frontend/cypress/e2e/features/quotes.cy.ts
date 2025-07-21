import { addPhoneMask } from "../../support/utils";

describe('Quotations', () => {
  var num = Math.floor(Math.random()*1000);
  const quoteA = {
    fullName: `Cypress User ${num}`,
    email: `cyuser-${num}@email.com`,
    phoneNumber: '11912345678',
    eventType: 'Campeonato',
    estimatedAudience: '300'
  }
  const quoteB = {
    fullName: `Cypress User ${num+1}`,
    email: `cyuser-${num+1}@email.com`,
    phoneNumber: '42900001111',
    eventType: 'Festival',
    estimatedAudience: '1500'
  }

  beforeEach(() => {
    cy.visit('/');
  })

  it('Should send a Quote request successfully', () => {
    cy.contains('button > span', 'Solicite um orçamento').click();

    cy.typeByTestId('request-modal-fullname', quoteA.fullName);
    cy.typeByTestId('request-modal-email', quoteA.email);
    cy.typeByTestId('request-modal-phone', quoteA.phoneNumber);
    cy.typeByTestId('request-modal-audience', quoteA.estimatedAudience);
    cy.clickByTestId('request-modal-eventtype-dropdown');
    cy.contains('div[role="menuitem"]', quoteA.eventType).click();
    cy.clickByTestId('request-modal-send-button');
    
    //TO-DO: substituir/adicionar um cy.intercept()
    cy.get('[data-sonner-toaster="true"]').within(() => {
      cy.get('[data-content=""] > div').should('include.text', 'Seu orçamento foi criado com sucesso!');
    })
  })

  it.only('Should correctly show sent requests on "Orçamentos" page', () => {
    cy.sendQuoteRequest(quoteB);
    
    //Log in and open Orçamentos page
    cy.login('admin', '123');
    cy.get('[data-testid="sidepanel-quote"]', {timeout: 10000}).click();

    cy.get('[data-testid="quote-page-table"] > tbody > tr', {timeout: 10000}).last().within(() => {
      cy.get('td').eq(0).should('have.text', quoteB.fullName)
      cy.get('td').eq(1).should('have.text', quoteB.email)   
      cy.get('td').eq(2).should('have.text', addPhoneMask(quoteB.phoneNumber))  
      cy.get('td').eq(3).should('have.text', quoteB.eventType)
      cy.get('td').eq(4).should('have.text', quoteB.estimatedAudience)
    });
  })

  after(() => {
    //TO-DO: Limpar os registros da tabela de orçamentos pelo banco
  })
})