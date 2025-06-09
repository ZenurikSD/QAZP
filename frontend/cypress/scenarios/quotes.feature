Funcionalidade: Solicitação de orçamento

Cenário: Enviar uma solicitação de orçamento válida
    Dado que o usuário está na Landing page da página "localhost:3000"
    E o DevTools do navegador está aberto na aba "Network"

    Quando o botão "Solicitar Orçamento" é clicado
    E o modal "Solicitar orçamento" aparece
    E o campo "Nome Completo" é preenchido com "Natália Martins"
    E o campo "Email" é preenchido com "natmartins@email.com"
    E o campo "Telefone" é preenchido com "11912345678"
    E a opção "Workshop" é selecionada no campo "Tipo do evento"
    E o campo "Público estimado" é preenchido com "15"

    Então um toast verde aparece no canto inferior direito da janela com a mensagem:
        "Seu orçamento foi criado com sucesso! Em breve nossa equipe entrará em contato para fornecer mais informações"
    E a atividade da rede inclui um request "POST" do arquivo "Quote" com "201" como resposta


Cenário: Validar que uma nova solicitação foi registrada no sistema
    Dado que uma solicitação de orçamento foi realizada na Landing page
    E foi preenchida com "Gilberto Jandir" no campo "None Completo"
    E com "betoj@email.com" no campo "Email"
    E com "419123456678" no campo "Telefone"
    E com "Festa" no campo "Tipo do evento"
    E com "60" no campo "Público estimado"
    E o usuário está logado no sistema com a conta "Administrador"
    
    Quando o usuário clica na opção "Orçamentos" no menu lateral
    
    Então a página "localhost:3000/quote" é carregada
    E uma tabela com as solicitações de orçamentos está visível
    E há um registro na tabela com as informações da última solicitação realizada