var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// use a planet tag in your html
// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");

// Use the map method to create a new array where the first 
// letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

console.log("it works");

function getRandomNumber() {
  var randomNumber = Math.floor (Math.random() * 6) + 1;
  return randomNumber;
}

//alert( getRandomNumber());
//console.log("get random number", getRandomNumber())



var fruits = ["nathan", "emma", "brian"];
var capitalizedFruits = [];

function CapitalFruit(Inputfruit){
	var result = Inputfruit.toUpperCase();
	console.log("result", result);
}

fruits.forEach(CapitalFruit);

function ReversedFruit(Inputfruit) {

}

function reverseIt(Inputfruit) {
  return Inputfruit.split("").reverse().join("");
}

var fruits = ["apple", "banana", "cherry"];
var backwardFruits = fruits.map(reverseIt);
console.log(backwardFruits);


//Here's a test for a filter method - returns simply true or false:

function filterOne (element, index, array) {
	return element === 1;
}

function filterFive (element, index, array) {
	if (element === 5) {
		return 1;
	}
}

var nums = [1, 5, 7, 10, 5, 9, 11, 5 ,6 ,7];
var filteredNums = nums.map(filterFive).filter(filterOne);
console.log(filteredNums);

var sum = [10, 1, 5, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  console.log("curent index: " + index);
  return previousValue + currentValue;
});

console.log("sum", sum);



