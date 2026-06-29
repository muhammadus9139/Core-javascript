// Promise - future mein value milegi ya error

// 3 states:
// Pending  - abhi chal raha hai
// Fulfilled - kaam ho gaya
// Rejected - kuch gadbad ho gayi

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Kaam ho gaya!");
    } else {
        reject("Kuch gadbad ho gayi!");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Hamesha chalta hai"));

// Async promise
let fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Ali", age: 20 });
    }, 2000);
});

fetchUser.then(user => console.log(user));
