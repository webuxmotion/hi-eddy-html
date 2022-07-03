function getCopyButtonParamsKeys() {
  return ['value'];
}

function getCopyButton(params) {
  const { value } = extractParams(params, getCopyButtonParamsKeys());

  return `
    <!-- copy-button -->
    <span class="copy-button js-copy-button" data-name="${params.component}">
      <input 
        class="copy-button__input js-copy-button-input" 
        type="text" 
        value="${value}"
        disabled
      >
      <span class="copy-button__tooltip">
        <button class="copy-button__button js-copy-button-copy">
          <span class="copy-button__tooltiptext js-copy-button-tooltip">Copy to clipboard</span>
          <span data-icon="copy"></span>
        </button>
      </span>

    </span>
    <!-- END. copy-button -->
  `;
}