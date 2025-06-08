Feature: Solicitar orçamento

Scenario: Send a valid Quote request
    Given the user is on the landing page at "localhost:3000"

    When the user clicks on "Solicitar Orçamento" button
    And the "Solicitar orçamento" modal appears
    And the "Nome Completo" field is filled in with "Natália Martins"
    And the "Email" field is filled in with "natmartins@email.com"
    And the "Telefone" field is filled in with "11912345678"
    And the option "Workshop" is selected on "Tipo do evento" field
    And the "Público estimado" field is filled in with "15"

    Then a success toast appears at the bottom-right corner of the screen with the message:
        "Seu orçamento foi criado com sucesso! Em breve nossa equipe entrará em contato para fornecer mais informações"
    And the network activity shows a "POST" request of the "Quote" file with a "201" response