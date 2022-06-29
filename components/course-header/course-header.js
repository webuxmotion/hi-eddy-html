function getCourseHeaderParamsKeys() {
  return ['title', 'description', 'href', 'mainimage', 'thingimage'];
}

function getCourseHeader(params) {
  const { title, description, href, mainimage, thingimage } = extractParams(params, getCourseHeaderParamsKeys());

  return `
    <!-- course-header -->
    <div class="course-header" data-name="${params.component}">
      <div class="course-header__main">
        <h1 class="course-header__title">${title}</h1>

        <div class="course-header__description">${description}</div>

        <div class="course-header__button-wrapper">
          <div 
            data-component="getButton"
            data-title="Почати"
            data-classes="button--border-radius button--fullwidth"
            data-onclick="showModal('course-modal')"
          >
          </div>
        </div>
      </div>

      <div 
        class="course-header__images"
      >
        <div 
          class="course-header__main-image"
          style="background-image: url(${mainimage});"
        >
        </div>

        <div 
          class="course-header__eddy-image" 
          style="background-image: url('./img/eddy.svg');"
        >
          <img class="course-header__thing-image" src="${thingimage}">
          <img class="course-header__arrow-image" src="./img/arrow.png">
        </div>
        
      </div>
      
    </div>
    <!-- END. course-header -->
  `;
}