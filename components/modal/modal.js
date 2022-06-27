function getModalParamsKeys() {
  return ['title', 'open', 'id', 'content'];
}

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

function getModal(params) {
  const { title: titleParam, open: openParam, id: idParam, content } = extractParams(params, getModalParamsKeys());

  const title = titleParam === 'test-title' ? '' : titleParam;
  const open = openParam === 'test-open' ? false : openParam;

  let otherClasses = open ? 'is-open' : '';
  let id = idParam === 'test-id' ? '' : idParam;

  return `
    <!-- modal -->
    <div class="modal js-modal ${otherClasses}" id="${id}" data-name="${params.component}">
      <div class="modal__backdrop js-modal-backdrop"></div>
      <div class="modal__main">
        <div class="modal__close-button">
          <div 
            data-component="getButton"
            data-iconleft="close"
            data-classes="button--transparent button--border-radius js-close-modal"
            data-classes=""
          >
          </div>
        </div>
        ${title && (
          `
            <div class="modal__title">
              <div 
                data-component="getTitle"
                data-title="${title}"
                data-tag="h2"
                data-align="center"
              >
              </div>
            </div>`
        )}
        <div class="modal__content">
          ${content}
        </div>
      </div>
    </div>
    <!-- END. modal -->
  `;
}