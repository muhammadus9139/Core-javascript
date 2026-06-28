let students = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "Sara", age: 22, grade: "B" },
    { name: "Ahmed", age: 21, grade: "A+" }
];

console.log(students[0]);
console.log(students[1].name);
console.log(students[2].grade);

for (let student of students) {
    console.log(`${student.name} - ${student.grade}`);
}

// Destructuring with array of objects
let [first, second] = students;
console.log(first.name);  // Ali
console.log(second.name); // Sara

// Find karna
for (let { name, grade } of students) {
    if (grade === "A+") {
        console.log(`Top student: ${name}`);
    }
}
