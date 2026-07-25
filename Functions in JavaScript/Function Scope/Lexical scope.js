let name = "Global Ali";

function outer() {
    let name = "Outer Ali";

    function inner() {
        console.log(name); // Outer Ali - lexical scope
    }
    inner();
}
outer();
console.log(name); // Global Ali

function parent() {
    let money = 1000;

    function child() {
        console.log(money); // 1000 - parent ka variable access
    }
    child();
}
parent();
// console.log(money); // Error - bahar access nahi
