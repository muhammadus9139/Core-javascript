// Har function call pe naya Execution Context banta hai

function add(a, b) {
    // Naya execution context bana
    // Memory phase: a=undefined, b=undefined, result=undefined
    // Execution phase: a=5, b=3, result=8
    let result = a + b;
    return result;
}

let sum = add(5, 3);
console.log(sum);

// Call Stack
function first() {
    console.log("First start");
    second();
    console.log("First end");
}

function second() {
    console.log("Second start");
    third();
    console.log("Second end");
}

function third() {
    console.log("Third");
}

first();
// Call Stack:
// third()  <- top
// second()
// first()
// global
