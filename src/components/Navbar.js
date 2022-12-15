class Navbar {
  constructor() {
    this.html = `
      <nav class="header-nav header-nav-solid">
        <a href='/'>
          <img src="../../assets/logo-black.svg"/>
        </a>

        <div class="search-bar search-bar-bordered">
          <div class="search-bar-form-group">
            <label>Local</label>
            <input placeholder="Onde?"/>
          </div>
          <div class="search-bar-separator"></div>
          <div class="search-bar-form-group">
            <label>Check-in</label>
            <input placeholder="Quando?" type="date"/>
          </div>
          <div class="search-bar-separator"></div>
          <div class="search-bar-form-group">
            <label>Check-out</label>
            <input placeholder="Quando?" type="date"/>
          </div>
          <div class="search-bar-separator"></div>
          <div class="search-bar-form-group">
            <label>Pessoas</label>
            <input placeholder="0"/>
          </div>
          <a class="button-link" href="/search.html">
            <button class="search-bar-button">
              <img src="./assets/search-icon.svg"/>
              Buscar
            </button>
          </a>
        </div>

        <a href='/profile.html' class="header-nav-login">
          <div class="header-nav-login-avatar"></div>
          <div class="header-nav-login-name">Login</div>
        </a>
      </nav>
    `;
  }

  render() {
    const node = document.getElementById('navbar-component');
    node.innerHTML = this.html;
  }
}