let target = { a: 1, b: 2 };
let source = { c: 3, d: 4 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3, d: 4 }

// Clone karna
let original = { name: "Ali", age: 20 };
let clone = Object.assign({}, original);
clone.name = "Ahmed";
console.log(original.name); // Ali
console.log(clone.name);    // Ahmed

// Multiple sources
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };
let merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }

// Override
let defaults = { color: "red", size: "medium", weight: 10 };
let custom = { color: "blue", weight: 20 };
let final = Object.assign({}, defaults, custom);
console.log(final);
