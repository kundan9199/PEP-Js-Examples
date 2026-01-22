// Create a JavaScript object named user that has:
// A property age which stores a number
// A method (function) that takes no parameters
// Inside that method, access and print the object’s property to the console.”


// create a JS object named user
const user = {
  age: 21,              
  showDetails: function () {   
    console.log("Age:", this.age);
  }
};

// call the function
user.showDetails();
