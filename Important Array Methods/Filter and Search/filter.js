let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numbers.filter(num => num % 2 === 0);
console.log(even);

let greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5);

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 55 },
    { name: "Zara", marks: 70 }
];

let passed = students.filter(s => s.marks >= 60);
console.log(passed);

let topStudents = students.filter(s => s.marks >= 80);
console.log(topStudents);

let fruits = ["apple", "banana", "mango", "avocado"];
let aFruits = fruits.filter(f => f.startsWith("a"));
console.log(aFruits);
