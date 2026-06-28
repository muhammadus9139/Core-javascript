function greet(name = "Guest") {
    console.log(`Hello ${name}!`);
}
greet("Ali");   // Hello Ali!
greet();        // Hello Guest!

function add(a, b = 10) {
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add(5));    // 15

function createUser(name, age = 18, city = "Lahore") {
    return { name, age, city };
}
console.log(createUser("Ali"));
console.log(createUser("Sara", 25));
console.log(createUser("Ahmed", 30, "Karachi"));
