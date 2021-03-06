/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// // EXAMPLE SOLUTION CODE:
// function Airplane(name) {
//   this.name = name;
//   this.isFlying = false;
// }
// Airplane.prototype.takeOff = function () {
//   this.isFlying = true;
// };
// Airplane.prototype.land = function () {
//   this.isFlying = false;
// };


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
console.log('***Task 1***');

function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  } 
  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }
  Person.prototype.poop = function(){
    this.stomach = [];
  }


  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const personOne = new Person('William', 21);
  const personTwo = new Person('Grady', 33);
  const personThree = new Person('Cheree', 41);
  
  console.log(personOne.toString());
  console.log(personTwo.toString());
  console.log(personThree.toString());
  
  personTwo.eat('🍍');
  personTwo.eat('🐌');
  personTwo.eat('🥪');
  
  console.log(personTwo.stomach);
  
  personTwo.poop();
  
  console.log(personTwo.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
console.log('***Task 2***');

function Car(model, mpg){
    this.name = model;
    this.mpg = mpg;
    this.tank = 0;
    this.odometer = 0
  } 
  Car.prototype.fill = function(gallons){
      this.tank = 10;
    }
  
  Car.prototype.drive = function(){
    this.tank = 0;
  }


  Car.prototype.toString = function(){
    return `${this.name}, ${this.mpg}`;
  }
  
  const carOne = new Car('Mustang', 25);
  const carTwo = new Car('Charger', 17);
  const carThree = new Car('Shelby', 12);
  
  console.log(carOne.toString());
  console.log(carTwo.toString());
  console.log(carThree.toString());
  
  carTwo.fill();
 
  
  console.log(carTwo.tank);
  
 

  //console.log(carTwo.tank);
  console.log(carTwo.fill);
  //carTwo.drive();








// /*
//   TASK 3
//     - Write a Baby constructor subclassing Person.
//     - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
//     - Besides the methods on Person.prototype, babies have the ability to `.play()`:
//         + Should return a string "Playing with x", x being the favorite toy.
// */
console.log('***Task 3***');

function Baby(name, age, favoriteToy){
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
    
  } 
  Baby.prototype.play = function(){
      this.favoriteToy = 10;
      
    }
  
//   Baby.prototype.drive = function(){
//     this.tank = 0;
//   }


  Baby.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const BabyOne = new Baby('Heero', 1);
  const BabyTwo = new Baby('Duo', 1);
  const BabyThree = new Baby('Wufei', 1);
  
  console.log(BabyOne.toString());
  console.log(BabyTwo.toString());
  console.log(BabyThree.toString());
  
  //BabyTwo.fill();
 
  
  //console.log(BabyTwo.tank);
  
 

  //console.log(carTwo.tank);
  //console.log(BabyTwo.fill);






//   TASK 4
console.log('***Task 4***');
//   In your own words explain the four principles for the "this" keyword below:
//   1. This is global if strict mode isn't set and undefied if it is, on the window scope
//   2. This is about what's to the left of the dot in the funtion it's called in
//   3. This can be explicitly defined in javascript using call, apply, or bind
//   4. The new keyword makes an object and this will apply to it if used in that. 
// */



// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// if (typeof exports !== 'undefined') {
//   module.exports = module.exports || {}
//   if (Airplane) { module.exports.Airplane = Airplane }
//   if (Person) { module.exports.Person = Person }
//   if (Car) { module.exports.Car = Car }
//   if (Baby) { module.exports.Baby = Baby }
// }
