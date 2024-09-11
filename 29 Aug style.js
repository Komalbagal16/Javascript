// let list = document.querySelector("#list");
// let newItem = document.createElement("li");
// newItem.textContent = "list item 4";
// list.appendChild(newItem);

///---------------------------------------------------------

// let list = document.querySelector("#list")
let elem = list.firstElementChild;
// let newItem = document.createElement("li");
// newItem.textContent = "list item 0";
// list.insertBefore(newItem,elem);

//-----------------------------------------------------------

// let list = document.querySelector("#list")
// let elem = list.firstElementChild.nextElementSibling;
// let newItem = document.createElement("li");
// newItem.textContent = "list item 1.1";
// list.insertBefore(newItem,elem);

//--------------------------------------------------------------

// let list = document.querySelector("#list");
// let item = document.createElement("li")
// let item1 = document.createElement("li")
// item.textContent ="This is new para"
// item1.textContent ="This is frist para"
// list.append(item);
// list.prepend(item1);

//------------------------------------------------------------

// let list = document.querySelector("#list");

// let item = document.createElement("li");
// item.textContent = "This is new para";

// let para = document.createElement("p");
// para.textContent = "This is new para";

// list.append(item);
// list.prepend(item);

// list.after(para);
// list.before(para);

// list.after(para);

//---------------------------------------------------------

elem.innerHTML = `
<li>list item 1</li>
<li id="hero">list item 2</li>
<li>list item 3</li>
<li>list item 4</li>`;

//--------------------------------------------------------------
// let a = document.getElementById("hero");
// let b = document.querySelector("#hero");
// console.log(a.innerText);

// let s = a.nextElementSibling;
// console.log(s.innerText);

// let pr = a.parentElement;
// console.log(pr);

// //---------------------------------------------------------

let p = document.querySelector("#list");

let c3= p.lastElementChild;
console.log(c3.textContent);

let c1 = p.firstElementChild;
console.log(c1.textContent);

let ch = p.children;
console.log(ch[1].textContent)
