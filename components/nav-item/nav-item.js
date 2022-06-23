function getSubnavList(items, folder) {
  let list = ``;

  items.forEach((el) => {
    list += `
      <li>
        <a href="./${folder}/${el}/${el}.html">${el}</a>
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
