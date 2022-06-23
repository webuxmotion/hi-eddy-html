function tariffVariant1(attr) {
  return `
    <!-- tariff -->
    <div class="tariff" data-name="${attr}">
      <img class="tariff__image" src="./img/10days.png" alt="">
      <p class="tariff__days">10 днів</p>
      <p class="tariff__price">Безкоштовно <br> 10 діб</p>
      <div class="tariff__button-wrapper">
        <button class="button button--fullwidth button--border-radius">Активувати</button>
      </div>
    </div>
    <!-- END. tariff -->
  `;
}
