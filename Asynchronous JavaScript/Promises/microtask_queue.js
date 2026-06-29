// Microtask Queue - Promises ki callbacks yahan jati hain
// Callback Queue se pehle execute hoti hain

console.log("Start");

setTimeout(() => {
    console.log("setTimeout"); // Callback Queue
}, 0);

Promise.resolve("Promise").then(val => {
    console.log(val); // Microtask Queue
});

console.log("End");

// Output:
// Start
// End
// Promise  (microtask - pehle)
// setTimeout (callback queue - baad mein)

// Multiple microtasks
Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Microtask 3"));

// Output: Microtask 1, 2, 3, setTimeout
