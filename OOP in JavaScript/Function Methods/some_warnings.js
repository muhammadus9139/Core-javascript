// Warning 1 - method ko variable mein store karna
let person = {
    name: "Ali",
    greet() {
        console.log(this.name);
    }
};

let fn = person.greet;
fn(); // undefined - this lost ho gaya

// Fix - bind use karo
let fn2 = person.greet.bind(person);
fn2(); // Ali

// Warning 2 - object method ko callback pass karna
let btn = {
    text: "Click me",
    handleClick() {
        console.log(this.text);
    }
};

// Yeh kaam nahi karega
setTimeout(btn.handleClick, 100); // undefined

// Fix
setTimeout(btn.handleClick.bind(btn), 100); // Click me

// Warning 3 - arrow function mein call/apply/bind kaam nahi karta
let arrow = {
    name: "Ali",
    greet: () => {
        console.log(this?.name); // undefined hoga hamesha
    }
};
arrow.greet.call({ name: "Sara" }); // still undefined
