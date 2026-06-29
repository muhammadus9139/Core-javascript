class MathHelper {
    static PI = 3.14159;

    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static circleArea(radius) {
        return MathHelper.PI * radius * radius;
    }
}

// Object banaye bina directly call
console.log(MathHelper.PI);
console.log(MathHelper.add(5, 3));
console.log(MathHelper.multiply(4, 3));
console.log(MathHelper.circleArea(5));

class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }

    static getCount() {
        return Counter.count;
    }
}

new Counter();
new Counter();
new Counter();
console.log(Counter.getCount()); // 3
