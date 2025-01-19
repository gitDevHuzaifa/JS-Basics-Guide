# JS-Basics-Guide
A beginner-friendly repository covering JavaScript basics, including variables, data types, operators, functions, and arrays, with simple examples for easy understanding.


### **JavaScript Variables - Complete Guide** 🚀  

A **variable** is used to store data in memory. In JavaScript, variables can hold different types of data (numbers, strings, objects, etc.).  

---

## **1. Declaring Variables**  
JavaScript provides three ways to declare variables:  
- **`var`** (Old, function-scoped)  
- **`let`** (Modern, block-scoped)  
- **`const`** (Constant, cannot be reassigned)  

### **Example:**
```javascript
var x = 10;    // Function-scoped
let y = 20;    // Block-scoped
const z = 30;  // Cannot be changed
```

---

## **2. Differences Between `var`, `let`, and `const`**  

| Feature     | `var`  | `let`  | `const`  |
|------------|--------|--------|---------|
| **Scope**  | Function-scoped | Block-scoped | Block-scoped |
| **Reassignable?** | ✅ Yes | ✅ Yes | ❌ No |
| **Hoisting?** | ✅ Yes (initialized as `undefined`) | ✅ Yes (but not initialized) | ✅ Yes (but not initialized) |
| **Can be declared again?** | ✅ Yes | ❌ No | ❌ No |

---

## **3. Variable Naming Rules**
✅ Must **start** with a letter, `_`, or `$`  
✅ Can contain **letters, numbers, `_`, `$`**  
❌ Cannot use **reserved words** (`var`, `let`, `const`, etc.)  
❌ Cannot start with a **number**  

### **Valid Examples:**
```javascript
let userName = "John";
let _score = 100;
let $price = 50;
```

### **Invalid Examples:**
```javascript
let 1name = "Error"; // ❌ Cannot start with a number
let let = 5;         // ❌ Cannot use reserved words
```

---

## **4. Variable Scope**
### **A. Global Scope**
A variable declared outside any function is **global** and accessible anywhere.
```javascript
let globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible
}
test();
```

### **B. Function Scope (`var`)**
Variables declared with `var` are **function-scoped**.
```javascript
function example() {
  var localVar = "I exist only inside this function";
}
console.log(localVar); // ❌ Error: Not accessible outside the function
```

### **C. Block Scope (`let` & `const`)**
`let` and `const` are **block-scoped**, meaning they exist only within `{}`.
```javascript
if (true) {
  let blockVar = "Inside block";
  console.log(blockVar); // ✅ Works inside block
}
console.log(blockVar); // ❌ Error: Not defined outside block
```

---

## **5. Hoisting**
- **`var` is hoisted but initialized as `undefined`**
- **`let` and `const` are hoisted but NOT initialized (Temporal Dead Zone - TDZ)**

```javascript
console.log(a); // ❌ Undefined (Hoisted)
var a = 5;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;
```

---

## **6. Constant Variables (`const`)**
- `const` **must be initialized** when declared.  
- **Cannot be reassigned** but **objects and arrays can be modified**.

```javascript
const pi = 3.14;
pi = 3.14159; // ❌ Error: Cannot reassign a constant
```

✅ But objects inside `const` can be modified:  
```javascript
const user = { name: "Alice" };
user.name = "Bob";  // ✅ Allowed
console.log(user.name); // "Bob"
```

---

## **7. Template Literals (Modern Variable Use)**
Use **backticks (` `` `) and `${}`** to embed variables in strings:
```javascript
let name = "John";
let age = 25;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
```

---

### **Summary**
✔️ **Use `let` for variables that change.**  
✔️ **Use `const` for fixed values.**  
✔️ **Avoid `var` (due to function scope & hoisting issues).**  
✔️ **Always use meaningful names.**  
</br></br>


# **JavaScript Data Types - Summary**  

JavaScript has **8 main data types**, divided into **primitive** and **non-primitive (reference)** types.  

---

### **1. Primitive Data Types (Immutable - Stored by Value)**  
These are basic types that store **single values**.  

| Data Type  | Example | Description |
|------------|---------|-------------|
| **Number** | `let x = 10;` | Any numeric value (integer or float) |
| **String** | `let name = "John";` | Text enclosed in quotes |
| **Boolean** | `let isTrue = true;` | `true` or `false` values |
| **Undefined** | `let y;` | A variable declared but not assigned a value |
| **Null** | `let z = null;` | An empty or non-existent value |
| **BigInt** | `let big = 12345678901234567890n;` | Large integers beyond `Number` limits |
| **Symbol** | `let sym = Symbol("id");` | Unique and immutable identifier |

---

### **2. Non-Primitive (Reference) Data Types (Stored by Reference)**
These store **collections of values** or **objects**.

| Data Type  | Example | Description |
|------------|---------|-------------|
| **Object** | `let person = {name: "Alice", age: 25};` | Key-value pairs (complex data) |
| **Array** | `let nums = [1, 2, 3];` | Ordered collection of elements |
| **Function** | `function greet() { console.log("Hello"); }` | A reusable block of code |

---

## **3. Special Cases**
- **typeof `null` → "object"`** (This is a historical bug in JavaScript)
- **Arrays are objects** (`typeof [1,2,3] === "object"`)
- **Functions are objects with callable properties** (`typeof function(){} === "function"`)

Here is a **JavaScript code example** for each data type:  

```javascript
// 1. Primitive Data Types

// Number
let num = 10.5;
console.log(typeof num, num); // "number", 10.5

// String
let name = "Alice";
console.log(typeof name, name); // "string", "Alice"

// Boolean
let isActive = true;
console.log(typeof isActive, isActive); // "boolean", true

// Undefined
let notDefined;
console.log(typeof notDefined, notDefined); // "undefined", undefined

// Null (special case, typeof shows "object" due to historical reasons)
let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // "object", null

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber, bigNumber); // "bigint", 123456789012345678901234567890n

// Symbol (Unique identifier)
let sym = Symbol("uniqueID");
console.log(typeof sym, sym); // "symbol", Symbol(uniqueID)

// 2. Non-Primitive (Reference) Data Types

// Object (Key-Value Pairs)
let person = { name: "Alice", age: 25 };
console.log(typeof person, person); // "object", {name: "Alice", age: 25}

// Array (Ordered List, but typeof still returns "object")
let fruits = ["Apple", "Banana", "Cherry"];
console.log(typeof fruits, fruits); // "object", ["Apple", "Banana", "Cherry"]

// Function (Callable object)
function greet() {
  return "Hello, World!";
}
console.log(typeof greet, greet()); // "function", "Hello, World!"

```

### **Key Observations:**
1. `typeof null` returns `"object"` (historical JavaScript bug).  
2. `typeof []` returns `"object"` (arrays are objects).  
3. `typeof function() {}` returns `"function"` (functions are objects but callable).  

</br></br>
