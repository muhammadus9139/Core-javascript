// Null, Undefined, BigInt, typeof

// Undefined - variable declare hua but value nahi di
let a;
console.log(a);          // undefined
console.log(typeof a);   // "undefined"

// Null - intentionally empty value
let b = null;
console.log(b);          // null
console.log(typeof b);   // "object" (JS ka purana bug)

// BigInt - bohot bade numbers ke liye
let bigNum = 9999999999999999999n;
console.log(bigNum);
console.log(typeof bigNum); // "bigint"

// typeof operator
console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function
