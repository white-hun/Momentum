const toDoForm = document.getElementById("todo-form"); // id todo-form element 변수화 *(변수 toDoFrom)
const toDoInput = toDoForm.querySelector("input"); // 변수toDoForm 내에 input element 변수화 *(toDoInput)
const toDoList = document.getElementById("todo-list"); // id todo-list element 변수화 *(변수  toDoList)

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li"); // html 내에 li element 생성 *(변수 li)
  const span = document.createElement("span"); // html 내에 span element 생성 *(변수 span);
  span.innerText = newToDo; // 변수span 내부 text는 handleToDoSubmit 함수로 받은 저장된 입력값;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li 내에 변수span child 추가;
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // event 발생을 argument로 함수 실행
  event.preventDefault(); // 이벤트 발생 시 기본동작 통제;
  const newToDo = toDoInput.value; // 변수toDoInput으로 입력되는 value 저장(변수화) *(변수 newToDo)
  toDoInput.value = ""; // 입력칸 빈칸으로 만듬
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit); // submit 시 hanbleToDoSubmit 함수 실행되는 이벤트 생성
