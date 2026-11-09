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

// let cost;
// const product = prompt("Please enter product name:").toLowerCase();

// switch (product) {
//     case "диня":
//         cost = 100;
//         alert(`Cost of ${product} is ${cost}`);
//         break;
//     case "банан":
//         cost = 50;
//         alert(`Cost of ${product} is ${cost}`);
//         break;
//     case "яблуко":
//         cost = 30;
//         alert(`Cost of ${product} is ${cost}`);
//         break;
//     case "вишня":
//         cost = 40;
//         alert(`Cost of ${product} is ${cost}`);
//         break;
//     default:
//         cost = alert(`Product ${product} is not available`);
// }

// const hello = function (name) {
//     console.log(`Hello ${name}`);
// }

// const getName = function (callback) {
//     const name = "John";
//     callback(name);
// }

// getName(hello);

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => {
//     console.log("Случился клац - " + numberRef.value);
// });

// function createUrl(url) {
//     return function (domain) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = createUrl("google")

// console.log(comUrl("com"));

// function changeColor() {
//     this.style.background = "green";
    
// }

// // document.querySelector("div").onclick = changeColor;

// let user = document.querySelectorAll("div");

// user.forEach(function(element) {
//     element.onclick = changeColor;
// })

// function hello() {
//     console.log(this);
    
// }


// const user = {
//     name: "Ivan",
//     age: 30,
//     hello: hello,
//     sayHello: hello.bind(window),
//     info: function () {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
        
//     }

// }

// const Ann = {
//     name: "ann",
//     age: 23
// }

// user.info.bind(Ann)()

// const userInfo = {
//     name: name,
//     age: 48,
//     logInfo: function (job, hobby) {
//         console.group(`${this.name} info: `);
//         console.log(`Users age: ${this.age}`);
//         console.log(`Users job: ${job}`);
//         console.log(`Users hobby: ${hobby}`);
//         console.groupEnd();
//     }
// }

// const user = {
//     name: "Peter",
//     age: 35
// }

// userInfo.logInfo.apply(user, ["developer", "cycle"])

// const cart = {
//     showItems() {
//         console.log(`В корзине: ${this.items}`);
//     }
// }

// const man = {
//     items: ["Штаны","рубашка"]
// }

// const woman = {
//     items: ["Платье","туфли"]
// }

// const child = {
//     items: ["Кофта","кроссовки"]
// }


// document.querySelector('#wom').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#man').addEventListener('click', cart.showItems.bind(man));
// document.querySelector('#child').addEventListener('click', cart.showItems.bind(child));

