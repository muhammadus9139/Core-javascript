// Break and Continue

// Break - loop band kar do
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // 5 par loop ruk jayega
    }
    console.log(i); // 1, 2, 3, 4
}

// Continue - yeh iteration skip karo
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // even numbers skip
    }
    console.log(i); // 1, 3, 5, 7, 9
}

// While mein break
let i = 0;
while (true) { // infinite loop
    i++;
    if (i === 5) break;
    console.log(i);
}
