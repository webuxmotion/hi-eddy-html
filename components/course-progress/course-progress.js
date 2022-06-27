function getCourseProgressParamsKeys() {
  return ['title'];
}

function getCourseProgress(params) {
  const { title } = extractParams(params, getCourseProgressParamsKeys());

  return `
    <!-- course-progress -->
    <div class="course-progress" data-name="${params.component}">
      <div 
        data-component="getProgress"
        data-progress="20"
      >
      </div>
      <div 
        data-component="getProgress"
        data-progress="30"
      >
      </div>
    </div>
    <!-- END. course-progress -->
  `;
}