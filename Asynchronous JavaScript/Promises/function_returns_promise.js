function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: "Ali", age: 20 });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

fetchUser(1)
    .then(user => console.log(user))
    .catch(err => console.log(err));

fetchUser(-1)
    .then(user => console.log(user))
    .catch(err => console.log(err));

// Promise chaining
function double(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 2), 500);
    });
}

double(5)
    .then(result => double(result))
    .then(result => double(result))
    .then(result => console.log(result)); // 40
