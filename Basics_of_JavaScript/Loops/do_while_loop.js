// Do While Loop
// Pehle execute hota hai, phir condition check hoti hai

let i = 1;
do {
    console.log("Number:", i);
    i++;
} while (i <= 5);

// Difference - condition false ho tab bhi ek baar chalega
let x = 10;
do {
    console.log("Yeh ek baar chalega:", x);
    x++;
} while (x < 5); // condition false hai - phir bhi ek baar chala

// Practical example - input validation
let input;
let attempts = 0;
do {
    attempts++;
    input = attempts === 3 ? "quit" : ""; // simulate
    console.log(`Attempt ${attempts}`);
} while (input !== "quit");
console.log("Done!");
