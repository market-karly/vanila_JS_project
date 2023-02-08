import { getNode, insertLast, clearContents, parse } from "../../lib/index.js";

const loginBtn = getNode(".login--form-button");
const registerBtn = getNode(".login--mv-signUp");
const alertWindow = getNode(".alert");
const alertBackground = getNode(".alert--background");
const alertWarning = getNode(".alert--warning");
const alertConfirm = getNode(".alert--button");

const alertAnnouncement = (message) => {
  clearContents(alertWarning);
  alertWindow.style.opacity = "1";
  alertWindow.style.pointerEvents = "auto";
  alertBackground.style.opacity = "1";
  alertBackground.style.pointerEvents = "auto";
  insertLast(alertWarning, message);
};
const onCloseAlertHandler = () => {
  alertWindow.style.opacity = "0";
  alertWindow.style.pointerEvents = "none";
  alertBackground.style.opacity = "0";
  alertBackground.style.pointerEvents = "none";
};

const onGoHomeHandler = () => {
  window.location.href = "http://localhost:5500";
};

const onGoRegisterHandler = () => {
  window.location.href = "http://localhost:5500/register.html";
};

const checkingUser = async (userId, userPw) => {
  try {
    let response = await parse.get("http://localhost:3000/users");
    let userData = response.data;
    let currentUser = userData.find((user) => user.id === userId);
    if (currentUser?.password === userPw) {
      window.localStorage.clear();
      localStorage.setItem("user", JSON.stringify(currentUser));
      console.log("로그인 완료!");
      onGoHomeHandler();
    } else {
      alertAnnouncement("아이디, 비밀번호를 확인해주세요.");
    }
  } catch (err) {
    console.log(err);
  }
};

const onLoginHandler = (e) => {
  e.preventDefault();
  let userIdValue = getNode("#userId").value;
  let userPwValue = getNode("#userPw").value;

  if (userIdValue && userPwValue) {
    checkingUser(userIdValue, userPwValue);
  } else {
    alertAnnouncement("아이디 또는 비밀번호를 입력해 주세요.");
  }
};

loginBtn.addEventListener("click", onLoginHandler);
alertConfirm.addEventListener("click", onCloseAlertHandler);
registerBtn.addEventListener("click", onGoRegisterHandler);
