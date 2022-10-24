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
    closes = document.querySelectorAll('.close img'),
    decorDropdowns = document.querySelectorAll('.decor__dropdown'),
    decorSliders = document.querySelectorAll('.decor__slider'),
    decorButtons = document.querySelectorAll('.decor__btn');

  carts.forEach((cart) => {
    cart.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      menuBtn.classList.remove('header__menu-btn--open');
      decor.classList.toggle('popup--open');
    });
  });

  decorButtons.forEach((decorButton) => {
    decorButton.addEventListener('click', (e) => {
      e.target.style.display = 'none';

      decorDropdowns.forEach((decorDropdown) => {
        decorDropdown.classList.toggle('dropdown--fixed');
      });

      decorSliders.forEach((decorSlider) => {
        decorSlider.classList.toggle('decor__slider--fixed');
      });

      if (e.target.classList.contains('decor__btn--edit')) {
        document.querySelector('.decor__btn--save').style.display = 'block';
      } else {
        document.querySelector('.decor__btn--edit').style.display = 'block';
      }
    });
  });

  const history = document.querySelector('.history'),
    autorenewal = document.querySelector('.autorenewal'),
    deposit = document.querySelector('.deposit'),
    popupButtons = document.querySelectorAll('.personal__buttons'),
    popups = document.querySelectorAll('.popup');

  popupButtons.forEach((popupButton) => {
    popupButton.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-popup') === 'deposit') {
        deposit.classList.toggle('popup--open');
      } else if (e.target.getAttribute('data-popup') === 'autorenewal') {
        autorenewal.classList.toggle('popup--open');
      } else {
        history.classList.toggle('popup--open');
      }
    });
  });

  closes.forEach((close) => {
    close.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') != 'modal') {
        popups.forEach((popup) => {
          popup.classList.remove('popup--open');
        });
      }
    });
  });

  const tooltips = document.querySelectorAll('.tooltip'),
    contentWrapper = document.querySelector('.content__tooltip-wrapper'),
    filterTabs = document.querySelectorAll('[data-content]'),
    contentIndividual = document.querySelector('.content__main--individual'),
    contentMobile = document.querySelector('.content__main--mobile'),
    contentFilters = document.querySelectorAll('.content__filter');

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-hide') == 'individual') {
        tooltip.style.display = 'none';
        contentWrapper.classList.remove('content__tooltip-wrapper');
      } else {
        tooltip.style.display = 'none';
      }
    });
  });

  function refreshFilters() {
    contentFilters.forEach((contentFilter) => {
      contentFilter.classList.remove('tab--active');
    });
  }

  contentFilters.forEach((contentFilter) => {
    contentFilter.addEventListener('click', (e) => {
      refreshFilters();
      e.target.classList.add('tab--active');
    });
  });

  filterTabs.forEach((filter) => {
    filter.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-content') == 'individual') {
        contentIndividual.style.display = 'block';
        contentMobile.style.display = 'none';
      } else {
        contentIndividual.style.display = 'none';
        contentMobile.style.display = 'block';
      }
    });
  });
});
