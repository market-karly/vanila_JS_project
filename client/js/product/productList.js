import { getNode, renderProduct, renderSaleProduct } from "../../lib/index.js";

export const productContainer = getNode(".product-brief-list");

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

rendingProductList();
