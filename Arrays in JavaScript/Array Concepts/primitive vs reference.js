// Primitive - copy hoti hai
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

// Reference - same memory point hoti hai
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Ahmed";
console.log(obj1.name); // Ahmed
console.log(obj2.name); // Ahmed
