// setInterval - baar baar chalata hai

let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared!");
    }
}, 1000);

// Mini project - digital clock
let clockId = setInterval(() => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);
}, 1000);

// 10 second baad band karo
setTimeout(() => {
    clearInterval(clockId);
    console.log("Clock stopped!");
}, 10000);
