import { getNode, isNumber, insertLast } from "../lib/index.js";

const registerForm = getNode(".register-form");

const isCorrect = (regExp, value) => regExp.test(value);

const functionByType = {
  userId: function (e) {
    const idRegExp = /^[A-Za-z\d]{6,16}$/;
    e.target.nextElementSibling.innerHTML = '';
    if (!isCorrect(idRegExp, e.target.value) || isNumber(Number(e.target.value))) {
      insertLast(e.target.nextElementSibling, "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
    }
  },
  userPW: function (e) {
    let input = e.target;
    input.nextElementSibling.innerHTML = '';
    if (input.value.length < 10) {
      insertLast(e.target.nextElementSibling, "최소 10자 이상 입력");
    }
  },
  userPWcheck: function (e) {
    if (e.target.value !== e.target.value) {
      console.log('동일한 비밀번호를 입력');
    }
  },
  name: function (e) {
    if (e.target.value.length === 0) {
      console.log('이름을 입력해주세요.');
    }
  },
  phone: function (e) {
    if (!isNumber(e.target.value) || e.target.value.length === 0) {
      console.log('휴대폰 번호를 입력해 주세요');
    }
  }
};

function onInputHandler(e) {
  const type = e.target.dataset.type;

  if (type) {
    functionByType[type](e);
  }
}

registerForm.addEventListener('input', onInputHandler);