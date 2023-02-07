
import { insertLast } from "./insert.js";


const createDetail = ({
  name = "",
  description = "",
  price = "",
  image = {
    view: "",
    banner: "",
    info: "",
    alt: "",
  },
} = {}) => {
  return /* html */ `
  <div class="detail--inner">
  <div class="detail--image">
    <img src="${image.view}" alt="상세 사진" />
  </div>
  <div class="detail--wrapper">
    <h2 class="a11y-hidden">상품 상세정보</h2>
    <div class="detail--product">
      <p class="detail--delivery">샛별배송</p>
      <p class="detail--product-name">${name}</p>
      <p class="detail--product-description">
        ${description}
      </p>
      <p class="detail--product-price"><b>${price}</b>원</p>
      <p class="detail--event">로그인 후, 적립 혜택이 제공됩니다.</p>
    </div>
    <table class="detail--table">
      <tr>
        <td class="detail--table-title">배송</td>
        <td class="detail--table-explain">
          <span>샛별배송</span>
          <span class="detail--table-explain-plus"
            >23시 전 주문시 내일 아침 7시 전 도착</span
          >
          <span class="detail--table-explain-plus"
            >(대구 부산 울산 샛별배송 운영시간 별도 확인)</span
          >
        </td>
      </tr>
      <tr>
        <td class="detail--table-title">판매자</td>
        <td class="detail--table-explain">칼리</td>
      </tr>
      <tr>
        <td class="detail--table-title">포장타입</td>
        <td class="detail--table-explain">
          <span>상온 (종이포장)</span>
          <span class="detail--table-explain-plus"
            >택배배송은 에코 포장이 스티로폼으로 대체됩니다.</span
          >
        </td>
      </tr>
      <tr>
        <td class="detail--table-title">판매단위</td>
        <td class="detail--table-explain">1봉</td>
      </tr>
      <tr>
        <td class="detail--table-title">중량/용량</td>
        <td class="detail--table-explain">123g*4봉</td>
      </tr>
      <tr>
        <td class="detail--table-title">원산지</td>
        <td class="detail--table-explain">상세페이지 별도표기</td>
      </tr>
      <tr>
        <td class="detail--table-title">알레르기 정보</td>
        <td class="detail--table-explain">
          <span class="detail--table-explain-allergy"
            >-대두, 밀, 쇠고기 함유</span
          >
          <span class="detail--table-explain-allergy"
            >-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아,
            토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복,
            홍합 포함)를 사용한 제품과 같은 제조시설에서 제조</span
          >
        </td>
      </tr>
      <tr>
        <td class="detail--table-title">상품선택</td>
        <td class="detail--table-explain detail--table-purchase">
          <span class="detail--purchase-title"
            >${name}</span
          >
          <div class="detail--purchase-button">
            <button class="detail--purchase-minus">-</button>
            <span class="detail--purchase-count">1</span>
            <button class="detail--purchase-plus">+</button>
          </div>
          <span class="detail--purchase-total">${price}원</span>
        </td>
      </tr>
    </table>
    <div class="detail--total">
      <p>총 상품금액: <b>${price}</b>원</p>
      <p>로그인 후, 적립 혜택 제공</p>
    </div>
    <div class="detail--buttons">
      <button class="detail--buttons-heart detail--buttons-icons" type="button">
        <img src="./assets/icons/Icon/Heart.svg" alt="찜 버튼" />
      </button>
      <button class="detail--buttons-bell detail--buttons-icons" type="button">
        <img src="./assets/icons/Icon/Bell.svg" alt="알림 버튼" />
      </button>
      <button class="detail--buttons-cart" type="submit">장바구니 담기</button>
    </div>
  </div>
</div>`;
};

export function renderDetail(target, data) {
  insertLast(target, createDetail(data));
}