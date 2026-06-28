let person = {
    name: "Ali",
    age: 20,
    city: "Lahore"
};

// for...in loop
for (let key in person) {
    console.log(key, ":", person[key]);
}

// Object.keys()
console.log(Object.keys(person));   // ["name", "age", "city"]

// Object.values()
console.log(Object.values(person)); // ["Ali", 20, "Lahore"]

// Object.entries()
console.log(Object.entries(person));
// [["name","Ali"], ["age",20], ["city","Lahore"]]

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
