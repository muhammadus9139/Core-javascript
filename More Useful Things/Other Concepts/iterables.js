// Iterable - jo for...of loop se iterate ho sake

// String iterable hai
let str = "Hello";
for (let char of str) {
    console.log(char);
}

// Array iterable hai
let arr = [1, 2, 3];
for (let item of arr) {
    console.log(item);
}

// Set iterable hai
let set = new Set([1, 2, 3]);
for (let item of set) {
    console.log(item);
}

// Map iterable hai
let map = new Map([["name", "Ali"], ["age", 20]]);
for (let [key, value] of map) {
    console.log(key, value);
}

// Spread operator bhi iterables pe kaam karta hai
let chars = [...str];
console.log(chars);

// Destructuring bhi
let [a, b, c] = arr;
console.log(a, b, c);
