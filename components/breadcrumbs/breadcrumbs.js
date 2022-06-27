function getBreadcrumbsParamsKeys() {
  return ['title'];
}

function getBreadcrumbs(params) {
  const { title } = extractParams(params, getBreadcrumbsParamsKeys());

  return `
    <!-- breadcrumbs -->
    <div class="breadcrumbs" data-name="${params.component}">
      Курси   Уроки   Програмування\Основи HTML + CSS.
    </div>
    <!-- END. breadcrumbs -->
  `;
}