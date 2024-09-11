let button = document.querySelector("#btn");
console.log(button);

//Button Events
// button.addEventListener("click", () =>
// // console.log("Button Clicked"));

// button.addEventListener("dblclick", () =>
//     console.log(" right Button Clicked"));

// button.addEventListener("contextmenu", () =>
//     console.log("Button Clicked"));

//Mouse Events
button.addEventListener("mouseenter",
    function(){
        console.log("Mouse entered");
    }
)

// button.addEventListener("mouseleave",
//     function(){
//         console.log("Mouse leave");
//     }
// )

// button.addEventListener("mousedown",
//     function(){
//         console.log("Mouse down");
//     }
// )

// button.addEventListener("mouseup",
//     function(){
//         console.log("Mouse up");
//     }
// )

// button.addEventListener("mouseover",
//     function(){
//         console.log("Mouse over");
//     }
// )

//kiti jagyaver firtoy
// button.parentNode.addEventListener("mousemove",
//     function(){
//         console.log("Mouse  is moving");
//     }
// )

// button.parentNode.addEventListener("mousemove",
//     function(event){
//         console.log(event.x);
//     }
// )

// button.parentNode.addEventListener("mousemove",
//     function(event){
//         console.log(event.y);
//     }
// )

// window.addEventListener("mousemove",
//     function(event){
//         console.log(event.x);
//     }
// )

//Sccroll Events:
// window.addEventListener("scroll",
//     function(){
//         console.log("Scrolling");

//     }
// )

//ditect window sathi
// window.addEventListener("scroll", function () {
//   console.log("Scrolling");
//   if (this.window.pageXOffset > 500) {
//     this.document.body.style.backgroundColor = "red";
//   } else {
//     this.document.body.style.backgroundColor = "yellow";
//   }
// });


//change ofthe Y  
// window.addEventListener("wheel", function (event) {
//     if (event.deltaY > 0) {//Scroll Up hoto
//         console.log("Scroll up")
//     }
//     else if(event.deltaY < 0){
//          console.log("scroll Down");
//     }
// }
// )
  
//load event
//html fact loaded
// window.addEventListener("DOMcontentloaded",
//     function(){
//         console.log("document loaded");
//     }
// )
// window.addEventListener("load",
//     function(){
//         console.log("Content loaded");
//     }
// )