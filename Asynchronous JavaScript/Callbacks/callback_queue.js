// Event Loop ka kaam:
// Call Stack empty hone pe Callback Queue se kaam uthana

// Call Stack - synchronous code yahan chalta hai
// Web APIs - setTimeout, fetch, DOM events yahan handle hote hain
// Callback Queue - async callbacks yahan wait karte hain
// Microtask Queue - Promises yahan hoti hain (priority zyada)
// Event Loop - stack empty? queue se le lo

console.log("Start"); // Call Stack

setTimeout(() => {
    console.log("Callback Queue");  // Callback Queue
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask Queue"); // Microtask Queue
});

console.log("End"); // Call Stack

// Output:
// Start
// End
// Microtask Queue (pehle - high priority)
// Callback Queue (baad mein)
