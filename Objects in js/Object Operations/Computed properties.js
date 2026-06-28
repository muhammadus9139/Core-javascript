let key = "name";
let person = {
    [key]: "Ali",
    age: 20
};
console.log(person); // { name: "Ali", age: 20 }

let prefix = "user";
let profile = {
    [`${prefix}Name`]: "Ahmed",
    [`${prefix}Age`]: 25,
    [`${prefix}City`]: "Karachi"
};
console.log(profile);

function makeObject(key, value) {
    return { [key]: value };
}
console.log(makeObject("color", "red"));
console.log(makeObject("size", "large"));
