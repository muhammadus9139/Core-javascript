// String Indexing
let str = "JavaScript";

// Index 0 se shuru hota hai
console.log(str[0]); // J
console.log(str[1]); // a
console.log(str[4]); // S

// String ki length
console.log(str.length); // 10

// Last character
console.log(str[str.length - 1]); // t

// String loop karna
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// Negative index kaam nahi karta JS mein
console.log(str[-1]); // undefined
