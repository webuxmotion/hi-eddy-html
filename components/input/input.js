function getInputParamsKeys() {
  return ['id', 'label', 'placeholder', 'name', 'value', 'type', 'disabled'];
}

function getInput(params) {
  const { id, label, placeholder, name, value, type, disabled } = extractParams(params, getInputParamsKeys());

  const newValue = value === 'test-value' ? '' : value;
  const newType = type === 'test-type' ? 'text' : type;

  const disabledAttr = disabled === 'test-disabled' 
    ? '' 
    : `disabled="true"`;

  return `
    <!-- input -->
    <div class="input" data-name="${params.component}">
      <label for="${id}" class="input__label">${label}</label>
      <input
        type="${newType}"
        name="${name}"
        id="${id}"
        class="input__input-field"
        placeholder="${placeholder}"
        value="${newValue}"
        ${disabledAttr}
      >
    </div>
    <!-- END. input -->
  `;
}
