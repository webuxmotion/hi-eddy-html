function getCopyButtonParamsKeys() {
  return ['value'];
}

function copyButtonOnmouseoutEventHandler(e, callback) {
  let button = findElement(e, 'js-copy-button-copy');

  if (button) {
    let wrapper = e.target.closest('.js-copy-button');
    let tooltip = wrapper.querySelector('.js-copy-button-tooltip');

    tooltip.innerHTML = "Copy to clipboard";

    callback();
  }
}

function copyButtonClickEventHandler(e) {
  let button = findElement(e, 'js-copy-button-copy');

  if (button) {
    function listener(e) {
      copyButtonOnmouseoutEventHandler(e, callback);
    }

    function callback() {
      button.removeEventListener('mouseout', listener, false);
    }
    let wrapper = e.target.closest('.js-copy-button');
    let input = wrapper.querySelector('.js-copy-button-input');
    let tooltip = wrapper.querySelector('.js-copy-button-tooltip');

    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);

    tooltip.innerHTML = "Copied!";

    button.addEventListener('mouseout', listener, false);
  }
}

function findElement(e, className) {
  let element;

  if (e.target.classList.contains(className)) {
    element = e.target;
  } else if (e.target.closest(`.${className}`)) {
    element = e.target.closest(`.${className}`);
  }

  return element;
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