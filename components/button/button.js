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
    'disabled',
    'blank',
    'onclick',
  ];
}

function getButton(params) {
  const { onclick, title: titleParam, iconleft, iconright, classes, tag, href, disabled, iconleftclasses, iconrightclasses, blank } = extractParams(params, getButtonParamsKeys());

  const title = titleParam === 'test-title' ? '' : titleParam;
  const tagName = tag === 'test-tag'
    ? 'button'
    : tag;

  const targetBlankAttr = blank === 'test-blank' 
    ? ''
    : 'target="_blank"'

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

  const buttonTextElement = title && `<span class="button__text">${title}</span>`;

  const additionalClasses = classes === 'test-classes' ? '' : classes;

  const disabledAttr = disabled === 'test-disabled' 
    ? '' 
    : `disabled="true"`;

  const disabledClass = disabled === 'test-disabled' 
    ? '' 
    : `is-disabled`;

  const onclickAttr = onclick === 'test-onclick' ? '' : `onclick="${onclick}"`

  return `
    <!-- button -->
    <${tagName}
      ${hrefAttr}
      ${targetBlankAttr}
      ${disabledAttr}
      class="button ${additionalClasses} ${disabledClass}"
      data-name="${params.component}"
      ${onclickAttr}
    >
      ${iconLeftElement}
      ${buttonTextElement}
      ${iconRightElement}
    </${tagName}>
    <!-- END. button -->
  `;
}