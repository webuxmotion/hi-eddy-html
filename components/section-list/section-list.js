function getSectionListParamsKeys() {
  return ['title', 'description', 'list1'];
}

function getSectionList(params) {
  const { title, description, list1 } = extractParams(params, getSectionListParamsKeys());

  const list1code = getList(list1);

  return `
    <!-- section-list -->
    <div class="section-list" data-name="${params.component}">
      <div 
        data-component="getTitle"
        data-title="${title}"
        data-tag="h2"
      >
      </div>
      <p class="section-list__description">
        ${description}
      </p>
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

