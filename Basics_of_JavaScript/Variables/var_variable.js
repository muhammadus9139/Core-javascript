// Declare variable using var
var name = "Ali";
var age = 20;
var city = "Lahore";

console.log(name);
console.log(age);
console.log(city);

// var is function scoped
var x = 10;
var x = 20; // var ko re-declare kar sakte hain
console.log(x); // 20

// var hoisting
console.log(y); // undefined - error nahi aayega
var y = 5;
