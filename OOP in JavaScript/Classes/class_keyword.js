class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }

    getAge() {
        return this.age;
    }
}

let ali = new Person("Ali", 20);
let sara = new Person("Sara", 25);

ali.greet();
sara.greet();

console.log(ali instanceof Person); // true
console.log(typeof Person);         // function - class bhi function hai
