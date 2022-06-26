function getSectionListParamsKeys() {
  return ['title', 'description', 'list1'];
}

function getSectionList(params) {
  const { title, description: descr, list1 } = extractParams(params, getSectionListParamsKeys());

  const description = descr === 'test-description' ? '' : descr;
  const list1code = getList(list1);

  return `
    <!-- section-list -->
    <div class="section-list" data-name="${params.component}">
      ${title && `
        <div class="section-list__title">
          <div 
            data-component="getTitle"
            data-title="${title}"
            data-tag="h2"
          >
          </div>
        </div>
      `}
      ${description && `
        <p class="section-list__description">
          ${description}
        </p>
      `}
      <div class="section-list__items">
        ${list1code}
      </div>
    </div>
    <!-- END. section-list -->
  `;
  
  function getList(list) {
    let code = '';
  
    list.forEach(item => {
      const itemCode = window[item.component](item);
      code += `
        <div class="section-list__item">
          ${itemCode}
        </div>
      `;
    });
  
    return code;
  }
}

function sectionListVariantPopularLessons() {
  return `
    <div 
      data-component="getSectionList"
      data-title="Популярні уроки"

      data-list1-component1="getLessonCard"
      data-list1-title1="Створюємо просту web-сторінку"
      data-list1-image1="./img/content-lesson-card.jpg"
      data-list1-href1="./pages/one-lesson/one-lesson.html"

      data-list1-component2="getLessonCard"
      data-list1-title2="Завантажуємо редактор коду"
      data-list1-image2="./img/content-lesson-card.jpg"
      data-list1-href2="./pages/one-lesson/one-lesson.html"

      data-list1-component3="getLessonCard"
      data-list1-title3="Запускаємо проект HI-EDDY"
      data-list1-image3="./img/content-lesson-card.jpg"
      data-list1-href3="./pages/one-lesson/one-lesson.html"
    >
    </div>
  `;
}

function sectionListVariantPrices() {
  return `
    <div 
      data-component="getSectionList"
      data-title="Тарифні плани"
      data-description="Ми за чесні відносини. Коли дні в твоєму тарифному плані закінчаться, ти зможеш
      продовжити свій тарифний план, коли захочеш, хоч через рік."

      data-list1-component1="getPriceCard"
      data-list1-title1="10 днів"
      data-list1-subtitle1="Безкоштовно <br>10 діб"
      data-list1-buttontitle1="Активувати"
      data-list1-image1="./img/10days.png"

      data-list1-component2="getPriceCard"
      data-list1-title2="30 днів"
      data-list1-subtitle2="215 грн"
      data-list1-buttontitle2="Придбати"
      data-list1-image2="./img/30days.png"

      data-list1-component3="getPriceCard"
      data-list1-title3="365 днів"
      data-list1-subtitle3="2010 грн<br>2011 грн<br>2012"
      data-list1-buttontitle3="Придбати"
      data-list1-image3="./img/365days.jpg"
    >
    </div>
  `;
}

