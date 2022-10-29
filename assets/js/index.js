document.addEventListener('DOMContentLoaded', () => {
  const dropdownMobile = document.querySelector('.dropdown--country-mobile');
  const buttonMobile = dropdownMobile.querySelector('button'),
    dropdownMobileItems = dropdownMobile.querySelectorAll('.country--mobile');
  dropdownMobileItems.forEach((element) => {
    element.addEventListener('click', () => {
      buttonMobile.innerHTML = `<span class="country"><span>${element.querySelector('span').textContent}</span> <img src=${
        element.querySelector('img').src
      } alt=""></span>
      <span class="caret"></span>`;
      dropdownMobile.classList.remove('open');
      dropdownMobile.querySelector('.dropdown-backdrop').remove();
    });
  });

  function search(inputSelector, elementSelector) {
    $(document).ready(function () {
      $(inputSelector).on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(elementSelector).filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  }

  search('#inputCountries', '.content__countries label');
  search('#inputCountries-2', '.content__countries--mobile .country');
});
