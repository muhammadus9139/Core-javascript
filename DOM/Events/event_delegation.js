// HTML: <ul id="list"><li>Item 1</li><li>Item 2</li></ul>

let list = document.querySelector("#list");

// Parent pe ek event - sab children handle honge
list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "yellow";
        console.log(e.target.textContent);
    }
});

// Dynamic elements bhi handle honge
let btn = document.querySelector("#addBtn");
btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
    // Nayi li bhi automatically click handle karegi!
});
