class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age negative nahi ho sakti!");
            return;
        }
        this._age = value;
    }
}

let person = new Person("Ali", "Ahmed", 20);
console.log(person.fullName);  // Ali Ahmed

person.fullName = "Sara Khan";
console.log(person.firstName); // Sara
console.log(person.lastName);  // Khan

person.age = -5;               // Error message
person.age = 25;
console.log(person.age);       // 25
