// const age = 96;
// function calculateKorAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const KorAge = calculateKorAge(age);

// console.log(KorAge);

const calcurlate = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multi: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calcurlate.plus(10, 5);
const minusResult = calcurlate.minus(plusResult, 5);
const multiResult = calcurlate.multi(10, minusResult);
const divideResult = calcurlate.divide(multiResult, minusResult);
const powerResult = calcurlate.power(divideResult, minusResult);

console.log(plusResult); // 15
console.log(minusResult); // 10
console.log(multiResult); // 100
console.log(divideResult); // 10
console.log(powerResult); // 10000000000

// const calcurlate = {
//   plus: function (a, b) {
//     return a + b;
//   },
// };

// //function을 호출하는 code
// //(5, 5)의 value를 funvtion에 전달 후
// //const plusResult = 10(return 값)
// const plusResult = calcurlate.plus(5, 5);

// console.log(plusResult);//console 에서 10 출력
