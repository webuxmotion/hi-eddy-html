function getFinalParamsKeys() {
  return ['title', 'type', 'text', 'list1'];
}

function getFinal(params) {
  const { title, type, text, list1 } = extractParams(params, getFinalParamsKeys());

  const buttons =  getButtonsCode(list1);
  const iconCode = getIconCode(type);

  return `
    <!-- final -->
    <div class="final" data-name="${params.component}">
      <span class="final__title">${title}</span>
      ${iconCode}
      <span class="final__text">${text}</span>
      <div class="final__list">
        ${buttons}
      </div>
    </div>
    <!-- END. final -->
  `;

  function getIconCode(type) {
    switch (type) {
      case 'success':
        {
          return `<span class="final__icon" data-icon="success"></span>`;
        }
      case 'error':
        {
          return `<span class="final__icon" data-icon="error"></span>`;
        }
      case 'error-extended':
        {
          return `
            <div class="final__icon-wrapper">
              <span class="final__icon" data-icon="error"></span>
              <span class="final__bug-icon final__bug-icon--1" data-icon="bug"></span>
              <span class="final__bug-icon final__bug-icon--2" data-icon="bug"></span>
              <span class="final__bug-icon final__bug-icon--3" data-icon="bug"></span>
            </div>
          `
        }
      default:
        return `<span>${type}</span>`;
    }
  }

  function getButtonsCode(list) {
    let code = '';
  
    list.forEach(item => {
      const itemCode = window[item.component](item);
      code += `
        <div class="final__list-item">
          ${itemCode}
        </div>
      `;
    });
  
    return code;
  }
}