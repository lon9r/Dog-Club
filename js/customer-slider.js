const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  width: 320,
  breakpoints: {
    780: {
      slidesPerView: 2,
    },

    1281: {
      slidesPerView: 3,
      width: 1070,
    },
  },

  navigation: {
    nextEl: '.carousel-button.next ',
    prevEl: ' .carousel-button.prev',
  },
});
