import { getNode, insertLast, clearContents } from "../../lib/index.js";

const loginStatus = getNode(".is-login");

const onLogoutHandler = () => {
  console.log("로그아웃되었습니다.");
  window.localStorage.clear();
  clearContents(loginStatus);
  insertLast(loginStatus, "로그인");
};

if (localStorage.getItem("user")) {
  clearContents(loginStatus);
  insertLast(loginStatus, "로그아웃");
} else {
  clearContents(loginStatus);
  insertLast(loginStatus, "로그인");
}

loginStatus.addEventListener("click", onLogoutHandler);
