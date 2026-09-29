// Скрипты: бургер-меню, проверка форм, год в подвале.

// Бургер-меню
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
}

// Проверка форм
var forms = document.querySelectorAll('form[data-check]');

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function (e) {
    e.preventDefault();

    var name = this.querySelector('[name="name"]');
    var email = this.querySelector('[name="email"]');
    var msg = this.querySelector('.ok-msg');

    if (name && name.value.trim().length < 2) {
      alert('Введите имя (минимум 2 символа)');
      name.focus();
      return;
    }

    if (email && email.value.indexOf('@') === -1) {
      alert('Введите правильный e-mail');
      email.focus();
      return;
    }

    if (msg) {
      msg.classList.add('show');
    }

    this.reset();
  });
}

// Год в подвале
var year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}