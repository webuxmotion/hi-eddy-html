function getTariffStatusParamsKeys() {
  return ['text', 'image'];
}

function getTariffStatus(params) {
  const { text, image } = extractParams(params, getTariffStatusParamsKeys());

  return `
    <!-- tariff-status -->
    <div class="tariff-status" data-name="${params.component}">
      <div class="tariff-status__header">
        <div 
          data-component="getTitle"
          data-title="Ваш тарифний план"
          data-classes="title--weight-normal"
          data-tag="h3"
        >
        </div>
        <div class="tariff-status__header-group">
          <div class="tariff-status__image-wrapper">
            <div class="tariff-status__image" style="background-image: url('${image}')"></div>
          </div>
          <div class="tariff-status__details">
            <p><span>Назва тарифу:</span> 10 діб безкоштовно</p>
            <p><span>Залишилось:</span> 8 діб</p>
            <p><span>Статус:</span> перевірка оплати</p>
          </div>
        </div>
      </div>
      <div class="tariff-status__main">
        <div class="tariff-status__text-wrapper">
          <p>${text}</p>
          <p>${text}</p>
        </div>
        <img class="tariff-status__person-image" src="./img/eddy.svg" alt="hieddy person">
      </div>
    </div>
    <!-- END. tariff-status -->
  `;
}