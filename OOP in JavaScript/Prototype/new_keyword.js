function Person(name, age) {
    // new keyword yeh kaam karta hai internally:
    // 1. Naya empty object banata hai {}
    // 2. this = naya object
    // 3. __proto__ set karta hai
    // 4. Object return karta hai

    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
};

let ali = new Person("Ali", 20);
console.log(ali);
ali.greet();

// new ke bina - this = window
let broken = Person("Sara", 25); // window.name = "Sara"
console.log(broken); // undefined
