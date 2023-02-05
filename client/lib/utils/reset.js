// import { getNodes } from "../dom/index.js";
// import { typeError } from "../error/index.js";

export function resetElements(node) {
  // if (typeof node === "string") node = getNode(node);
  // if (node.nodeType !== document.ELEMENT_NODE) {
  //   typeError("resetElements 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  // }

  let productList = document.querySelectorAll(node);
  productList.forEach((el) => el.remove());
  // document.getElementsByClassName(".product-list li").removeChild(node);
}
