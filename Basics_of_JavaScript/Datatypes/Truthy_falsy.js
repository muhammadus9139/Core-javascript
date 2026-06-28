// Truthy and Falsy Values

// Falsy values - sirf yeh 6 hain JS mein:
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Baaki sab Truthy hain
console.log(Boolean(1));         // true
console.log(Boolean("Hello"));   // true
console.log(Boolean([]));        // true - empty array bhi truthy!
console.log(Boolean({}));        // true - empty object bhi truthy!
console.log(Boolean(-1));        // true

// Practical use
let name = "";
if (name) {
    console.log("Name hai: " + name);
} else {
    console.log("Name empty hai!"); // Yeh chalega
}
