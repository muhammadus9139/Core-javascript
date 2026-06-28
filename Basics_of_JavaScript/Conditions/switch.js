// Switch Statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// break na ho to fall-through hota hai
let grade = "B";
switch (grade) {
    case "A":
    case "A+":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good!");
        break;
    default:
        console.log("Keep trying!");
}
