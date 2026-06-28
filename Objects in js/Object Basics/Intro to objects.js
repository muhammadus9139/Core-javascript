let person = {
    name: "Ali",
    age: 20,
    city: "Lahore",
    isStudent: true
};

console.log(person);
console.log(person.name);
console.log(person.age);

person.email = "ali@gmail.com";
console.log(person);

delete person.isStudent;
console.log(person);

let empty = {};
console.log(typeof empty);
