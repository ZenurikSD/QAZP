Feature: Solicitar orçamento

Scenario: Send a valid Quote request
    Given the user is on the landing page at "localhost:3000"
    When the user clicks on "Solicitar Orçamento" button
    And the "Solicitar orçamento" modal appears
    And the "Nome Completo" field is filled in with "Natália Martins"
    And the "Email" field is filled in with "natmartins@email.com"
    And the "Telefone" field is filled in with "Natália Martins"
    And the "Nome Completo" field is filled in with "Natália Martins"

