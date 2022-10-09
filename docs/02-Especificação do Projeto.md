# Especificações do Projeto

O direcionamento deste trabalho, a partir da definição do problema e buscando atender aos seus objetivos, baseou-se na construção de persona e nos relatos dos usuários. Estas informações, por sua vez, foram levantadas pela equipe a partir de depoimentos e vivências do próprio grupo e também de outros indivíduos.

## Personas

A definição da persona é uma etapa fundamental para a representação, ainda que fictícia, do usuário ideal, baseada em características demográficas e comportamentais. Para esta etapa, os perfis dos usuários foram apresentados nas figuras a seguir.

### Rafael Silva
#### 1) Informações pessoais:
- 25 anos
- Solteiro
- Mora com amigos em um apartamento pequeno na região metropolitana de Belo Horizonte/MG

#### 2) Perfil profissional:
- Designer gráfico em uma rede de clínicas de estética

#### 3) Frustrações:
- Mora em um apartamento pequeno
- Tem um quarto pequeno e pouco espaço para trabalhar com conforto

#### 4)Interesses:
- Explorar novos ambientes de trabalho
- Buscar inspirações urbanas para seu trabalho

### Gabriella Ferreira
#### 1) Informações pessoais:
- 38 anos
- Casada
- Mora com a filha de 10 anos e o marido engenheiro civil na cidade de Belo Horizonte

#### 2) Perfil profissional:
- Empreendedora que escolher deixar o trabalho de gerente de Recursos Humanos para criar o espaço de coworking

#### 3) Frustrações:
- Não se sentia realizada no trabalho que desempenhava 
- Falta de perspectiva de crescimento na empresa que trabalhava

#### 4) Interesses:
- Continuar trabalhando com pessoas ajudando-as ao disponibilizar espaços de trabalho com ambientes leves que ajudem na produtividade
- Vê a crescente procura por espaços de trabalho compartilhado

### Sabrina Costa
#### 1) Informações pessoais:
- 28 anos
- Solteira
- Trabalha de forma nômade viajando por cidades litorâneas do Brasil

#### 2) Perfil profissional:
- Fonoaudióloga especialista em comunicação humana e que presta serviços remotos para empresas de forma autônoma

#### 3) Frustrações:
- Não consegue se programar com antecedência quando planeja mudar de cidade

#### 4) Interesses:
- Encontrar espaços de coworking em nas cidades litorâneas em que tem interesse de morar e trabalhar
- Procurar descontos para longas estadias

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rafael Silva  | localizar espaços de coworking na cidade onde moro          | variar meu local de trabalho durante a semana               |
|Gabriella Ferreira       | disponibilizar espaços saudáveis de trabalho a quem precisa                 | contribuir com o aumento da produtividade e qualidade de vida dos usuários |
|Sabrina Costa  | aumentar minha rede de networking          | criar novas parcerias profissionais e, consequentemente, meus ganhos mensais  |
|Sabrina Costa  | realizar agendamento antecipado          | garantir que o local estará disponível quando mudar de cidade               |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

Os requisitos funcionais aos quais o projeto deve atender, bem como o grau de prioridade de cada um deles, estão dispostos na tabela a seguir.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve ser capaz encontrar espaços de coworking por cidade | ALTA | 
|RF-002| O site deve permitir a criação de contas pelos usuários   | ALTA |
|RF-003| O site deve permitir que o usuário dê feedback dos lugares que utilizou | ALTA | 
|RF-004| O site deve permitir agendamentos de espaços de trabalho específicos em cada local    | MÉDIA |
|RF-005| O site de permitir que o usuário faça check in | BAIXA | 
|RF-006| O site de permitir que o usuário faça check out   | BAIXA |
|RF-007| O site deve ser capaz de redirecionar endereços a mapas virtuais e criar rotas mais rápidas para acesso ao local   | BAIXA |


### Requisitos não Funcionais

Os requisitos não funcionais aos quais o projeto deve atender, bem como o grau de prioridade de cada um deles, estão dispostos na tabela a seguir.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A exibição do site deve ser possível em qualquer tamanho de tela | ALTA | 
|RNF-002| O site deve permitir o acesso de milhares de usuários ao mesmo tempo |  MÉDIA | 
|RNF-003| O site deve ter uma aparência leve e fluida além de rápida resposta nos cliques dos usuários | BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
