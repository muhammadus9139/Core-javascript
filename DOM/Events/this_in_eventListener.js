// HTML:
// <button class="btn">Button 1</button>
// <button class="btn">Button 2</button>
// <button class="btn">Button 3</button>

let buttons = document.querySelectorAll(".btn");

// Normal function - this = clicked element
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log(this);            // button element
        console.log(this.textContent); // button text
        this.style.backgroundColor = "red";
    });
});

// Arrow function - this = window (parent ka this)
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(this); // window - not the button!
    });
});
