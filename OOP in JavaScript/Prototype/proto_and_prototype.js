let arr = [1, 2, 3];

// Array ka __proto__ dekhna
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

// Prototype chain
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

let obj = { name: "Ali" };
console.log(obj.__proto__ === Object.prototype); // true

// Prototype chain se method milti hai
// arr.push -> Array.prototype.push
// arr.toString -> Object.prototype.toString

function Person(name) {
    this.name = name;
}
let person = new Person("Ali");
console.log(person.__proto__ === Person.prototype); // true
