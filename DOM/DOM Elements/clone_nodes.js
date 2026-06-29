// HTML: <div id="card"><h2>Title</h2><p>Description</p></div>

let card = document.querySelector("#card");

// Shallow clone - sirf element, children nahi
let shallowClone = card.cloneNode(false);
console.log(shallowClone); // <div id="card"></div>

// Deep clone - element + sab children
let deepClone = card.cloneNode(true);
console.log(deepClone); // complete card

// Clone ko DOM mein add karna
deepClone.querySelector("h2").textContent = "Cloned Title";
document.body.appendChild(deepClone);

// List items clone karna
let list = document.querySelector("#list");
let firstItem = list.firstElementChild;

for (let i = 0; i < 3; i++) {
    let clone = firstItem.cloneNode(true);
    clone.textContent = `Item ${i + 2}`;
    list.appendChild(clone);
}
