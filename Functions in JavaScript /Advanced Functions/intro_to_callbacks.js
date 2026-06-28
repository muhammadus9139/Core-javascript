function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function afterGreet() {
    console.log("Greeting done!");
}

greet("Ali", afterGreet);

// Anonymous callback
greet("Sara", function() {
    console.log("Sara ko greet kiya!");
});

// Arrow function callback
greet("Ahmed", () => {
    console.log("Ahmed ko greet kiya!");
});

// Practical - array methods use callbacks
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});
