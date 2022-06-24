function getExampleParamsKeys() {
  return ['title'];
}

function getExample(params) {
  const { title } = extractParams(params, getExampleParamsKeys());

  return `
    <!-- example -->
    <div class="example" data-name="${params.component}">
      <span class="example__text">${title}</span>
    </div>
    <!-- END. example -->
  `;
}