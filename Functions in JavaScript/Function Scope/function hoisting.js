// Function declaration hoisted hoti hai
greet(); // Error nahi aayega
function greet() {
    console.log("Hello!");
}

// Function expression hoisted nahi hoti
// sayHi(); // Error
const sayHi = function() {
    console.log("Hi!");
};
sayHi();

// Arrow function bhi hoisted nahi hoti
// sayBye(); // Error
const sayBye = () => {
    console.log("Bye!");
};
sayBye();
