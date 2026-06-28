// While Loop Examples

// Sum of numbers 1 to 100
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i; // sum = sum + i
    i++;
}
console.log("Sum:", sum); // 5050

// User input simulation
let password = "1234";
let attempt = "0000";
let tries = 0;

while (attempt !== password) {
    tries++;
    // Simulate attempts
    if (tries === 1) attempt = "1111";
    else if (tries === 2) attempt = "2222";
    else if (tries === 3) attempt = "1234";
}
console.log(`Password correct! ${tries} tries mein mila`);

// Tables
let table = 5;
let num = 1;
while (num <= 10) {
    console.log(`${table} x ${num} = ${table * num}`);
    num++;
}
