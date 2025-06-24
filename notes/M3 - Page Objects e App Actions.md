Domingo, 22 Jun 25
___
- [ ] Aulas
- [ ] Material
- [ ] Exercícios
	- [ ] Implementar PageObject em uma página/parte do sistema e incluir em um teste
- [ ] Reunião de discussão
____

# Page Objects
Page Object é um design pattern para testes automatizados que usa os conceitos da Orientação a Objetos para representar páginas e seus componentes como objetos individuais com atributos que podem ser modificados e métodos que podem ser chamados para executar alguma ação específica nela. 

O uso de Page Objects facilita a criação dos testes, pois todas as páginas possuem uma representação única no código, espelhando a versão real. Por outro lado, isso é uma camada de abstração extra que pode causar lentidão, dependendo do tamanho das suítes de teste.

No Cypress, POs substituem a implementação dos `cy.doSomething` no teste por um instanciamento da classe que representa a página, e essa por sua vez que executa os comandos necessários.

Um Page Object pode guardar data-testids nos seus atributos então não é preciso se preocupar em passar o ID do elemento toda vez que for interagir com ele; pode ter funções de clicar ou digitar em botões e campos, entre outras ações que podem ser executadas dentro da página. 


# App Actions





______
## Feedbacks
1. Me senti um pouco perdido no vídeo do Leo sobre page objects. Acho que ele passou bem rápido pelas explicações do que é um page object, como implementar, quais são os benefícios etc., e elas não foram muito satisfatórias pra mim. Achei os exemplos de implementação que ele passou um pouco confusos e ele não seguiu boas práticas.
2. Gostaria que tivessem tocado no ponto de boas práticas dos Chainables (é *tchêinebouls* Uendell, não *tchái nêibouls* 😂) como não poder continuar o encadeamento após uma ação como click( ) e type( ).: https://docs.cypress.io/app/core-concepts/retry-ability#Actions-should-be-at-the-end-of-chains-not-the-middle