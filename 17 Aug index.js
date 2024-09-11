function sq(r){
    return r ** 2;
}
 
function areaofcircle(r){
    let ans=3.14 * sq(r);
    return ans;
}
let r = Number(prompt("Enter your radius"));
let area = areaofcircle(r);
console.log("Area: ",area.toFixed(2));

// Area:  452.16/

//arrow function
// function sq(r){
//     return r ** 2;
// };
 
// function volumeofcylinder(r,h) {
//     let ans=3.14 * sq(r)  *h;
//     return ans;
// };
// let r = Number(prompt("Enter your radius"));
// let h = Number(prompt("Enter Your Height"));
// let volume = volumeofcylinder(r,h);
// console.log("volume: ",volume.toFixed(2), "cu.cm");

// volume:  1356.48
 
// let sq= (r) => {
//     return r ** 2;
// };
 
// let volumeofcylinder= (r,h) => {
//     let ans=3.14 * sq(r)  *h;
//     return ans;
// };
// let r = Number(prompt("Enter your radius"));
// let h = Number(prompt("Enter Your Height"));
// let volume = volumeofcylinder(r,h);
// console.log("volume: ",volume.toFixed(2), "cu.cm");

// volume:  21779.04 cu.cm


// let sq= (r) => r ** 2;
// let volumeofcylinder= (r,h) => 3.14 * sq(r)  *h;
// let r = Number(prompt("Enter your radius"));
// let h = Number(prompt("Enter Your Height"));
// let volume = volumeofcylinder(r,h);
// console.log("volume: ",volume.toFixed(2), "cu.cm");

// volume:  1356.48 cu.cm

// let sq= r => r ** 2;
// let volumeofcylinder= (r,h) => 3.14 * sq(r)  *h;
// let r = Number(prompt("Enter your radius"));
// let h = Number(prompt("Enter Your Height"));
// let volume = volumeofcylinder(r,h);
// console.log("volume: ",volume.toFixed(2), "cu.cm");

// volume:  25408.88 cu.cm

//varriable no passing paramiter//

// let sq= (r) => r ** 2;
// let volumeofcylinder= (r,h) => 3.14 * sq(r)  *h;
// let r = Number(prompt("Enter your radius"));
// let h = Number(prompt("Enter Your Height"));
// let volume = volumeofcylinder(r,h);
// console.log("volume: ",volume.toFixed(2), "cu.cm");

// volume:  2653.30 cu.cm