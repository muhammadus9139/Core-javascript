// HTML: <div id="box">Box</div>

let box = document.querySelector("#box");

// Inline styles
box.style.backgroundColor = "red";
box.style.width = "200px";
box.style.height = "200px";
box.style.borderRadius = "10px";
box.style.fontSize = "20px";
box.style.color = "white";
box.style.textAlign = "center";

// Multiple styles ek saath
box.style.cssText = `
    background-color: blue;
    width: 300px;
    height: 300px;
    padding: 20px;
`;

// Computed styles dekhna
let styles = window.getComputedStyle(box);
console.log(styles.backgroundColor);
console.log(styles.width);
