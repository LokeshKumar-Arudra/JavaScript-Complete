// There are three main types of scope in JavaScript:

// Global Scope
// Function Scope
// Block Scope (introduced in ES6)

// Global Scope
const globalVar = "I am a global variable";

function one() {
    // Function Scope
    const userName = "Loki";

    function two() {
        // Function Scope (nested function)
        let website = "insta";

        if (true) {
            // Block Scope
            let password = "12345";
            console.log("Inside block scope:", password); // ✅ Accessible inside the block
        }

        // console.log(password); // ❌ Error: password is not accessible outside the block

        console.log("Inside function two:", userName); // ✅ Lexical scope: Can access outer function variable
        console.log("Inside function two:", website);  // ✅ Accessible inside function two
    }

    two();
    
    // console.log(website); // ❌ Error: website is not accessible outside function two
}

one();

console.log("Global Scope:", globalVar); // ✅ Accessible anywhere
// console.log(userName); // ❌ Error: userName is not accessible outside function one


// Global Scope → Accessible everywhere.
// Function Scope → Accessible only inside the function.
// Block Scope (let & const) → Exists only inside {}.
// Lexical Scope → Inner functions can access outer function variables.