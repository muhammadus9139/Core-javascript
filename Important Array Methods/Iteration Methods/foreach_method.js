let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log(sum);

let students = [
    { name: "Ali", grade: "A" },
    { name: "Sara", grade: "B" }
];
students.forEach(({ name, grade }) => {
    console.log(`${name}: ${grade}`);
});
