let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();
console.log(fruits);

let numbers = [10, 1, 5, 3, 8];

// Ascending
numbers.sort((a, b) => a - b);
console.log(numbers);

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers);

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 75 }
];

students.sort((a, b) => b.marks - a.marks);
console.log(students);

// Original array change ho jati hai
let original = [3, 1, 2];
let sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 2]
console.log(sorted);   // [1, 2, 3]
