Funcionalidade: Solicitar orçamento

Cenário: Enviar uma solicitação de orçamento válida
    Dado que o usuário está na Landing page da página "localhost:3000"

    Quando o botão "Solicitar Orçamento" é clicado
    E o modal "Solicitar orçamento" aparece
    E o campo "Nome Completo" é preenchido com "Natália Martins"
    E o campo "Email" é preenchido com "natmartins@email.com"
    E o campo "Telefone" é preenchido com "11912345678"
    E a opção "Workshop" é selecionada no campo "Tipo do evento"
    E o campo "Público estimado" é preenchido com "15"

    Then a green toast appears at the bottom-right corner of the screen with the message:
    Então um toast verde aparece no canto inferior direito da janela com a mensagem:
        "Seu orçamento foi criado com sucesso! Em breve nossa equipe entrará em contato para fornecer mais informações"
    E a atividade da rede inclui um request "POST" do arquivo "Quote" com "201" como resposta