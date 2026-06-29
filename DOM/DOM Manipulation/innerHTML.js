// HTML: <div id="container"></div>

let container = document.querySelector("#container");

// innerHTML - HTML parse hoti hai
container.innerHTML = "<h2>Hello World</h2>";
container.innerHTML = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;

// innerHTML read karna
console.log(container.innerHTML);

// Append karna
container.innerHTML += "<p>New paragraph</p>";

// Warning - innerHTML XSS attack ka risk hai
// User input innerHTML mein directly mat dalo
let userInput = "<img src=x onerror='alert(1)'>";
// container.innerHTML = userInput; // Dangerous!
container.textContent = userInput; // Safe
