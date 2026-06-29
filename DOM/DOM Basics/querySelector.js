// HTML:
// <h1 class="title">Hello</h1>
// <p id="para">Paragraph</p>
// <div class="box">Box 1</div>
// <div class="box">Box 2</div>

// querySelector - pehla element milta hai
let title = document.querySelector(".title");
let para = document.querySelector("#para");
let box = document.querySelector(".box");
let h1 = document.querySelector("h1");

console.log(title);
console.log(para);
console.log(box); // sirf pehla box

// querySelectorAll - sab milte hain
let allBoxes = document.querySelectorAll(".box");
console.log(allBoxes); // NodeList

allBoxes.forEach(box => {
    console.log(box.textContent);
});
