const burger__menu = document.querySelector('.burger__menu');
const header__menu__list = document.querySelector('.header__menu__list');
const burger_btn = document.querySelectorAll('.burger_btn');
const header__menu__item = document.querySelectorAll('.header__menu__item');
const header__number = document.querySelector('.header__number');




burger__menu.addEventListener('click', () => {
  header__menu__list.classList.toggle('menu__list--mobail');
  header__number.classList.toggle('header__number--active');

  burger_btn.forEach(burger_btn => {
    burger_btn.classList.toggle('burger_btn--active');
  });
  header__menu__item.forEach(header__menu__item => {
    header__menu__item.classList.toggle('header__item--active');
  });
});
