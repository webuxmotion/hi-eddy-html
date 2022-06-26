function getPriceCardParamsKeys() {
  return ['title', 'subtitle', 'image', 'buttontitle', 'href'];
}

function getPriceCard(params) {
  const { title, href, subtitle, image, buttontitle } = extractParams(params, getPriceCardParamsKeys());

  return `
    <!-- price-card -->
    <div class="price-card" data-name="${params.component}">
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
          <a href="${href}" class="button button--border-radius button--fullwidth"
            >${buttontitle}</a
          >
          <!-- END. button -->
        </div>
      </div>
    </div>
    <!-- END. price-card -->
  `;
}
