console.log("Hello World")
console.log(document)

let username=window.prompt("Enter your name");
console.log(`Hello ${username}`);

var a=10;
let b=20;
const c=30;

if(true){
    var a=40;
    let b=50;
}

console.log(a);
console.log(b);

let name="alice";
let age=25;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log("")
let y="21";
console.log(typeof y);
let x=Number(y);
console.log(typeof x);

function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
}

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
let text = "The rain in Spain falls mainly";
let pattern = /rain/;
console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ['rain']