// let keyword
let name = "Ali";
console.log(name);

// let ko re-declare nahi kar sakte
// let name = "Ahmed"; // Error aayega

// let ki value change ho sakti hai
name = "Ahmed";
console.log(name);

// let block scoped hai
{
    let blockVar = "Main block ke andar hoon";
    console.log(blockVar); // works
}
// console.log(blockVar); // Error - block ke bahar access nahi hoga

// let hoisting - but TDZ (Temporal Dead Zone)
// console.log(z); // Error - Cannot access before initialization
let z = 5;
console.log(z);
