function messageClickEventHandler(e) {
  let button;

  if (e.target.classList.contains('js-close-message')) {
    button = e.target;
  } else if (e.target.closest('.js-close-message')) {
    button = e.target.closest('.js-close-message');
  }

  if (button) {
    let modal = e.target.closest('.js-message');

    modal.classList.add('is-close');
  }
}