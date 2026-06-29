// HTML: <div id="target">Target</div>

let target = document.querySelector("#target");

// beforebegin - target se pehle
target.insertAdjacentHTML("beforebegin", "<p>Before Begin</p>");

// afterbegin - target ke andar, pehle
target.insertAdjacentHTML("afterbegin", "<p>After Begin</p>");

// beforeend - target ke andar, aakhir mein
target.insertAdjacentHTML("beforeend", "<p>Before End</p>");

// afterend - target ke baad
target.insertAdjacentHTML("afterend", "<p>After End</p>");

// insertAdjacentElement
let newDiv = document.createElement("div");
newDiv.textContent = "New Div";
target.insertAdjacentElement("afterend", newDiv);
