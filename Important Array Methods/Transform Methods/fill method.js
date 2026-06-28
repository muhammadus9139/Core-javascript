let arr = [1, 2, 3, 4, 5];

arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 4);
console.log(arr2); // [1, 2, 0, 0, 5]

let arr3 = new Array(5).fill(0);
console.log(arr3); // [0, 0, 0, 0, 0]

let arr4 = new Array(3).fill("hello");
console.log(arr4); // ["hello", "hello", "hello"]
