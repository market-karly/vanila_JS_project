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

function validateUserId(e, template) {
  const idRegExp = /^(?=.*[a-zA-Z])[a-zA-Z\d]{6,}$/;
  if (!isCorrect(idRegExp, e.target.value)) {
    template = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
  } else {
    template = "";
    userData.id = e.target.value;
  }
  return template;
}

function validateUserPW(e, template) {
  let input = e.target;
  const pwEngNumRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])[\S]*$/;
  const pwEngMarkRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
  const pwMarkNumRegExp = /^(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])(?=.*[\d])[\S]*$/;
  const pwTotalRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
  if (!input.value.length) {
    template = "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합";
  } else if (input.value.length < 10) {
    template = "최소 10자 이상 입력";
  } else if (!isCorrect(pwEngNumRegExp, input.value) &&
    !isCorrect(pwEngMarkRegExp, input.value) &&
    !isCorrect(pwMarkNumRegExp, input.value) &&
    !isCorrect(pwTotalRegExp, input.value)) {
    template = "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합";
  } else {
    template = "";
    userData.pw = input.value;
  }
  return template;
}

function checkUserPW(e, template) {
  if (e.target.value !== userData.pw) {
    template = "동일한 비밀번호를 입력";
  }
  return template;
}

function validateUserName(e, template) {
  if (e.target.value.length === 0) {
    template = "이름을 입력해주세요.";
  } else {
    template = "";
    userData.name = e.target.value;
  }
  return template;
}

function validateUserEmail(e, template) {
  const emailRegExp = /^[^@]+@[^@.]+\.+.+$/;
  if (!e.target.value) {
    template = "이메일을 입력해주세요.";

  } else if (!isCorrect(emailRegExp, e.target.value)) {
    template = "이메일 형식으로 입력해 주세요.";
  } else {
    template = "";
    userData.email = e.target.value;
  }
  return template;
}

function validateUserPhone(e, template) {
  if (!isNumber(e.target.value)) {
    return;
  } else if (e.target.value.length === 0) {
    template = "휴대폰 번호를 입력해 주세요.";
  } else {
    template = "";
    userData.phoneNum = e.target.value;
  }
  return template;
}

const functionByType = {
  template: "",
  userId: function (e) {
    this.template = validateUserId(e, this.template);
  },
  userPW: function (e) {
    this.template = validateUserPW(e, this.template);
  },
  userPWcheck: function (e) {
    this.template = checkUserPW(e, this.template);
  },
  username: function (e) {
    this.template = validateUserName(e, this.template);
  },
  userEmail: function (e) {
    this.template = validateUserEmail(e, this.template);
  },
  phone: function (e) {
    this.template = validateUserPhone(e, this.template);
  }
};

function onInputHandler(e) {
  const type = e.target.dataset.type;
  if (type) {
    e.target.nextElementSibling.innerHTML = '';
    functionByType[type](e);
    insertLast(e.target.nextElementSibling, functionByType.template);
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
    saveStorage(userData.id, userData);
    loadStorage("user1").then((obj) => console.log(obj));
    location = "./index.html";
  }
}
registerForm.addEventListener('input', onInputHandler);
registerForm.addEventListener('click', onClickHandler);
registerTermFrom.addEventListener('change', onChangeHandler);