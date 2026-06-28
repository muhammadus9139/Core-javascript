let numbers = [1, 2, 3, 4, 5];

let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 55 }
];

let topStudent = students.find(s => s.marks >= 85);
console.log(topStudent);

let notFound = students.find(s => s.marks > 95);
console.log(notFound); // undefined

// findIndex
let index = numbers.findIndex(num => num > 3);
console.log(index); // 3
