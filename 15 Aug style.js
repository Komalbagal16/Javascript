// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let n = Number(prompt("enter your number:"));
// console.log(n);
// for (let i = 1; i <= 10; i++){
//   console.log(`${n} * ${i} = ${n * i}`);
// }

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

//i/p: 5
//o/p: 120

// let n = Number(prompt("Enter Your Number"))
// console.log(n);
// let fact=1;
// for(let i = 1; i <= n; i++){
//     fact =fact *i;
// }
// console.log(`Factoial of ${n} is ${fact}`);
// console.log(`${n}! = ${fact}`);

// o/p:
// 3
//Factoial of 3 is 6
//3! = 6.

//i/p: 5
//o/p: 1,8,27,64,125
// let n = Number(prompt("Enter Your Number"))
// console.log(n);
// for(let i =1; i <= n; i++){
// console.log(`${i}^3 = ${i*i*i}`);
//       console.log(`${i*i*i}`);
// }

// 5
// style.js:46 1
// style.js:46 8
// style.js:46 27
// style.js:46 64
// style.js:46 125

let x = Number(prompt("Enter the  1 Number:"));
let y = Number(prompt("Enter the  2 number:"));
let gcd = 1;
for (let i = 2; i <= x && i <= y; i++) {
  if (x % i == 0 && y % i == 0) {
    gcd = i;
  }
}
console.log(`gcd of ${x} and ${y} is ${gcd}`);
if (gcd === 1) {
  // 1 is universal devisor
  console.log("gcd of ${x} and ${y} is co-prime number");
}

//o/p:
// gcd of 234 and 67 is 1
// 66 gcd of $x and y is co-prime number
