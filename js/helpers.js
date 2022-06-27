const components = [
  'button',
  'sidebar-button',
  'section-list',
  'sidebar',
  'title',
  'group-title',
  'nav-item',
  'hero',
  'course-card',
  'price-card',
  'lesson-card',
  'lesson-course-card',
  'logo',
  'lang-switcher',
  'modal',
  'header',
  'prices',
  'days',
  'tariff-card',
  'tariff-status',
  'tariff',
  'input',
  'footer',
  'example',
];

const pages = [
  'home', 
  'prices', 
  'courses', 
  'lessons',
  'profile',
  'one-lesson',
  'one-course',
  'example'
];

loadComponents(() => {
  insertNavigationOnTop();
  layout();
  decorate();
  insertComponents();
  insertDocumentation();
  loadIconsScript();
  loadEventsScript();
  loadStyles(() => {
    document.body.style.opacity = 1;
  });
});

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

function insertComponents() {
  const elements = document.querySelectorAll('[data-component]');

  elements.forEach((el) => {
    const trimmed = el.innerHTML.replace(/^\s+|\s+$/gm, '');

    const stringFunction = el.dataset.component;

      if (el.parentNode) {

        let content;

        if (trimmed) {
          content = trimmed;
        }

        try {
          el.outerHTML = window[stringFunction]({
            ...el.dataset,
            content,
          });
          insertComponents();
        } catch (err) {
          console.log('stringFunction', stringFunction);
          console.log(err);
        }
      }
  });
}

function decorate() {
  const elements = document.querySelectorAll('[data-decorator]');

  elements.forEach(el => {
    if (el.dataset.decorator === 'doc') {
      const nextElement = el.nextElementSibling;
      el.classList.add('helpers-documentation');
      const preElement = document.createElement('pre');
      const paramsKeys = Object.keys(nextElement.dataset);
  
      let paramsCode = '';
      paramsKeys.forEach((param, index) => {
        if (paramsKeys.length === 1) {
          paramsCode += `data-${param}="${nextElement.dataset[param]}"`
        } else {
          paramsCode += `  data-${param}="${nextElement.dataset[param]}"`
        }
        
  
        if (index + 1 !== paramsKeys.length) {
          paramsCode += `\n`
        }
      });

      let code;

      if (paramsKeys.length === 1) {
        code = `<div ${paramsCode}></div>`;
      } else {
        code = `
<div 
${paramsCode}
>
</div>`;
      }

      preElement.textContent = code;

      el.appendChild(preElement);
    }
  });
}

function insertDocumentation() {
  const elements = document.querySelectorAll('[data-doc-component]');
  
  elements.forEach((el) => {
    const componentFuncName = el.dataset.docComponent;
    const getParamsFuncName = componentFuncName + 'ParamsKeys';
    const inputParams = window[getParamsFuncName]();
    el.classList.add('helpers-documentation');

    const preElement = document.createElement('pre');

    let paramsCode = '';
    inputParams.forEach((param, index) => {
      paramsCode += `  data-${param}=""`

      if (index + 1 !== inputParams.length) {
        paramsCode += `\n`
      }
    });

    let code;
    
    if (inputParams.length === 0) {
      code = `<div data-component="${componentFuncName}"${paramsCode}></div>`;
    } else {
      code = `<div 
  data-component="${componentFuncName}"
${paramsCode}
>
</div>`;
    }

    preElement.textContent = code;

    el.appendChild(preElement);
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
        ${getSubnavList(components, 'components')}
      </div>
      <a class="nav-item__control">
        <span class="nav-item__text">Components</span>
      </a>
    </div>
    <div class="nav-item">
      <div class="nav-item__dropdown">
        ${getSubnavList(pages, 'pages')}
      </div>
      <a class="nav-item__control">
        <span class="nav-item__text">Pages</span>
      </a>
    </div>
    <div class="nav-item">
      <a href="./icons.html" class="nav-item__control">
        <span class="nav-item__text">Icons</span>
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

function loadIconsScript() {
  var script = document.createElement('script');
  script.onload = function () {
    //do stuff with the script
  };
  script.src = './js/icons.js';

  document.body.appendChild(script);
}

function loadEventsScript() {
  var script = document.createElement('script');
  script.onload = function () {
    //do stuff with the script
  };
  script.src = './js/events.js';

  document.body.appendChild(script);
}

function loadStyles(callback) {
  const target = document.getElementsByTagName('head')[0];

  const links = [
    'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;600;700&display=swap',
    './css/reset.css',
    './css/style.css',
    './css/layout.css',
    './css/helpers.css'
  ];

  components.forEach((el) => {
    links.push(`./components/${el}/${el}.css`);
  });

  pages.forEach((el) => {
    links.push(`./pages/${el}/${el}.css`);
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
    const fullPageCode = getLayoutMarkup(pageContent);
    pageElement.innerHTML = fullPageCode;
  }
}

function getLayoutMarkup(content) {
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
      <div class="l-layout__footer">
        <div data-component="getFooter"></div>
      </div>
    </div>
  </div>
  `;
}

function extractParams(params, keys = []) {
  const res = {};

  keys.forEach(el => {
    if (el.startsWith("list")) {
      res[el] = extractListParams(params, el);
    } else {
      if (params[el] === 'true') {
        res[el] = true;
      } else if (params[el] === 'false') {
        res[el] = false;
      } else {
        res[el] = params[el] || 'test-' + el;
      }
    }
  });

  return res;
}

function extractListParams(params, key) {
  const paramsArr = Object.keys(params);

  const itemsArr = [];
  
  paramsArr.forEach(param => {
    if (param.startsWith(key)) {
      
      // delete from start string the key
      var replace = "^(" + key + "\)";
      var re = new RegExp(replace,"g");
      let propertyName = param.replace(re, "");
      // set element number
      let elementNumber = parseInt(propertyName[propertyName.length - 1]);
      elementNumber -= 1;
      // delete the last char
      propertyName = propertyName.slice(0, -1);
      // lower case first letter
      propertyName = propertyName.toLowerCase();
      if (!itemsArr[elementNumber]) {
        itemsArr[elementNumber] = {};
      }

      itemsArr[elementNumber][propertyName] = params[param];
    }
  })
  
  return itemsArr;
}
