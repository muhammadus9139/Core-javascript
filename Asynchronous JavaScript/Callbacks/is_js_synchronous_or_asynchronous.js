// JS single threaded + synchronous hai
// lekin async kaam bhi kar sakta hai - Web APIs ki madad se

// Synchronous - ek ke baad ek
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third - order mein

// Asynchronous - wait nahi karta
console.log("Start");
setTimeout(() => {
    console.log("Async task");
}, 2000);
console.log("End");
// Output: Start, End, Async task
// JS ne setTimeout Web API ko de diya aur aage badh gaya
