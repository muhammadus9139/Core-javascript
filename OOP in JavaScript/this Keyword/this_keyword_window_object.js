// Global scope mein this = window (browser) / global (node)
console.log(this);

function showThis() {
    console.log(this);
}
showThis();

let person = {
    name: "Ali",
    greet() {
        console.log(this);       // person object
        console.log(this.name);  // Ali
    }
};
person.greet();

// this change ho jata hai
let greetFunc = person.greet;
greetFunc(); // this = window/global

// Nested function mein this
let obj = {
    name: "Ali",
    outer() {
        console.log(this.name); // Ali

        function inner() {
            console.log(this); // window - this lost ho gaya
        }
        inner();
    }
};
obj.outer();
