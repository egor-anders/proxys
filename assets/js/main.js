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
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
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

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      popups.forEach((popup) => {
        popup.classList.remove('popup--open');
        menu.classList.remove('menu--open');
      });
    }
  });

  const tooltips = document.querySelectorAll('.tooltip'),
    contentWrapper = document.querySelector('.content__tooltip-wrapper'),
    filterTabs = document.querySelectorAll('[data-content]'),
    contentBlocks = document.querySelectorAll('.content__main'),
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

  function hideContent() {
    contentBlocks.forEach((item) => {
      item.style.display = 'none';
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
        hideContent();
        document.querySelector('.content__main--individual').style.display = 'block';
      } else if (e.target.getAttribute('data-content') == 'mobile') {
        hideContent();
        document.querySelector('.content__main--mobile').style.display = 'block';
      } else if (e.target.getAttribute('data-content') == 'shared') {
        hideContent();
        document.querySelector('.content__main--shared').style.display = 'block';
      } else if (e.target.getAttribute('data-content') == 'resident') {
        hideContent();
        document.querySelector('.content__main--resident').style.display = 'block';
      } else if (e.target.getAttribute('data-content') == 'individual-ipv6') {
        hideContent();
        document.querySelector('.content__main--individual-ipv6').style.display = 'block';
      } else if (e.target.getAttribute('data-content') == 'dynamic') {
        hideContent();
        document.querySelector('.content__main--dynamic').style.display = 'block';
      }
    });
  });

  $('.decor__delete').click(function () {
    $('.decor__promo').hide();
  });

  const additionally = document.querySelectorAll('.additionally');

  additionally.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('caret--additionally')) {
        e.target.classList.toggle('caret--close');
        item.querySelector('.additionally__rows').classList.toggle('hide');
      }
    });
  });

  try {
    document.querySelector('[data-deposit]').addEventListener('click', () => {
      document.querySelector('.popup--deposit').classList.toggle('popup--open');
    });
  } catch {
    console.log('error');
  }

  const proxyAmount = document.querySelector('.decor__slider-text'),
    promo = document.querySelector('.decor__stock');

  promo.addEventListener('click', (e) => {
    if (e.target.classList.contains('stock__btn')) {
      console.log(123);
      proxyAmount.value = parseInt(proxyAmount.value) + 50;
      proxyAmount.style.color = '#88C136';
      setTimeout(() => {
        proxyAmount.style.color = '#fff';
      }, 3000);
      promo.style.display = 'none';
    }
  });

  const tabsList = document.querySelectorAll('.tabs');

  function refreshTabs(tabs) {
    tabs.forEach((tab) => {
      tab.classList.remove('tab--active');
    });
  }

  tabsList.forEach((item) => {
    const tabs = item.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        refreshTabs(tabs);
        tab.classList.add('tab--active');
      });
    });
  });

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    if (!dropdown.classList.contains('dropdown--country')) {
      const buttonContent = dropdown.querySelector('button span');
      const dropdownItems = dropdown.querySelectorAll('.dropdown-menu li');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      const activeElement = document.createElement('li');
      activeElement.textContent = buttonContent.textContent;
      activeElement.style.color = '#fff';
      dropdownMenu.prepend(activeElement);

      dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
          const buffer = buttonContent.textContent;
          buttonContent.textContent = item.textContent;
          item.textContent = buffer;
          activeElement.textContent = buttonContent.innerHTML;
        });
      });
    }
  });

  $(document).ready(function(){
    $("#inputCountries").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".content__countries label").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
});
