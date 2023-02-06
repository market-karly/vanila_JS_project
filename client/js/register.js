import { getNode, getNodes, isNumber, insertLast, saveStorage, loadStorage } from "../lib/index.js";

const registerForm = getNode(".register");
const registerTermFrom = getNode(".register-term-form");

const isCorrect = (regExp, value) => regExp.test(value);

const userData = {
  id: "",
  pw: "",
  name: "",
  phone: ""
};

const functionByType = {
  userId: function (e) {
    const idRegExp = /^(?=.*[a-zA-Z])[a-zA-Z\d]{6,}$/;
    e.target.nextElementSibling.innerHTML = '';
    if (!isCorrect(idRegExp, e.target.value)) {
      insertLast(e.target.nextElementSibling, "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
    } else {
      userData.id = e.target.value;
    }
  },
  userPW: function (e) {
    let input = e.target;
    const pwEngNumRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])[\S]*$/;
    const pwEngMarkRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
    const pwMarkNumRegExp = /^(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])(?=.*[\d])[\S]*$/;
    const pwTotalRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
    input.nextElementSibling.innerHTML = '';
    if (!input.value.length) {
      insertLast(input.nextElementSibling, "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합");
    } else if (input.value.length < 10) {
      insertLast(input.nextElementSibling, "최소 10자 이상 입력");
    } else if (!isCorrect(pwEngNumRegExp, input.value) &&
      !isCorrect(pwEngMarkRegExp, input.value) &&
      !isCorrect(pwMarkNumRegExp, input.value) &&
      !isCorrect(pwTotalRegExp, input.value)) {
      insertLast(input.nextElementSibling, "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합");
    } else {
      userData.pw = input.value;
    }
  },
  userPWcheck: function (e) {
    e.target.nextElementSibling.innerHTML = '';
    if (e.target.value !== userData.pw) {
      insertLast(e.target.nextElementSibling, "동일한 비밀번호를 입력");
    }
  },
  username: function (e) {
    e.target.nextElementSibling.innerHTML = '';
    if (e.target.value.length === 0) {
      insertLast(e.target.nextElementSibling, "이름을 입력해주세요.");
    } else userData.name = e.target.value;
  },
  userEmail: function (e) {
    e.target.nextElementSibling.innerHTML = '';
    const emailRegExp = /^[^@]+@[^@.]+\.+.+$/;
    if (!e.target.value) {
      insertLast(e.target.nextElementSibling, "이메일을 입력해주세요.");

    } else if (!isCorrect(emailRegExp, e.target.value)) {
      insertLast(e.target.nextElementSibling, "이메일 형식으로 입력해 주세요.");
    } else userData.email = e.target.value;
  },
  phone: function (e) {
    e.target.nextElementSibling.innerHTML = '';
    if (!isNumber(e.target.value)) {
      return;
    } else if (e.target.value.length === 0) {
      insertLast(e.target.nextElementSibling, "휴대폰 번호를 입력해 주세요.");
    } else userData.phoneNum = e.target.value;
  }
};



function onInputHandler(e) {
  const type = e.target.dataset.type;

  if (type) {
    functionByType[type](e);
  }
};

const registerTermInputAll = getNode(".register-term-item__input-all");
const registerTermInputs = getNodes('.register-term-item__input');

function onChangeHandler(e) {
  let status = true;
  if (e.target === registerTermInputAll) {
    status = e.target.checked;
    registerTermInputs.forEach(item => {
      item.checked = status;
    });
  } else if (e.target.classList.contains("register-term-item__input")) {
    registerTermInputAll.checked = e.target.checked;
  } else {
    return;
  }
  registerTermInputs.forEach(item => {
    if (item.checked === false) {
      registerTermInputAll.checked = false;
    }
  });
}

function onClickHandler(e) {
  // let target = e.target;
  if (e.target.classList.contains('register__button-submit')) {
    e.preventDefault();
    saveStorage('user1', JSON.stringify(userData));
    loadStorage("user1").then((obj) => console.log(obj));
    location = "./index.html";
  }
}
registerForm.addEventListener('input', onInputHandler);
registerForm.addEventListener('click', onClickHandler);
registerTermFrom.addEventListener('change', onChangeHandler);