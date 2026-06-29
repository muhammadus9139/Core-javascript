// JS run hote hi Global Execution Context banta hai
// 2 phases hoti hain:
// 1. Memory phase (Creation phase)
// 2. Execution phase

var name = "Ali";
var age = 20;

function greet() {
    console.log("Hello!");
}

// Memory phase mein:
// name = undefined
// age = undefined
// greet = function definition

// Execution phase mein:
// name = "Ali"
// age = 20
// greet() call hoti hai

console.log(name);
console.log(age);
greet();
