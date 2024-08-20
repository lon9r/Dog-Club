const Choosebackdrop = document.querySelector('.backdrop');
const ChoosebackdropBtnOpen = document.querySelector('.choose-menu-btn-open');
const ChoosebackdropBtnClose = document.querySelector('.choose-menu-btn-close');

const ChoosebackdroptoggleMobile = () =>
  Choosebackdrop.classList.toggle('is-hidden');

ChoosebackdropBtnOpen.addEventListener('click', ChoosebackdroptoggleMobile);
ChoosebackdropBtnClose.addEventListener('click', ChoosebackdroptoggleMobile);
