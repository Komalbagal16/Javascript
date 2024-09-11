// console.log("hello");

//Bom =Browser object Model
//window
//navigater
//loaction
//screen

//Event bubbling

let con = document.querySelector(".container");
let link = document.querySelector("#link");
let body = document.body

// link.addEventListener("click", function(){
//     console.log
//      ("lick Clicked")
//      .endsWith.preventDefault();
//  },
//   true
//  )
//  link.addEventListener("click", function(){
//      console.log(
//       "con Clicked"
//      );
//   },
//    true
//  )
//   link.addEventListener("click", function(){
//      console.log(
//       "body Clicked"
//      );
//   },
//   true
//   )



link.addEventListener("click", function(){
    console.log
     ("lick Clicked")
     .endsWith.preventDefault();
 },
  false
 );
//  link.addEventListener("click", function(){
//      console.log(
//       "con Clicked"
//      );
//   },
//    false
//  )
//   link.addEventListener("click", function(){
//      console.log(
//       "body Clicked"
//      );
//   },
//   false
//   )


// link.addEventListener("click", function(){
//     console.log
//      ("lick Clicked")
//      e.preventDefault();
//      e.stopPropogation();
//  },
//   false
//  )
//  con.addEventListener("click", function(){
//      console.log(
//       "con Clicked"
//      );
//      e.stopPropogation();
//   },
//    false
//  )
//   body.addEventListener("click", function(){
//      console.log(
//       "body Clicked"
//      );
//   },
//   false
//   )



//set setTimeout and setInterval


// let stopId = setTimeout(function(){
//     console.log("hello"); 
// },3000
// )

// link.addEventListener("click",function(e){
//     clearTimeout(stopId);
//     e.preventDefault();
// })


//  let setInterval(function(){
//     console.log("bye");
//     console.log("bye");
// },2000)

// link.addEventListener("click", function(a){
//     clearInterval(Intervalid);
//     e.preventDefault();
// });
// function Afun(){
//     console.log("hello");
// }

// window.confirm(){
//     console.log("hello");
// }

//domain name system 
let url = "http://www.goggle.com"
let features= "height:300;width:300"
window.open(url,"maziWindow",features);

