// HTML: <button id="btn">Click Me</button>

let btn = document.querySelector("#btn");

// addEventListener
btn.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
btn.addEventListener("click", () => {
    console.log("Arrow function clicked!");
});

// Remove event listener
function handleClick() {
    console.log("Handled!");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

// Common events
// click, dblclick, mouseenter, mouseleave
// keydown, keyup, keypress
// submit, change, input, focus, blur
// load, resize, scroll
