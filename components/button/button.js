function getButtonParamsKeys() {
  return [
    'title', 
    'iconleft',
    'iconleftclasses',
    'iconright',
    'iconrightclasses',
    'tag', 
    'classes', 
    'href', 
    'disabled'
  ];
}

function getButton(params) {
  const { title, iconleft, iconright, classes, tag, href, disabled, iconleftclasses, iconrightclasses } = extractParams(params, getButtonParamsKeys());

  const tagName = tag === 'test-tag'
    ? 'button'
    : tag;

  const hrefAttr = href === 'test-href'
    ? ''
    : `href="${href}"`;

  const additionalIconleftclasses = iconleftclasses === 'test-iconleftclasses'
    ? ''
    : iconleftclasses;

  const additionalIconrightclasses = iconrightclasses === 'test-iconrightclasses'
    ? ''
    : iconrightclasses;

  const iconLeftElement = iconleft === 'test-iconleft' 
    ? '' 
    : `<span class="button__icon ${additionalIconleftclasses}" data-icon="${iconleft}"></span>`;

  const iconRightElement = iconright === 'test-iconright' 
    ? '' 
    : `<span class="button__icon ${additionalIconrightclasses}" data-icon="${iconright}"></span>`;

  const buttonTextElement = `<span class="button__text">${title}</span>`;

  const additionalClasses = classes === 'test-classes' ? '' : classes;

  const disabledAttr = disabled === 'test-disabled' 
    ? '' 
    : `disabled="true"`;

  const disabledClass = disabled === 'test-disabled' 
    ? '' 
    : `is-disabled`;

  return `
    <!-- button -->
    <${tagName}
      ${hrefAttr}
      ${disabledAttr}
      class="button ${additionalClasses} ${disabledClass}"
      data-name="${params.component}"
    >
      ${iconLeftElement}
      ${buttonTextElement}
      ${iconRightElement}
    </${tagName}>
    <!-- END. button -->
  `;
}