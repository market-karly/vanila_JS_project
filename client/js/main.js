import { getNode, toggleClass } from "./../lib/index.js";

const dropdown = getNode(".header--nav-menu-item");
const dropdownBtn = getNode(".header--nav-dropdown");

const onDropDownHandler = () => {
  toggleClass(dropdown, "closed");
};

dropdownBtn.addEventListener("click", onDropDownHandler);
