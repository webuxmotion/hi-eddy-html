function daysVariant1(attr) {
  return `
    <!-- days -->
    <div class="days" data-name="${attr}">
      <img src="./img/10days.png" alt="">
      <p class="days__day">10 днів</p>
      <p class="days__money">Безкоштовно <br>10 діб</p>
      <div class="days__box">
        <!-- button -->
        <button class="button button--border-radius button--fullwidth button--font-medium">Активувати</button>
      </div>
      <!-- END. button -->
    </div>
    <!-- END. days -->
  `;
}
