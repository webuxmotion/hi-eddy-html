function getPaymentParamsKeys() {
  return [];
}

function getPayment(params) {
  const {    } = extractParams(params, getPaymentParamsKeys());

  return `
    <!-- payment -->
    <div class="payment" data-name="${params.component}">

      <div class="payment__column">
        <div class="payment__tariff-card">
          <div 
            class="payment__tariff-card-image" 
            style="background-image: url('./img/10days.png')"
          ></div>
          <div class="payment__tariff-card-body">
            <p class="payment__tariff-card-text">
              <span>Тарифний план: </span>
              <span>“30 днів”</span>
            </p>
            <p class="payment__tariff-card-text">
              <span>Вартість: </span>
              <span>200 грн</span>
            </p>
          </div>
        </div>

        <p>
          Після оплати цього тарифного плану ви зможете проходити курси впродовж 30 днів.
        </p>
        <p>
          Після того, як ці дні вичерпаються, ми просто змінемо статус вашого тарифного плану на “очікує активації”. І ви зможете
          знову проплатити тарифний план та продовжити проходити курси.
        </p>
      </div>
      <div class="payment__column payment__column--main">
        <div 
          data-component="getTitle"
          data-title="Варіанти оплати:"
          data-tag="h2"
        >
        </div>

        <div 
          data-component="getTitle"
          data-title="За допомогою LiqPay"
          data-tag="h3"
        >
        </div>

        <div 
          data-component="getGroupTitle"
          data-title="або"
        >
        </div>

        <div 
          data-component="getTitle"
          data-title="За реквізитами"
          data-tag="h3"
        >
        </div>
      </div>

    </div>
    <!-- END. payment -->
  `;
}