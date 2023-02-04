import {
  getNode,
  toggleClass,
  clearContents,
  comma,
  renderRecommendProduct,
  renderRecommendSaleProduct,
} from "./../lib/index.js";

const dropdown = getNode(".header--nav-menu-item");
const dropdownBtn = getNode(".header--nav-dropdown");
const closeBannerBtn = getNode(".banner--close-btn");
const headerBanner = getNode(".banner");
const getImg = getNode(".swiper-slide a");

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
  slidesPerGroup: 4,
  spaceBetween: 18,

  navigation: {
    nextEl: ".swiper-recommend--product--button-next",
    prevEl: ".swiper-recommend--product--button-prev",
  },
});

const swiper2 = new Swiper(".swiper-recommend--price", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 18,

  navigation: {
    nextEl: ".swiper-recommend--price--button-next",
    prevEl: ".swiper-recommend--price--button-prev",
  },
});

// 팝업 닫기 기능
let modal = document.querySelector(".popup-box");
let modalCloseOneDayBtn = document.querySelector(".close-during-oneday");
let modalCloseBtn = document.querySelector(".close");
let body = document.querySelector("body");
let popUpBox = document.querySelector(".popup-box");
let isClose = document.querySelector(".is-open");

// 모달 창 하루동안 닫기 기능
function onCloseOneDayHandler(e) {
  e.preventDefault();
  popUpBox.parentNode.removeChild(popUpBox);
}

// 모달 창 닫기 기능
function onCloseModalHandler(e) {
  e.preventDefault();
  popUpBox.parentNode.removeChild(popUpBox);
}

modalCloseBtn.addEventListener("click", onCloseModalHandler);
modalCloseOneDayBtn.addEventListener("click", onCloseOneDayHandler);

//추천 상품 및 할인 상품 받아오기
const recommendContainer = getNode(".recommend-product");
const recommendSaleContainer = getNode(".recommend-sale");

async function rendingProductList() {
  try {
    const resultData = comma;
    /* 기본, 세일 구분 */
    resultData.forEach((data) => {
      if (data.saleRatio === 0) {
        renderRecommendProduct(recommendContainer, data);
      } else if (data.saleRatio !== 0) {
        renderRecommendSaleProduct(recommendContainer, data);
        renderRecommendSaleProduct(recommendSaleContainer, data);
      }
    });
  } catch (err) {
    console.log("error");
  }
}

rendingProductList();
