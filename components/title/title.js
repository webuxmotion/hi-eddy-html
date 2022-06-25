function getTitleParamsKeys() {
  return ['title', 'tag'];
}

function getTitle(params) {
  const { title, tag } = extractParams(params, getTitleParamsKeys());

  const newTag = tag === 'test-tag' ? 'h1' : tag;

  return `
    <!-- title -->
    <${newTag} class="title" data-name="${params.component}">
      ${title}
    </${newTag}>
    <!-- END. title -->
  `;
}