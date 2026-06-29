// Browser mein global this = window object
// Node mein global this = {}

console.log(this); // browser: window, node: {}

var name = "Ali"; // var global object pe jata hai
console.log(this.name); // browser: "Ali"

let age = 20; // let global object pe nahi jata
console.log(this.age); // undefined

function showThis() {
    console.log(this); // non-strict: window, strict: undefined
}
showThis();

// Strict mode mein
function strictFunc() {
    "use strict";
    console.log(this); // undefined
}
strictFunc();
