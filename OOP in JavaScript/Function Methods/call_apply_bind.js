let person1 = { name: "Ali", age: 20 };
let person2 = { name: "Sara", age: 25 };

function greet(city, country) {
    console.log(`${this.name} from ${city}, ${country}`);
}

// call - arguments alag alag
greet.call(person1, "Lahore", "Pakistan");
greet.call(person2, "Karachi", "Pakistan");

// apply - arguments array mein
greet.apply(person1, ["Lahore", "Pakistan"]);
greet.apply(person2, ["Karachi", "Pakistan"]);

// bind - new function return karta hai
let greetAli = greet.bind(person1, "Lahore", "Pakistan");
greetAli();

let greetSara = greet.bind(person2);
greetSara("Karachi", "Pakistan");
