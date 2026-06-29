// HTML:
// <div id="parent">
//     <h1>Title</h1>
//     <p>Paragraph</p>
//     <span>Span</span>
// </div>

let parent = document.querySelector("#parent");

// Children
console.log(parent.children);        // HTMLCollection - element nodes
console.log(parent.childNodes);      // NodeList - all nodes (text bhi)

// First/Last child
console.log(parent.firstElementChild);  // h1
console.log(parent.lastElementChild);   // span

// Parent
let h1 = document.querySelector("h1");
console.log(h1.parentElement);

// Siblings
console.log(h1.nextElementSibling);     // p
console.log(h1.previousElementSibling); // null

// Root nodes
console.log(document.documentElement); // html
console.log(document.head);
console.log(document.body);
