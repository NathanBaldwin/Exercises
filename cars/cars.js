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

 console.log("test test");

function Make() {
  this.make = "nissan";
}

Make.prototype.color = "red";

/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model() {
  this.model = "car";
}


// Define the prototype of a Model?

Model.prototype = new Make();


// Define a Car

function Car(typeOfCar) {
  this.car = typeOfCar;
}

// Define the prototype of a Car?

Car.prototype = new Model();




// Create the first car

var myCar = new Car("350z");

// Create the second car

var yourCar = new Car("Pathfinder");


// Create the third car

var herCar = new Car("Exterra");