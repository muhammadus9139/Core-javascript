// HTML:
// <input id="input" type="text" placeholder="Type here">
// <p id="output"></p>

let input = document.querySelector("#input");
let output = document.querySelector("#output");

// Input event - har character pe
input.addEventListener("input", function() {
    output.textContent = this.value;
});

// Focus/Blur
input.addEventListener("focus", function() {
    this.style.borderColor = "blue";
});

input.addEventListener("blur", function() {
    this.style.borderColor = "";
});

// Keydown
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        console.log("Enter pressed:", this.value);
        this.value = "";
    }
});
