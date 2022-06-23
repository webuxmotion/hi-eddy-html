function headerVariant1(attr) {
  return `
  <!-- header -->
  <header class="header" data-name="${attr}">
    <div class="header__navigation">
      <!-- nav-item -->
      <div class="nav-item" tabindex="0">
        <div class="nav-item__dropdown">
          <ul>
            <li>
              <a href="#">про академію</a>
            </li>
            <li>
              <a href="#">політика конфіденційності</a>
            </li>
            <li>
              <a href="#">оферта</a>
            </li>
            <li>
              <a href="#">оплата та доставка</a>
            </li>
          </ul>
        </div>
        <a class="nav-item__control">
          <span class="nav-item__text">Про нас</span>
        </a>
      </div>
      <!-- END. nav-item -->
      <!-- nav-item -->
      <div class="nav-item">
        <a href="#" class="nav-item__control">
          <span class="nav-item__text">Ціни</span>
        </a>
      </div>
      <!-- END. nav-item -->
    </div>
    <!-- button -->
    <a href="#" class="button button--header button--header-bottom-radius">
      <span class="button__icon" data-icon="user"></span>
      Вхід</a
    >
    <!-- END. button -->
    <div class="header__corner-button">
      <!-- button -->
      <a href="#" class="button button--header button--header-corner">
        РЕЄстрація
      </a>
      <!-- END. button -->
    </div>
  </header>
  <!-- END. header -->
  `;
}
