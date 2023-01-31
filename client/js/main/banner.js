/* eslint-disable-next-line */
const swiper = new Swiper('.swiper', {
  autoplay: true,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});
