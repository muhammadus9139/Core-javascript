// Object destructuring in parameter
function greet({ name, age }) {
    console.log(`${name} ki umar ${age} saal hai`);
}
greet({ name: "Ali", age: 20 });

// Default values with destructuring
function createUser({ name, age = 18, city = "Lahore" } = {}) {
    return { name, age, city };
}
console.log(createUser({ name: "Ali" }));

// Array destructuring in parameter
function addFirst([a, b]) {
    return a + b;
}
console.log(addFirst([5, 3]));

// Mixed
function show({ name, scores: [first, second] }) {
    console.log(name, first, second);
}
show({ name: "Ali", scores: [90, 85] });
