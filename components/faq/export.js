function faqClickEventHandler(e) {
  let question;
  let item;

  if (e.target.classList.contains('js-faq-question')) {
    question = e.target;
  } else if (e.target.closest('.js-faq-question')) {
    question = e.target.closest('.js-faq-question');
  }

  if (question && question.closest('.js-faq-item')) {
    item = question.closest('.js-faq-item');

    item.classList.toggle('is-open');
  }
}