// && (AND) and || (OR) Operators

// && - dono true hone chahiye
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// || - koi ek true hona chahiye
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Practical example
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Aap car chala sakte hain");
}

// || - default value ke liye
let username = "";
let displayName = username || "Guest";
console.log(displayName); // Guest

// Short circuit evaluation
let a = null;
let b = a && a.name; // a.name pe error nahi aayega
console.log(b); // null
