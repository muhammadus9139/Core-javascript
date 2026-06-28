let fruits = ["apple", "banana", "mango"];

let [first, second, third] = fruits;
console.log(first);  // apple
console.log(second); // banana
console.log(third);  // mango

// Skip karna
let [a, , c] = fruits;
console.log(a); // apple
console.log(c); // mango

// Default value
let [x, y, z, w = "kiwi"] = fruits;
console.log(w); // kiwi

// Rest operator
let numbers = [1, 2, 3, 4, 5];
let [one, two, ...rest] = numbers;
console.log(one);  // 1
console.log(two);  // 2
console.log(rest); // [3, 4, 5]

// Swap variables
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1
