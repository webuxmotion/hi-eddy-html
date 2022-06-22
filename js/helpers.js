insertNavigationOnTop();
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
        </ul>
      </div>
      <a class="nav-item__control">
        <span class="nav-item__text">Components</span>
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
