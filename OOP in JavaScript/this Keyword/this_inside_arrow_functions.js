let person = {
    name: "Ali",
    greet: () => {
        console.log(this); // window - arrow function ka apna this nahi hota
    },
    greet2() {
        console.log(this.name); // Ali - normal function
    }
};

person.greet();
person.greet2();

// Arrow function lexical this lete hai
let obj = {
    name: "Ali",
    outer() {
        console.log(this.name); // Ali

        const inner = () => {
            console.log(this.name); // Ali - parent ka this liya
        };
        inner();
    }
};
obj.outer();

// setTimeout mein
let timer = {
    name: "Timer",
    start() {
        setTimeout(() => {
            console.log(this.name); // Timer - arrow function ne this preserve kiya
        }, 1000);
    }
};
timer.start();
