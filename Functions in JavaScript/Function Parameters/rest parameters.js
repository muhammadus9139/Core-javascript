function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function introduce(firstName, lastName, ...hobbies) {
    console.log(`${firstName} ${lastName}`);
    console.log("Hobbies:", hobbies);
}
introduce("Ali", "Ahmed", "coding", "gaming", "reading");

// Rest hamesha last mein hota hai
function show(first, second, ...rest) {
    console.log(first);
    console.log(second);
    console.log(rest);
}
show(1, 2, 3, 4, 5);
