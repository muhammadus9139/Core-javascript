let person = {
    name: "Ali",
    age: 20,
    greet() {
        console.log(`Hello, I am ${this.name}`);
    },
    getAge() {
        return this.age;
    }
};

person.greet();
console.log(person.getAge());

let calculator = {
    value: 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    result() {
        return this.value;
    }
};

let ans = calculator.add(10).add(5).subtract(3).result();
console.log(ans); // 12
