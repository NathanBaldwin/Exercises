
//var inputTemperature = getElementById("input-temp");

//inputTemperature.addEventListener("keyup", function(){

//})

var inputTemp = document.getElementById("input-temp");
var convert = document.getElementById("convert");
var toCelcius = document.getElementById("to-celcius");
var toFahrenheit = document.getElementById("to-fahrenheit");
var result = document.getElementById("result");

function convertToCelcius (Temp) {
	return (((inputTemp - 32) * 5) / 9);
}

console.log("convert", convertToCelcius(70));

function convertToFahrenheit (Temp) {
	return ((inputTemp * 1.8) + 32)
}

console.log("convert", convertToFahrenheit(30));
console.log("converted to Fahrenheit", convertToFahrenheit(inputTemp.value));
console.log("converted to celcius", convertToCelcius(inputTemp.value));




/*if (toCelcius.checked === true) {
		var celciusTemp = convertToCelcius(inputTemp);
		result.innerHTML = celciusTemp;
	}
	else if (toFahrenheit.checked === true) {
		var fahrenheitTemp = convertToFahrenheit(inputTemp);
		result.innerHTML = fahrenheitTemp;
	}
	else { 
		*/

// if keycode === 13 call the submit function.