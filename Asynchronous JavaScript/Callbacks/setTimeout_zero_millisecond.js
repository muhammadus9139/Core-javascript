// 0ms ka matlab immediately nahi hota!
// Pehle synchronous code chalega

console.log("1 - sync");

setTimeout(() => {
    console.log("2 - setTimeout 0ms");
}, 0);

console.log("3 - sync");

// Output:
// 1 - sync
// 3 - sync
// 2 - setTimeout 0ms

// Kyun? Kyunki setTimeout callback queue mein jata hai
// Call stack empty hone ke baad callback queue se aata hai

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise")); // microtask
console.log("End");

// Output:
// Start
// End
// Promise (microtask pehle)
// Timeout (callback queue baad mein)
