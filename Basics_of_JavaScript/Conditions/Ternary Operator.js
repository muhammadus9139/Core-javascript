// Ternary Operator
// condition ? true case : false case

let age = 20;

// Purana tarika
let result;
if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}

// Ternary tarika - ek line mein
let result2 = age >= 18 ? "Adult" : "Minor";
console.log(result2);

// Nested ternary (zyada use mat karo - confusing hota hai)
let marks = 75;
let grade = marks >= 90 ? "A+" : marks >= 80 ? "A" : marks >= 70 ? "B" : "C";
console.log(grade);

// Template literal mein use
let name = "Ali";
console.log(`${name} is ${age >= 18 ? "an adult" : "a minor"}`);
