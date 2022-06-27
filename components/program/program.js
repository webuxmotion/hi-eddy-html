function getProgramParamsKeys() {
  return ['title'];
}

function getProgram(params) {
  const { title } = extractParams(params, getProgramParamsKeys());

  return `
    <!-- program -->
    <div class="program" data-name="${params.component}">
      Створюємо просту web-сторінку
      Завантажуємо редактор коду
      Запускаємо проект HI-EDDY
      Додаємо теги, які найчастіше використовуються
      18 тверджень, які впень руйнують міфи про програмування
      Створюємо select для вибору року
    </div>
    <!-- END. program -->
  `;
}