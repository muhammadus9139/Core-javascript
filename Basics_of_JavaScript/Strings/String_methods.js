// Useful String Methods
let str = "Hello World JavaScript";

// toUpperCase / toLowerCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim - spaces hatao
let spaced = "   Ali   ";
console.log(spaced.trim());

// slice(start, end)
console.log(str.slice(0, 5));   // Hello
console.log(str.slice(6, 11));  // World

// indexOf
console.log(str.indexOf("World")); // 6
console.log(str.indexOf("xyz"));   // -1

// includes
console.log(str.includes("Hello")); // true
console.log(str.includes("Python")); // false

// replace
console.log(str.replace("World", "Everyone"));

// split
let csv = "Ali,Ahmed,Sara,Zara";
console.log(csv.split(",")); // ["Ali", "Ahmed", "Sara", "Zara"]

// repeat
console.log("Ha".repeat(3)); // HaHaHa

// startsWith / endsWith
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("Script"));  // true
