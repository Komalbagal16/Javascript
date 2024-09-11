// Recursion//
//defination:
// A function that itself in its body, untill it reach to
// its  base condition
// function sayhello() {
//   console.log("Hello,Hello");
//   console.log("bye,bye");
//   sayhello();
// }
// sayhello();

// sum of n while numbers while recursion//
// function sum(n) {
//   let sum = 0;
// }
// let res = sum(0);
// console.log("sum = ", res);

// let a = 34;
// let b = 35;
// let myadd = function (a, b) {
//   return a + b;
// };

// console.log();
// let mysub = function(a,b){
//     return a - b;
// };

// (function giveMsg() {
//   let msg = "Have a nice day";
//   console.log(msg);
// })();

// (function addTion(a, b) {
//   let c = a + b;
//   console.log(c);
// })(3, 4);

function arg() {
  sum = 0;
  console.log(arguments.length);

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(arg(1, 2));
console.log(arg(5, 6, 4, 7));
console.log(arg(1, 2, 3, 4, 5, 6));
