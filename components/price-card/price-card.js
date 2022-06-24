function getPriceCard({ component, title, subtitle, image, buttonTitle }) {
  return `
    <!-- price-card -->
    <div class="price-card" data-name="${component}">
      <div
        class="price-card__image"
        style="background-image: url(${image})"
      ></div>
      <div class="price-card__body">
        <p class="price-card__text price-card__text--title">${title}</p>
        <p class="price-card__text price-card__text--subtitle">
         ${subtitle}
        </p>
        <div class="price-card__button-wrapper">
          <!-- button -->
          <a class="button button--border-radius button--fullwidth"
            >${buttonTitle}</a
          >
          <!-- END. button -->
        </div>
      </div>
    </div>
    <!-- END. price-card -->
  `;
}

function priceCardVariant1({ component }) {
  return getPriceCard({
    component,
    title: '10 днів',
    subtitle: 'Безкоштовно <br>10 діб',
    buttonTitle: 'Активувати',
    image: './img/10days.png',
  });
}

function priceCardVariant2({ component }) {
  return getPriceCard({
    component,
    title: '30 днів',
    subtitle: '215 грн',
    buttonTitle: 'Придбати',
    image: './img/30days.png',
  });
}

function priceCardVariant3({ component }) {
  return getPriceCard({
    component,
    title: '365 днів',
    subtitle: '2010 грн<br>2011 грн<br>2012',
    buttonTitle: 'Придбати',
    image: './img/365days.png',
  });
}
