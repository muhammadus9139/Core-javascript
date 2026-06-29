// let aur const bhi hoist hote hain
// lekin Temporal Dead Zone (TDZ) mein hote hain

// console.log(a); // Error: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10

// console.log(b); // Error: Cannot access 'b' before initialization
const b = 20;
console.log(b); // 20

// TDZ example
{
    // TDZ shuru - let x declare hone se pehle
    // console.log(x); // Error
    let x = 5; // TDZ khatam
    console.log(x); // 5
}

// var vs let
console.log(typeof undeclaredVar); // undefined - no error
// console.log(typeof undeclaredLet); // Error - TDZ
