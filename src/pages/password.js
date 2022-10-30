class PasswordPage {
  constructor() {
    const navbar = new Navbar();
    navbar.render();
    const sidebar = new ProfileSidebar('password');
    sidebar.render();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  }
}

const passwordPage = new PasswordPage();