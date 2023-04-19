import "./styles.css";
const btn = document.getElementById("color");
const outer = document.getElementById("outerDiv");
let index = 0;

const colors = [
  "salmon",
  "green",
  "blue",
  "purple",
  "blueviolet",
  "yellow",
  "pink"
];

btn.addEventListener("click", function onClick() {
  outer.style.backgroundColor = colors[index];
  outer.style.color = "white";

  index = index >= colors.length - 1 ? 0 : index + 1;
});
var btn2 = document.getElementById("shape");
var inner = document.getElementById("innerDiv");

//const shape = ['triangle', 'circle', 'square', 'rectangle'];
btn2.addEventListener("click", function onclick() {
  //outer.style.border = shape[ind];
  inner.style.border = "50px solid white";
});

// var changeColor = document.getElementById('color');
// var outer = document.getElementById('outerDiv');
// changeColor.addEventListener('click', function onclick() {

//     outer.style.backgroundColor = "green";
// });
// // var changeColor1 = document.getElementById('color');
// var outer1 = document.getElementById('outerDiv');
// changeColor1.addEventListener('mousedown', function() {

//     document.style.backgroundColor = "blueviolet";
// });
