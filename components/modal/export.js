function modalClickEventHandler(e) {
  let button;
  let backdrop;

  if (e.target.classList.contains('js-close-modal')) {
    button = e.target;
  } else if (e.target.closest('.js-close-modal')) {
    button = e.target.closest('.js-close-modal');
  }

  if (e.target.classList.contains('js-modal-backdrop')) {
    backdrop = e.target;
  }

  if (button || backdrop) {
    let modal = e.target.closest('.js-modal');

    modal.classList.remove('is-open');
  }
}

function showModal(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add('is-open');
  }
}