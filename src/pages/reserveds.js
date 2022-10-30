class ReservedsPage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();
    const sidebar = new ProfileSidebar('reserveds');
    sidebar.render();

    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');

    const coworkingCards = new CoworkingCards();
    fetch('./database/coworkings.json').then((response) => {
      response.json().then(data => {
        coworkingCards.render('coworkings-grid', data);
      })
    })
  }
}

const reservedsPage = new ReservedsPage();