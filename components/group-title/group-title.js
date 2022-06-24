function getGroupTitleParamsKeys() {
  return ['title'];
}

function getGroupTitle(params) {
  const { title } = extractParams(params, getGroupTitleParamsKeys());

  return `
    <!-- group-title -->
    <div class="group-title" data-name="${params.component}">
      <span class="group-title__text">${title}</span>
    </div>
    <!-- END. group-title -->
  `;
}