const Mainmobile = document.querySelector('.main-mobile-menu');
const MainmobileBtnOpen = document.querySelector('.mobile-menu-btn-open');
const MainmobileBtnClose = document.querySelector('.mobile-menu-btn-close');

const MaintoggleMobile = () => Mainmobile.classList.toggle('is-open');

MainmobileBtnOpen.addEventListener('click', MaintoggleMobile);
MainmobileBtnClose.addEventListener('click', MaintoggleMobile);
