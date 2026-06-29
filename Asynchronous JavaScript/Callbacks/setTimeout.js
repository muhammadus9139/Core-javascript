// setTimeout(callback, delay)
// delay milliseconds mein hoti hai

setTimeout(() => {
    console.log("2 second baad");
}, 2000);

setTimeout(() => {
    console.log("1 second baad");
}, 1000);

setTimeout(() => {
    console.log("Abhi");
}, 0);

console.log("Synchronous code");
// Output:
// Synchronous code
// Abhi (0ms - but still async)
// 1 second baad
// 2 second baad

// setTimeout ka ID
let id = setTimeout(() => {
    console.log("Yeh nahi chalega");
}, 3000);

clearTimeout(id); // cancel kar diya
