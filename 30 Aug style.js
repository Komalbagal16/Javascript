let para = document.createElement("p");
console.log(para);

para.textContent = "New Text Content";

{/* <p>New Text Content</p> */}

//-----------------------------------------------

let Box = document.querySelector(".box");
console.log(Box);

// Box.appendChild(para);

// Box.removeChild(para);

// //----------------------------------------------------

// para.id ="para-4";
// console.log('para-4');
// console.log(Box);

// para.setAttribute("class","bg-color");
// console.log(Box)

// para.getAttribute("class");
// console.log('bg-color');

// para.removeAttribute("class");
// console.log(Box);

// ---------------------------------------------

// Box.style.backgroundColor = "red"
// console.log(Box);

// Box.style.border ="2px solid white"
// console.log(Box);

// Box.firstElementChild.style.color = "white"
// console.log(Box);

// Box.firstElementChild.style.fontSize = "25px"
// console.log(Box);

//----------------------------------------------------

// Box.style.cssText
// //// background-color: red; border: 2px solid white;'

Box.style.cssText = "background-color: yellow; color:red;font-size:20px;"
// background-color: yellow; color:red;font-size:20px;'
console.log(Box)

// Box.style.cssText = "font-Weigth:700"
//'font-Weigth:700

// Box.classList
// DOMTokenList (2)['box', value: 'box']

//--------------------------------------------------

Box.classList.remove("pC");

Box.classList.remove("pC");

Box.classList.replace("pB");

Box.classList.add("bg-color");

Box.classList.replace("pB");

Box.classList.replace("pB","pC");

Box.classList.replace("pC","pB");