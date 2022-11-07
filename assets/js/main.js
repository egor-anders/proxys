addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__menu-btn'),
    menu = document.querySelector('.menu'),
    headerBtn = document.querySelector('.header__btn');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__menu-btn--open');
    menu.classList.toggle('menu--open');
    if(window.innerWidth<1200){
      document.body.classList.toggle('noscroll');
      document.querySelector('html').classList.toggle('scroll');
    }
  });

  headerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    if(window.innerWidth<1200){
      document.body.classList.toggle('noscroll');
      document.querySelector('html').classList.toggle('scroll');
    }
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
      document.body.classList.toggle('noscroll');
      document.querySelector('html').classList.toggle('scroll');
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
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
      document.body.classList.toggle('noscroll');
      document.querySelector('html').classList.toggle('scroll');
    });
  });

  closes.forEach((close) => {
    close.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') != 'modal') {
        popups.forEach((popup) => {
          popup.classList.remove('popup--open');
          document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
          document.body.classList.remove('noscroll');
          document.querySelector('html').classList.remove('scroll');
        });
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      popups.forEach((popup) => {
        popup.classList.remove('popup--open');
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('menu--open');
        document.body.classList.remove('noscroll');
        document.querySelector('html').classList.remove('scroll');
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

  // $('.decor__delete').click(function () {
  //   $('.decor__promo').hide();
  // });
  const promoArr = [];

  const decorPromo = document.querySelector('.decor__promo');
  const promoInput = document.querySelector('.decor__enter-promo input');
  const promoSubmit = document.querySelector('.decor__enter-promo button');

  function promoDel() {
    const decorPromoInfo = document.querySelectorAll('.decor__promo-info');

    decorPromoInfo.forEach((item) => {
      promoArr.push(item);
      const promoDelete = item.querySelector('.decor__delete');
      promoDelete.addEventListener('click', () => {
        promoArr.splice(promoArr.indexOf(`${item}`), 1);
        item.remove();
        console.log();
        if (decorPromo.textContent.trim() == 'Скидки') {
          decorPromo.style.display = 'none';
        }
      });
    });
  }
  promoDel();

  promoSubmit.addEventListener('click', () => {
    if ((promoInput.value != '') & (String(promoInput.value).length <= 8)) {
      const promocode = document.createElement('div');
      promocode.classList.add('decor__promo-info');
      promocode.innerHTML = `
        <span class="body-text">Промокод <span>${promoInput.value}</span></span>
        <div class="decor__benefit text">-2 111₽</div>
        <span class="decor__delete text">Удалить промокод</span>
        `;
      decorPromo.append(promocode);
      promoArr.push(promocode);
      promoInput.value = '';
      decorPromo.style.display = 'block';
      promoDel();
    } else {
      promoInput.style.border = '1px solid #C75D54';
    }
  });

  promoInput.addEventListener('input', () => {
    promoInput.removeAttribute('style');
  });

  const additionally = document.querySelectorAll('.additionally');

  additionally.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('caret--additionally')) {
        e.target.classList.toggle('caret--close');

        try {
          item.querySelector('.additionally__rows').classList.toggle('hide');
        } catch {}

        try {
          item.querySelector('.decor__additionally-title').classList.toggle('additionally__title--active');
        } catch {}
      }
    });
  });

  try {
    if(document.querySelector('[data-deposit]')){
      document.querySelector('[data-deposit]').addEventListener('click', () => {
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.popup--deposit').classList.toggle('popup--open');
        document.body.classList.toggle('noscroll');
        document.querySelector('html').classList.toggle('scroll');
      });
    }
  } catch {
    console.log('error');
  }

  const proxyAmount = document.querySelector('.decor__slider-text'),
    promo = document.querySelector('.decor__stock');

  promo.addEventListener('click', (e) => {
    if (e.target.classList.contains('stock__btn')) {
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
      const button = dropdown.querySelector('button');
      const buttonContent = dropdown.querySelector('button span');
      const dropdownItems = dropdown.querySelectorAll('.dropdown-menu li');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      const activeElement = document.createElement('li');
      activeElement.textContent = buttonContent.textContent;

      if (dropdown.classList.contains('dropdown--mobile')) {
        activeElement.style.color = '#88C136';
        activeElement.innerHTML = `Индивидуальные IPV4 <div class="marker--dropdown marker--hit">хит продаж</div>`;
      } else {
        activeElement.style.color = '#fff';
      }
      dropdownMenu.prepend(activeElement);

      dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          const buffer = buttonContent.textContent;
          buttonContent.textContent = item.textContent;
          item.textContent = buffer;
          activeElement.textContent = buttonContent.textContent;
          bufferAttValue = item.getAttribute('data-content');

          if (e.target.getAttribute('data-content') == 'individual') {
            hideContent();
            activeElement.innerHTML = `Индивидуальные IPV4 <div class="marker--dropdown marker--hit">хит продаж</div>`;
            document.querySelector('.content__main--individual').style.display = 'block';
          } else if (e.target.getAttribute('data-content') == 'mobile') {
            hideContent();
            document.querySelector('.content__main--mobile').style.display = 'block';
          } else if (e.target.getAttribute('data-content') == 'shared') {
            hideContent();
            activeElement.innerHTML = `Шареды (расшаренные) <div class="marker--dropdown marker--popular">популярное</div>`;
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

          item.setAttribute('data-content', button.getAttribute('data-content'));
          button.setAttribute('data-content', bufferAttValue);
        });
      });
    }
  });

  const dropdownsCountry = document.querySelectorAll('.dropdown--country');

  dropdownsCountry.forEach((item) => {
    let button = item.querySelector('button'),
      buttonImg = item.querySelector('button img'),
      buttonText = item.querySelector('button span'),
      dropdownList = item.querySelector('.dropdown-menu--country'),
      dropdownItems = item.querySelectorAll('.dropdown-menu--country li');
    const activeElement = document.createElement('li');
    activeElement.innerHTML = `<img class="header__flag" alt="" src=${buttonImg.src}><span class="active">${buttonText.textContent}</span>`;
    dropdownList.prepend(activeElement);

    dropdownItems.forEach((element) => {
      element.addEventListener('click', () => {
        buttonImg = item.querySelector('button img');
        buttonText = item.querySelector('button span');
        let bufferImgSrc = buttonImg.src;
        let bufferText = buttonText.textContent;
        console.log(buttonText.textContent, buttonImg.src);

        button.innerHTML = `<img class="header__flag" alt="" src=${element.querySelector('img').src}>
                            <span>${element.querySelector('span').textContent}</span>
                            <span class="caret"></span>`;
        activeElement.innerHTML = `<img class="header__flag" alt="" src=${element.querySelector('img').src}><span class="active">${
          element.querySelector('span').textContent
        }</span>`;
        element.innerHTML = `<img class="header__flag" alt="" src=${bufferImgSrc}><span>${bufferText}</span>`;
      });
    });
  });

  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

  const rangeBlocks = document.querySelectorAll('.slider');

  rangeBlocks.forEach((rangeBlock) => {
    const range = rangeBlock.querySelector('input[type="range"]');
    const text = rangeBlock.querySelector('input[type="number"]');
    $(range).on('input', function () {
      $(text).val(this.value);
    });

    $(text).on('input', function () {
      $(range).val(this.value);
      range.style.setProperty('--value', this.value);
    });

    $(text).change(function () {
      if (+$(this).attr('max') < $(this).val()) {
        $(this).val($(this).attr('max'));
      } else if (+$(this).attr('min') > $(this).val()) {
        $(this).val($(this).attr('min'));
      }
    });
  });

  document.querySelectorAll('.payment__button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const checkbox = e.target.parentNode.querySelector('input[type=checkbox]');
      const checkboxLabel = e.target.parentNode.querySelector('label');

      if (!checkbox.checked) {
        checkboxLabel.classList.add('payment__label--error');
      } else {
        checkboxLabel.classList.remove('payment__label--error');
      }
    });
  });
});
