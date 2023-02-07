export * from "././product/ProductNav.js";
import {
  renderProduct,
  renderSaleProduct,
  getNode,
  comma,
} from "../lib/index.js";

const productContainer = getNode(".product-brief-list");

async function rendingProductList() {
  try {
    
    const resultData = comma;

    /* 기본, 세일 구분 */
    resultData.forEach((data) => {
      if (data.saleRatio === 0) {
        renderProduct(productContainer, data);
      } else if (data.saleRatio !== 0) {
        renderSaleProduct(productContainer, data);
      }
    });
  } catch (err) {
    console.log("error");
  }
}

rendingProductList();
