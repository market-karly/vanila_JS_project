import { getNode, parse, renderRecommendProduct , renderRecommendSaleProduct} from "./../lib/index.js";
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


const recommendContainer = getNode(".recommend-product");
const recommendSaleContainer = getNode(".recommend-sale");

async function rendingProductList() {
  try {
    let response = await parse.get("http://localhost:3000/products");
    let productData = response.data;
    console.log(productData);

    productData.forEach((data) => {
      if (data.saleRatio === 0) {
        renderRecommendProduct(recommendContainer, data);
      } else if (data.saleRatio !== 0) {
        console.log(data.saleRatio);
        renderRecommendSaleProduct(recommendContainer, data);
        renderRecommendSaleProduct(recommendSaleContainer, data);
      }
      
    });
  } catch (err) {
    console.log("error");
  }
}

rendingProductList();