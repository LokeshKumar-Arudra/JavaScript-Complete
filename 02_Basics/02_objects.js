// We can declare objects in 2 ways. 1. Object Literal , 2. Constructor
// Singleton : the Singleton pattern is all about managing the creation and access of a specific object within your JavaScript code
// 1. Object Literal const person = {    firstName: "John",    lastName: "Doe",    age: 30,    city: "New York"};
//2. constructor function
function Person(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
  
  const person1 = new Person("Jane", "Doe", 25, "Los Angeles"); // can create multiple objects using constructor function.
  
  // use a symbol as key in Object
  
  let sym = Symbol("key")
  let mern = {
    courseName: "React",
    [sym]: "symbol as key",
    email: "lokesh@tesla.com",
    age: 26,
    location: "India",
  }; 
  
  // console.log(mern[sym]); // output : symbol as key// Note: We can use bracket [] notation for accessing symbol & strings as keys.
  
  
  mern.email = "lokesh@zoho.com";
  console.log(mern["email"]);
  Object.freeze(mern); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
  mern.age = 16; // this wont give any error but it will not get updated.console.log(mern["age"]);
  