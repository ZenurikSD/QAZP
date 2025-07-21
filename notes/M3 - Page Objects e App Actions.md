Domingo, 22 Jun 25
___
- [x] Aulas
- [x] Material
- [x] Exercícios
	- [x] Implementar PageObject em uma página/parte do sistema e incluir em um teste
- [x] Reunião de discussão
____

# Page Objects
Page Object é um design pattern para testes automatizados que usa os conceitos da Orientação a Objetos para representar páginas e seus componentes como objetos individuais com atributos que podem ser modificados e métodos que podem ser chamados para executar alguma ação específica nela. 

O uso de Page Objects facilita a criação dos testes, pois todas as páginas possuem uma representação única no código, espelhando a versão real. Por outro lado, isso é uma camada de abstração extra que pode causar lentidão, dependendo do tamanho das suítes de teste.

No Cypress, POs substituem a implementação dos `cy.doSomething` no teste por um instanciamento da classe que representa a página, e essa por sua vez que executa os comandos necessários.

Um Page Object pode guardar data-testids nos seus atributos então não é preciso se preocupar em passar o ID do elemento toda vez que for interagir com ele; pode ter funções de clicar ou digitar em botões e campos, entre outras ações que podem ser executadas dentro da página. 


# App Actions
App Action é um paradigma recente para executar ações e definir o estado da aplicação de uma forma que não interage com a página da mesma forma que um usuário faria. Ao invés disso, uma interface da lógica da aplicação é exposta aos testes (model property, APIs etc.), e o teste utiliza essa porta de acesso para alterar a UI "por debaixo dos panos", efetivamente tornando o teste muito mais rápido.

O [artigo que introduz o conceito de App Actions](https://www.cypress.io/blog/stop-using-page-objects-and-start-using-app-actions) dá um exemplo: Se o meu site cria tarefas que podem ser completadas e eu tenho um teste que "Marca todas as tarefas como 'Concluída'", eu não preciso passar pela UI para criar tarefa por tarefa antes de começar o teste. Com App Actions eu posso invocar o método por trás da ação da UI: `createTodo()` e executar essa ação de pré-requisito de uma forma muito mais eficiente.

## (ChatGPT) Vantagens das Application Actions

1. **Testes ficam mais rápidos** por manipular diretamente o estado da aplicação ao invés de interagir com a UI.
    
2. **Código mais limpo e coerente**: reduz duplicação, elimina estado redundante presente nos Page Objects.
    
3. **Refatoração colaborativa**: testes passam a influenciar melhorias no modelo da aplicação, incentivando clareza e documentação.
    
4. **Erros específicos e isolados**: mudanças em uma feature quebram apenas os testes relacionados àquela feature.

## Quando usar?
(ChatGPT) **Uso seletivo de UI**: continue usando UI apenas para a parte que está sendo testada, mantendo o resto via Application Actions.


______
## Feedbacks
1. Me senti um pouco perdido no vídeo do Leo sobre page objects. Acho que ele passou bem rápido pelas explicações do que é um page object, como implementar, quais são os benefícios etc., e elas não foram muito satisfatórias pra mim. Achei os exemplos de implementação que ele passou um pouco confusos e ele não seguiu boas práticas.
2. Gostaria que tivessem tocado no ponto de boas práticas dos Chainables (é *tchêinebouls* Uendell, não *tchái nêibouls* 😂) como não poder continuar o encadeamento após uma ação como click( ) e type( ).: https://docs.cypress.io/app/core-concepts/retry-ability#Actions-should-be-at-the-end-of-chains-not-the-middle