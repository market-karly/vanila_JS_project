import {
  getNode,
  getNodes,
  css,
  getPriceUpdate,
  insertBefore,
} from "../../lib/index.js";
import { rendingProductList } from "./productList.js";

const resultData = getPriceUpdate();
const perPage = 9;
const products = resultData;
const productsCount = resultData.length;
const pageCount = Math.ceil(productsCount / perPage);
const nextBtn = getNode(".list-pagination__right");
const prevBtn = getNode(".list-pagination__left");

for (let i = 1; i <= pageCount; i++) {
  insertBefore(
    nextBtn,
    `<li class="list-pagination__but list-pagination__num">${i}</li>`
  );
}

const numberBtn = getNodes(".list-pagination__num");
for (let p of products) {
  rendingProductList(p);
}

export function displayData(index) {
  let productsCss = getNodes(".product-brief-wrap");
  for (let pc of productsCss) {
    css(pc, "display", "none");
  }

  let start = index * perPage;
  let end = start + perPage;

  const productsCssArray = Array.from(productsCss);
  let newProducts = productsCssArray.slice(start, end);
  for (let np of newProducts) {
    css(np, "display", "block");
  }

  for (let nb of numberBtn) {
    nb.classList.remove("is-activeBtn");
  }
  numberBtn[index].classList.add("is-activeBtn");
}

numberBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    displayData(index);
  });
});

displayData(0);

const lastPage = pageCount - 1;
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentPage = getNode(".is-activeBtn").innerText;
  if (currentPage <= lastPage) {
    displayData(currentPage);
  } else {
    return;
  }
});
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentPage = getNode(".is-activeBtn").innerText;
  let prevPage = Number(currentPage - 2);
  if (prevPage !== -1) {
    displayData(prevPage);
  } else {
    return;
  }
});
