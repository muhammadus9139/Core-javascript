let map = new Map();

map.set("name", "Ali");
map.set("age", 20);
map.set("city", "Lahore");
console.log(map);

console.log(map.get("name")); // Ali
console.log(map.get("age"));  // 20

console.log(map.has("city")); // true
console.log(map.has("email")); // false

console.log(map.size); // 3

map.delete("city");
console.log(map);

// Loop karna
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Object vs Map
// Map mein koi bhi key ho sakti hai
let map2 = new Map();
map2.set(1, "number key");
map2.set(true, "boolean key");
map2.set({ id: 1 }, "object key");
console.log(map2);
