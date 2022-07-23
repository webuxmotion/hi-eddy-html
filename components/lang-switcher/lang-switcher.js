function langSwitcherVariant1({ component }) {
  return `
    <!-- lang-switcher -->
    <div class="lang-switcher" data-name="${component}">
      <div class="lang-switcher__main">
        <span class="lang-switcher__icon" data-icon="lang"></span>
        <span class="lang-switcher__text">UKR</span>
      </div>
      <select class="lang-switcher__select js-lang-switcher-select">
        <option value="UKR" selected>UKR</option>
        <option value="ENG">ENG</option>
      </select>
    </div>
    <!-- END. lang-switcher -->
  `;
}
