const greet = function() {
    console.log("Hello!");
};
greet();

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

// Function expression hoisted nahi hoti
// greet(); // Error
const greet2 = function() {
    console.log("Hi!");
};

// Variable mein store hoti hai
const myFunc = function sayHello() {
    console.log("Hello!");
};
myFunc();
