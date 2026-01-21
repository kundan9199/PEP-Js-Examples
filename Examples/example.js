// 1. Variables and Data Types
let name = "Alice"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined

// 2. Operators
let sum = 5 + 3; // Addition
let product = 5 * 3; // Multiplication
let isEqual = sum === 8; // Comparison

// 3. Control Flow
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

switch (name) {
  case "Alice":
    console.log("Hello Alice!");
    break;
  default:
    console.log("Unknown user");
}

// 4. Loops
for (let i = 0; i < 3; i++) {
  console.log("For loop:", i);
}

let j = 0;
while (j < 3) {
  console.log("While loop:", j);
  j++;
}

// 5. Functions
function greet(user) {
  return "Hello, " + user;
}
console.log(greet("Bob"));

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

const arrow = (x) => x * 2;
console.log(arrow(5));

// 6. Objects
let person = {
  name: "Charlie",
  age: 30,
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};
console.log(person.greet());

// 7. Arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits);

// 8. Scope
let globalVar = "I am global";
function scopeTest() {
  let localVar = "I am local";
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar);
  }
  // console.log(blockVar); // Error: blockVar not defined here
}
scopeTest();

// 9. Closures
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 10. Classes and Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}
let dog = new Dog("Rex");
dog.speak();

// 11. Prototypes
function Car(model) {
  this.model = model;
}
Car.prototype.drive = function () {
  console.log(this.model + " is driving.");
};
let car = new Car("Toyota");
car.drive();

// 12. Callbacks and Promises
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
fetchData((data) => console.log(data));

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 3000);
});
promise.then((msg) => console.log(msg));

// 13. Async/Await
async function asyncExample() {
  let result = await promise;
  console.log("Async/Await:", result);
}
asyncExample();

// 14. Error Handling
try {
  throw new Error("Something went wrong!");
} catch (e) {
  console.log("Caught error:", e.message);
}

// 15. ES6+ Features
const [a, b] = [1, 2]; // Destructuring
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread
console.log(`Template literal: a=${a}, b=${b}`);

// 16. JSON
let jsonString = JSON.stringify(person);
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

// 17. (Browser only) DOM Manipulation & Events
// Skipped: Not applicable in Node.js

// 18. Local Storage & Fetch API
// Skipped: Not applicable in Node.js
