import { getNode, toggleClass, clearContents } from "./../lib/index.js";

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

const data = {
  products: [
    {
      id: "product-rksk",
      name: "[대구 반할만떡] 유부호만두",
      description: "유부로 속을 든든히 채운 군만두",
      price: 6900,
      saleRatio: 0.24,
      salePrice: 5244,
      image: {
        thumbnail: "ubuho/thumbnail.jpg",
        view: "ubuho/detail_view.jpg",
        banner: "ubuho/detail_banner.jpg",
        info: "ubuho/detail_info.jpg",
        alt: "유부호 만두",
      },
      stock: 3,
    },
    {
      id: "product-ekfk",
      name: "[풀무원] 탱탱쫄면 (4개입)",
      description: "튀기지 않아 부드럽고 매콤한",
      price: 4980,
      saleRatio: 0,
      salePrice: 0,
      image: {
        thumbnail: "tangtang/thumbnail.jpg",
        view: "tangtang/detail_view.jpg",
        banner: "tangtang/detail_banner.jpg",
        info: "tangtang/detail_info.jpg",
        alt: "풀무원 탱탱쫄면",
      },
      stock: 10,
    },
    {
      id: "product-akqk",
      name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
      description: "매콤달콤한 마력의 밥도둑",
      price: 7900,
      saleRatio: 0.13,
      salePrice: 6800,
      image: {
        thumbnail: "jukkumi/thumbnail.jpg",
        view: "jukkumi/detail_view.jpg",
        banner: "jukkumi/detail_banner.jpg",
        info: "jukkumi/detail_info.jpg",
        alt: "홍대 주꾸미",
      },
      stock: 8,
    },
    {
      id: "product-tkwk",
      name: "[강남면옥] 소갈비찜",
      description: "보는 맛과 먹는 맛 모두 푸짐",
      price: 29800,
      saleRatio: 0,
      salePrice: 0,
      image: {
        thumbnail: "kangnam/thumbnail.jpg",
        view: "kangnam/detail_view.jpg",
        banner: "kangnam/detail_banner.jpg",
        info: "kangnam/detail_info.jpg",
        alt: "강남면옥 소갈비찜",
      },
      stock: 2,
    },
    {
      id: "product-ckzk",
      name: "[Kalry's] 한돈 삼겹 베이컨",
      description: "무항생제 한돈 삼겹살의 고소한 풍미 그대로",
      price: 4500,
      saleRatio: 0.25,
      salePrice: 3375,
      image: {
        thumbnail: "bacon/thumbnail.jpg",
        view: "bacon/detail_view.jpg",
        banner: "bacon/detail_banner.jpg",
        info: "bacon/detail_info.jpg",
        alt: "칼리 한돈 삼겹 베이컨",
      },
      stock: 13,
    },
  ],
};

function getImgHandler() {
  let json = JSON.stringify(data);
  return console.log(json);
}

getImg.addEventListener("click", getImgHandler);


// 팝업 닫기 기능 
let modal = document.querySelector('.popup-box');
let modalCloseOneDayBtn = document.querySelector('.close-during-oneday');
let modalCloseBtn = document.querySelector('.close');
let body = document.querySelector('body');
let popUpBox = document.querySelector('.popup-box')
let isClose = document.querySelector('.is-open')


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
  
modalCloseBtn.addEventListener('click', onCloseModalHandler);
modalCloseOneDayBtn.addEventListener('click',onCloseOneDayHandler);
