// HTML: <button id="btn">Click</button>

let btn = document.querySelector("#btn");

// Ek element pe multiple events
btn.addEventListener("click", () => console.log("First"));
btn.addEventListener("click", () => console.log("Second"));
btn.addEventListener("click", () => console.log("Third"));
// Sab chalenge: First, Second, Third

// Once option - sirf ek baar chalega
btn.addEventListener("click", () => {
    console.log("Only once!");
}, { once: true });

// Passive option - scroll performance
document.addEventListener("scroll", () => {
    console.log("Scrolling...");
}, { passive: true });
