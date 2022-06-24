function langSwitcherVariant1({ component }) {
  return `
    <!-- lang-switcher -->
    <div class="lang-switcher" data-name="${component}">
      <div class="lang-switcher__main">
        <span class="lang-switcher__icon" data-icon="lang"></span>
        <span class="lang-switcher__text">UKR</span>
      </div>
      <select id="lang-swither" class="lang-switcher__select">
        <option value="UKR" selected>UKR</option>
        <option value="ENG">ENG</option>
      </select>
    </div>
    <!-- END. lang-switcher -->
  `;
}
