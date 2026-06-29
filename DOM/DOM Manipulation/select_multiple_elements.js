// HTML:
// <li class="item">Item 1</li>
// <li class="item">Item 2</li>
// <li class="item">Item 3</li>

let items = document.querySelectorAll(".item");

// forEach
items.forEach((item, index) => {
    console.log(index, item.textContent);
});

// for...of
for (let item of items) {
    item.style.color = "red";
}

// Array mein convert karna
let itemsArray = Array.from(items);
let texts = itemsArray.map(item => item.textContent);
console.log(texts);

// getElementsByClassName
let byClass = document.getElementsByClassName("item");
// Yeh live collection hai - DOM change hone pe update hoti hai

// getElementsByTagName
let allLi = document.getElementsByTagName("li");
console.log(allLi.length);
