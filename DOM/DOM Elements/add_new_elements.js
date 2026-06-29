// HTML: <ul id="list"></ul>

let list = document.querySelector("#list");

// appendChild
let li = document.createElement("li");
li.textContent = "New Item";
list.appendChild(li);

// prepend - pehle add karna
let firstLi = document.createElement("li");
firstLi.textContent = "First Item";
list.prepend(firstLi);

// append - multiple items
let li2 = document.createElement("li");
li2.textContent = "Item 2";
let li3 = document.createElement("li");
li3.textContent = "Item 3";
list.append(li2, li3);

// Text directly append
list.append(" Extra text");
