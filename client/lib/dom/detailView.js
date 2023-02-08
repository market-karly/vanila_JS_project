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
</div>
<div class="detail-inner-ver2">
        <div class="detail-menu-anchor">
          <a href="#product-detail" class="is-active-a">상품설명</a>
          <a href="#product-info">상세정보</a>
          <a href="#reviews">후기<span>(1,000)</span></a>
          <a href="#inquiry">문의</a>
        </div>
        <div class="detail-information">
          <h3 id="product-detail" class="a11y-hidden">상품 설명</h3>
          <figure>
            <img
              src=${image.banner}
              alt="상세정보 이미지"
              width="1050"
            />
            <figcaption class="detail-information-fig">
              <p class="detail-information-mini-title">
                ${description}
              </p>
              <p class="detail-information-title">${name}</p>
              <p class="detail-information-desc">
                쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요.
                풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든
                탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이
                좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한
                비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한
                가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을
                올려 드셔도 좋아요.
              </p>
            </figcaption>
          </figure>
          <h3 id="product-info" class="a11y-hidden">상세정보</h3>
          <img
            src=${image.info}
            alt="상세정보 이미지"
          />
          <figure>
            <figcaption class="detail-information-karly">WHY KARLY</figcaption>
            <img
              src="./assets/product/whykarly.svg"
              alt="컬리 철칙"
              width="1050"
            />
          </figure>
        </div>
        <div class="detail-reviews">
          <h3 id="reviews">상품후기</h3>
          <p class="detail-reviews-announcement-title">
            글후기 50원 적립금 혜택이 있어요.
          </p>
          <ul class="detail-reviews-announcement">
            <li>
              퍼플, 더퍼플은 2배적립 (100원) / 주간 베스트 후기로 선정 시
              5,000원 추가 적립
            </li>
            <li>후기 작성은 배송완료일로부터 30일 이내에 가능합니다.</li>
            <li>
              작성한 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일
              소요)
            </li>
          </ul>
          <button type="button" class="detail-reviews-add-button">
            후기 작성하기
          </button>
          <div class="detail-reviews-gather">
            <div class="detail-reviews-gather-sort">
              <p>총 2</p>
              <button type="button" class="is-active-btn">추천순</button>
              <button type="button">최근 등록순</button>
            </div>
            <div class="detail-reviews-gather-board">
              <ul class="detail-reviews-gather-board-notice">
                <li><a href="#">금주의 베스트 후기 안내</a></li>
                <li><a href="#">상품 후기 적립금 정책 안내</a></li>
              </ul>
              <ul class="detail-reviews-gather-board-post">
                <li>
                  <div class="detail-reviews-user">
                    <p class="detail-user-best-badge">베스트</p>
                    <p class="detail-user-level-badge">퍼플</p>
                    <p class="detail-user-name">김*진</p>
                  </div>
                  <div class="detail-reviews-review">
                    <p class="detail-reviews-product-name">
                      ${name}
                    </p>
                    <p class="detail-reviews-text">
                      너무 맛있어여~ 강추강추!!
                    </p>
                    <p class="detail-reviews-date">2022.11.10</p>
                  </div>
                </li>
                <li>
                  <div class="detail-reviews-user">
                    <p class="detail-user-best-badge">베스트</p>
                    <p class="detail-user-level-badge">퍼플</p>
                    <p class="detail-user-name">김*식</p>
                  </div>
                  <div class="detail-reviews-review">
                    <p class="detail-reviews-product-name">
                    ${name}
                    </p>
                    <p class="detail-reviews-text">
                      또 주문할 것 같습니다. 너무 맛있어요 내스타일이야~!
                    </p>
                    <p class="detail-reviews-date">2022.11.10</p>
                  </div>
                </li>
                <li>
                  <div class="detail-reviews-user">
                    <p class="detail-user-best-badge">베스트</p>
                    <p class="detail-user-level-badge">퍼플</p>
                    <p class="detail-user-name">김*범</p>
                  </div>
                  <div class="detail-reviews-review">
                    <p class="detail-reviews-product-name">
                    ${name}
                    </p>
                    <p class="detail-reviews-text">
                      자꾸 생각나는 맛이에요. 매일 먹고있어요!
                    </p>
                    <p class="detail-reviews-date">2022.11.10</p>
                  </div>
                </li>
              </ul>
              <div class="detail-reviews-page-buttons">
                <button type="button">
                  <img
                    src="./assets/icons/Icon/leftArrow.svg"
                    alt="왼쪽 페이지 이동"
                  />
                </button>
                <button type="button" class="is-active-page-btn">
                  <img
                    src="./assets/icons/Icon/rightArrow.svg"
                    alt="오른쪽 페이지 이동"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-inquiry">
          <h3 id="inquiry">상품문의</h3>
          <ul class="detail-inquiry-announcement">
            <li>
              상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
              글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
            </li>
            <li>
              배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
              1:1 문의에 남겨주세요.
            </li>
          </ul>
          <button type="button" class="detail-inquiry-add-button">
            문의하기
          </button>
          <div class="detail-inquiry-gather">
            <table class="detail-inquiry-table">
              <caption class="a11y-hidden">
                상품문의내역
              </caption>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>답변상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="detail-inquiry-post-title is-notice">
                    판매(일시)중단 제품 안내 (22.11.10 업데이트)
                  </td>
                  <td>칼리</td>
                  <td>2017.02.01</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title">팩이 터져서 왔어요</td>
                  <td>김*식</td>
                  <td>2022.11.11</td>
                  <td>답변대기</td>
                </tr>
                <tr class="detail-inquiry-post-summary">
                  <td colspan="4">
                    <div class="detail-inquiry-post-summary-q">
                      <p class="question-badge">Q</p>
                      <p class="detail-inquiry-post-summary-q-text">
                        스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요
                        환불 요청합니다.
                      </p>
                    </div>
                    <div class="detail-inquiry-post-summary-a">
                      <p class="answer-badge">A</p>
                      <p class="detail-inquiry-post-summary-a-text">
                        안녕하세요. 칼리입니다. 믿고 찾아주신 상품에 불편을 드려
                        정말 죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이
                        어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변
                        드리지 못하여 대단히 죄송합니다. 다행히도 고객님의
                        불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점
                        확인하였습니다. 불편을 드려 정말 죄송할 따름이며,
                        고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기
                        위해 최선을 다하는 칼리가 되겠습니다. 칼리 드림.
                      </p>
                    </div>
                    <p class="detail-inquiry-post-date">2022.11.11</p>
                  </td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title is-secret">
                    비밀글입니다.
                    <img
                      src="./assets/icons/Icon/lock.svg"
                      alt="비밀글"
                      class="detail-inquiry-secret-lock"
                    />
                  </td>
                  <td>김*범</td>
                  <td>2022.10.09</td>
                  <td>답변대기</td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title is-secret">
                    비밀글입니다.
                    <img
                      src="./assets/icons/Icon/lock.svg"
                      alt="비밀글"
                      class="detail-inquiry-secret-lock"
                    />
                  </td>
                  <td>김*식</td>
                  <td>2022.09.13</td>
                  <td class="is-complete">답변완료</td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title is-secret">
                    비밀글입니다.
                    <img
                      src="./assets/icons/Icon/lock.svg"
                      alt="비밀글"
                      class="detail-inquiry-secret-lock"
                    />
                  </td>
                  <td>심*범</td>
                  <td>2022.08.30</td>
                  <td class="is-complete">답변완료</td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title is-secret">
                    비밀글입니다.
                    <img
                      src="./assets/icons/Icon/lock.svg"
                      alt="비밀글"
                      class="detail-inquiry-secret-lock"
                    />
                  </td>
                  <td>야*</td>
                  <td>2022.08.12</td>
                  <td class="is-complete">답변완료</td>
                </tr>
                <tr>
                  <td class="detail-inquiry-post-title is-secret">
                    비밀글입니다.
                    <img
                      src="./assets/icons/Icon/lock.svg"
                      alt="비밀글"
                      class="detail-inquiry-secret-lock"
                    />
                  </td>
                  <td>김**사</td>
                  <td>2022.07.23</td>
                  <td class="is-complete">답변완료</td>
                </tr>
              </tbody>
            </table>
            <div class="detail-inquiry-page-buttons">
              <button type="button">
                <img
                  src="./assets/icons/Icon/leftArrow.svg"
                  alt="왼쪽 페이지 이동"
                />
              </button>
              <button type="button" class="is-active-page-btn">
                <img
                  src="./assets/icons/Icon/rightArrow.svg"
                  alt="오른쪽 페이지 이동"
                />
              </button>
            </div>
          </div>
        </div>
      </div>`;
};

export function renderDetail(target, data) {
  insertLast(target, createDetail(data));
}
