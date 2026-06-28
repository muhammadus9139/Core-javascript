// Nested If Else
let age = 20;
let hasID = true;
let hasMoney = true;

if (age >= 18) {
    console.log("Umar theek hai");
    if (hasID) {
        console.log("ID bhi hai");
        if (hasMoney) {
            console.log("Entry mil gayi!");
        } else {
            console.log("Paisa nahi hai");
        }
    } else {
        console.log("ID nahi hai");
    }
} else {
    console.log("Umar kam hai");
}

// Better tarika - && use karo
if (age >= 18 && hasID && hasMoney) {
    console.log("Entry mil gayi!");
} else {
    console.log("Entry nahi mili");
}
