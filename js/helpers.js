const components = [
  'button',
  'sidebar-button',
  'logo',
  'nav-item',
  'lang-switcher',
  'price-card',
  'sidebar',
  'header',
];

loadComponents(() => {
  insertNavigationOnTop();
  layout();
  insertComponents();
  loadIconsScript();
  loadStyles(() => {
    document.body.style.opacity = 1;
  });
});

function insertComponents() {
  const elements = document.querySelectorAll('[data-component]');

  elements.forEach((el) => {
    const trimmed = el.innerHTML.replace(/^\s+|\s+$/gm, '');
    if (!trimmed) {
      const stringFunction = el.dataset.component;

      if (el.parentNode) {
        el.outerHTML = window[stringFunction](stringFunction);
        insertComponents();
      }
    }
  });
}

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
        ${getSubnavList(components)}
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
    <div class="nav-item">
      <a 
        target="_blank"
        href="https://github.com/webuxmotion/hi-eddy-html" 
        class="nav-item__control"
      >
        <span class="nav-item__text">GitHub Repo</span>
        <span class="nav-item__icon" data-icon="external-link"></span>
      </a>
    </div>
  </div>
  `;
  const pageElement = document.getElementById('page');
  if (!pageElement) {
    const content = document.body.innerHTML;

    document.body.innerHTML = code;
    document.body.innerHTML += content;
  }
}

function loadComponents(callback) {
  let counter = 0;

  components.forEach((item) => {
    var script = document.createElement('script');
    script.onload = function () {
      counter++;

      if (counter === components.length) {
        callback();
      }
    };
    script.src = `./components/${item}/${item}.js`;

    document.body.appendChild(script);
  });
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
    './pages/home/home.css',
    './pages/example/example.css',
  ];

  components.forEach((el) => {
    links.push(`./components/${el}/${el}.css`);
  });

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
      <div data-component="sidebarVariant1"></div>
    </aside>
    <div class="l-layout__main">
      <div class="l-layout__header">
        <div data-component="headerVariant1"></div>
      </div>
      <div class="l-layout__content">
        ${content}
      </div>
    </div>
  </div>
    `;
  }
}
