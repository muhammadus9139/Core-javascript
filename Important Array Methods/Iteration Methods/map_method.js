let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let squared = numbers.map(num => num ** 2);
console.log(squared);

let fruits = ["apple", "banana", "mango"];
let upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper);

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 75 }
];

let names = students.map(s => s.name);
console.log(names);

let withGrade = students.map(s => ({
    ...s,
    grade: s.marks >= 85 ? "A" : "B"
}));
console.log(withGrade);
