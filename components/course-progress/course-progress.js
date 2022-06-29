function getCourseProgressParamsKeys() {
  return [];
}

function getCourseProgress(params) {
  const {} = extractParams(params, getCourseProgressParamsKeys());

  return `
    <!-- course-progress -->
    <div class="course-progress" data-name="${params.component}">
      <div class="course-progress__row">
        <div 
          data-component="getProgress"
          data-progress="70"
          data-titleleft="Курс завершено на"
          data-titleright="70%"
        >
        </div>
      </div>
      <div class="course-progress__row">
        <div 
          data-component="getProgress"
          data-progress="20"
          data-titleleft="Пройдено тестових питань"
          data-titleright="2/5"
        >
        </div>
      </div>
    </div>
    <!-- END. course-progress -->
  `;
}