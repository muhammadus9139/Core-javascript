// HTML: <a id="link" href="https://google.com" class="btn">Google</a>

let link = document.querySelector("#link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.getAttribute("class"));
console.log(link.getAttribute("id"));

// Set attribute
link.setAttribute("href", "https://youtube.com");
link.setAttribute("target", "_blank");
link.setAttribute("class", "new-class");

// Has attribute
console.log(link.hasAttribute("href")); // true
console.log(link.hasAttribute("xyz"));  // false

// Remove attribute
link.removeAttribute("target");

// Direct property access
console.log(link.href);
console.log(link.id);
link.href = "https://github.com";
