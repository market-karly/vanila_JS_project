import { getNode, toggleClass, clearContents } from "./../lib/index.js";

const dropdown = getNode(".header--nav-menu-item");
const dropdownBtn = getNode(".header--nav-dropdown");
const closeBannerBtn = getNode(".banner--close-btn");
const headerBanner = getNode(".banner");

const onDropDownHandler = () => {
  toggleClass(dropdown, "closed");
};

const onCloseBannerHandler = () => {
  clearContents(headerBanner);
};

dropdownBtn.addEventListener("click", onDropDownHandler);
closeBannerBtn.addEventListener("click", onCloseBannerHandler);

/* eslint-disable-next-line */
const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

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
