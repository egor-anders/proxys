addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__menu-btn'),
    menu = document.querySelector('.menu'),
    headerBtn = document.querySelector('.header__btn');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__menu-btn--open');
    menu.classList.toggle('menu--open');
  });

  headerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  const carts = document.querySelectorAll('[data-cart]'),
    decor = document.querySelector('.popup--decor'),
    closes = document.querySelectorAll('.close img');

  carts.forEach((item) => {
    item.addEventListener('click', () => {
      decor.classList.add('popup--open');
    });
  });

  closes.forEach((close) => {
    console.log(close);
    close.addEventListener('click', (e) => {
      console.log(123);
      if (e.target.getAttribute('data-close') == 'decor') {
        decor.classList.remove('popup--open');
      }
    });
  });
});
