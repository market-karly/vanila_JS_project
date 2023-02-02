import { getNode, toggleClass } from "../../lib/index.js";

const dropdown1 = getNode(".nav-menu_ul");
const dropdown2 = getNode(".nav-menu_ul2");
const dropdown3 = getNode(".nav-menu_ul3");
const dropdownBtn1 = getNode(".nav-menu-btn");
const dropdownBtn2 = getNode(".nav-menu-btn2");
const dropdownBtn3 = getNode(".nav-menu-btn3");
const categoryIcon = getNode(".nav-menu_category-svg");
const brandIcon = getNode(".nav-menu_brand-svg");
const priceIcon = getNode(".nav-menu_price-svg");

const onDropDownHandler1 = () => {
  toggleClass(dropdown1, "closed1");
};
const onDropDownHandler2 = () => {
  toggleClass(dropdown2, "closed2");
};
const onDropDownHandler3 = () => {
  toggleClass(dropdown3, "closed3");
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
dropdownBtn1.addEventListener("click", onDropDownHandler1);
dropdownBtn2.addEventListener("click", onDropDownHandler2);
dropdownBtn3.addEventListener("click", onDropDownHandler3);
dropdownBtn1.addEventListener("click", onSwitchIconHandler1);
dropdownBtn2.addEventListener("click", onSwitchIconHandler2);
dropdownBtn3.addEventListener("click", onSwitchIconHandler3);
