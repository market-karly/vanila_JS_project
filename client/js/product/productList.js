import {
  renderProduct,
  renderSaleProduct,
  getNode,
  parse,
} from "../lib/index.js";

const productContainer = getNode(".product-list");

async function rendingProductList() {
  try {
    let response = await parse.get("http://localhost:3000/products");
    let productData = response.data;
    console.log(productData);

    productData.forEach((data) => {
      if (data.saleRatio === 0) {
        renderProduct(productContainer, data);
      } else if (data.saleRatio !== 0) {
        console.log(data.saleRatio);
        renderSaleProduct(productContainer, data);
      }
    });
  } catch (err) {
    console.log("error");
  }
}

rendingProductList();
