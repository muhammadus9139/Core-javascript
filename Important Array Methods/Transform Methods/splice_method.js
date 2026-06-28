let fruits = ["apple", "banana", "mango", "orange"];

// Elements remove karna
let removed = fruits.splice(1, 2);
console.log(fruits);  // ["apple", "orange"]
console.log(removed); // ["banana", "mango"]

let arr = [1, 2, 3, 4, 5];

// Elements add karna
arr.splice(2, 0, 10, 20);
console.log(arr); // [1, 2, 10, 20, 3, 4, 5]

// Replace karna
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log(colors); // ["red", "yellow", "purple", "blue"]
