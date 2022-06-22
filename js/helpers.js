insertNavigationOnTop();
layout();
loadIconsScript();
loadStyles(() => {
  document.body.style.opacity = 1;
});

function insertNavigationOnTop() {
  const code = `
  <div>
    <div class="nav-item">
      <a href="./index.html" class="nav-item__control">
        <span class="nav-item__text">Home</span>
      </a>
    </div>
    <div class="nav-item">
      <div class="nav-item__dropdown">
        <ul>
          <li>
            <a href="./components/button/button.html">button</a>
          </li>
          <li>
            <a href="./components/sidebar-button/sidebar-button.html">sidebar-button</a>
          </li>
          <li>
            <a href="./components/logo/logo.html">logo</a>
          </li>
          <li>
            <a href="./components/nav-item/nav-item.html">nav-item</a>
          </li>
          <li>
            <a href="./components/header/header.html">header</a>
          </li>
          <li>
            <a href="./components/sidebar/sidebar.html">sidebar</a>
          </li>
          <li>
            <a href="./components/price-card/price-card.html">price-card</a>
          </li>
        </ul>
      </div>
      <a class="nav-item__control">
        <span class="nav-item__text">Components</span>
      </a>
    </div>
    <div class="nav-item">
      <div class="nav-item__dropdown">
        <ul>
          <li>
            <a href="./pages/home/home.html">home</a>
          </li>
          <li>
            <a href="./pages/example/example.html">example</a>
          </li>
        </ul>
      </div>
      <a class="nav-item__control">
        <span class="nav-item__text">Pages</span>
      </a>
    </div>
    <div class="nav-item">
      <a 
        target="_blank"
        href="https://www.figma.com/file/ADcMvwBp6S51uSI4Xlkt23/hi-20jun-2022-tariff-cards-ui?node-id=0%3A1" 
        class="nav-item__control"
      >
        <span class="nav-item__text">Design</span>
        <span class="nav-item__icon" data-icon="external-link"></span>
      </a>
    </div>
  </div>
  `;
  const content = document.body.innerHTML;

  document.body.innerHTML = code;
  document.body.innerHTML += content;
}

function loadIconsScript() {
  var script = document.createElement('script');
  script.onload = function () {
    //do stuff with the script
  };
  script.src = './js/icons.js';

  document.body.appendChild(script);
}

function loadStyles(callback) {
  const target = document.getElementsByTagName('head')[0];

  const links = [
    'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;600;700&display=swap',
    './css/reset.css',
    './css/style.css',
    './components/button/button.css',
    './components/logo/logo.css',
    './components/nav-item/nav-item.css',
    './components/sidebar-button/sidebar-button.css',
    './components/header/header.css',
    './components/sidebar/sidebar.css',
    './components/price-card/price-card.css',
    './pages/home/home.css',
    './pages/example/example.css',
  ];

  links.forEach((oneLink) => {
    const link = document.createElement('link');
    link.href = oneLink;
    link.rel = 'stylesheet';

    target.appendChild(link);
  });

  setTimeout(() => {
    callback();
  }, 100);
}

function layout() {
  const pageElement = document.getElementById('page');
  if (pageElement) {
    const pageContent = pageElement.innerHTML;
    const fullPageCode = getCode(pageContent);
    pageElement.innerHTML = fullPageCode;
  }
  function getCode(content) {
    return `
    <div class="l-layout">
    <aside class="l-layout__sidebar">
      ${sidebarVariant1()}
    </aside>
    <div class="l-layout__main">
      <div class="l-layout__header">
        ${headerVariant1()}
      </div>
      <div class="l-layout__content">
        ${content}
      </div>
    </div>
  </div>
    `;
  }
}

function headerVariant1() {
  return `
  <!-- header -->
  <header class="header">
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

function sidebarVariant1() {
  return `
  <!-- sidebar -->
  <div class="sidebar">
    <!-- logo -->
    <a href="#" class="logo">
      <span class="logo__image" data-icon="logo"></span>
      <span class="logo__text">hi-eddy</span>
    </a>
    <!-- END. logo -->
    <div class="sidebar__group">
      <!-- sidebar-button -->
      <a href="" class="sidebar-button">
        <span class="sidebar-button__icon" data-icon="lessons"></span>
        <span class="sidebar-button__text">Уроки</span>
      </a>
      <!-- END. sidebar-button -->
      <!-- sidebar-button -->
      <a href="#" class="sidebar-button">
        <span class="sidebar-button__icon" data-icon="courses"></span>
        <span class="sidebar-button__text">Курси</span>
      </a>
      <!-- END. sidebar-button -->
    </div>
    <div class="sidebar__divider"></div>
    <div class="sidebar__group">
      <!-- sidebar-button -->
      <a href="#" class="sidebar-button">
        <span class="sidebar-button__icon" data-icon="saved"></span>
        <span class="sidebar-button__text">
          <span class="sidebar-button__count">22</span>
          Збережені
        </span>
      </a>
      <!-- END. sidebar-button -->
      <!-- sidebar-button -->
      <a href="#" class="sidebar-button">
        <span class="sidebar-button__icon" data-icon="paw"></span>
        <span class="sidebar-button__text">Завершені</span>
      </a>
      <!-- END. sidebar-button -->
      <div class="sidebar__button-wrapper">
        <!-- button -->
        <a
          href="#"
          class="button button--bordered button--fullwidth button--border-radius"
        >
          <span class="button__icon" data-icon="ua-flag"></span>
          Допомога ЗСУ
        </a>
        <!-- END. button -->
      </div>
    </div>
  </div>
  <!-- END. sidebar -->
  `;
}
