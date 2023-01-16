const toDoForm = document.getElementById("todo-form"); // id todo-form element 변수화 *(변수 toDoFrom)
const toDoInput = toDoForm.querySelector("input"); // 변수toDoForm 내에 input element 변수화 *(toDoInput)
const toDoList = document.getElementById("todo-list"); // id todo-list element 변수화 *(변수  toDoList)

const TODOS_KEY = "todos";

let toDos = []; // toDos array *(변수 toDos)

function saveToDo() {
  // handleToDoSubmit 함수 마지막 줄로 실행
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 key:todos, value:변수toDos array에 저장된 value를 string하여 text형태 저장
}

function deleteToDo(event) {
  // click event로 delete함수 실행
  const li = event.target.parentElement; // event로 click된 button의 부모 element 변수화 *(변수 li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove(); // 변수li 삭제
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // html 내에 li element 생성 *(변수 li);
  li.id = newTodo.id;
  const span = document.createElement("span"); // html 내에 span element 생성 *(변수 span);
  span.innerText = newTodo.text; // 변수span 내부 text는 handleToDoSubmit 함수로 받은 저장된 입력값;
  const button = document.createElement("button"); // html 내에 button 생성 *(변수 button)
  button.innerText = "❌"; // button 내부 text X이모지로 변경
  button.addEventListener("click", deleteToDo); // click 시 deleteToDo함수 실행되는 event 생성
  li.appendChild(span); // 변수li 내에 변수span child 추가
  li.appendChild(button); // 변수li 내에 변수button child 추가
  toDoList.appendChild(li); // 변수toDoList 내에 변수li child 추가
}

function handleToDoSubmit(event) {
  // event 발생을 argument로 함수 실행
  event.preventDefault(); // 이벤트 발생 시 기본동작 통제;
  const newTodo = toDoInput.value; // 변수toDoInput으로 입력되는 value 저장(변수화) *(변수 newToDo)
  toDoInput.value = ""; // 입력칸 빈칸으로 만듬
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 변수newToDo의 입력값을 변수toDos array에 저장
  paintToDo(newTodoObj); // 입력값으로 paintToDo 함수 실행
  saveToDo(); // saveToDo 함수 실행
}
toDoForm.addEventListener("submit", handleToDoSubmit); // submit 시 hanbleToDoSubmit 함수 실행되는 이벤트 생성

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 변수savedToDos가 있으면
  const parsedToDos = JSON.parse(savedToDos); //string으로 array에 저장된 변수savedToDos를 JavaScript에 사용 가능한 object로 변경 *(변수 parseToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 변수parsedToDos의 array item에 forEach(각각 function을 실행)
}
