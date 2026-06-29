// Promise vs setTimeout order

console.log("1 - sync");

setTimeout(() => console.log("2 - setTimeout"), 0);

Promise.resolve().then(() => console.log("3 - promise"));

console.log("4 - sync");

// Output: 1, 4, 3, 2

// Promise inside setTimeout
setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("Promise inside timeout");
    });
    console.log("Inside timeout");
}, 1000);

// setTimeout inside Promise
Promise.resolve().then(() => {
    setTimeout(() => {
        console.log("Timeout inside promise");
    }, 0);
    console.log("Inside promise");
});
