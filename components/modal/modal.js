function getModalParamsKeys() {
  return ['title', 'open', 'id', 'content'];
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