function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Arrow function version
const multiplier2 = factor => number => number * factor;
const double2 = multiplier2(2);
console.log(double2(5)); // 10

function greetMaker(greeting) {
    return function(name) {
        return `${greeting} ${name}!`;
    };
}

const sayHello = greetMaker("Hello");
const sayHi = greetMaker("Hi");

console.log(sayHello("Ali"));   // Hello Ali!
console.log(sayHi("Sara"));     // Hi Sara!
