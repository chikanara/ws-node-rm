// console.log("Hello world")
// const sum = (a,b) => a+b
// console.log(sum(3,6))
// console.log(process.argv)
// var a = Number(process.argv[2])
// var b = Number(process.argv[3])
// var c = process.argv[4]
// var d = process.argv[5]
// var e = process.argv[6]
// console.log(sum(a,b))
// const mathlib = require("./mathlib")
const { sum, minus, multiply } = require("./mathlib");
var a = Number(process.argv[2]);
var op = process.argv[3];
var b = Number(process.argv[4]);

switch (op) {
  case "+":
    console.log(sum(a, b));
    break;

  case "-":
    console.log(minus(a, b));
    break;
  case "*":
    console.log(multiply(a, b));
    break;

  default:
    console.log("try again");

    break;
}
