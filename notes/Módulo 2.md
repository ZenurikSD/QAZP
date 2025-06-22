Segunda, 09 Jun 2025
___
- [ ] Aula
- [ ] Material
- [ ] Exercícios: 
	- [x] Trabalhar com  `beforeEach` e `afterEach`
	- [ ] Adicionar data-testids nos componentes
	- [x] Criar custom commands
- [ ] Reunião de discussão
___

# O que automatizar?
Sistemas podem ter centenas ou milhares de cenários de teste. É inviável automatizar tudo, uma priorização deve ser feita para garantir que as partes mais importantes estão cobertas, com o menor número de testes possível.

Os testes que devem ser automatizados primeiro são aqueles que
- **Testam partes críticas do sistema:** Aqueles que são essenciais para o seu funcionamento
- **Testam os fluxos de usuário mais importantes:** Aqueles nos quais o usuário depende para alcançar o seu objetivo
- **Testam casos repetitivos e estáveis:** Aqueles que "não tem sentido" em testar manualmente.


# Dúvidas
1. No primeiro vídeo do 2º módulo o Gustavo remove os testes de login e logout para colocar eles no beforeEach e afterEach, dizendo que não são mais necessários. Mas o teste ainda validava que a ação foi feita com sucesso, enquanto que os hooks não. Pra mim tinha que manter eles ainda.

2. Qual a melhor maneira de validar que um orçamento foi criado no sistema quando o registro dele vai para a 2ª página da tabela?