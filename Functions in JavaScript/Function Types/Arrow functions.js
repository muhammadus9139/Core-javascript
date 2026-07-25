// Normal function
const add1 = function(a, b) {
    return a + b;
};

// Arrow function
const add2 = (a, b) => {
    return a + b;
};

// Short form - single expression
const add3 = (a, b) => a + b;
console.log(add3(5, 3));

// Single parameter - brackets optional
const square = x => x * x;
console.log(square(4));

// No parameter
const greet = () => "Hello!";
console.log(greet());

// Object return karna
const getPerson = (name, age) => ({ name, age });
console.log(getPerson("Ali", 20));
