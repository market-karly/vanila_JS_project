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
const nextBtn = getNode(".list-pagination__right");
const prevBtn = getNode(".list-pagination__left");


// 리스트 생성
for (let i = 1; i <= pageCount; i++) {
  insertBefore(
    nextBtn,
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

  // 버튼 active
  for (let nb of numberBtn) {
    nb.classList.remove("is-activeBtn");
  }
  numberBtn[index].classList.add("is-activeBtn");
}

//페이지네이션버튼
numberBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    displayData(index);
  });
});

//상품리스트 들어왔을 때 첫 화면
displayData(0);




const lastPage = pageCount-1;

nextBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  let currentPage = getNode('.is-activeBtn').innerText;
  if(currentPage <= lastPage){
    displayData(currentPage);
  }else{
    return;
  }
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentPage = getNode('.is-activeBtn').innerText;
  let prevPage = Number(currentPage-2);
  if(prevPage !== -1 ){
    displayData(prevPage);
  }else{
    return;
  }
});
