class CoworkingPage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();
    const sidebar = new ProfileSidebar('coworkings');
    sidebar.render();

    const urlParams = new URLSearchParams(window.location.search);

    const coworkingCards = new MyCoworkingCards();
    fetch('./database/coworkings.json').then((response) => {
      response.json().then(data => {
        coworkingCards.render('coworkings-grid', data);
      })
    })
  }
}

const coworkingPage = new CoworkingPage();