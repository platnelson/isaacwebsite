/* This is your JavaScript file. You will use this file to create actions in your HTML pages */
// Jemima, n.d.) //


const balloonContainer = document.getElementById("balloon-container");
  
function random(num) {
return Math.floor(Math.random() * num);d
}
// Chnage the colours
const colors = [
{ r: 121, g: 78, b: 58 },
{ r: 0, g: 0, b: 0 },
{ r: 101, g: 96, b: 89 },
];

function getRandomStyles() {
var color = colors[Math.floor(Math.random() * colors.length)];
var r = color.r;
var g = color.g;
var b = color.b;
var mt = random(200);
var ml = random(50);
// Chnage the speed
var dur = random(3) + 3;
return `
  background-color: rgba(${r},${g},${b},0.7);
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite`;
}

function createBalloons(num) {
for (var i = num; i > 0; i--) {
  var balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.cssText = getRandomStyles();
  balloon.style.zIndex = 200;
  balloonContainer.append(balloon);
// Timeout of the Balloons
  setTimeout(removeBalloons, 1600);
}
}

function removeBalloons() {
balloonContainer.style.opacity = 0;
setTimeout(() => {
  balloonContainer.remove()
}, 500)
}
// How many balloons
window.addEventListener("load", () => {
createBalloons(17)
});

window.addEventListener("click", () => {
removeBalloons();
});

function regdone() {
  // Get the form element.
  var form = document.getElementById("reg");

  // Iterate over all the form elements.
  for (var i = 0; i < form.elements.length; i++) {
    // If the element is a text input, email input, date input, or select element,
    // check if it is empty.
   if (form.elements[i].type === "text" || form.elements[i].type === "email" ||
            form.elements[i].type === "tel") {
          if (form.elements[i].value === "") {
            // If the element is empty, alert the user but do not reset the form.
            alert("Please fill out all the required fields.");
            return false;
      }
    }
  }

  // If all the form elements are filled, allow the form to submit and display the "Done" message.
  document.getElementById("reg").innerHTML = "Done!";
  return true;
}

function paydone() {
  // Get the form element.
  var form = document.getElementById("pay");

  // Iterate over all the form elements.
  for (var i = 0; i < form.elements.length; i++) {
    // If the element is a text input, email input, date input, or select element,
    // check if it is empty.
   if (form.elements[i].type === "text" || form.elements[i].type === "email" ||
            form.elements[i].type === "tel") {
          if (form.elements[i].value === "") {
            // If the element is empty, alert the user but do not reset the form.
            alert("Please fill out all the required fields.");
            return false;
      }
    }
  }

  // If all the form elements are filled, allow the form to submit and display the "Done" message.
  document.getElementById("pay").innerHTML = "Done!";
  return true;
}
// References //
// Jemima. (n.d.). Floating Balloons. https://codepen.io/Jemimaabu/pen/vYEYdOy //


