function getLessonCardParamsKeys() {
  return ['title', 'image', 'href'];
}

function getLessonCard(params) {
  const { title, image, href } = extractParams(params, getLessonCardParamsKeys());

  return `
    <!-- lesson-card -->
    <div class="lesson-card" data-name="${params.component}">
      <a href="${href}" class="lesson-card__image" style="background-image: url('${image}');"></a>
      <div class="lesson-card__main">
        <a href="${href}" class="lesson-card__title">${title}</a>
        <div class="lesson-card__button">
          <div 
            data-component="getButton"
            data-title="Детальніше"
            data-href="${href}"
            data-tag="a"
            data-classes="button--border-radius"
          >
          </div>
        </div>
      </div>
    </div>
    <!-- END. lesson-card -->
  `;
}