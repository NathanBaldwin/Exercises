
// To convert temperatures in degrees Fahrenheit to Celsius, 
// subtract 32 and multiply by .5556 (or 5/9).

var showIt = document.getElementById("end");

function toCelsius (userTemp) {
 var F2CTemp = (userTemp - 32) * .5556;
 showIt.innerHTML = F2CTemp;
 console.log("Fahr to Cel temp: ", F2CTemp);
 return F2CTemp;    // do I need to return anything here? I dont think I do
}

// °C to °F  Multiply by 9, then divide by 5, then add 32
function toFahrenheit (userTemp) {
 var C2FTemp = userTemp * 9 / 5 + 32;
 showIt.innerHTML = C2FTemp;
 console.log("Cel to Fahr temp: ", C2FTemp);
 return C2FTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (userInput) {
 var userInput = document.getElementById("userTemp").value;
 if (document.getElementById('r1').checked) {
   toCelsius(userInput);
   console.log(userInput);
 }
 else if (document.getElementById('r2').checked) {
   toFahrenheit(userInput);
   console.log(userInput);
 }
 // console.log("event", clickEvent);
}

var enterButton = document.getElementById("userTemp");
enterButton.addEventListener("keyup", didHitEnter);
function didHitEnter(ent);
if (ent.keycode === 13) {
 determineConverter();
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


if (C2FTemp > 90 || F2CTemp > 32) {
 color: red;  ??????
}