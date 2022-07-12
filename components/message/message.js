function getMessageParamsKeys() {
  return ['text', 'type'];
}

function getMessage(params) {
  const { text, type } = extractParams(params, getMessageParamsKeys());

  const typeClass = getTypeClass(type);

  return `
    <!-- message -->
    <div class="message js-message ${typeClass}" data-name="${params.component}">
      <span class="message__text">${text}</span>
      <div class="message__close-button">
        <div 
          data-component="getButton"
          data-iconleft="close"
          data-iconleftclasses="button__icon--dark"
          data-classes="button--transparent button--border-radius js-close-message"
        >
        </div>
      </div>
    </div>
    <!-- END. message -->
  `;

  function getTypeClass(type) {
    if (type === 'success') {
      return 'is-success';
    } else if (type === 'danger') {
      return 'is-danger';
    }

    return '';
  }
}