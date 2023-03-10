import {
  getNode,
  toggleClass,
  getPriceUpdate,
  resetElements,
  isBigInt,
} from "../../lib/index.js";
import { rendingProductList } from "./productList.js";
import { getPerPage } from "./productPagination.js";


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

const onDropDownHandler1 = () => {
  toggleClass(dropdown1, "closed1");
    document
    .querySelector(".nav-menu_category-svg")
    .setAttribute("alt", "카테고리 열림 상태");
};
const onDropDownHandler2 = () => {
  toggleClass(dropdown2, "closed2");
  document
    .querySelector(".nav-menu_brand-svg")
    .setAttribute("alt", "브랜드 메뉴 열림 상태");
};
const onDropDownHandler3 = () => {
  toggleClass(dropdown3, "closed3");
  document
    .querySelector(".nav-menu_price-svg")
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
let productData = getPriceUpdate();

const resetFilterHandler = () => {
  let obj = document.getElementsByName("checkbox");
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].checked) {
      obj[i].checked = false;
    }
  }
  resetElements(".product-brief-wrap");
  resetElements(".list-pagination__num");
  return getPerPage(9);
};

async function showingProductList() {
  let trueCategory = [];
  let falseArray = [];
  let falseCategory = [];
  try {
    let obj = document.getElementsByName("checkbox");
    obj.forEach((el) => {
      el.addEventListener("click", () => {
        productData.forEach((product) => {
          if (el.checked === true && product.category === el.value) {
            trueCategory.push(product);
          } else if (el.checked === false && product.category === el.value) {
            falseArray.push(product);
            falseCategory = trueCategory.filter((pr) => !falseArray.includes(pr));
          }
        });

        if (falseCategory.length === 0) {
          resetElements(".product-brief-wrap");
          for (let pr of trueCategory) {
            rendingProductList(pr);
          }
          console.log("true", trueCategory);
        } else if (falseCategory.length !== 0) {
          resetElements(".product-brief-wrap");
          for (let pr of falseCategory) {
            rendingProductList(pr);
          }
          console.log("false", falseCategory);
          trueCategory = [];
          trueCategory = falseCategory;
          falseCategory = [];
        }
      });
    });
  } catch (err) {
    console.log("error");
  }
}
showingProductList();

resetBtn.addEventListener("click", resetFilterHandler);
dropdownBtn1.addEventListener("click", onDropDownHandler1);
dropdownBtn2.addEventListener("click", onDropDownHandler2);
dropdownBtn3.addEventListener("click", onDropDownHandler3);
dropdownBtn1.addEventListener("click", onSwitchIconHandler1);
dropdownBtn2.addEventListener("click", onSwitchIconHandler2);
dropdownBtn3.addEventListener("click", onSwitchIconHandler3);
