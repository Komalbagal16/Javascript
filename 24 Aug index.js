///24-8-24

// let friend = ["komal","sonu","dhanu"];
// console.log(friend[2]);
// console.log(friend);

// dhanu
// index.js:77 (3) ['komal', 'sonu', 'dhanu']0: "komal"1: "sonu"2: "dhanu"length:
// 3[[Prototype]]: Array(0)

// friend[2] = "sonal"
// console.log(friend);

// (3) ['komal', 'sonu', 'sonal']
// 0
// :
// "komal"
// 1
// :
// "sonu"
// 2
// :
// "sonal"
// length
// :
// 3
// [[Prototype]]
// :
// Array

let nums = [22,44,55,99,77]

console.log(nums);

// nums.push(33);

// console.log(nums);

// nums.pop();
// nums.pop();

// console.log(nums);
// [22, 44, 55, 99]

// nums.unshift(77);

// console.log(nums);

// nums.shift()
// nums.shift()
// console.log(nums);

// let arr=[23,56,89,66,56,55]
// let brr=[45,67, 89, 90,78]
// console.log(arr)
// console.log(brr)
// console.log(arr.concat(brr))

// [23, 56, 89, 66, 56, 55]
// index.js:129 (5) [45, 67, 89, 90, 78]
// index.js:130 (11) [23, 56, 89, 66, 56, 55, 45, 67, 89, 90, 78]

// let arr1 =[ 12,34,66,78,99,88 ,66]
// console.log(arr1)

// arr.splice(2,5)
// console.log(arr)

// console.log(arr.indexOf(2));

// [12, 34, 66, 78, 99, 88, 66]
// index.js:140 (2) [12, 34]
// index.js:142 -1

// let nums = [2, 5, 8, 9, 6,5];
// console.log("by using standerd for loop :");
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// console.log("by using  for loop :");
// for (let num of nums) {
//   console.log(nums);
// }

// console.log("by using for loop :");
//   nums.foreach(function(value){
//   console.log(value)
//   })

// console.foreach(value => consolelog(value));

// let book = new Array("eng","math","sci")
// console.log(book);
// book.length = 0
// console.log(book);

// let newArr =[2,13,45 ,"Hello", true,23,89]
// console.log(newArr);

///multidimention array:

let book =[
    ["eng",122],
    ["hin",102],
    ["math",22],
    ["geo",142],

];
console.log(book[1][1]);
book [2][1] = 700
console.log(book)
