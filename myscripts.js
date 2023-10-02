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
              // If the element is empty, alert the user but do not reset the form.
          if (form.elements[i].value === "") {
            alert("Please fill out all the required fields.");
            return false;
      }
    }
  }

  // If all the form elements are filled, allow the form to submit and display the "Done" message.
  document.getElementById("reg").innerHTML = "Registration, successful!";
  return true;
}


function toggleNumPeopleInput(show) {
  var numPeopleDiv = document.getElementById("numPeople");
  var numPeopleInput = document.querySelector("input[name='numPeople']");
  
  if (show) {
      numPeopleDiv.style.display = "block";
      numPeopleInput.required = true;
  } else {
      numPeopleDiv.style.display = "none";
      numPeopleInput.required = false;
  }
  calculateTotal();
}

function calculateTotal() {
  var venueCosts = {
      "The Hunter Lounge": 200,
      "Victoria Venues": 250
  };

  var performerCosts = {
      "magician": 45,
      "clown": 55
  };

  var cateredCostPerPerson = 25;
  
  var selectedVenue = document.querySelector("select[name='venue']").value;
  var selectedPerformer = document.querySelector("select[name='performer']").value;
  var numPeople = parseInt(document.querySelector("input[name='numPeople']").value);
  
  var venueCost = venueCosts[selectedVenue] || 0;
  var performerCost = performerCosts[selectedPerformer] || 0;
  var cateredCost = document.querySelector("input[name='Catered']:checked").value === "Catered" ? cateredCostPerPerson * numPeople : 0;
  
  var totalCost = venueCost + performerCost + cateredCost;
  
  var totalElement = document.getElementById("total");
  totalElement.textContent = "$" + totalCost;
}

function paydone() {
  // Get the form element.
  var form = document.getElementById("pay");

  // Check the value of the "Catered" radio button.
  var cateredRadio = document.querySelector("input[name='Catered']:checked");

  if (cateredRadio && cateredRadio.value === "Catered") {
    // "Catered" is selected, so validate the "numPeople" input.
    var numPeopleInput = document.querySelector("input[name='numPeople']");

    if (numPeopleInput.value === "") {
      alert("Please fill out the required fields.");
      return false;
    }
  }

  // Iterate over all the other form elements.
  for (var i = 0; i < form.elements.length; i++) {
    // If the element is a text input, email input, date input, or select element,
    // check if it is empty.
    if (
      form.elements[i].type === "date" ||
      form.elements[i].type === "radio" ||
      (form.elements[i].type === "number" && form.elements[i].name !== "numPeople")
    ) {
      // If the element is empty, alert the user but do not reset the form.
      if (form.elements[i].value === "") {
        alert("Please fill out all the required fields.");
        return false;
      }
    }
  }

  // If all the form elements are filled, allow the form to submit and display the "Done" message.
  document.getElementById("pay").innerHTML = "Payment, Successful!";
  return true;
}



function faqdone() {
  // Get the form element.
  var form = document.getElementById("faqform");

  // Iterate over all the form elements.
  for (var i = 0; i < form.elements.length; i++) {
    // If the element is a text input, email input, date input, or select element,
    // check if it is empty.
   if (form.elements[i].type === "text" || form.elements[i].type === "tel" ||
   form.elements[i].type === "textarea") {
    // If the element is empty, alert the user but do not reset the form.
          if (form.elements[i].value === "") {
            alert("Please fill out all the required fields.");
            return false;
      }
    }
  }

  // If all the form elements are filled, allow the form to submit and display the "Done" message.
  document.getElementById("faqform").innerHTML = "Thanks!, We'll get abck to you as soon as possible.";
  return true;
}



// References //
// Jemima. (n.d.). Floating Balloons. https://codepen.io/Jemimaabu/pen/vYEYdOy //


