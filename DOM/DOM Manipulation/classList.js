// HTML: <div id="box" class="container">Box</div>

let box = document.querySelector("#box");

// Add class
box.classList.add("active");
box.classList.add("highlight", "bold"); // multiple

// Remove class
box.classList.remove("container");

// Toggle - hai to remove, nahi to add
box.classList.toggle("active");
box.classList.toggle("active");

// Has class
console.log(box.classList.contains("active")); // true/false

// Replace class
box.classList.replace("highlight", "dim");

// All classes
console.log(box.classList);
console.log(box.className); // string

// Practical - dark mode toggle
let body = document.body;
let btn = document.querySelector("#toggleBtn");
btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
