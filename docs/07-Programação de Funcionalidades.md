# Programação de Funcionalidades

## Listagem de coworkings

### Tela implementada
<img src='https://cdn.discordapp.com/attachments/913423147263463454/1047885039142195301/image.png'/>
<span style="text-align: center">Figura 1: Tela com implementação da listagem</span>

### Estrutura de dados

A estrutura JSON utilizada para cada coworking segue o exemplo abaixo:

````
  {
    "id": 1,
    "name": "Namaste Coworking",
    "price": 140,
    "address": "Rua da Pátria, 1234",
    "rate": 4.7,
    "image": "https://www.contabilizei.com.br/contabilidade-online/wp-content/uploads/2020/10/coworking-escritorio-scaled-e1603737218960.jpg",
    "benefits": [
      {
        "name": "Animais",
        "icon": "animal.svg"
      },
      {
        "name": "Limpeza",
        "icon": "clean.svg"
      },
      {
        "name": "Estacionamento",
        "icon": "park.svg"
      }
    ]
  }
````

A implementação do código responsável pela listagem pode ser acessada [aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t7-coworking-airbnb/blob/main/src/pages/search.js).
