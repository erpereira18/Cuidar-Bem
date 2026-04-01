Feature: Cadastro de receita 

  Cenário: Cadastro de receita com receita com dados corretos. 
Dado que o usuário está na tela de cadastro 
Quando ele preencher os dados da receita corretamente
Então o sistema deve salvar a receita com sucess. 

  Cenário: Simplificação das instruções.
Dado que existe uma receita cadastrada 
Quando o usuário visualizar as instruções 
Então o sistema deve exibir as instuções em linguagem simplificada. 
