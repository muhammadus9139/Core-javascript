// Callback = function jo doosri function ko argument mein dete hain

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greet("Ali", function() {
    console.log("Callback chala!");
});

// Synchronous callback
function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(10, 5, function(a, b) {
    return a + b;
});
console.log(result); // 15

// Async callback
function fetchData(url, callback) {
    setTimeout(() => {
        let data = { name: "Ali", age: 20 };
        callback(null, data); // error-first pattern
    }, 2000);
}

fetchData("api/user", function(err, data) {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("Data:", data);
});
