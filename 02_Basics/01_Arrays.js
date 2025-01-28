// Arrays

const arr = [0 , 1,2,3,4,"Lokesh"]

const languages = new Array("python","js","GO")
// console.log(typeof arr);// Object

// Note: JS Array copy operations create Shallow copies not Deep Copies.
// Shallow copies : It is a copy which share the same reference. that is the orginal array will change.

// console.log(languages.length);

// Array Methods

// arr.push("Loki")
// arr.push("Thor")
// arr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// arr.unshift("first") //Inserts new elements at the start of an array, and returns the new length of the array.
// arr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


// console.log(arr);
// console.log(arr.includes("Loki"));
// console.log(arr.includes("Lokesh"));

// console.log(arr.indexOf("LOki")); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(arr.indexOf("Lokesh"))

let newArr = arr.join("-") // Adds all the elements of an array into a string, separated by the specified separator string.

// Slice , Splice

let arr1 = [1,2,3,4,5,6,7,"SpliceEx","sliceEx"]

let res1 = arr1.slice(1,5);
console.log("A ",arr1);
console.log(res1);

console.log("B ",arr1);
let res2 = arr1.splice(1,5) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(res2); // Changes the array.
console.log("C ",arr1);

//Slice : copies a section of an array apart from last mentioned value
//Splice: Removes the range of elements from the original array including the last mentioned value.

