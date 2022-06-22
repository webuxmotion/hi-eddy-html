insertNavigationOnTop();

function insertNavigationOnTop() {
  const code = `
  <div>
    <div class="nav-item">
      <a href="./index.html" class="nav-item__control">
        <span class="nav-item__text">Home</span>
      </a>
    </div>
    <div class="nav-item">
      <a href="./simple-components.html" class="nav-item__control">
        <span class="nav-item__text">Simple Components</span>
      </a>
    </div>
    <div class="nav-item">
      <div class="nav-item__dropdown">
        <ul>
          <li>
            <a href="./components/button/button.html">button</a>
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
