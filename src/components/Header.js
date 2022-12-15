class Header {
  constructor() {
    this.html = `
      <header class="header">
        <nav class="header-nav">
          <img src="../../assets/logo.svg"/>
          <a href='/profile.html' class="header-nav-login">
            <div class="header-nav-login-avatar"></div>
            <div class="header-nav-login-name">Antony</div>
          </a>
        </nav>

        <h1 class="header-title">Descubra lugares <strong>para trabalhar</strong> pelo 🌎</h1>

        <div class="search-bar">
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
      </header>
    `;
  }

  render() {
    const node = document.getElementById('header-component');
    node.innerHTML = this.html;
  }
}