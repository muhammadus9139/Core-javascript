let numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

let allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // false

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 75 }
];

let allPassed = students.every(s => s.marks >= 60);
console.log(allPassed); // true

let allDistinction = students.every(s => s.marks >= 85);
console.log(allDistinction); // false
