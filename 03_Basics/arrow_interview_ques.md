// 1. What are arrow functions and how do they simplify function expressions in JavaScript?
// Arrow functions provide a concise syntax for writing function expressions. 
// They are shorter and automatically bind `this` lexically, simplifying code, 
// especially for callbacks and inline functions.


// 2. Explain the lexical `this` binding in arrow functions. How is it different from regular functions?
// In arrow functions, `this` is lexically bound, meaning it takes the value of `this` from the surrounding code where the arrow function is defined. 
// Regular functions determine `this` based on how they are called.


// 3. Can arrow functions be used as methods in objects or classes? Why or why not?
// Arrow functions are not suitable as methods in objects or classes because they do not have their own `this` context. 
// They inherit `this` from the enclosing lexical scope, which can lead to unexpected behavior.


// 4. Describe a scenario where using an arrow function would be more appropriate than a regular function.
// Arrow functions are ideal for callbacks in array methods (e.g., `map`, `filter`, `reduce`) 
// and event handlers where the enclosing `this` context is needed.


// 5. How do arrow functions handle the `arguments` object, and what are the alternatives?
// Arrow functions do not have their own `arguments` object. To access function arguments, you can use rest parameters:
const arrowFunc = (...args) => {
  console.log(args);
};
arrowFunc(1, 2, 3); // Outputs: [1, 2, 3]


// 6. What are the implications of using arrow functions in asynchronous code or promises?
// Arrow functions simplify asynchronous code by preserving the lexical `this` context, making it easier 
// to write clean and concise callbacks in promises and async/await functions.


// 7. Can you show an example of converting a regular function to an arrow function, and explain the changes?
// Regular function:
function add(a, b) {
  return a + b;
}
// Arrow function:
const add = (a, b) => a + b;
// Changes: The syntax is shortened, and the return statement is implicit for single-line arrow functions.


// 8. How do `call()`, `apply()`, and `bind()` methods work with arrow functions?
// `call()`, `apply()`, and `bind()` do not affect `this` in arrow functions because `this` is lexically bound. 
// These methods are ineffective in changing `this` for arrow functions.


// 9. What are some common pitfalls to avoid when using arrow functions?
// Avoid using arrow functions as object methods, be cautious of the absence of `arguments`, 
// and consider readability when overusing arrow functions in large codebases.


// 10. What are some best practices for using arrow functions in a large codebase?
// Balance the use of arrow functions with regular functions for readability, avoid using them as methods, 
// and ensure consistent coding standards to maintain clarity and maintainability.


// Practice Problems

// Problem 1: Lexical `this` Binding
const obj = {
  value: 10,
  regularFunction: function() {
    setTimeout(function() {
      console.log(this.value); // What is the output?
    }, 1000);
  },
  arrowFunction: function() {
    setTimeout(() => {
      console.log(this.value); // What is the output?
    }, 1000);
  }
};
obj.regularFunction();
obj.arrowFunction();


// Problem 2: Converting to Arrow Functions
function multiply(a, b) {
  return a * b;
}
// Convert the above function to an arrow function


// Problem 3: Arrow Function as Object Method
const obj = {
  name: "Alice",
  greet: () => {
    return `Hello, ${this.name}`; // What is the output?
  }
};
console.log(obj.greet());


// Problem 4: Using `call()` with Arrow Functions
const arrowFunc = () => {
  console.log(this);
};
const context = { value: 5 };
arrowFunc.call(context); // What is the output?


// Problem 5: Arrow Functions and Arguments
const arrowFunc = () => {
  console.log(arguments); // What is the output?
};
arrowFunc(1, 2, 3);


// Problem 6: Lexical `this` in Nested Functions
const obj = {
  value: 20,
  method: function() {
    const innerFunction = () => {
      console.log(this.value); // What is the output?
    };
    innerFunction();
  }
};
obj.method();


// Problem 7: Arrow Function in Event Handler
// In an HTML file:
// <button id="myButton">Click me</button>
document.getElementById('myButton').addEventListener('click', () => {
  console.log(this); // What is the output when the button is clicked?
});


// Problem 8: Converting Function to Arrow Function with Rest Parameters
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
// Convert the above function to an arrow function using rest parameters


// Problem 9: Arrow Function in Asynchronous Code
const obj = {
  value: 30,
  asyncMethod: function() {
    setTimeout(() => {
      console.log(this.value); // What is the output?
    }, 1000);
  }
};
obj.asyncMethod();


// Problem 10: Best Practices for Arrow Functions
// Given the following code, refactor it to use arrow functions where appropriate,
// and explain why or why not it's beneficial in this scenario.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers);