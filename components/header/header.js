function headerVariant1({ component }) {
  return `
  <!-- header -->
  <header class="header" data-name="${component}">
    <div class="header__navigation">
      <!-- nav-item -->
      <div class="nav-item">
        <a href="./index.html" class="nav-item__control">
          <span class="nav-item__text">Home</span>
        </a>
      </div>
      <!-- END. nav-item -->
      <!-- nav-item -->
      <div class="nav-item">
        <div class="nav-item__dropdown">
          ${getSubnavList(components, 'components')}
        </div>
        <a class="nav-item__control">
          <span class="nav-item__text">Components</span>
        </a>
      </div>
      <!-- END. nav-item -->
      <!-- nav-item -->
      <div class="nav-item">
        <div class="nav-item__dropdown">
          ${getSubnavList(pages, 'pages')}
        </div>
        <a class="nav-item__control">
          <span class="nav-item__text">Pages</span>
        </a>
      </div>
      <!-- END. nav-item -->
      <!-- nav-item -->
      <div class="nav-item">
        <a href="./icons.html" class="nav-item__control">
          <span class="nav-item__text">Icons</span>
        </a>
      </div>
      <!-- END. nav-item -->
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
        <a href="./pages/prices/prices.html" class="nav-item__control">
          <span class="nav-item__text">Ціни</span>
        </a>
      </div>
      <!-- END. nav-item -->
    </div>
    <div 
      data-component="getButton"
      data-title="Вхід"
      data-iconleft="user"
      data-iconleftclasses="button__icon--light"
      data-tag="a"
      data-classes="button--header button--header-bottom-radius"
      data-href="./pages/login.html"
    >
    </div>
    <div class="header__corner-button">
      <div 
        data-component="getButton"
        data-title="Рeєстрація"
        data-tag="a"
        data-classes="button--header button--header-corner"
        data-href="./pages/registration.html"
      >
      </div>
    </div>
  </header>
  <!-- END. header -->
  `;
}
