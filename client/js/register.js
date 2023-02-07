import { getNode, getNodes, isNumber, insertLast, parse } from "../lib/index.js";

const registerForm = getNode(".register");
const registerTermFrom = getNode(".register-term-form");
const registerTermInputAll = getNode(".register-term-item__input-all");
const registerTermInputs = getNodes('.register-term-item__input');
const registerErrorMessage = getNode('.register-validation__message-error');
const registerErrorBox = getNode('.register-validation__wrapper-error');

const isCorrect = (regExp, value) => regExp.test(value);

const userData = {
  id: "",
  pw: "",
  name: "",
  phone: ""
};

function validateUserId(value, template) {
  const idRegExp = /^(?=.*[a-zA-Z])[a-zA-Z\d]{6,}$/;
  if (!isCorrect(idRegExp, value)) {
    template = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
  } else {
    template = "";
  }
  userData.id = value;
  return template;
}

function validateUserPW(value, template) {
  const pwEngNumRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])[\S]*$/;
  const pwEngMarkRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
  const pwMarkNumRegExp = /^(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])(?=.*[\d])[\S]*$/;
  const pwTotalRegExp = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*(),.<>/?;:'"[\]\-_])[\S]*$/;
  if (!value.length) {
    template = "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합";
  } else if (value.length < 10) {
    template = "최소 10자 이상 입력";
  } else if (!isCorrect(pwEngNumRegExp, value) &&
    !isCorrect(pwEngMarkRegExp, value) &&
    !isCorrect(pwMarkNumRegExp, value) &&
    !isCorrect(pwTotalRegExp, value)) {
    template = "영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합";
  } else {
    template = "";
  }
  userData.pw = value;
  return template;
}

function checkUserPW(value, template) {
  if (value !== userData.pw) {
    template = "동일한 비밀번호를 입력";
  } else {
    template = "";
  }
  return template;
}

function validateUserName(value, template) {
  if (value.length === 0) {
    template = "이름을 입력해주세요.";
  } else {
    template = "";
  }
  userData.name = value;
  return template;
}

function validateUserEmail(value, template) {
  const emailRegExp = /^[^@]+@[^@.]+\.+.+$/;
  if (!value) {
    template = "이메일을 입력해주세요.";
  } else if (!isCorrect(emailRegExp, value)) {
    template = "이메일 형식으로 입력해 주세요.";
  } else {
    template = "";
  }
  userData.email = value;
  return template;
}

function validateUserPhone(value, template) {
  if (!isNumber(Number(value))) {
    value = value.replace(/\D/g, '');
  } else if (value.length === 0) {
    template = "휴대폰 번호를 입력해 주세요.";
  } else {
    template = "";
  }
  userData.phone = value;
  return template;
}

const functionByType = {
  template: "",
  userId: function (value) {
    this.template = validateUserId(value, this.template);
  },
  userPW: function (value) {
    this.template = validateUserPW(value, this.template);
  },
  userPWcheck: function (value) {
    this.template = checkUserPW(value, this.template);
  },
  username: function (value) {
    this.template = validateUserName(value, this.template);
  },
  userEmail: function (value) {
    this.template = validateUserEmail(value, this.template);
  },
  phone: function (value) {
    this.template = validateUserPhone(value, this.template);
  }
};

function onInputHandler(e) {
  const type = e.target.dataset.type;
  if (type) {
    e.target.nextElementSibling.innerHTML = '';
    functionByType[type](e.target.value);
    insertLast(e.target.nextElementSibling, functionByType.template);
  }
};

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

function getRandomNumber(digit) {
  return Math.round(Math.random() * digit);
}

function generateUid(prefix = "lab11", digit = 10) {
  const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let template = `${prefix}-`;
  for (let i = 0; i < digit; i++) {
    template += characters[getRandomNumber(characters.length - 1)];
  }
  return template;
}

function createUserData(id = '', pw = '', name = '', email = '', phone = '') {
  let user = {};
  user.id = id;
  user.pw = pw;
  user.name = name;
  user.email = email;
  user.phone = phone;
  user.uid = generateUid();

  return user;
}

async function onClickHandler(e) {
  let target = e.target;
  let template = "";
  let registeredUserData = [];
  if (target.classList.contains('register__button-submit')) {
    e.preventDefault();
    const { id, pw, name, email, phone } = userData;
    let user = createUserData(id, pw, name, email, phone);
    parse.post('http://localhost:3000/users', user).then((status) => {
      if (status > 400) {
        alert('회원가입에 실패하였습니다.');
      }
    });
    location = "./index.html";
  } else if (target.classList.contains('register-item__button-validation')) {
    target = target.parentElement;
    let response = await parse.get("http://localhost:3000/users");
    registeredUserData = response.data;
  } else if (target.classList.contains('register-validation__button-error')) {
    registerErrorBox.style.display = "none";
    document.body.style.overflow = 'visible';
  } else {
    return;
  }

  if (target.classList.contains('register-item__check-id')) {
    template = validateUserId(userData.id, template);
    let userId = registeredUserData.filter((user) => user.id === userData.id);
    if (userId) template = "중복된 아이디 입니다.";
    if (!template) template = "사용가능한 아이디 입니다.";
  } else if (target.classList.contains('register-item__check-email')) {
    template = validateUserEmail(userData.email, template);
    let userEmail = registeredUserData.filter((user) => user.email === userData.email);
    if (userEmail) template = "중복된 이메일 입니다.";
    if (!template) template = "사용가능한 이메일 입니다.";
  }

  if (template) {
    registerErrorMessage.innerHTML = '';
    insertLast(registerErrorMessage, template);
    registerErrorBox.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
registerForm.addEventListener('input', onInputHandler);
registerForm.addEventListener('click', onClickHandler);
registerTermFrom.addEventListener('change', onChangeHandler);