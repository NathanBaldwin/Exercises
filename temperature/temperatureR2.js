var convertButton = document.getElementById("convert");
var inputTemp = document.getElementById("input-temp");
//var valueOfTemp = inputTemp.value;
// why won't valueOfTemp work in clickTestONe Function? Why can't you put .value on end of input Temp declaration??
var toCelcius = document.getElementById("to-celcius");
var toFahrenheit = document.getElementById("to-fahrenheit");
var result = document.getElementById("result");


function clickTestOne() {
	console.log("click Test", inputTemp.value);
  console.log("testing F2C function", convertToCelcius(inputTemp.value));
  console.log("testing C2F function", convertToFahrenheit(inputTemp.value));
}

function radioTester() {
  if (toCelcius.checked) {
    var finalCTemp = convertToCelcius(inputTemp.value).toFixed(2);
    result.value = inputTemp.value + " degrees Fahrenheit = " + finalCTemp + " degrees Celsius.";
  }
  else if (toFahrenheit.checked) {
    var finalFTemp = convertToFahrenheit(inputTemp.value).toFixed(2);
    result.value = inputTemp.value + " degrees Celsius = " + finalFTemp + " degrees Fahrenheit.";
  }
  else {
    alert("Doh!! Better select a radio button!");
  }
}
console.log(convertButton);
convertButton.addEventListener("click", radioTester);
convertButton.addEventListener("click", clickTestOne);


function convertToCelcius (temp) {
	var F2CTemp = (((temp - 32) * 5) / 9);
  console.log("F2CTemp", F2CTemp);
  return F2CTemp;
}

function convertToFahrenheit (temp) {
	var C2FTemp = ((temp * 1.8) + 32);
  console.log("C2FTemp", C2FTemp);
  return C2FTemp;
}

