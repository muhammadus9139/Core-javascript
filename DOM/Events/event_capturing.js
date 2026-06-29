// HTML:
// <div id="grandparent">
//     <div id="parent">
//         <button id="child">Click</button>
//     </div>
// </div>

let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// Capturing - upar se neeche (3rd param true)
grandparent.addEventListener("click", () => {
    console.log("Grandparent - capturing");
}, true);

parent.addEventListener("click", () => {
    console.log("Parent - capturing");
}, true);

child.addEventListener("click", () => {
    console.log("Child - capturing");
}, true);

// Order: Grandparent -> Parent -> Child (capturing)
// Phir: Child -> Parent -> Grandparent (bubbling)
