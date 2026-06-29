let user = {
    name: "Ali",
    address: {
        city: "Lahore",
        zip: "54000"
    }
};

// Bina optional chaining
if (user && user.address && user.address.city) {
    console.log(user.address.city);
}

// Optional chaining se
console.log(user?.address?.city);    // Lahore
console.log(user?.phone?.number);    // undefined - error nahi

// Array mein
let arr = [1, 2, 3];
console.log(arr?.[0]); // 1
console.log(arr?.[10]); // undefined

// Function mein
let person = {
    name: "Ali",
    greet: function() {
        return "Hello!";
    }
};

console.log(person.greet?.());    // Hello!
console.log(person.sayBye?.());   // undefined - error nahi

// Nullish coalescing ke saath
let city = user?.address?.city ?? "City not found";
console.log(city);

let country = user?.address?.country ?? "Pakistan";
console.log(country);
