class CoworkingCards {
  getHtml({ id, name, address, price, rate, image }) {
    return (
      `
        <a href="/coworking.html?id=${id}" class="coworking-card coworking-card-reserved">
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
          <div class="coworking-reserved-title">Reserva</div>
          <div class="coworking-reserved-date">
            01/01/2022 - 05/01/2022 | <span class="coworking-reserved-days">05 Dias</span>
          </div>
          <div class="coworking-reserved-badge coworking-reserved-confirmed">Confirmado</div>
        </a>
      `
    )
  }

  render(id, items) {
    const node = document.getElementById(id);

    if (!items.length) {
      node.innerHTML += this.getHtml(items).replace('<a', '<div').replace('</a', '</div');
    } else {
      items.map(item => node.innerHTML += this.getHtml(item))
    }

  }
}