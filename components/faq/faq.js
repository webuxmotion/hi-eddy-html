function getFaqParamsKeys() {
  return ['title'];
}

function getFaq(params) {
  const { title } = extractParams(params, getFaqParamsKeys());

  return `
    <!-- faq -->
    <div class="faq" data-name="${params.component}">
      <span class="faq__text">${title}</span>
    </div>
    <!-- END. faq -->
  `;
}