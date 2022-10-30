class ProfilePage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();
    const sidebar = new ProfileSidebar('profile');
    sidebar.render();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  }
}

const profilePage = new ProfilePage();