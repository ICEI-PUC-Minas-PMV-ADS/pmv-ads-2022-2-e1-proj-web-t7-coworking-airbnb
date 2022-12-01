# Especificações do Projeto

O direcionamento deste trabalho, a partir da definição do problema e buscando atender aos seus objetivos, baseou-se na construção de persona e nos relatos dos usuários. Estas informações, por sua vez, foram levantadas pela equipe a partir de depoimentos e vivências do próprio grupo e também de outros indivíduos.

## Personas

A definição da persona é uma etapa fundamental para a representação, ainda que fictícia, do usuário ideal, baseada em características demográficas e comportamentais. Para esta etapa, os perfis dos usuários foram apresentados nas figuras a seguir.

| Foto | Nome | Informações pessoais | Perfil Profissional | Frustrações | Interesses |
|------|------|----------------------|---------------------|-------------|------------|
| <img src='https://linxdating.files.wordpress.com/2015/02/istock_000050438842small-copy.jpg'/> | Rafael Silva | 25 anos, solteiro, mora com amigos em um apartamento pequeno na região metropolitana de Belo Horizonte/MG | Designer gráfico em uma rede de clínicas de estética | Mora em um apartamento pequeno, tem um quarto pequeno e pouco espaço para trabalhar com conforto | Explorar novos ambientes de trabalho, buscar inspirações urbanas para seu trabalho |
| <img src='https://media.glamour.com/photos/5e5e5d24a81f440008a6d948/6:7/w_853,h_996,c_limit/GettyImages-925102080.jpg'/> | Gabriella Ferreira | 38 anos, casada, mora com a filha de 10 anos e o marido engenheiro civil na cidade de Belo Horizonte | Empreendedora que escolher deixar o trabalho de gerente de Recursos Humanos para criar o espaço de coworking | Não se sentia realizada no trabalho que desempenhava, falta de perspectiva de crescimento na empresa que trabalhava  | Continuar trabalhando com pessoas ajudando-as ao disponibilizar espaços de trabalho com ambientes leves que ajudem na produtividade, vê a crescente procura por espaços de trabalho compartilhado  |
<img src='https://user-images.githubusercontent.com/36122235/205072024-3500bd88-2d5a-4fd4-b81b-656cd8eccf79.png'/>| Sabrina Costa | 28 anos, solteira, nômade viajando por cidades litorâneas do Brasil | Fonoaudióloga especialista em comunicação humana e que presta serviços remotos para empresas de forma autônoma | Não consegue se programar com antecedência quando planeja mudar de cidade | Encontrar espaços de coworking em nas cidades litorâneas em que tem interesse de morar e trabalhar, procurar descontos para longas estadias |

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
|RF-001| Deve ser possível se registrar e fazer login | ALTA | 
|RF-002| Deve ser possível fazer buscas com filtros de coworkings | ALTA | 
|RF-003| Deve ser possível realizar uma reserva    | ALTA |
|RF-004| Deve ser possível cancelar uma reserva   | ALTA |
|RF-005| Deve ser possível ver reservas feitas   | ALTA |
|RF-006| Deve ser possível publicar anúncios   | ALTA |
|RF-007| Deve ser possível cancelar um anúncio   | ALTA |
|RF-008| Deve ser possível ver reservas de um anúncio   | ALTA |
|RF-009| Deve ser possível alterar dados do perfil   | MÉDIA |
|RF-010| Deve ser possível recuperar a senha   | MÉDIA |
|RF-011| Deve ser possível alterar a senha   | MÉDIA |
|RF-012| Deve ser possível editar um anúncio   | MÉDIA |
|RF-013| Deve ser possível ver dados de contato de quem reservou   | MÉDIA |

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
|01| A princípio só terá espaços coworking de empresas parceiras |
|02| Não pode ser desenvolvido um módulo de backend        |
