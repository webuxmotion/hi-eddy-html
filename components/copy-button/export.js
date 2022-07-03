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