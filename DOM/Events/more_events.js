// HTML: <div id="box" style="width:200px;height:200px;background:red"></div>

let box = document.querySelector("#box");

// Mouse events
box.addEventListener("mouseenter", () => console.log("Mouse entered"));
box.addEventListener("mouseleave", () => console.log("Mouse left"));
box.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
});
box.addEventListener("dblclick", () => console.log("Double clicked"));

// Window events
window.addEventListener("resize", () => {
    console.log(window.innerWidth, window.innerHeight);
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});

window.addEventListener("load", () => {
    console.log("Page fully loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready");
});
