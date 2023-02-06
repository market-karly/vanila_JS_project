import { getNode, insertLast, clearContents } from "../../lib/index.js";

// localStorage 테스트
const user1 = { password: "wer123", name: "백승연" };
const user2 = { password: "ert234", name: "김성은" };
const user3 = { password: "rty345", name: "윤새한" };
const user4 = { password: "qwe456", name: "전원근" };
const user5 = { password: "asd567", name: "전하준" };

localStorage.setItem("bsy", JSON.stringify(user1));
localStorage.setItem("kse", JSON.stringify(user2));
localStorage.setItem("ysh", JSON.stringify(user3));
localStorage.setItem("jwg", JSON.stringify(user4));
localStorage.setItem("jhj", JSON.stringify(user5));

const loginBtn = getNode(".login--form-button");
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

const onLoginHandler = (e) => {
  e.preventDefault();
  let userIdValue = getNode("#userId").value;
  let userPwValue = getNode("#userPw").value;

  if (localStorage.getItem(userIdValue)) {
    if (
      userPwValue === JSON.parse(localStorage.getItem(userIdValue)).password
    ) {
      onGoHomeHandler();
    } else {
      alertAnnouncement("아이디, 비밀번호를 확인해주세요.");
    }
  } else {
    if (userIdValue && userPwValue) {
      alertAnnouncement("아이디, 비밀번호를 확인해주세요.");
    } else {
      alertAnnouncement("아이디 또는 비밀번호를 입력해 주세요.");
    }
  }
};

loginBtn.addEventListener("click", onLoginHandler);
alertConfirm.addEventListener("click", onCloseAlertHandler);
