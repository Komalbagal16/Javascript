// strings

// concat:
let str = "hello"
Name=" rahul";
console.log(str + " " + Name);
console.log(str.concat("", Name));
console.log(`${str}  ${Name}`)

// //case change:

console.log(str .toUpperCase());
console.log(str .toLowerCase());

let msg = "have a nice day"

console.log(msg.indexOf('e'))
console.log(msg.indexOf('e',5))
console.log(msg.indexOf('nice'))
console.log(msg.indexOf('a'))

console.log(msg.replace('nice','good'));

console.log(msg.length);
console.log(msg.endsWith("day"))
console.log(msg.startsWith("day"))

console.log(msg.substr(0,5))
console.log(msg.substring(2,6))
console.log(msg.slice(2,10))
console.log(msg.split(""))

let word ="     bye bye      "
console.log(word)
console.log(word.trimStart())
console.log(word.trimEnd())
console.log(word.trim())

///object:

// let person ={
//     Name : "ram",
//     age : 23,
//     city : "pune",
//     hobbies : ["reading"]
// };

// console.log(person)
// console.log(person.age)
// console.log(person["age"])
// console.log(person["hobbies"])

// person.DOB ="08-04-1992"
// console.log(person)
// console.log("age" in person)

// delete person.city;
// console.log(person);

// person.addr = "mumbai"
// console.log(person.age)
// console.log(person.addr)
// console.log(person.Name)
// console.log(person.DOB)

// for(let key in person){
//     console.log(person[key])
// }

///object:

// let car ={
//     brand : "toyoto",
//     age : 23,
//     city : "pune",
//     sayBye () {
//       console.log("bye bye");
//     },
// };

// person.SayHello = function(){
//      console.log("hello")
// };

// person.SayHello();
// console.log(person)

// //----------------------------------

let car = {
  brand: "toyoto",
  model: "camry",
  year: 2012,
};

let person = {
  Name: "rahul",
  age: 23,

  data: function () {
    console.log(`${this.Name} have a car ${car.model}`);
  },
};
person.data();
