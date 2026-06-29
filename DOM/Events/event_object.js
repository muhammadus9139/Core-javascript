// HTML: <button id="btn">Click Me</button>

let btn = document.querySelector("#btn");

btn.addEventListener("click", function(e) {
    console.log(e);              // event object
    console.log(e.type);         // "click"
    console.log(e.target);       // clicked element
    console.log(e.currentTarget); // element with listener
    console.log(e.clientX);      // mouse X position
    console.log(e.clientY);      // mouse Y position
    console.log(e.timeStamp);    // when it happened
});

// Keyboard event
document.addEventListener("keydown", function(e) {
    console.log(e.key);     // key name
    console.log(e.code);    // key code
    console.log(e.ctrlKey); // ctrl pressed?
    console.log(e.shiftKey);// shift pressed?
});

// Prevent default
let link = document.querySelector("a");
link.addEventListener("click", function(e) {
    e.preventDefault(); // page navigate nahi hoga
    console.log("Link clicked but not navigated");
});
