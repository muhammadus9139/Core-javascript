// ES6 Modules - code ko multiple files mein split karna

// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export default function subtract(a, b) {
    return a - b;
}

// main.js
import subtract, { PI, add, multiply } from "./math.js";

console.log(PI);
console.log(add(5, 3));
console.log(multiply(4, 3));
console.log(subtract(10, 4));

// Alias
import { add as sum } from "./math.js";
console.log(sum(1, 2));

// Import all
import * as MathUtils from "./math.js";
console.log(MathUtils.add(1, 2));
console.log(MathUtils.PI);

// HTML mein use karna:
// <script type="module" src="main.js"></script>
