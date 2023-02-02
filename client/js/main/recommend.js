/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */
const swiper1 = new Swiper(".swiper-recommend--product", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,

  navigation: {
    nextEl: ".swiper-recommend--product--button-next",
    prevEl: ".swiper-recommend--product--button-prev",
  },
});

const swiper2 = new Swiper(".swiper-recommend--price", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,

  navigation: {
    nextEl: ".swiper-recommend--price--button-next",
    prevEl: ".swiper-recommend--price--button-prev",
  },
});
