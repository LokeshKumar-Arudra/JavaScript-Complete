const tinder =  new Object() // Singleton object
// or 
// const tinder = {} both are same // non- singleton object


// OPTIONAL CHAINING
let details = {
    userName: {
        name:{
            firstName : "lokesh",
            lastName : "Kumar"
        }
    }
}
// console.log(details.userName.name.firstName);
// console.log(details.userName.name.lastName);

//  """"Optional Chaining"""""

// Def: Optional chaining (?.) is a concise syntax in JavaScript that allows you to safely access properties of an object that might be null or undefined without throwing an error
// console.log(details.userName?.name?.middleName);

// console.log(Object.keys(details)); // [ 'userName' ]
// console.log(Object.keys(details.userName)); // [ 'name' ]
// console.log(Object.keys(details.userName.name)); // [ 'firstName', 'lastName' ]
// console.log("__________________");
// console.log(Object.values(details)); //  [ { name: { firstName: 'lokesh', lastName: 'Kumar' } } ]
// console.log(Object.values(details.userName)); // [ { firstName: 'lokesh', lastName: 'Kumar' } ]
// console.log(Object.values(details.userName.name)); // [ 'lokesh', 'Kumar' ]

// Adding two objects.
let x = {a : 1, b : 2}
let y = {c : 3 , d : 4}

let z = {...x,...y}
console.log(z)


