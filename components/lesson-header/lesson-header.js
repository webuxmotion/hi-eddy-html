function getLessonHeaderParamsKeys() {
  return ['title', 'description', 'image', 'label'];
}

function getLessonHeader(params) {
  const { title, description, image, label } = extractParams(params, getLessonHeaderParamsKeys());

  return `
    <!-- lesson-header -->
    <div class="lesson-header" data-name="${params.component}">
      <div class="lesson-header__image-column">
        <div class="lesson-header__image" style="background-image: url(${image});"></div>
      </div>
      <div class="lesson-header__description">
        <div class="lesson-header__label">${label}</div>
        ${description}

        <div class="lesson-header__buttons">
          <div 
            data-component="getButton"
            data-iconleft="arrow-left"
            data-tag="a"
            data-title="Попередній урок"
            data-href="./pages/one-lesson/one-lesson.html"
            data-iconleftclasses="button__icon--dark"
            data-classes="button--border-radius button--bordered"
          ></div>

          <div 
            data-component="getButton"
            data-iconright="arrow-right"
            data-tag="a"
            data-title="Наступний урок"
            data-href="./pages/one-lesson/one-lesson.html"
            data-iconrightclasses="button__icon--dark"
            data-classes="button--border-radius button--bordered"
          ></div>
        </div>
      </div>
    </div>
    <!-- END. lesson-header -->
  `;
}