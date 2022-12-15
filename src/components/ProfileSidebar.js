class ProfileSidebar {
  constructor(page) {
    this.html = `
    <aside class="profile-sidebar">
      <div class="profile-sidebar-header">
        <div class="profile-avatar">
          <img src="./assets/avatar_placeholder.png"/>
        </div>
        <div>
          <h2>Erick</h2>
        </div>
      </div>
      <div class="profile-menu">
        <a href="/profile.html" class="profile-menu-item ${page === 'profile' ? 'profile-menu-item-active' : null}">
          <img src="./assets/profile-icon.svg" width="22px"/>
          <span>Meu Perfil</span>
        </a>
        <a href="/password.html" class="profile-menu-item ${page === 'password' ? 'profile-menu-item-active' : null}">
          <img src="./assets/key-icon.svg" width="22px"/>
          <span>Editar Senha</span>
        </a>
        <a href="/reserveds.html" class="profile-menu-item ${page === 'reserveds' ? 'profile-menu-item-active' : null}">
          <img src="./assets/schedules-icon.svg" width="22px"/>
          <span>Minhas Reservas</span>
        </a>
        <a href="/my-coworkings.html" class="profile-menu-item ${page === 'coworkings' ? 'profile-menu-item-active' : null}">
          <img src="./assets/coworkings-icon.svg" width="22px"/>
          <span>Meus Coworkings</span>
        </a>
      </div>
    </aside>
    `;
  }

  render() {
    const node = document.getElementById('sidebar-component');
    node.innerHTML = this.html;
  }
}