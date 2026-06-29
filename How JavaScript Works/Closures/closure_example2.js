// Closure - Function Factory

function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);
let quadruple = makeMultiplier(4);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(quadruple(5)); // 20

// Closure - Memoization
function memoize(fn) {
    let cache = {};

    return function(n) {
        if (cache[n] !== undefined) {
            console.log("Cache se mila!");
            return cache[n];
        }
        cache[n] = fn(n);
        return cache[n];
    };
}

function slowSquare(n) {
    return n * n;
}

let fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // calculate kiya
console.log(fastSquare(5)); // cache se mila
console.log(fastSquare(6)); // calculate kiya
