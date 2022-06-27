function getProgressParamsKeys() {
  return ['progress'];
}

function getProgress(params) {
  const { progress } = extractParams(params, getProgressParamsKeys());

  return `
    <!-- progress -->
    <div class="progress" data-name="${params.component}">
      <span class="progress__text">${progress}</span>
    </div>
    <!-- END. progress -->
  `;
}