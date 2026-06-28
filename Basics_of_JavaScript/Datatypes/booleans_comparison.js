// Booleans and Comparison Operators
let isStudent = true;
let isWorking = false;

console.log(isStudent);  // true
console.log(isWorking);  // false
console.log(typeof isStudent); // boolean

// Comparison Operators
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false

// == vs ===
console.log(5 == "5");   // true  - sirf value check
console.log(5 === "5");  // false - value + type check
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Hamesha === use karo - best practice
let age = 18;
console.log(age === 18); // true
