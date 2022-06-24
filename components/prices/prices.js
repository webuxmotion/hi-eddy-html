function pricesVariant1({ component }) {
  return `
    <!-- prices -->
    <div class="prices" data-name="${component}">
      <div class="prices__header">
        <h2 class="prices__title">Тарифні плани</h2>
        <p class="prices__text">
          Ми за чесні відносини. Коли дні в твоєму тарифному плані закінчаться,
          ти зможеш продовжити свій тарифний план, коли захочеш, хоч через рік.
        </p>
      </div>
      <div class="prices__list">
        <div class="prices__card">
          <div data-component="tariffVariant1"></div>
        </div>
        <div class="prices__card">
          <div data-component="priceCardVariant2"></div>
        </div>
        <div class="prices__card">
          <div data-component="daysVariant1"></div>
        </div>
      </div>
    </div>
    <!-- END. prices -->
  `;
}
