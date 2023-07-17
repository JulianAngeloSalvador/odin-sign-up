//getting the exact path length of each letter

const strokeLength = document.querySelectorAll("#odin-title svg path");

console.log(strokeLength); // just verifying that all letters have been caught

// getting the path length using for loop
for (let i = 0; i < strokeLength.length; i++) {
  console.log(`Letter ${i + 1} is ${strokeLength[i].getTotalLength()}`);
}

//repeating the process from above but for the logo itself

//getting the elements within the logo svg
const logoStrokeLength = document.querySelectorAll("#odin-logo svg g");

console.log(logoStrokeLength);

//getting the paths within the elements above (paths)
const logoPaths = [];

logoStrokeLength.forEach((g) => {
  const paths = g.querySelectorAll("path");
  const circles = g.querySelectorAll("circle");

  paths.forEach((path) => {
    logoPaths.push(path);
  });

  circles.forEach((circle) => {
    logoPaths.push(circle);
  });
});

console.log(logoPaths);

for (let j = 0; j < logoPaths.length; j++) {
  console.log(`Line of area ${j + 1} is ${logoPaths[j].getTotalLength()}`);
}

//clear fields upon refresh of page
window.onload = function () {
  // Reset input fields
  var inputFields = document.querySelectorAll("input");
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
};

const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const contactNo = document.querySelector("#contactNum");
const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#passwordConfirmation");

const errorPopovers = document.querySelectorAll(".error-popover");
const regForm = document.querySelector("#registerForm");
const inputFields = document.querySelectorAll("#registerForm fieldset input");
const formSubmit = document.querySelector("#submitBtn");

inputFields.forEach(function (input) {
  input.required = true;
  input.setAttribute("autocomplete", "off");

  input.addEventListener("input", function (event) {
    const popover = input.parentElement.querySelector(".error-popover");
    const inputLabel = input.nextElementSibling;
    if (input.validity.typeMismatch) {
      popover.style.display = "flex";
      inputLabel.classList.add("label-levitate");
      formSubmit.disabled = true;
    } else {
      popover.style.display = "none";
      inputLabel.classList.remove("label-levitate");
      formSubmit.disabled = false;
    }
  });
});

// const inputLabel = input.nextElementSibling;

// input.addEventListener("focus", function () {
//   inputLabel.classList.add("label-levitate");
// });

// input.addEventListener("blur", function () {
//   inputLabel.classList.remove("label-levitate");
// });

confirmPass.addEventListener("input", function (event) {
  const popover = confirmPass.parentElement.querySelector(".error-popover");
  if (confirmPass.value !== pass.value) {
    popover.style.display = "flex";
    formSubmit.disabled = true;
  } else {
    popover.style.display = "none";
    formSubmit.disabled = false;
  }
});

//Limiting names
// Get all input fields with data-type="name"
const nameInputs = document.querySelectorAll('input[data-type="name"]');

// Iterate over the input fields
nameInputs.forEach(function (input) {
  // Add event listener for input event
  input.addEventListener("input", function () {
    // Remove any non-letter characters from the input value
    var filteredValue = this.value.replace(/[^A-Za-z]/g, "");
    // Update the input value with the filtered value
    this.value = filteredValue;
  });
});

formSubmit.addEventListener("click", () => {});
