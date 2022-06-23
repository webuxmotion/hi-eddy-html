function getSubnavList(items) {
  let list = ``;

  items.forEach((el) => {
    list += `
      <li>
        <a href="./components/${el}/${el}.html">${el}</a>
      </li>
    `;
  });

  let res = `
    <ul>
      ${list}
    </ul>
  `;

  return res;
}
