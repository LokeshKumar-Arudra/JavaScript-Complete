let user = {
    userName: "Lokesh",
    id: 1234,
    greet: function () {
      console.log(`Hello ${this.userName}`);
      // this referes "current context" => current object
      console.log(this); // { userName: 'Lokesh', id: 1234, greet: [Function: greet] }
    },
  };
  
  // user.greet()
  // user.userName = "Loki"
  // user.greet()
  
  // console.log(this); // {}  => this is a node environment so this referes to the empty object
  // But in browser this referes to the Window Object.
  
  // function info(){
  //     let course = "JS"
  //     // console.log(this);
  //     console.log(this.course); // undefined
  // }
  // info()
  
  // Arrow => Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope (the scope in which the arrow function was defined).
  
  let arrow = () => {
    let course = "JS course from scratch";
    console.log(this); // {}
    console.log(this.course); // undefined
    //The course variable is local to the function and not part of the this context, leading to undefined when accessed via this.course.
    //The arrow function does not bind its own this, so it inherits this from the surrounding context.
    // In a module or strict context, this is an empty object {}, not the global object.
  };
  arrow();
  
  console.log(addone(5));
  
  function addone(num) {
    // Function
    return num + 1;
  }
  
  // addTwo(5); this will throw an error since function expressions don't support Hoisting.
  const addTwo = function (num) {
    // function expression
    return num + 2;
  };
  
  // this : this referes to the current context.
  //console.log(this); // output : {} // Node environment so empty object
  // But in the browser this refers to the window obect.
  function add() {
    console.log(this);
  }
  
  
  add();
  