function getFooterParamsKeys() {
  return [];
}

function getFooter(params) {
  const {} = extractParams(params, getFooterParamsKeys());

  return `
    <!-- footer -->
    <div class="footer" data-name="${params.component}">
      <img class="footer__rock" src="./img/left-corner-rock.svg" alt="">
      <img class="footer__duck-big" src="./img/duck.svg" alt="">
      <img class="footer__water" src="./img/water-rect.png" alt="">
    </div>
    <!-- END. footer -->
  `;
}