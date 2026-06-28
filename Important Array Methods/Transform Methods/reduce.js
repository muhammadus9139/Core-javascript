let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, numbers[0]);
console.log(max); // 5

let students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 75 }
];

let totalMarks = students.reduce((acc, s) => acc + s.marks, 0);
console.log(totalMarks);

let avg = totalMarks / students.length;
console.log(avg);
