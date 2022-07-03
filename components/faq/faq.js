function getFaqParamsKeys() {
  return ['list1'];
}

function getFaq(params) {
  const { list1 } = extractParams(params, getFaqParamsKeys());

  const listCode = getListCode(list1);

  return `
    <!-- faq -->
    <div class="faq" data-name="${params.component}">
      ${listCode}
    </div>
    <!-- END. faq -->
  `;

  function getListCode(arr) {
    let code = '';

    arr.forEach(el => {
      code += `
        <div class="faq__item js-faq-item">
          <div class="faq__question js-faq-question">
            <p>${el.question}</p>
            <div class="faq__icon-wrapper">
              <span class="faq__icon faq__icon--plus" data-icon="plus"></span>
              <span class="faq__icon faq__icon--minus" data-icon="minus"></span>
            </div>
          </div>
          <div class="faq__answer">
            <p>${el.answer}</p>
          </div>
        </div>
      `;
    });

    return code;
  }
}