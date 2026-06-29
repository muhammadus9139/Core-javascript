// HTML: <div id="box" style="width:200px; height:100px; padding:20px">Box</div>

let box = document.querySelector("#box");

// getBoundingClientRect
let rect = box.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
console.log(rect.top);
console.log(rect.left);
console.log(rect.right);
console.log(rect.bottom);

// offsetWidth/offsetHeight - padding include
console.log(box.offsetWidth);
console.log(box.offsetHeight);

// clientWidth/clientHeight - padding include, border nahi
console.log(box.clientWidth);
console.log(box.clientHeight);

// scrollWidth/scrollHeight
console.log(box.scrollWidth);
console.log(box.scrollHeight);

// Position
console.log(box.offsetTop);
console.log(box.offsetLeft);
