// Lexical Environment = local memory + parent ka reference

let globalVar = "Global";

function outer() {
    let outerVar = "Outer";

    function middle() {
        let middleVar = "Middle";

        function inner() {
            let innerVar = "Inner";

            // Scope chain:
            // inner -> middle -> outer -> global
            console.log(innerVar);   // Inner
            console.log(middleVar);  // Middle
            console.log(outerVar);   // Outer
            console.log(globalVar);  // Global
        }
        inner();
    }
    middle();
}
outer();

// Variable bahar se andar nahi dekha ja sakta
function parent() {
    let secret = "hidden";
}
// console.log(secret); // Error
