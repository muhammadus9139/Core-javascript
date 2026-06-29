// HTML:
// <h1 id="title">Hello World</h1>
// <p id="para">Yeh paragraph hai</p>

let title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

let para = document.getElementById("para");
para.textContent = "Text change ho gaya!";

// Agar id exist nahi karta
let notFound = document.getElementById("xyz");
console.log(notFound); // null
