// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is" + nameOfPerson + "and I'm");
// }

// sayHello("nice", 20);
// sayHello("dal", 18);
// sayHello("lynn", 25);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(8, 60);

const player = {
  name: "white",
  sayHello: function (otherPersonsName) {
    console.log("hola!" + otherPersonsName + "nice to meet you");
  },
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
