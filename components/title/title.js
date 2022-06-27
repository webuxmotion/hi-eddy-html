function getTitleParamsKeys() {
  return ['title', 'tag', 'classes', 'align'];
}

function getTitle(params) {
  const { title, tag, classes, align } = extractParams(params, getTitleParamsKeys());

  const newTag = tag === 'test-tag' ? 'h1' : tag;
  const additionalClasses = classes === 'test-classes' ? '' : classes;

  let otherClasses = align === 'test-align' ? '' : 'title--centered'

  return `
    <!-- title -->
    <${newTag} class="title ${additionalClasses} ${otherClasses}" data-name="${params.component}">
      ${title}
    </${newTag}>
    <!-- END. title -->
  `;
}