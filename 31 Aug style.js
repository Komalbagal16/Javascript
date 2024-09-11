console.log("good Morning");
document.body.style.backgroundColor = "pink"

console.log(document.body);

document.body.firstElementChild.firstElementChild.children[1].style.backgroundColor = "red";

let k =document.querySelector("#box");
console.log(k);

let boxcopy = box.cloneNode()
console.log(boxcopy);

let boxcopy1 = box.cloneNode(true)
console.log(boxcopy1);

document.body.appendChild(boxcopy1);


let listElem = document.querySelector("#list");
console.log(listElem);


listElem.classList.contains("p30");
console.log(listElem.classList.contains("p30"));
console.log(listElem.classList.contains("p40"));

console.log(listElem.classList);
listElem.classList.add("bg-pri");


console.log(listElem.classList.add("bg-pri"));
console.log(listElem.classList.add("bg-pri","bg-sec"));
console.log(listElem.classList.add("bg-pri"));
   
listElem.classList.toggle("bg-pri")

listElem.classList.remove("bg-pri")
listElem.classList.toggle("bg-pri")
listElem.classList.replace("bg-pri","bg-sec");

// let Box = document.querySelector("#box");

// console.log("Height:"+Box.clientHeight);
// console.log("Width:"+Box.clientWidth);
// console.log("offset Top:"+Box.offsetHeight);
// console.log("offset left:"+Box.offsetWidth);

//Height:134
//Width:284
//offset Top:150
//offset left:300

let d = new Date()
console.log(d);

//Sat Aug 31 2024 09:27:45 GMT+0530 (India Standard Time)

let current_d = new Date()
console.log(current_d);
//Sat Aug 31 2024 09:38:01 GMT+0530 (India Standard Time)

// let new_date = new Date("yyyy","MM","DD","H","M","S"."Ms");
let new_date = new Date(2002,5,8,3,15,25,40)
console.log(new_date);
//Date:Sat Jun 08 2002 03:15:25 GMT+0530 (India Standard Time)

console.log("Date:" +new_date);
console.log("H: "+new_date.getHours());
//H: 3

let new_d= new Date("2003 october 23 3:4:55");
console.log(new_d);
//Thu Oct 23 2003 03:04:55 GMT+0530 (India Standard Time