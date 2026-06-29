// Closure - Loop problem

// Problem - var ke saath
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // 4, 4, 4 - wrong
    }, i * 1000);
}

// Fix 1 - let use karo
for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log(j); // 1, 2, 3 - correct
    }, j * 1000);
}

// Fix 2 - Closure use karo
for (var k = 1; k <= 3; k++) {
    (function(k) {
        setTimeout(function() {
            console.log(k); // 1, 2, 3 - correct
        }, k * 1000);
    })(k);
}
