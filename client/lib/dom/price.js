import { parse } from "../utils/index.js";

let response = await parse.get("http://localhost:3000/products");
let productData = response.data;


export const comma = productData.map((item) => {
  return {
    ...item,
    price: item.price.toLocaleString("ko-KR"),
    salePrice: item.price.toLocaleString("ko-KR"),
  };
});