function greet() {
    console.log("Hello!");
}
greet();

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Ali", "Ahmed"));
