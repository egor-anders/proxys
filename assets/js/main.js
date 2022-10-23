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
});
