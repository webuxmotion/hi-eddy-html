function getTitleParamsKeys() {
  return ['title', 'tag', 'classes'];
}

function getTitle(params) {
  const { title, tag, classes } = extractParams(params, getTitleParamsKeys());

  const newTag = tag === 'test-tag' ? 'h1' : tag;
  const additionalClasses = classes === 'test-classes' ? '' : classes;

  return `
    <!-- title -->
    <${newTag} class="title ${additionalClasses}" data-name="${params.component}">
      ${title}
    </${newTag}>
    <!-- END. title -->
  `;
}