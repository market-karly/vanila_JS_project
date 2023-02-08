import { getNodes, removeClass, addClass } from "./../../lib/index.js";
const anchorBtn = getNodes(".detail-menu-anchor > a");

const removeActive = () => {
  anchorBtn.forEach((anchor) => {
    if (anchor.classList.contains("is-active-a")) {
      removeClass(anchor, "is-active-a");
    }
  });
};

anchorBtn.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    removeActive();
    addClass(anchor, "is-active-a");
  });
});
