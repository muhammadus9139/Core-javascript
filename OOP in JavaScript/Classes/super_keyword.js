class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof"); // parent constructor call
        this.type = "Dog";
    }

    fetch() {
        console.log(`${this.name} is fetching!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
        this.type = "Cat";
    }

    purr() {
        console.log(`${this.name} is purring!`);
    }
}

let dog = new Dog("Bruno");
let cat = new Cat("Whiskers");

dog.speak();
dog.fetch();
cat.speak();
cat.purr();
