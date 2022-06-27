function getLessonCourseCardParamsKeys() {
  return ['finished', 'saved', 'title', 'description', 'href', 'number', 'classes'];
}

function getLessonCourseCard(params) {
  const { title, description, href, number, classes, finished: finishedParam, saved: savedParam } = extractParams(params, getLessonCourseCardParamsKeys());
  console.log('finishedParam', finishedParam);
  const additionalClasses = classes === 'test-classes' ? '' : classes;

  const finished = finishedParam === 'test-finished' ? false : finishedParam;
  const saved = savedParam === 'test-saved' ? false : savedParam;

  const buttonClasses = finished ? 'button--bordered' : '';

  let otherClasses = saved ? 'lesson-course-card--saved' : '';
  otherClasses += finished ? ' lesson-course-card--finished' : '';

  const buttonTitle = finished ? 'Повторити урок' : 'Пройти урок';
  
  return `
    <!-- lesson-course-card -->
    <div class="lesson-course-card ${additionalClasses} ${otherClasses}" data-name="${params.component}">
      <div class="lesson-course-card__column lesson-course-card__column--number">
        <span class="lesson-course-card__number">${number}</span>
      </div>
      <div class="lesson-course-card__column lesson-course-card__column--big">
        <div class="lesson-course-card__content">
          <div class="lesson-course-card__saved-icon" data-icon="saved"></div>
          <div class="lesson-course-card__title-wrapper">
            <div 
              data-component="getTitle"
              data-title="${title}"
              data-tag="h3"
            >
            </div>
          </div>
          <p class="lesson-course-card__description">${description}</p>
          <div class="lesson-course-card__footer">
            <div class="lesson-course-card__footer-column">
              <div
                data-component="getButton"
                data-title="${buttonTitle}"
                data-tag="a"
                data-href="${href}"
                data-classes="button--border-radius ${buttonClasses}"
              >
              </div>
            </div>
            <div class="lesson-course-card__footer-column">
              Пройдено тестових питань
              1/1
            </div>
          </div>
        </div>
      </div>
      <div class="lesson-course-card__column">
        <div class="lesson-course-card__status">
          <div 
            class="lesson-course-card__icon lesson-course-card__icon--success" 
            data-icon="check-simple"
          >
          </div>
          <div 
            class="lesson-course-card__icon lesson-course-card__icon--wait"
            data-icon="arrow-right"
          >
          </div>
        </div>
      </div>

    </div>
    <!-- END. lesson-course-card -->
  `;
}