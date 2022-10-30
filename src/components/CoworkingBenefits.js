class CoworkingBenefits {
  getHtml({ name, icon }) {
    return (
      `
      <div class="coworking-benefit">
        <div class="coworking-benefit-icon">
          <img src="./assets/${icon}"/>
        </div>
        <div class="coworking-benefit-name">${name}</div>
      </div>
      `
    )
  }

  render(id, items) {
    const node = document.getElementById(id);

    items.map(item => node.innerHTML += this.getHtml(item))

  }
}