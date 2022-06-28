function getProgressParamsKeys() {
  return ['progress', 'titleleft', 'titleright'];
}

function getProgress(params) {
  const { progress, titleleft: tl, titleright: tr } = extractParams(params, getProgressParamsKeys());

  const titleleft = tl === 'test-titleleft' ? '' : tl;
  const titleright = tr === 'test-titleright' ? '' : tr;

  return `
    <!-- progress -->
    <div class="progress" data-name="${params.component}">
      ${(titleleft || titleright) ? (
        `
        <div class="progress__header">
          <span>${titleleft}</span>
          <span>${titleright}</span>
        </div>
        `
      ) : ''}
      <div class="progress__background">
        <div class="progress__green-line" style="width: ${progress}%;"></div>
      </div>
    </div>
    <!-- END. progress -->
  `;
}