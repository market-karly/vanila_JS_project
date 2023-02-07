import {
  getNode,
  toggleClass,
  resetElements,
  renderProduct,
  getPriceUpdate,
} from "../../lib/index.js";
// import { rendingProductList } from "./productList.js";

const dropdown1 = getNode(".nav-menu_ul");
const dropdown2 = getNode(".nav-menu_ul2");
const dropdown3 = getNode(".nav-menu_ul3");
const dropdownBtn1 = getNode(".nav-menu-btn");
const dropdownBtn2 = getNode(".nav-menu-btn2");
const dropdownBtn3 = getNode(".nav-menu-btn3");
const categoryIcon = getNode(".nav-menu_category-svg");
const brandIcon = getNode(".nav-menu_brand-svg");
const priceIcon = getNode(".nav-menu_price-svg");
const resetBtn = getNode(".nav-filter_button");
const productContainer = getNode(".product-brief-list");

const onDropDownHandler1 = () => {
  toggleClass(dropdown1, "closed1");
  document
    .getElementsByName("카테고리 버튼")[0]
    .setAttribute("alt", "카테고리 열림 상태");
};
const onDropDownHandler2 = () => {
  toggleClass(dropdown2, "closed2");
  document
    .getElementsByName("브랜드 버튼")[0]
    .setAttribute("alt", "브랜드 메뉴 열림 상태");
};
const onDropDownHandler3 = () => {
  toggleClass(dropdown3, "closed3");
  document
    .getElementsByName("가격 버튼")[0]
    .setAttribute("alt", "가격 메뉴 열림 상태");
};
const onSwitchIconHandler1 = () => {
  toggleClass(categoryIcon, "swich-icon--active1");
};
const onSwitchIconHandler2 = () => {
  toggleClass(brandIcon, "swich-icon--active2");
};
const onSwitchIconHandler3 = () => {
  toggleClass(priceIcon, "swich-icon--active3");
};

// const resetFilterHandler = () => {
//   let obj = document.getElementsByName("checkbox");
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].checked) {
//       obj[i].checked = false;
//     }
//   }
//   resetElements(".product-brief-list li");
//   return rendingProductList();
// };

async function showingProductList() {
  try {
    let productData = getPriceUpdate();
    let obj2 = document.getElementsByName("checkbox");

    obj2.forEach((el) => {
      el.addEventListener("click", () => {
        // resetElements(".product-brief-list li");
        productData.forEach((product) => {
          if (el.checked === true && product.category === "과일·견과·쌀") {
            console.log(el);
            renderProduct(productContainer, product);
          } else if (el.checked === false) {
            // return rendingProductList();
          }
        });
      });
    });
  } catch (err) {
    console.log("error");
  }
}

showingProductList();

// resetBtn.addEventListener("click", resetFilterHandler);
dropdownBtn1.addEventListener("click", onDropDownHandler1);
dropdownBtn2.addEventListener("click", onDropDownHandler2);
dropdownBtn3.addEventListener("click", onDropDownHandler3);
dropdownBtn1.addEventListener("click", onSwitchIconHandler1);
dropdownBtn2.addEventListener("click", onSwitchIconHandler2);
dropdownBtn3.addEventListener("click", onSwitchIconHandler3);
