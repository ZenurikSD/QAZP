terça-feira, 22 abr. 2025 
___
- [x] Aula
- [x] Material
- [x] Atividade
- [ ] Reunião de discussão

Usuário: admin
Senha: 123

## Exercícios
- [x] Pensar em cenários de teste e executá-los no sistema
- [x] Escrever alguns desses cenários em Gherkin e step-by-step
- [x] Ler o material

# Cenários de teste
## Landing page
1. Solicitar um orçamento
2. Fazer login

## Management page
1. Validar atualizações de clientes, usuários e eventos na aba de dashboard
2. Validar atualizações na aba de orçamentos
3. Pesquisar orçamentos
4. Gerenciar clientes
	1. CRUD
5. Gerenciar materiais
	1. CRUD
6. Gerenciar eventos
	1. CRUD
7. Gerenciar usuários
	1. CRUD
8. Fazer logout


_____

# Testes em Gherkin
## CENÁRIO: Solicitação de Orçamento válida
DADO que estou na landing page
QUANDO clico em "Solicitar Orçamento"
E o modal de "Solicitar Orçamento" aparece
E preencho o campo "Nome Completo" com "José Soares"
E preencho o campo "Email" com "joses@email.com"
E preencho o campo "Telefone" com "11912345678"
E seleciono a opção "Workshop" no campo "Tipo do evento"
E preencho o capo "Público estimado" com "15"
E clico em "Enviar solicitação"
ENTÃO um toast de sucesso aparece na tela dizendo "Seu orçamento foi criado com sucesso! Em breve nossa equipe entrará em contato para fornecer mais informações"
E a solicitação é registrada no sistema
E há um request com método "POST" do arquivo "Quote" com retorno "200"


## CONTEXTO
DADO que o usuário possui uma conta no sistema
E uma solicitação de orçamento foi registrada anteriormente
### 1. CENÁRIO: Validar que um novo orçamento foi registrado
DADO que o usuário está na página "Dashboard" de gerenciamento do sistema
QUANDO ele clica na opção "Orçamentos" do menu lateral
E a página de "Orçamentos" é carregada
ENTÃO deve haver um registro do orçamento criado anteriormente
E o registro deve possuir "Nome", "Email", "Celular", "Tipo" e "Público" com valores válidos

### 2. CENÁRIO: Criar um novo cliente
DADO que o usuário está na página "Clientes" do sistema

QUANDO ele clica no botão "Criar cliente"
E um modal "Criar cliente" aparece com seções de "Informações pessoais" e "Localização"
E ele preenche o campo "Nome Completo" com "Antônio Ramosantonio"
E ele preenche o campo "Documento" com "75718491011"
E ele preenche o campo "Telefone" com "11912345678"
E ele preenche o campo "Email" com "antonio@email.com"
E ele preenche o campo "CEP" com "04841-170"
E o campo "Rua" é auto-preenchido com "Rua Salomão Gebara"
E o campo "Bairro" é auto-preenchido com "Parque Planalto"
E o campo "Estado" é auto-preenchido com "SP"
E o campo "Cidade" é auto-preenchido com "São Paulo"
E ele preenche o campo "Número" com "111"
E ele preenche o campo "Complemento" com "2º Andar"
E ele clica no botão "Criar cliente"

ENTÃO um toast de sucesso aparece
E o modal "Criar cliente" é fechado automaticamente
E um novo registro aparece na tabela de Clientes com as informações digitadas
E há um request com método "POST" do arquivo "Client" com retorno "200"
