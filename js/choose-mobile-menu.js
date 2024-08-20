const Choosemobile = document.querySelector('.service-mobile-menu');
const ChoosemobileBtnOpen = document.querySelector('.servcie-menu-btn-open');
const ChoosemobileBtnClose = document.querySelector('.service-menu-btn-close');

const ChoosetoggleMobile = () => Choosemobile.classList.toggle('is-open');

ChoosemobileBtnOpen.addEventListener('click', ChoosetoggleMobile);
ChoosemobileBtnClose.addEventListener('click', ChoosetoggleMobile);
