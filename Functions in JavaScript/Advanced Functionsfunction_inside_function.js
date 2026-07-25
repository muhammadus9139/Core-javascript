function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }
    inner();
}
outer();
// inner(); // Error - bahar access nahi

function calculator(a, b) {
    function add() { return a + b; }
    function subtract() { return a - b; }
    function multiply() { return a * b; }

    console.log(add());
    console.log(subtract());
    console.log(multiply());
}
calculator(10, 5);
