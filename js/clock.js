const clock = document.querySelector("h2#clock"); // id clock을 가진 h2 element 변수화 *(변수clock)

function getClock() {
  const date = new Date(); //현재 날짜 변수화 *(변수 date)
  const hours = String(date.getHours()).padStart(2, "0"); // 현재 날짜에서 시간을 추출하여 String하고 한자리 수 일경우 숫자앞에 0을 추가하여 두 자리수로 만든다 *(변수hours)
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 현재 날짜에서 분을 추출하여 String하고 한자리 수 일경우 숫자앞에 0을 추가하여 두 자리수로 만든다 *(변수minutes)
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 현재 날짜에서 초를 추출하여 String하고 한자리 수 일경우 숫자앞에 0을 추가하여 두 자리수로 만든다 *(변수seconds)
  // String:숫자를 문자열로 변환, padstart:string에 쓸수 있는 function
  clock.innerText = `${hours}:${minutes}:${seconds}`; // 변수clock의 내부 text를 변수hours:변수minutes:변수seconds로 변경
}

getClock(); // 함수getClock 출력
setInterval(getClock, 1000); // 함수getClock 1초마다 출력
