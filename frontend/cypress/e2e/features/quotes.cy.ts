import { addPhoneMask } from "../../support/utils";

var num = Math.floor(Math.random()*100);
const quotation = {
  name: `Cypress User ${num}`,
  email: `cyuser-${num}@email.com`,
  phone: '11912345678',
  audienceSize: '300',
  eventType: 'Campeonato'
}

describe('Quotations', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Should send a Quote request successfully', () => {
    cy.contains('button > span', 'Solicite um orçamento').click();

    cy.get('input[placeholder="Digite o nome completo"]').type(quotation.name);
    cy.get('input[placeholder="Digite o email"]').type(quotation.email);
    cy.get('input[placeholder="Digite o telefone"]').type(quotation.phone);
    cy.get('input[placeholder="Digite o público estimado"]').type(quotation.audienceSize);
    cy.contains('button > h1', 'Selecione o tipo do evento').click();
    cy.contains('div[role="menuitem"]', quotation.eventType).click();
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
    cy.get('input[placeholder="Digite o público estimado"]').type(quotation.audienceSize);
    cy.contains('button > h1', 'Selecione o tipo do evento').click();
    cy.contains('div[role="menuitem"]', quotation.eventType).click();
    cy.contains('button > span', 'Enviar solicitação').click();
    
    //Log in and open Orçamentos page
    cy.login();
    cy.get('a[href="/quote"]',{timeout: 10000}).click();

    cy.get('tbody > tr').last().within(() => {
      cy.get('td').eq(0).should('have.text', quotation.name)
      cy.get('td').eq(1).should('have.text', quotation.email)   
      cy.get('td').eq(2).should('have.text', addPhoneMask(quotation.phone))  
      cy.get('td').eq(3).should('have.text', quotation.eventType)
      cy.get('td').eq(4).should('have.text', quotation.audienceSize)
    });
  })

  after(() => {
    cy.logout();
  })
})