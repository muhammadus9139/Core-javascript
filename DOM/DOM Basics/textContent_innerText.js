// HTML:
// <p id="para">Hello <span style="display:none">Hidden</span> World</p>

let para = document.querySelector("#para");

// textContent - sab text, hidden bhi
console.log(para.textContent); // "Hello Hidden World"

// innerText - sirf visible text
console.log(para.innerText); // "Hello World"

// Text change karna
para.textContent = "New text content";
para.innerText = "New inner text";

// textContent mein HTML escape hoti hai
para.textContent = "<strong>Bold</strong>"; // HTML show nahi hoga
