// HTML: <div id="container"><p id="ref">Reference</p></div>

let container = document.querySelector("#container");
let ref = document.querySelector("#ref");

// before - element se pehle
let div1 = document.createElement("div");
div1.textContent = "Before ref";
ref.before(div1);

// after - element ke baad
let div2 = document.createElement("div");
div2.textContent = "After ref";
ref.after(div2);

// replaceWith
let newEl = document.createElement("h2");
newEl.textContent = "Replaced!";
// ref.replaceWith(newEl);

// remove - element delete karna
// ref.remove();

// replaceChild
let oldChild = container.firstElementChild;
let newChild = document.createElement("span");
newChild.textContent = "New Child";
container.replaceChild(newChild, oldChild);
