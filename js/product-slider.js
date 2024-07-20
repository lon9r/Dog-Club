const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    780: {
      slidesPerView: 2,
    },

    1281: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
  },

  navigation: {
    nextEl: '.scroll-button.next ',
    prevEl: ' .scroll-button.previous',
  },
});
