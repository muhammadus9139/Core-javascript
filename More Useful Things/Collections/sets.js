let set = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(set); // {1, 2, 3, 4, 5} - duplicates nahi

set.add(6);
set.add(3); // duplicate - add nahi hoga
console.log(set);

set.delete(1);
console.log(set);

console.log(set.has(3)); // true
console.log(set.has(10)); // false

console.log(set.size);

// Loop karna
for (let item of set) {
    console.log(item);
}

// Array se duplicates remove karna
let arr = [1, 2, 2, 3, 3, 4, 5, 5];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

set.clear();
console.log(set);
