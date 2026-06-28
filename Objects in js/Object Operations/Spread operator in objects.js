let person = { name: "Ali", age: 20 };

// Clone
let clone = { ...person };
clone.name = "Ahmed";
console.log(person.name); // Ali
console.log(clone.name);  // Ahmed

// Merge
let address = { city: "Lahore", country: "Pakistan" };
let fullProfile = { ...person, ...address };
console.log(fullProfile);

// Override
let updated = { ...person, age: 25 };
console.log(updated); // age 25 ho gaya
