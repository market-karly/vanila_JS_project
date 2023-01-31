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
