// Promise.resolve - already resolved promise

Promise.resolve("Direct value")
    .then(val => console.log(val));

// then method chaining
Promise.resolve(1)
    .then(val => val + 1)
    .then(val => val * 2)
    .then(val => console.log(val)); // 4

// Promise.all - sab complete hon
Promise.all([
    Promise.resolve("First"),
    Promise.resolve("Second"),
    Promise.resolve("Third")
]).then(values => console.log(values));

// Promise.race - jo pehle complete ho
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Slow"), 2000)),
    new Promise(resolve => setTimeout(() => resolve("Fast"), 500))
]).then(result => console.log(result)); // Fast

// Promise.allSettled
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed"),
    Promise.resolve("Also Success")
]).then(results => console.log(results));
