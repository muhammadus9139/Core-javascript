let person = {
    name: "Ali",
    age: 20,
    "full name": "Ali Ahmed"
};

// Dot notation
console.log(person.name);
console.log(person.age);

// Bracket notation
console.log(person["name"]);
console.log(person["full name"]);

// Dynamic key
let key = "age";
console.log(person[key]); // 20

// Dot notation dynamic nahi hoti
// console.log(person.key); // undefined
