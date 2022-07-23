const element = document.querySelector('.js-lang-switcher-select');

if (element) {
  element.addEventListener('change', (e) => {
    const url = e.target.value;
    window.location = url;
  });
}