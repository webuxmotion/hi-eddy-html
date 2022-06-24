function heroVariant1({ component }) {
  return `
    <!-- hero -->
    <div class="hero" data-name="${component}">
      <div class="hero__column hero__column--main">
        <div class="hero__main">
          <h1 class="hero__title">Академія hi-eddy <br />вітає вас</h1>
          <h2 class="hero__subtitle">В нас є 2 курси з програмування</h2>
          <div class="hero__button-wrapper">
            <div 
              data-component="getButton"
              data-title="Дивитись курси"
              data-tag="a"
              data-href="./pages/courses/courses.html"
              data-classes="button--fullwidth button--border-radius"
            >
            </div>
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
