// HTML:
// <li class="item">Item 1</li>
// <li class="item">Item 2</li>
// <li class="item">Item 3</li>

let items = document.querySelectorAll(".item");

// forEach se har element pe event
items.forEach(item => {
    item.addEventListener("click", function() {
        this.style.backgroundColor = "yellow";
        console.log(this.textContent);
    });
});

// Mouseenter/mouseleave
items.forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "lightblue";
    });
    item.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";
    });
});
