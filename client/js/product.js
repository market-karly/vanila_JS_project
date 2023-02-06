export * from "././product/ProductNav.js";
import {
  getNode,
  getNodes,
  css,
  renderProduct,
  renderSaleProduct,
  getPriceUpdate,
  insertBefore,
} from "../lib/index.js";


const productContainer = getNode(".product-brief-list");

async function rendingProductList(item) {
  try{
    const resultData = item;
  if (resultData.saleRatio === 0) {
    renderProduct(productContainer, resultData);
  } else {
    renderSaleProduct(productContainer, resultData);
  }
  }catch{
    console.log('error');
  }
  
}

/* 페이지 */
const resultData = getPriceUpdate();

/* 페이지네이션 */
//페이지 당 출력 할 제품 개수
const perPage = 9;
// 제품 데이터
const products = resultData;
// 제품 수
const productsCount = resultData.length;
// 필요한 페이지 개수
const pageCount = Math.ceil(productsCount / perPage);
// 페이지 담을 공간
const numbers = getNode(".list-pagination__right");

// 리스트 생성
for (let i = 1; i <= pageCount; i++) {
  insertBefore(
    numbers,
    `<li class="list-pagination__but list-pagination__num">${i}</li>`
  );
}

//페이지 버튼
const numberBtn = getNodes(".list-pagination__num");
  //모든 상품 렌더링
for (let p of products) {
  rendingProductList(p);
}
//데이터출력
function displayData(index) {


  let productsCss = getNodes(".product-brief-wrap");

  for (let pc of productsCss) {
    css(pc, "display", "none");
  }

  //페이지별
  let start = index * perPage;
  let end = start + perPage;

  const productsCssArray = Array.from(productsCss);

  let newProducts = productsCssArray.slice(start, end);
  for (let np of newProducts) {
    css(np, "display", "block");
  }
}

//페이지네이션버튼
numberBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    for (let nb of numberBtn) {
      nb.classList.remove("is-activeBtn");
    }
    e.target.classList.add("is-activeBtn");

    // 데이터 출력함수
    displayData(index);
  });
});
displayData(0);

