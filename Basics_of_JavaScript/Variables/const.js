// const keyword
const PI = 3.14159;
console.log(PI);

// const ki value change NAHI ho sakti
// PI = 3; // Error: Assignment to constant variable

// const ko declare karte waqt value deni zaroori hai
// const x; // Error

// const bhi block scoped hai
{
    const blockConst = "Main block mein hoon";
    console.log(blockConst);
}

// const ke saath object/array - values change ho sakti hain
const person = { name: "Ali", age: 20 };
person.name = "Ahmed"; // Yeh allowed hai
console.log(person);

const arr = [1, 2, 3];
arr.push(4); // Yeh bhi allowed hai
console.log(arr);
