function getInputParams() {
  return ['id', 'label', 'placeholder', 'name', 'value', 'type'];
}

function getInput(params) {
  const { id, label, placeholder, name, value, type } = extractParams(params, getInputParams());

  const newValue = value === 'test-value' ? '' : value;
  const newType = type === 'test-type' ? 'text' : type;

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
      >
    </div>
    <!-- END. input -->
  `;
}
