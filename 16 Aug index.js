//without prameter

// display();
// function display() {
//     console.log("hello")
// }

// hello

// function Double(a){
//     return 2* a;
// }
// console.log(Double(25));

// 50

//1..... No para no return//

// function gcd() {
//   let x = Number(prompt("Enter the  1 Number:"));
//   let y = Number(prompt("Enter the  2 number:"));
//   let gcd = 1;
//   for (let i = 2; i <= x && i <= y; i++) {
//     if (x % i == 0 && y % i == 0) {
//       gcd = i;
//     }
//   }
//   console.log(`gcd of ${x} and ${y} is ${gcd}`);
//   if (gcd === 1) {
//     // 1 is universal devisor
//     console.log("gcd of ${x} and ${y} is co-prime number");
//   }

// gcd();

// gcd of 57 and 97 is 1
// index.js:32 gcd of ${x} and ${y} is co-prime number

//  2....No para with return//

// function gcd() {
//     let x = Number(prompt("Enter the  1 Number:"));
//     let y = Number(prompt("Enter the  2 number:"));
//     let gcd = 1;
//     for (let i = 2; i <= x && i <= y; i++) {
//       if (x % i == 0 && y % i == 0) {
//         gcd = i;
//       }
//     }
//     return gcd;
//   }
//     let GCD = gcd();
//     console.log("gcd is ", + GCD);
//     if (gcd === 1) {
//       console.log("gcd of ${x} and ${y} is co-prime number");
//   }

//o/p: gcd is  2
   
// 3.....with para no return//

// function gcd(x, y) {
//   let gcd = 1;
//   for (let i = 2; i <= x && i <= y; i++) {
//     if (x % i == 0 && y % i == 0) {
//       gcd = i;
//     }
//   }
// }
// let x = Number(prompt("Enter the  1 Number:"));
// let y = Number(prompt("Enter the  2 number:"));
// let GCD = gcd(x, y);
// console.log("gcd is" + GCD);
// if (gcd === 1) {
//   console.log("gcd of ${x} and ${y} is co-prime number");
// }

//4......With para with return//

// function gcd(x ,y) {
//   let gcd = 1;
//   for (let i = 2; i <= x && i <= y; i++) {
//     if (x % i == 0 && y % i == 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }
//   let x = Number(prompt("Enter the  1 Number:"));
//   let y = Number(prompt("Enter the  2 number:"));
//   let GCD = gcd(x,y);
//      console.log("GCD is" + GCD);
//   if (gcd === 1) {
//     console.log("gcd of ${x} and ${y} is co-prime number");
//   }

//O/P:
// gcd of 23 and 45 is 1
// 95 gcd of ${x} and ${y} is co-prime number
