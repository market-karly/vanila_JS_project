import { renderProduct, renderSaleProduct, getNode } from "../../lib/index.js";

const productContainer = getNode(".product-brief-list");

export async function rendingProductList(item) {
  try {
    const resultData = item;
    if (resultData.saleRatio === 0) {
      renderProduct(productContainer, resultData);
    } else {
      renderSaleProduct(productContainer, resultData);
    }
  } catch {
    console.log("error");
  }
}
