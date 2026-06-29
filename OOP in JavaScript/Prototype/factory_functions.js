// Factory function - object banane ka tarika
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, I am ${this.name}`);
        }
    };
}

let ali = createPerson("Ali", 20);
let sara = createPerson("Sara", 25);

ali.greet();
sara.greet();

// Problem - har object ki apni greet copy hoti hai
console.log(ali.greet === sara.greet); // false - memory waste

// Dono ka greet alag alag hai memory mein
console.log(ali);
console.log(sara);
