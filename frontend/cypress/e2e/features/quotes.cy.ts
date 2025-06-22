import { addPhoneMask } from "../../support/utils";

var num = Math.floor(Math.random()*1000);
const quoteA = {
  name: `Cypress User ${num}`,
  email: `cyuser-${num}@email.com`,
  phone: '11912345678',
  audienceSize: '300',
  eventType: 'Campeonato'
}
const quoteB = {
  name: `Cypress User ${num+1}`,
  email: `cyuser-${num+1}@email.com`,
  phone: '42900001111',
  audienceSize: '1500',
  eventType: 'Festival'
}

describe('Quotations', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Should send a Quote request successfully', () => {
    cy.contains('button > span', 'Solicite um orçamento').click();

    cy.get('[data-testid="request-modal-fullname"]').type(quoteA.name);
    cy.get('[data-testid="request-modal-email"]').type(quoteA.email);
    cy.get('[data-testid="request-modal-phone"]').type(quoteA.phone);
    cy.get('[data-testid="request-modal-audience"]').type(quoteA.audienceSize);
    cy.get('[data-testid="request-modal-eventtype-dropdown"]').click();
    cy.contains('div[role="menuitem"]', quoteA.eventType).click();
    cy.get('[data-testid="request-modal-send-button"]').click();
    
    //TO-DO: substituir/adicionar um cy.intercept()
    cy.get('[data-sonner-toaster="true"]').within(() => {
      cy.get('[data-content=""] > div').should('include.text', 'Seu orçamento foi criado com sucesso!');
    })
  })

  it('Should correctly show sent requests on "Orçamentos" page', () => {
    //Send a new quote request
    cy.contains('button > span', 'Solicite um orçamento').click();
    cy.get('[data-testid="request-modal-fullname"]').type(quoteB.name);
    cy.get('[data-testid="request-modal-email"]').type(quoteB.email);
    cy.get('[data-testid="request-modal-phone"]').type(quoteB.phone);
    cy.get('[data-testid="request-modal-audience"]').type(quoteB.audienceSize);
    cy.get('[data-testid="request-modal-eventtype-dropdown"]').click();
    cy.contains('div[role="menuitem"]', quoteB.eventType).click();
    cy.get('[data-testid="request-modal-send-button"]').click();
    
    //Log in and open Orçamentos page
    cy.login('admin', '123');
    cy.get('[data-testid="sidepanel-quote"]').click();

    cy.get('[data-testid="quote-page-table"] > tbody > tr', {timeout: 10000}).last().within(() => {
      cy.get('td').eq(0).should('have.text', quoteB.name)
      cy.get('td').eq(1).should('have.text', quoteB.email)   
      cy.get('td').eq(2).should('have.text', addPhoneMask(quoteB.phone))  
      cy.get('td').eq(3).should('have.text', quoteB.eventType)
      cy.get('td').eq(4).should('have.text', quoteB.audienceSize)
    });
  })

  after(() => {
    cy.logout();
    //TO-DO: Limpar os registros da tabela de orçamentos pelo banco
  })
})