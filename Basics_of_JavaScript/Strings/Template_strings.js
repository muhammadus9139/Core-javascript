// Template Strings (Template Literals)
let name = "Ali";
let age = 20;
let city = "Lahore";

// Purana tarika
let old = "Mera naam " + name + " hai aur meri umar " + age + " saal hai";
console.log(old);

// Template string tarika - backticks use hoti hain
let modern = `Mera naam ${name} hai aur meri umar ${age} saal hai`;
console.log(modern);

// Expression bhi likh sakte hain
console.log(`2 + 2 = ${2 + 2}`);
console.log(`Kya Ali hai? ${name === "Ali" ? "Haan" : "Nahi"}`);

// Multi-line string
let multiLine = `Yeh pehli line hai
Yeh doosri line hai
Yeh teesri line hai`;
console.log(multiLine);
