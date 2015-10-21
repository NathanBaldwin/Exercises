/* Create an HTML file that has two input fields to accept the two numbers to perform operations on.
Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
In your JavaScript, put an event listener on each of the buttons.
Copy the code below an implement a basic calculator.
When the user performs one of the operations, output the result to another DOM element of your choice.
*/

var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

buttonArray = [add, subtract, multiply, divide];

function checkClick () {
	console.log("you clicked on a button!")
}



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyFunction (num1, num2) {
	var product = num1 * num2;
	return product;
}

console.log("product test", multiplyFunction(4, 7));

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function addFunction (num1, num2) {
	var sum = num1 + num2;
	return sum;
}

console.log("sum test", addFunction(4, 7));

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractFunction (num1, num2) {
	var difference = num1 - num2;
	return difference;
}

console.log("difference test", subtractFunction(4, 7));

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divideFunction (num1, num2) {
	var quotient = num1 / num2;
	return quotient;
}

console.log("quotient test", divideFunction(4, 7));

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.

 */

 function mathOperation (first, second, operand) {
 	return operand(first, second);
 }

var firstNum = parseInt(document.getElementById("first-number"));

function valueTest () {
	console.log("firstNum", firstNum.value);
}



add.addEventListener("click", valueTest);
subtract.addEventListener("click", checkClick);
multiply.addEventListener("click", checkClick);
divide.addEventListener("click", checkClick);




























