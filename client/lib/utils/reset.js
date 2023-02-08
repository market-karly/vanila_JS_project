export function resetElements(node) {
  let productList = document.querySelectorAll(node);
  productList.forEach((el) => el.remove());
}
