let a = 3;
let b = Number("5");
let c = true;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

console.log("a + b :", a + c);
console.log("a -b :", a - c);
console.log("a * b :", a * c);
console.log("a / b :", a / c);
console.log("a % b :", a + c);
console.log("a**b :", a + c);

a = 3.14;
console.log("a =", a);
console.log(Math.floor(a));
console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.trunc(a));

// While Loop

// 1
// let j = 1;
// while (j <= 10){
//     let k = 1;
//     while (k <= 10){
//         console.log(j+ '*' +k+ '=', (j * k));
//         k++;
//     }
//     console.log("\n");
//     j++;
//     }

let j = 1;
while (j <= 10) {
  let k = 1;
  while (k <= 10) {
    console.log(`${j} x ${k} = ${j * k}`);
    k++;
  }
  console.log("\n");
  j++;
}

//   O/P:
//   a = 3
// indes1.js:6 b = 5
// indes1.js:7 c = true
// indes1.js:9 a + b : 4
// indes1.js:10 a -b : 2
// indes1.js:11 a * b : 3
// indes1.js:12 a / b : 3
// indes1.js:13 a % b : 4
// indes1.js:14 a**b : 4
// indes1.js:17 a = 3.14
// indes1.js:18 3
// indes1.js:19 3
// indes1.js:20 4
// indes1.js:21 3
// indes1.js:41 1 x 1 = 1
// indes1.js:41 1 x 2 = 2
// indes1.js:41 1 x 3 = 3
// indes1.js:41 1 x 4 = 4
// indes1.js:41 1 x 5 = 5
// indes1.js:41 1 x 6 = 6
// indes1.js:41 1 x 7 = 7
// indes1.js:41 1 x 8 = 8
// indes1.js:41 1 x 9 = 9
// indes1.js:41 1 x 10 = 10
// indes1.js:44

// indes1.js:41 2 x 1 = 2
// indes1.js:41 2 x 2 = 4
// indes1.js:41 2 x 3 = 6
// indes1.js:41 2 x 4 = 8
// indes1.js:41 2 x 5 = 10
// indes1.js:41 2 x 6 = 12
// indes1.js:41 2 x 7 = 14
// indes1.js:41 2 x 8 = 16
// indes1.js:41 2 x 9 = 18
// indes1.js:41 2 x 10 = 20
// indes1.js:44

// indes1.js:41 3 x 1 = 3
// indes1.js:41 3 x 2 = 6
// indes1.js:41 3 x 3 = 9
// indes1.js:41 3 x 4 = 12
// indes1.js:41 3 x 5 = 15
// indes1.js:41 3 x 6 = 18
// indes1.js:41 3 x 7 = 21
// indes1.js:41 3 x 8 = 24
// indes1.js:41 3 x 9 = 27
// indes1.js:41 3 x 10 = 30
// indes1.js:44

// indes1.js:41 4 x 1 = 4
// indes1.js:41 4 x 2 = 8
// indes1.js:41 4 x 3 = 12
// indes1.js:41 4 x 4 = 16
// indes1.js:41 4 x 5 = 20
// indes1.js:41 4 x 6 = 24
// indes1.js:41 4 x 7 = 28
// indes1.js:41 4 x 8 = 32
// indes1.js:41 4 x 9 = 36
// indes1.js:41 4 x 10 = 40
// indes1.js:44

// indes1.js:41 5 x 1 = 5
// indes1.js:41 5 x 2 = 10
// indes1.js:41 5 x 3 = 15
// indes1.js:41 5 x 4 = 20
// indes1.js:41 5 x 5 = 25
// indes1.js:41 5 x 6 = 30
// indes1.js:41 5 x 7 = 35
// indes1.js:41 5 x 8 = 40
// indes1.js:41 5 x 9 = 45
// indes1.js:41 5 x 10 = 50
// indes1.js:44

// indes1.js:41 6 x 1 = 6
// indes1.js:41 6 x 2 = 12
// indes1.js:41 6 x 3 = 18
// indes1.js:41 6 x 4 = 24
// indes1.js:41 6 x 5 = 30
// indes1.js:41 6 x 6 = 36
// indes1.js:41 6 x 7 = 42
// indes1.js:41 6 x 8 = 48
// indes1.js:41 6 x 9 = 54
// indes1.js:41 6 x 10 = 60
// indes1.js:44

// indes1.js:41 7 x 1 = 7
// indes1.js:41 7 x 2 = 14
// indes1.js:41 7 x 3 = 21
// indes1.js:41 7 x 4 = 28
// indes1.js:41 7 x 5 = 35
// indes1.js:41 7 x 6 = 42
// indes1.js:41 7 x 7 = 49
// indes1.js:41 7 x 8 = 56
// indes1.js:41 7 x 9 = 63
// indes1.js:41 7 x 10 = 70
// indes1.js:44

// indes1.js:41 8 x 1 = 8
// indes1.js:41 8 x 2 = 16
// indes1.js:41 8 x 3 = 24
// indes1.js:41 8 x 4 = 32
// indes1.js:41 8 x 5 = 40
// indes1.js:41 8 x 6 = 48
// indes1.js:41 8 x 7 = 56
// indes1.js:41 8 x 8 = 64
// indes1.js:41 8 x 9 = 72
// indes1.js:41 8 x 10 = 80
// indes1.js:44

// indes1.js:41 9 x 1 = 9
// indes1.js:41 9 x 2 = 18
// indes1.js:41 9 x 3 = 27
// indes1.js:41 9 x 4 = 36
// indes1.js:41 9 x 5 = 45
// indes1.js:41 9 x 6 = 54
// indes1.js:41 9 x 7 = 63
// indes1.js:41 9 x 8 = 72
// indes1.js:41 9 x 9 = 81
// indes1.js:41 9 x 10 = 90
// indes1.js:44

// indes1.js:41 10 x 1 = 10
// indes1.js:41 10 x 2 = 20
// indes1.js:41 10 x 3 = 30
// indes1.js:41 10 x 4 = 40
// indes1.js:41 10 x 5 = 50
// indes1.js:41 10 x 6 = 60
// indes1.js:41 10 x 7 = 70
// indes1.js:41 10 x 8 = 80
// indes1.js:41 10 x 9 = 90
// indes1.js:41 10 x 10 = 100
// indes1.js:44
