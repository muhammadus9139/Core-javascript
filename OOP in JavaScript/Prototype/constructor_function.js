function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} says ${this.sound}`);
};

Animal.prototype.toString = function() {
    return `Animal: ${this.name}`;
};

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");

dog.speak();
cat.speak();

console.log(dog instanceof Animal); // true
console.log(dog.constructor === Animal); // true

// Inheritance with constructor function
function Dog(name) {
    Animal.call(this, name, "Woof");
    this.type = "Dog";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function() {
    console.log(`${this.name} is fetching!`);
};

let myDog = new Dog("Bruno");
myDog.speak();
myDog.fetch();
