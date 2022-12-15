class MyCoworkingCards {
  getHtml({ id, name, address, price, rate, image }) {
    return (
      `
        <div class="coworking-card coworking-card-reserved">
          <div class="coworking-card-image">
            <img src='${image}'/>
          </div>
          <div class="coworking-card-name-wrapper">
            <h3 class="coworking-card-name">${name}</h3>
            <div class="coworking-card-rate">
              <img width="20px" src="./assets/ant-design_star-filled.svg"/>
              <span class="coworking-stars">${rate}</span>
            </div>
          </div>
          <p class="coworking-card-address">${address}</p>
          <div class="coworking-card-separator"></div>
          <div class="my-coworking-buttons">
            <a href="/my-coworking.html?id=${id}" style="width: 100%; margin-right: 16px;">
              <button style="white-space: nowrap">Ver Reservas</button>
            </a>
            <a href="/my-coworking.html?id=${id}">
              <button>Editar</button>
            </a>
          </div>
        </div>
      `
    )
  }

  render(id, items) {
    const node = document.getElementById(id);

    items.map(item => node.innerHTML += this.getHtml(item))
  }
}