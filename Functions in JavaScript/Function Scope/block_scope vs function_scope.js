// var - function scoped
function test() {
    var x = 10;
    if (true) {
        var x = 20; // same variable
        console.log(x); // 20
    }
    console.log(x); // 20
}
test();

// let/const - block scoped
function test2() {
    let y = 10;
    if (true) {
        let y = 20; // alag variable
        console.log(y); // 20
    }
    console.log(y); // 10
}
test2();

// Block scope example
{
    let blockVar = "main block mein";
    var funcVar = "function mein";
}
// console.log(blockVar); // Error
console.log(funcVar); // works
