class Homepage {
  constructor() {
    const header = new Header();
    header.render();

    const coworkingCards = new CoworkingCards();
    fetch('./database/coworkings.json').then((response) => {
      response.json().then(data => {
        coworkingCards.render('coworkings-grid', data);
      })
    })
  }
}

const homepage = new Homepage();