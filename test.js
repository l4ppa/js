//const test = confirm("Do you want to proceed with the test?");
//console.log(test);

// const value = prompt("Please enter number:");
// console.log(typeof value);
// console.log(value);

// let cost;
// const sub = "premium";

// switch (sub) {
//     case "free":
//         cost = 0;
//         break;
//     case "premium":
//         cost = 10;
//         break;
//     case "pro":
//         cost = 5;
// }

// console.log(cost);

let cost;
const product = prompt("Please enter product name:").toLowerCase();

switch (product) {
    case "диня":
        cost = 100;
        alert(`Cost of ${product} is ${cost}`);
        break;
    case "банан":
        cost = 50;
        alert(`Cost of ${product} is ${cost}`);
        break;
    case "яблуко":
        cost = 30;
        alert(`Cost of ${product} is ${cost}`);
        break;
    case "вишня":
        cost = 40;
        alert(`Cost of ${product} is ${cost}`);
        break;
    default:
        cost = alert(`Product ${product} is not available`);
}