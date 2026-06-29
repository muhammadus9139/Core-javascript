// var hoisting
console.log(x); // undefined - error nahi
var x = 10;
console.log(x); // 10

// Function declaration hoisting
greet(); // "Hello!" - error nahi
function greet() {
    console.log("Hello!");
}

// var multiple times declare
var y = 1;
var y = 2;
console.log(y); // 2

// Function expression hoisted nahi hoti
// sayHi(); // Error: Cannot access before initialization
var sayHi = function() {
    console.log("Hi!");
};
sayHi();
