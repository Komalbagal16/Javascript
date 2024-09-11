// //getelementByID
// let heroElem = document.getElementById("hero");
// console.log(heroElem);
// heroElem.innerText = "New text";

// //getelementByClassName:
// let element = document.getElementsByClassName("elements");
// console.log(elements);

//query Selector
let HeroElement = document.querySelector("#hero");
console.log(HeroElement.innerHTML);

//query selector all
let ListElements = document.querySelectorAll(".elem");
console.log(ListElements);

// node traversal:

let item1 = document.querySelector("#hero");
console.log(item1);

let item2 = item1.nextElementSibling;
console.log(item2);

let item3 = item1.previousElementSibling;
console.log(item1);

let parent = item1.parentElement;
console.log(parent);

let p2 = parent.nextElementSibling;
console.log(p2);

let ListFristElements = p2.fristElemetChild;
console.log(p2);

let ListLastElements = p2.LastElemetChild;
console.log(p2);

let childs = p2.children;
console.log(childs);
