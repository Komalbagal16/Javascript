console.log("Hello");

let button = document.querySelector("#btn");
console.log(button);

let input = document.querySelector("#in");
console.log(input);

let box = document.querySelector("#box");
console.log(box);

function Display(){
    console.log("Button in clicked!");
    button.style.backgroundColor = "pink";
}

// Button Events

function Display() {
  console.log("Button in clicked!");
  button.classList.toggle("bg-red");
}

// 1 lick ondblclick
button.addEventListener("click",Display)

// dubble click
button.addEventListener("dblclick",Display)

// button.addEventListener("dblclicks", function () {
//   console.log("Button is Clicked");
//   button.classList.toggle("bg-red");
// });

// dark border yete light border click yete enter click kel ki attached color
// // input Events
// input.addEventListener("focus", function () {
//   input.style.backgroundColor = "yellow";
//   //   input.classList.toggle("bg-yellow");
// });

///color click click kelyaver janar
// input.addEventListener("blur", function () {
//   input.style.backgroundColor = "white";
//   //   input.classList.toggle("bg-yellow");
// });

//change cjhange zala ki change honar
// input.addEventListener("change", function () {
//   console.log("input content change:" +this.value);
// });

// 1 1 value print hotat
// box.addEventListener("input", function () {
//   console.log("input content change to:" + this.value);
// });

//Mouse Event
box.addEventListener("mouseenter", function () {
  console.log("Mouse is enterd in box");
});

box.addEventListener("mouseover", function () {
  console.log("Mouse is over the box");
//   console.log("moude possition:"+ elseclient);
});

box.addEventListener("mouseleave", function () {
    console.log("Mouse is exist in box");
  });

  box.addEventListener("mouseover", function () {
    console.log("Mouse is over in box");
  });

  box.addEventListener("mouseup", function () {
    console.log("Mouse is up in box");
  });

  box.addEventListener("mousedown", function () {
    console.log("Mouse is down in box");
  });