const loginForm = document.querySelector("#login-form"); // classname login-form이 포함된 element *(변수 loginForm)
const loginInput = document.querySelector("#login-form input"); // classname login-form에 있는 input element *(변수 loginInput)
const greeting = document.querySelector("#greeting"); // classname greeting 이 포함된 element *(변수 greeting)

// 잦은 입력으로 인한 오류 방지를 위한 변수화(const)
const HIDDEN_CLASSNAME = "hidden"; // *(변수 HIDDEN_CLASSNAME)
const USERNAME_KEY = "username"; // *(변수 USERNAME_KEY)

function onLoginSubmit(event) {
  // 4. event argument 감지, event 발생 시 onLoginSubmit 함수 실행(submit event)
  event.preventDefault(); // 5. submit의 기본동작 통제(submit의 기본 동작 '새로고침')
  loginForm.classList.add(HIDDEN_CLASSNAME); // 6. classList 변수loginForm에 class hidden 추가
  const username = loginInput.value; // 7. input에 입력된 text value 변수화 *(변수 username)
  localStorage.setItem(USERNAME_KEY, username); // 8. loclastorage에  (key, value) 저장
  paintGreetings(username); // 9. 입력된 username, argument로 함수X 실행
}

function paintGreetings(username) {
  // 함수X, 입력된 username, argument로 실행
  greeting.innerText = `Hello ${username} Have a nice day`; // X-1. 변수greeting 내부 text, equal 우측 값으로 변경
  greeting.classList.remove(HIDDEN_CLASSNAME); // X-2. classList 변수greeting 에 있는 변수HIDDEN_CLASSNAME 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 1. 저장된 key(username)가 있는지 확인 || 저장된 key를 가져온다 *(변수 savedUsername)

if (savedUsername === null) {
  // 2-A. 저장된 key(username) 없으면 if(3) 실행, 저장된 key(username) 있으면 else(2-B-end) 실행
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 3-1. 변수loginForm에 변수HIDDEN_CLASSNAME 제거, 처음 시작화면에서는 실행되지 않으니 생략
  loginForm.addEventListener("submit", onLoginSubmit); // 3-2. submit event 발생 시 onLoginSubmit 함수 실행
} else {
  paintGreetings(savedUsername); // 2-B-end. 저장된 key(username)를 가져오는 변수savedUsername, argument로 함수X 실행
}
