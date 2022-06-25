function courseCardVariant1({ component }) {
  return `
  <!-- course-card -->
  <div class="course-card">
    <div class="course-card__group">
      <p>Програмування</p>
      <p class="course-card__main-text">Основи Javascript.</p>
      <p>Вчимося писати код.</p>
      <div class="course-card__group-span">
        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
              stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1 8.46667H15" stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path
              d="M8.46602 1C10.2169 2.91685 11.2119 5.40442 11.266 8C11.2119 10.5956 10.2169 13.0832 8.46602 15C6.71512 13.0832 5.72009 10.5956 5.66602 8C5.72009 5.40442 6.71512 2.91685 8.46602 1V1Z"
              stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>4 Модулі</span>
        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
              stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1 8.46667H15" stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path
              d="M8.46602 1C10.2169 2.91685 11.2119 5.40442 11.266 8C11.2119 10.5956 10.2169 13.0832 8.46602 15C6.71512 13.0832 5.72009 10.5956 5.66602 8C5.72009 5.40442 6.71512 2.91685 8.46602 1V1Z"
              stroke="var(--primary-color-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>24 уроки
        </span>
      </div>
      <div class="course-card__button-wrapper">
      <button class="button button--border-radius button--fullwidth">Почати</button>
      </div>
    </div>
    <div class="course-card__group">
      <p class="course-card__text">Команда Eddy складається зі спеціалістів, які вміють розвивати як технічні
        навички, так і особистісні якості. Наші тренери працюють в IT і мають не тільки хороші теоретичні,
        але й практичні знання. Вони знають, що зараз актуально на ринку, і дійсно мають чим поділитися.</p>
    </div>
    <div class="course-card__group">
      <img class="course-card__image" src="./img/course-java.png" alt="">
    </div>
  </div>
  <!-- END. course-card -->
  `;
}
