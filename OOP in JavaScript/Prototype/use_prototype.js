function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype pe method add karo - sab share karenge
Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
};

Person.prototype.getAge = function() {
    return this.age;
};

let ali = new Person("Ali", 20);
let sara = new Person("Sara", 25);

ali.greet();
sara.greet();

// Ab dono same method share karte hain
console.log(ali.greet === sara.greet); // true - memory efficient
