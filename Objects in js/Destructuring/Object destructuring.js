let person = {
    name: "Ali",
    age: 20,
    city: "Lahore"
};

let { name, age, city } = person;
console.log(name); // Ali
console.log(age);  // 20
console.log(city); // Lahore

// Rename karna
let { name: fullName, age: years } = person;
console.log(fullName); // Ali
console.log(years);    // 20

// Default value
let { name: n, country = "Pakistan" } = person;
console.log(country); // Pakistan

// Function parameter mein
function greet({ name, age }) {
    console.log(`${name} ki umar ${age} saal hai`);
}
greet(person);
