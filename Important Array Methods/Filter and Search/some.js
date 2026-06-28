let numbers = [1, 3, 5, 7, 8];

let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

let hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 55 }
];

let anyFailed = students.some(s => s.marks < 60);
console.log(anyFailed); // true

let anyDistinction = students.some(s => s.marks >= 90);
console.log(anyDistinction); // true
