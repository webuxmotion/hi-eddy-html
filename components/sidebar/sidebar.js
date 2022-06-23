function sidebarVariant1(attr) {
  return `
    <!-- sidebar -->
    <div class="sidebar" data-name="${attr}">
      <!-- logo -->
      <a href="./index.html" class="logo">
        <span class="logo__image" data-icon="logo"></span>
        <span class="logo__text">hi-eddy</span>
      </a>
      <!-- END. logo -->
      <div class="sidebar__group">
        <!-- sidebar-button -->
        <a href="" class="sidebar-button">
          <span class="sidebar-button__icon" data-icon="lessons"></span>
          <span class="sidebar-button__text">Уроки</span>
        </a>
        <!-- END. sidebar-button -->
        <!-- sidebar-button -->
        <a href="#" class="sidebar-button">
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
          <!-- button -->
          <a
            href="#"
            class="button button--bordered button--fullwidth button--border-radius"
          >
            <span class="button__icon" data-icon="ua-flag"></span>
            Допомога ЗСУ
          </a>
          <!-- END. button -->
        </div>
      </div>
      <div class="sidebar__lang-switcher-wrapper">
        <div data-component="langSwitcherVariant1"></div>
      </div>
    </div>
    <!-- END. sidebar -->
  `;
}
