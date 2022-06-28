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

        <div class="payment__description">
          <p>
            Після оплати цього тарифного плану ви зможете проходити курси впродовж 30 днів.
          </p>
          <p>
            Після того, як ці дні вичерпаються, ми просто змінемо статус вашого тарифного плану на “очікує активації”. І ви зможете
            знову проплатити тарифний план та продовжити проходити курси.
          </p>
        </div>
      </div>
      <div class="payment__column payment__column--main">
        <div class="payment__h2-wrapper">
          <div 
            data-component="getTitle"
            data-title="Варіанти оплати:"
            data-tag="h2"
          >
          </div>
        </div>

        <div class="payment__h3-wrapper">
          <div 
            data-component="getTitle"
            data-title="За допомогою LiqPay"
            data-tag="h3"
          >
          </div>
        </div>

        <div 
          data-component="getButton"
          data-title="PAY"
          data-classes="button--border-radius"
        >
        </div>
        
        <div class="payment__separator">
          <div 
            data-component="getGroupTitle"
            data-title="або"
          >
          </div>
        </div>

        <div class="payment__h3-wrapper">
          <div 
            data-component="getTitle"
            data-title="За реквізитами"
            data-tag="h3"
          >
          </div>
        </div>

        <div class="payment__info-group">
          <p class="payment__info-title">Отримувач</p>
          <p class="payment__info-value">
            <span>Переверзєв Андрій Олександрович</span>
            <span 
              data-component="getCopyButton"
              data-value="Переверзєв Андрій Олександрович"
            >
            <span>
          </p>
        </div>

        <div class="payment__info-group">
          <p class="payment__info-title">IBAN</p>
          <p class="payment__info-value">
            <span>UA313220010000026206301099348</span>
            <span 
              data-component="getCopyButton"
              data-value="UA313220010000026206301099348"
            >
            <span>
          </p>
            
          
        </div>

        <div class="payment__info-group">
          <p class="payment__info-title">ІПН/ЄДРПОУ</p>
          <p class="payment__info-value">
            <span>3325512457</span>
            <span 
              data-component="getCopyButton"
              data-value="33255124578"
            >
            <span>
          </p>
        </div>

        <div class="payment__info-group">
          <p class="payment__info-title">Призначення платежу</p>
          <p class="payment__info-value">
            <span>Курси з програмування.30 днів.200грн</span>
            <span 
              data-component="getCopyButton"
              data-value="Курси з програмування.30 днів.200грн"
            >
            <span>
          </p>
        </div>

        <div 
          data-component="getInput"
          data-id="comment"
          data-name="comment"
          data-label="Коментар"
          data-placeholder=" "
          data-value=""
        >
        </div>

        <div 
          data-component="getButton"
          data-title="Підтвердити оплату"
          data-classes="button--border-radius"
        >
        </div>
        
      </div>

    </div>
    <!-- END. payment -->
  `;
}