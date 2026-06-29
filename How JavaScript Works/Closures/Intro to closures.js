// Closure = function + uska lexical environment

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// outer() khatam ho gaya lekin
// count variable abhi bhi accessible hai
// yahi closure hai

let counter2 = outer(); // naya closure
counter2(); // 1 - apna alag count
