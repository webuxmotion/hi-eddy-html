function sidebarVariant1({ component }) {
  return `
    <!-- sidebar -->
    <div class="sidebar" data-name="${component}">
      <div data-component="logoVariant1"></div>
      <div class="sidebar__group">
        <!-- sidebar-button -->
        <a href="./pages/lessons/lessons.html" class="sidebar-button">
          <span class="sidebar-button__icon" data-icon="lessons"></span>
          <span class="sidebar-button__text">Уроки</span>
        </a>
        <!-- END. sidebar-button -->
        <!-- sidebar-button -->
        <a href="./pages/courses/courses.html" class="sidebar-button">
          <span class="sidebar-button__icon" data-icon="courses"></span>
          <span class="sidebar-button__text">Курси</span>
        </a>
        <!-- END. sidebar-button -->
      </div>
      <div class="sidebar__divider"></div>
      <div class="sidebar__group">
        <!-- sidebar-button -->
        <a href="#" class="sidebar-button">
          <span class="sidebar-button__icon" data-icon="saved"></span>
          <span class="sidebar-button__text">
            <span class="sidebar-button__count">22</span>
            Збережені
          </span>
        </a>
        <!-- END. sidebar-button -->
        <!-- sidebar-button -->
        <a href="#" class="sidebar-button">
          <span class="sidebar-button__icon" data-icon="paw"></span>
          <span class="sidebar-button__text">Завершені</span>
        </a>
        <!-- END. sidebar-button -->
        <div class="sidebar__button-wrapper">
          <div 
            data-component="getButton"
            data-title="Допомога ЗСУ"
            data-iconleft="ua-flag"
            data-tag="a"
            data-blank="true"
            data-classes="button--bordered button--fullwidth button--border-radius"
            data-href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
          >
          </div>
        </div>
      </div>
      <div class="sidebar__lang-switcher-wrapper">
        <div data-component="langSwitcherVariant1"></div>
      </div>
    </div>
    <!-- END. sidebar -->
  `;
}
