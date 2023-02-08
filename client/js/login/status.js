import { getNode, insertLast, clearContents, addClass, removeClass } from "../../lib/index.js";

const loginStatus = getNode(".is-login");
const registerBtn = getNode('.header--member-register');
const registerText = getNode('.header--member-register a');

const onLogoutHandler = () => {
  window.localStorage.clear();
  clearContents(loginStatus);
  insertLast(loginStatus, "로그인");
  clearContents(registerText);
  insertLast(registerText, "회원가입");
};

if (localStorage.getItem("user")) {
  clearContents(loginStatus);
  insertLast(loginStatus, "로그아웃");
  addClass(registerBtn,'is-display-none');

} else {
  clearContents(loginStatus);
  insertLast(loginStatus, "로그인");
  clearContents(registerText);
  insertLast(registerText, "회원가입");
  removeClass(registerBtn,'is-display-none');
}

loginStatus.addEventListener("click", onLogoutHandler);
