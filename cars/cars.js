/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

 var make = function () {
  this.makeName = "Nissan";

 }



/*
Create a function, Model, to hold the 
corresponding property and value
*/

var model = function () {
  this.modelName = "350z";
 }

// What is the prototype of a Model?

model.prototype = new make();

// Define a Car

var car = function (carColor, modelName) {
  this.color = carColor;
}


// What is the prototype of a Car?

car.prototype = new model();

// Create the first car

var myCar = new car("blue");

// Create the second car

var yourCar = new car("red");

// Create the third car

var herCar = new car("black");

console.log("my car:", myCar);











