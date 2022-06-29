function getCheckboxParamsKeys() {
  return ['title', 'errortext'];
}

function getCheckbox(params) {
  const { title: t, errortext: err } = extractParams(params, getCheckboxParamsKeys());

  const errortext = err === 'test-errortext' ? '' : err;
  const title = t === 'test-title' ? '' : t;

  return `
    <!-- checkbox -->
    <div class="checkbox" data-name="${params.component}">
      <div class="checkbox__main">
        <input type="checkbox" class="checkbox__input">
        ${title && (
          `<span class="checkbox__title">${title}</span>`
        )}
      </div>
      ${errortext && (
        `<span class="checkbox__error">${errortext}</span>`
      )}
    </div>
    <!-- END. checkbox -->
  `;
}