function getBreadcrumbsParamsKeys() {
  return ['list1'];
}

function getBreadcrumbs(params) {
  const { list1 } = extractParams(params, getBreadcrumbsParamsKeys());
  
  const list = getListCode(list1);

  return `
    <!-- breadcrumbs -->
    <div class="breadcrumbs" data-name="${params.component}">
      ${list}
    </div>
    <!-- END. breadcrumbs -->
  `;

  function getListCode(arr) {
    let code = `
      <a href="./pages/home/home.html" class="breadcrumbs__link">
        Головна
      </a>
      <span class="breadcrumbs__icon" data-icon="arrow-right"></span>
    `;

    arr.forEach((item, index) => {
      code += `
        <a href="${item.href}" class="breadcrumbs__link">
          ${item.title}
        </a>
        ${(index !== arr.length - 1) ? (
          `
            <span class="breadcrumbs__icon" data-icon="arrow-right"></span>
          `
        ) : ''}
      `;
    });

    return code;
  }
}

