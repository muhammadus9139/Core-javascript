let arr1 = [1, 2, 3];

// Spread operator se clone
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// slice se clone
let arr3 = arr1.slice();
arr3.push(99);
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [1, 2, 3, 99]

// Arrays merge karna
let a = [1, 2, 3];
let b = [4, 5, 6];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4, 5, 6]
