/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */

const swiper = new Swiper('.swiper-recommend', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 18,
  loop:true,

  navigation:{
    nextEl: '.swiper-button-next',
  },
});