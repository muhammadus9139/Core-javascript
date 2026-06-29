// Purana tarika
let obj1 = {
    name: "Ali",
    greet: function() {
        console.log(this.name);
    }
};

// Short syntax
let obj2 = {
    name: "Ali",
    greet() {
        console.log(this.name);
    }
};

obj1.greet();
obj2.greet();

// Class mein bhi same
class Person {
    constructor(name) {
        this.name = name;
    }

    // Short syntax
    greet() {
        console.log(`Hello ${this.name}`);
    }

    getInfo() {
        return `Name: ${this.name}`;
    }
}

let p = new Person("Ali");
p.greet();
