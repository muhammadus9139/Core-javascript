class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }

    toString() {
        return `Animal: ${this.name}`;
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} says Woof!`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} says Meow!`);
    }

    // Parent method bhi call kar sakte hain
    toString() {
        return `${super.toString()} (Dog)`;
    }
}

let animal = new Animal("Animal");
let dog = new Dog("Bruno");
let cat = new Cat("Whiskers");

animal.speak();
dog.speak();
cat.speak();
