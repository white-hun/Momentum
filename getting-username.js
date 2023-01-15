const loginForm = document.querySelector("#login-form"); // classname login-form이 포함된 element
const loginInput = document.querySelector("#login-form input"); // classname login-form에 있는 input element
const greeting = document.querySelector("#greeting"); // classname greeting 이 포함된 element

const HIDDEN_CLASSNAME = "hidden"; // 잦은 입력으로 인한 오류를 막기 위한 변수화(const)

function onLoginSubmit(event) {
  // 2. event argument 감지, event 발생시 함수 실행
  event.preventDefault(); // 3. submit의 기본동작 통제(submit의 기본 동작 '새로고침')
  loginForm.classList.add(HIDDEN_CLASSNAME); // 4. classlist loginForm(const로 변수화)에 변수화된 class hidden 추가
  const username = loginInput.value; // 5. input에 입력된 text value 변수화
  //   greeting.innerText = "Hello, " + username + " Have a nice day";
  greeting.innerText = `Hello ${username} Have a nice day`; // 6. 변수화된 greeting 내부 text, equal 우측 값으로 변경
  greeting.classList.remove(HIDDEN_CLASSNAME); // 7. classlist greeting 에 있는 변수화된 class hidden 제거
}

loginForm.addEventListener("submit", onLoginSubmit); // 1. submit event 발생시 onLoginSubmit 함수 실행
