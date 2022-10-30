class SearchPage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();

    const coworkingCards = new CoworkingCards();
    fetch('./database/coworkings.json').then((response) => {
      response.json().then(data => {
        coworkingCards.render('coworkings-grid', data);
      })
    })
  }
}

const searchPage = new SearchPage();