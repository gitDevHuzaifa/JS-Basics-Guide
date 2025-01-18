
/*
  ** 1. Primitive Data Types

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

  ** 2. Non-primitive Data Types (Reference Types)
- Object
- Array
- Function

*/

// --------------------------------------------------- 1. Primitive Data Types -------------------------------

// String: Represents a sequence of characters
let name = "John Doe";  

// Number: Represents numeric values (integer and float)
let age = 25;           // Integer
let price = 19.99;      // Float

// BigInt: Represents large integers
let bigNumber = 1234567890123456789012345678901234567890n;

// Boolean: Represents true or false values
let isActive = true;

// Undefined: Represents a variable that hasn't been assigned a value
let city;

// Null: Represents a deliberate absence of a value
let user = null;

// Symbol: Represents unique identifiers
let uniqueKey = Symbol("id");

//  --------------------------------------------------- 2. Non-primitive Data Types (Reference Types)

// Object: Collection of key-value pairs
let person = { name: "Alice", age: 30 };

// Array: Ordered collection of values
let colors = ["red", "green", "blue"];

// Function: A reusable block of code
function greet() {
    console.log("Hello, World!");
}
greet();  // Calling the function
