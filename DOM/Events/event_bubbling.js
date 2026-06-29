// HTML:
// <div id="grandparent">
//     <div id="parent">
//         <button id="child">Click</button>
//     </div>
// </div>

let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// Event upar bubble karta hai
child.addEventListener("click", () => console.log("Child clicked"));
parent.addEventListener("click", () => console.log("Parent clicked"));
grandparent.addEventListener("click", () => console.log("Grandparent clicked"));
// Output: Child -> Parent -> Grandparent

// Bubbling rokna
child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Stopped here!");
});
