import { getNode, toggleClass } from "./../lib/index.js";

const dropdown = getNode(".header--nav-menu-item");
const dropdownBtn = getNode(".header--nav-dropdown");

const onDropDownHandler = () => {
  toggleClass(dropdown, "closed");
};

dropdownBtn.addEventListener("click", onDropDownHandler);

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
