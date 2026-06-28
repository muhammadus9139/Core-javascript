let person = {
    name: "Ali",
    age: 20,
    address: {
        city: "Lahore",
        country: "Pakistan",
        zip: "54000"
    }
};

// Nested object destructuring
let { name, address: { city, country } } = person;
console.log(name);    // Ali
console.log(city);    // Lahore
console.log(country); // Pakistan

// Nested array destructuring
let matrix = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d]] = matrix;
console.log(a, b); // 1 2
console.log(c, d); // 3 4

// Mixed - array of objects
let users = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Sara", scores: [88, 95, 78] }
];

let [{ name: n1, scores: [s1, s2] }] = users;
console.log(n1); // Ali
console.log(s1); // 90
console.log(s2); // 85
