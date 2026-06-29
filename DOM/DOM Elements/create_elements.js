// HTML: <div id="container"></div>

let container = document.querySelector("#container");

// Element banana
let div = document.createElement("div");
div.textContent = "New div";
div.classList.add("box");
div.style.backgroundColor = "lightblue";
div.setAttribute("id", "newDiv");

container.appendChild(div);

// Card banana
function createCard(title, description) {
    let card = document.createElement("div");
    card.classList.add("card");

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p = document.createElement("p");
    p.textContent = description;

    card.appendChild(h2);
    card.appendChild(p);

    return card;
}

let card = createCard("Ali Ahmed", "JS Developer");
container.appendChild(card);
