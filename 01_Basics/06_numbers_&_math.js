let num = 500; // console.log(num);
let num2 = new Number(700); // console.log(num2);
// console.log(num2.toString().length);// console.log(num.toExponential(2)); // Returns a string containing a number represented in exponential notation// console.log(num.toPrecision(5));  // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
const value = 18.6789; // console.log(value.toFixed(1)); // Returns a string representing a number in fixed-point notation.// console.log(value);// console.log(typeof value);// value.toFixed(2)// console.log(value);
const cost = 100000000; //console.log(cost.toLocaleString("en-IN")); // Converts a number to a string by using the current or specified locale. these specified locales can be found in MDM docs.

// ************* Maths lib ********************************************// console.log(Math); // try it in browser to dind all the functions.
// console.log(Math.abs(-56)); //Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
const side = 5;
const hypotenuse = side * Math.SQRT2; // console.log(hypotenuse);
function diagonalDistance(x1, y1, x2, y2) {
  return Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) * Math.SQRT2;
} // console.log(diagonalDistance(0, 0, 1, 1)); // Output: 1.4142135623730951

// console.log(Math.ceil(4.578)); //Returns the smallest integer greater than or equal to its numeric argument.console.log(Math.floor(4.56789)); // Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.min(1,2,3,4));

let set1 = [1,2,3,4,55,88,99,4,56,7]
// console.log(Math.max(...set1));


//console.log(Math.random());

let min = 10
let max = 15
console.log(Math.random() * 10 + min )
console.log(Math.floor((Math.random() * (max - min) + min)));