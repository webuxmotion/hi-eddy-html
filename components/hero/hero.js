function heroVariant1(attr) {
  return `
    <!-- hero -->
    <div class="hero" data-name="${attr}">
      <div class="hero__column hero__column--main">
        <div class="hero__main">
          <h1 class="hero__title">Академія hi-eddy <br />вітає вас</h1>
          <h2 class="hero__subtitle">В нас є 2 курси з програмування</h2>
          <div class="hero__button-wrapper">
            <!-- button -->
            <a class="button button--border-radius button--fullwidth">
              Дивитись курси
            </a>
            <!-- END. button -->
          </div>

          <div class="hero__why">
            <h3 class="hero__why-title">Чому люди обрають нас?</h3>
            <p class="hero__why-text">
              Нас обирають, тому що ми поважаємо ваш час. Наприклад, наші курси
              дають вам знання, за допомогою яких ви зможете безкінечно
              наповнювати своє портфоліо якісними роботами.
            </p>
          </div>
        </div>
      </div>
      <div class="hero__column">
        <div class="hero__image-wrapper">
          <img class="hero__image" src="./img/eddy.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- END. hero -->
  `;
}
