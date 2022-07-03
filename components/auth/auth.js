function getAuthParamsKeys() {
  return ['type', 'title', 'text'];
}

function getAuth(params) {
  const { title: titleParam, text: textParam, type } = extractParams(params, getAuthParamsKeys());

  const title = titleParam === 'test-title' ? '' : titleParam;
  const text = textParam === 'test-text' ? '' : textParam;

  const content = getContent(type);

  return `
    <!-- auth -->
    <div class="auth" data-name="${params.component}">
      ${title && (
        `
        <div class="auth__title-wrapper">
          <div 
            data-component="getTitle"
            data-title="${title}"
          >
          </div>
        </div>
        `
      )}
      ${text && (
        `
        <div class="auth__text">
          ${text}
        </div>
        `
      )}
      ${content && (
        `
        <div class="auth__content">
          ${content}
        </div>
        `
      )}
    </div>
    <!-- END. auth -->
  `;

  function getContent(type) {
    switch (type) {
      case 'login': 
        return getLoginContent();
      case 'registration':
        return getRegistrationContent();
      case 'change-email':
        return getChangeEmailContent();
      default:
        return '';
    }
  }

  function getChangeEmailContent() {
    return `
    <div 
      data-component="getTitle"
      data-title="Введіть ваш новий email"
      data-tag="h3"
    >
    </div>
    <div class="g-spacer-3"></div>
    <form class="auth__form">
      <div 
        data-component="getInput"
        data-id="email"
        data-name="email"
        data-label="E-mail"
        data-placeholder=" "
        data-type="email"
        data-required="true"
      >
      </div>
      
      <div class="g-spacer-4"></div>
      <div 
        data-component="getButton"
        data-title="Продовжити"
        data-classes="button--border-radius button--font-medium"
      >
      </div>
    </form>
    <div class="g-spacer-10"></div>
    <p>Якщо передумали, можете <a href="./pages/profile/profile.html">повернутись на профіль</a></p>
    `;
  }

  function getLoginContent() {
    return `
    <div 
      data-component="getTitle"
      data-title="Вхід через Google"
      data-tag="h3"
    >
    </div>
    <div class="g-spacer-3"></div>
    <div 
      data-component="getButton"
      data-title="Увійти з Google"
      data-tag="a"
      data-iconleft="google"
      data-href="./pages/login/login.html"
      data-classes="button--border-radius button--bordered button--font-medium"
    >
    </div>
    <div class="g-spacer-5"></div>
    <div 
      data-component="getTitle"
      data-title="aбо <br><br>вхід через email та пароль"
      data-tag="h3"
    >
    </div>
    <div class="g-spacer-3"></div>
    <form class="auth__form">
      <div 
        data-component="getInput"
        data-id="email"
        data-name="email"
        data-label="E-mail"
        data-placeholder=" "
        data-type="email"
      >
      </div>
      <div class="g-spacer-2"></div>
      <div 
        data-component="getInput"
        data-id="password"
        data-name="password"
        data-label="Пароль"
        data-placeholder=" "
        data-type="password"
      >
      </div>
      <div class="g-spacer-4"></div>
      <div 
        data-component="getButton"
        data-title="Увійти"
        data-classes="button--border-radius button--font-medium"
      >
      </div>
    </form>
    `;
  }

  function getRegistrationContent() {
    return `
    <div 
      data-component="getTitle"
      data-title="За допомогою Google"
      data-tag="h3"
    >
    </div>
    <div class="g-spacer-3"></div>
    <div 
      data-component="getButton"
      data-title="Продовжити з Google"
      data-tag="a"
      data-iconleft="google"
      data-href="./pages/login/login.html"
      data-classes="button--border-radius button--bordered button--font-medium"
    >
    </div>
    <div class="g-spacer-5"></div>
    <div 
      data-component="getTitle"
      data-title="aбо <br><br>реєстрація через email та пароль"
      data-tag="h3"
    >
    </div>
    <div class="g-spacer-3"></div>
    <form class="auth__form">
      <div 
        data-component="getInput"
        data-id="email"
        data-name="email"
        data-label="E-mail"
        data-placeholder=" "
        data-type="email"
      >
      </div>
      <div class="g-spacer-2"></div>
      <div 
        data-component="getInput"
        data-id="password"
        data-name="password"
        data-label="Пароль"
        data-placeholder=" "
        data-type="password"
      >
      </div>
      <div class="g-spacer-4"></div>
      <div 
        data-component="getButton"
        data-title="Зареєструватися"
        data-classes="button--border-radius button--font-medium"
      >
      </div>
    </form>
    `;
  }
}