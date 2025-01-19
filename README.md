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
### **JavaScript Operation Conversions (Type Coercion & Explicit Conversion)** 

JavaScript is a **dynamically typed** language, meaning variables can change types, and it automatically converts values in some operations. These conversions can be **implicit (coercion)** or **explicit (manual conversion).**  

---

## **1. Implicit Type Conversion (Type Coercion)**
JavaScript automatically converts values when performing operations on different types.

### **A. String Conversion (Concatenation)**
When a number or boolean is combined with a string, JavaScript converts everything to a string.  
```javascript
console.log("5" + 2);   // "52"  (Number converted to string)
console.log("Hello" + 5); // "Hello5"
console.log(5 + "5" + 5); // "555" (Left to right evaluation)
console.log("10" - 2);  // 8  (String converted to number for subtraction)
console.log("5" * "2"); // 10 (Both strings converted to numbers)
console.log("10" / "2"); // 5  (Both converted to numbers)
console.log("10" - "five"); // NaN (Not a Number, since "five" is invalid)
```

---

### **B. Boolean Conversion**
- `0`, `""`, `null`, `undefined`, and `NaN` → **false**  
- Any other value → **true**  

```javascript
console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
```

---

## **2. Explicit Type Conversion (Manual Conversion)**

### **A. String Conversion (`String()`, `toString()`)**
```javascript
let num = 100;
console.log(String(num));  // "100"
console.log((123).toString());  // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
```

---

### **B. Number Conversion (`Number()`, `parseInt()`, `parseFloat()`)**
```javascript
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN (Invalid number)
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number(""));    // 0
console.log(Number(null));  // 0
console.log(Number(undefined)); // NaN
console.log(parseInt("50px")); // 50 (Extracts valid number)
console.log(parseFloat("5.75kg")); // 5.75 (Extracts float)
```

---

### **C. Boolean Conversion (`Boolean()`)**
```javascript
console.log(Boolean("false")); // true (Non-empty string is truthy)
console.log(Boolean("0"));  // true (Non-empty string)
console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean([]));   // true (Empty array is truthy)
console.log(Boolean({}));   // true (Empty object is truthy)
```

---

## **3. Type Conversion in Operations**
### **A. Arithmetic Operations**
```javascript
console.log(5 + "5");   // "55" (Number converted to string)
console.log(5 - "5");   // 0   (String converted to number)
console.log(5 * "2");   // 10  (String converted to number)
console.log("10" / "2"); // 5  (Both strings converted to numbers)
console.log("10" - "five"); // NaN (Invalid conversion)
```

### **B. Logical Operations**
```javascript
console.log("5" == 5);   // true (Type coercion, string converted to number)
console.log("5" === 5);  // false (Strict comparison, different types)
console.log(null == undefined); // true (Both considered "empty" values)
console.log(null === undefined); // false (Different types)
console.log([] == false); // true (Empty array is falsy)
console.log([] === false); // false (Strict type check)
```

---

## **4. Best Practices for Type Conversion**
✔️ **Use `Number()`, `String()`, and `Boolean()` for explicit conversion**  
✔️ **Avoid implicit coercion in complex operations**  
✔️ **Use strict equality (`===`) to avoid unexpected type conversion**  
✔️ **Use `parseInt()` and `parseFloat()` when working with numbers in strings**  

---

### **Final Example (All Conversions)**
```javascript
let x = "5";
let y = 2;

console.log(x + y);  // "52"  (String concatenation)
console.log(Number(x) + y); // 7 (Explicit conversion)
console.log(Boolean(x)); // true (Non-empty string is truthy)
console.log(x == 5);  // true (Loose comparison, type coercion)
console.log(x === 5); // false (Strict comparison, no coercion)
```
</br>
</br>

# **Store data in memory**
### **Stack Memory**:
- Stores **primitive types** (`number`, `string`, `boolean`, `null`, `undefined`).
- Stores **function calls** and **local variables**.
- **Faster** access (LIFO structure).
- Automatically cleared when a function exits.

### **Heap Memory**:
- Stores **objects**, **arrays**, and **functions** (reference types).
- **Slower** access (indirect access via references).
- Managed by **Garbage Collector** (cleared when no references remain).

### Example:
```javascript
// Stack
let num = 10;    // Primitive in stack

// Heap
let person = { name: "Alice", age: 25 };  // Object in heap, reference in stack
```
</br>
</br>

Here is a comprehensive list of all the **JavaScript String functions** with a standardized code format for each method:

---

### 1. **`charAt(index)`**
Returns the character at the specified index.

```javascript
let str = 'Hello';
let char = str.charAt(0);  // "H"
console.log(char);
```

---

### 2. **`charCodeAt(index)`**
Returns the Unicode value of the character at the specified index.

```javascript
let str = 'Hello';
let unicodeValue = str.charCodeAt(0);  // 72
console.log(unicodeValue);
```

---

### 3. **`concat(string2, string3, ...)`**
Joins two or more strings together.

```javascript
let str1 = 'Hello';
let str2 = 'World';
let result = str1.concat(' ', str2);  // "Hello World"
console.log(result);
```

---

### 4. **`endsWith(searchString, length)`**
Checks if the string ends with the specified substring.

```javascript
let str = 'Hello World';
let result = str.endsWith('World');  // true
console.log(result);
```

---

### 5. **`includes(searchString, position)`**
Checks if the string contains the specified substring.

```javascript
let str = 'Hello World';
let result = str.includes('World');  // true
console.log(result);
```

---

### 6. **`indexOf(searchValue, fromIndex)`**
Returns the index of the first occurrence of the specified substring.

```javascript
let str = 'Hello World';
let index = str.indexOf('World');  // 6
console.log(index);
```

---

### 7. **`lastIndexOf(searchValue, fromIndex)`**
Returns the index of the last occurrence of the specified substring.

```javascript
let str = 'Hello World, Hello';
let index = str.lastIndexOf('Hello');  // 13
console.log(index);
```

---

### 8. **`localeCompare(compareString)`**
Compares two strings in a locale-sensitive manner.

```javascript
let str1 = 'apple';
let str2 = 'banana';
let result = str1.localeCompare(str2);  // -1
console.log(result);
```

---

### 9. **`match(regexp)`**
Searches for a match to the regular expression and returns an array of matches.

```javascript
let str = 'The quick brown fox';
let result = str.match(/quick/);  // ["quick"]
console.log(result);
```

---

### 10. **`repeat(count)`**
Returns a new string with the specified number of repetitions.

```javascript
let str = 'Hello';
let result = str.repeat(3);  // "HelloHelloHello"
console.log(result);
```

---

### 11. **`replace(searchValue, newValue)`**
Replaces the first occurrence of a substring with a new substring.

```javascript
let str = 'Hello World';
let result = str.replace('World', 'JavaScript');  // "Hello JavaScript"
console.log(result);
```

---

### 12. **`search(regexp)`**
Searches for a match to the regular expression and returns the index of the match.

```javascript
let str = 'The quick brown fox';
let result = str.search('quick');  // 4
console.log(result);
```

---

### 13. **`slice(beginIndex, endIndex)`**
Extracts a section of the string and returns it as a new string.

```javascript
let str = 'Hello World';
let result = str.slice(0, 5);  // "Hello"
console.log(result);
```

---

### 14. **`split(separator, limit)`**
Splits a string into an array of substrings based on the separator.

```javascript
let str = 'apple,banana,grape';
let result = str.split(',');  // ["apple", "banana", "grape"]
console.log(result);
```

---

### 15. **`startsWith(searchString, position)`**
Checks if the string starts with the specified substring.

```javascript
let str = 'Hello World';
let result = str.startsWith('Hello');  // true
console.log(result);
```

---

### 16. **`substring(indexStart, indexEnd)`**
Extracts characters from a string between two indexes.

```javascript
let str = 'JavaScript';
let result = str.substring(0, 4);  // "Java"
console.log(result);
```

---

### 17. **`toLowerCase()`**
Converts all characters in the string to lowercase.

```javascript
let str = 'Hello';
let result = str.toLowerCase();  // "hello"
console.log(result);
```

---

### 18. **`toString()`**
Returns the string value of an object.

```javascript
let num = 123;
let result = num.toString();  // "123"
console.log(result);
```

---

### 19. **`toUpperCase()`**
Converts all characters in the string to uppercase.

```javascript
let str = 'hello';
let result = str.toUpperCase();  // "HELLO"
console.log(result);
```

---

### 20. **`trim()`**
Removes whitespace from both ends of the string.

```javascript
let str = '  Hello World  ';
let result = str.trim();  // "Hello World"
console.log(result);
```

---

### 21. **`trimStart()` and `trimLeft()`**
Removes whitespace from the beginning of the string.

```javascript
let str = '  Hello World  ';
let result = str.trimStart();  // "Hello World  "
console.log(result);
```

---

### 22. **`trimEnd()` and `trimRight()`**
Removes whitespace from the end of the string.

```javascript
let str = '  Hello World  ';
let result = str.trimEnd();  // "  Hello World"
console.log(result);
```

---

### 23. **`valueOf()`**
Returns the primitive value of the string.

```javascript
let str = 'Hello';
let result = str.valueOf();  // "Hello"
console.log(result);
```

---

### 24. **`padStart(targetLength, padString)`**
Pads the string from the start with the specified string until it reaches the target length.

```javascript
let str = '5';
let result = str.padStart(3, '0');  // "005"
console.log(result);
```

---

### 25. **`padEnd(targetLength, padString)`**
Pads the string from the end with the specified string until it reaches the target length.

```javascript
let str = '5';
let result = str.padEnd(3, '0');  // "500"
console.log(result);
```

---

### 26. **`fromCharCode()`** (Static Method)
Returns a string created from the specified sequence of Unicode values.

```javascript
let result = String.fromCharCode(72, 101, 108, 108, 111);  // "Hello"
console.log(result);
```

---

### 27. **`fromCodePoint()`** (Static Method)
Returns a string created from a sequence of Unicode code points.

```javascript
let result = String.fromCodePoint(0x1F600);  // "😀"
console.log(result);
```

---

### Conclusion

These methods provide various ways to manipulate strings in JavaScript, from simple tasks like trimming or replacing characters, to more advanced operations like working with Unicode characters. Each function has its own unique use case, making JavaScript strings highly flexible and powerful.

</br>
</br>

## **JavaScript Numbers and Math Functions**  

JavaScript provides a wide range of methods for working with numbers and performing mathematical operations. Below are some essential **Number** and **Math** methods with examples.

---

### **1. Number Basics**
```javascript
let num1 = 42;       // Integer
let num2 = 3.14;     // Float (Decimal)
let num3 = 1e3;      // Exponential (1000)
let num4 = 0xFF;     // Hexadecimal (255)
let num5 = 0b1010;   // Binary (10)
let num6 = 0o52;     // Octal (42)

console.log(num1, num2, num3, num4, num5, num6);
```

---

### **2. Checking Type of Number**
```javascript
let value = 100;
console.log(typeof value);  // "number"
```

---

### **3. Converting Strings to Numbers**
```javascript
let str = "123.45";

// Convert string to number
console.log(Number(str));      // 123.45
console.log(parseInt(str));    // 123
console.log(parseFloat(str));  // 123.45

// Convert number to string
let num = 456;
console.log(num.toString());   // "456"
```

---

### **4. Rounding Numbers**
```javascript
let num = 3.14159;

console.log(Math.round(num));   // 3 (Rounds to nearest integer)
console.log(Math.floor(num));   // 3 (Rounds down)
console.log(Math.ceil(num));    // 4 (Rounds up)
console.log(Math.trunc(num));   // 3 (Removes decimal)
```

---

### **5. Generating Random Numbers**
```javascript
console.log(Math.random());      // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10

// Random integer between 1 and 100
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);
```

---

### **6. Power, Square Root, Absolute Value**
```javascript
console.log(Math.pow(2, 3));  // 8 (2^3)
console.log(Math.sqrt(25));   // 5 (Square root of 25)
console.log(Math.abs(-7));    // 7 (Absolute value)
```

---

### **7. Maximum and Minimum**
```javascript
console.log(Math.max(5, 12, 9, 3));  // 12 (Highest value)
console.log(Math.min(5, 12, 9, 3));  // 3 (Lowest value)
```

---

### **8. Trigonometric Functions**
```javascript
console.log(Math.sin(Math.PI / 2));  // 1 (Sine of 90°)
console.log(Math.cos(0));            // 1 (Cosine of 0°)
console.log(Math.tan(Math.PI / 4));  // 1 (Tangent of 45°)
```

---

### **9. Constants in Math**
```javascript
console.log(Math.PI);        // 3.141592653589793
console.log(Math.E);         // 2.718281828459045 (Euler's number)
console.log(Math.LN2);       // 0.6931471805599453 (Natural logarithm of 2)
```

---

### **10. Converting Number to Fixed Decimals**
```javascript
let num = 5.6789;
console.log(num.toFixed(2));   // "5.68" (Rounds to 2 decimal places)
console.log(num.toPrecision(3)); // "5.68" (Total 3 digits)
```

---

### **11. Checking if a Value is a Number**
```javascript
console.log(isNaN(123));       // false
console.log(isNaN("Hello"));   // true
console.log(isFinite(10/2));   // true
console.log(isFinite(Infinity)); // false
```

---

### **12. Exponential Notation**
```javascript
let num = 123456;
console.log(num.toExponential(2));  // "1.23e+5"
```

---

## **Summary**
| Function | Description |
|----------|-------------|
| `Number()` | Converts to a number |
| `parseInt()` | Converts to an integer |
| `parseFloat()` | Converts to a floating number |
| `Math.round()` | Rounds to the nearest integer |
| `Math.floor()` | Rounds down |
| `Math.ceil()` | Rounds up |
| `Math.trunc()` | Removes decimal |
| `Math.random()` | Generates a random number |
| `Math.pow(x, y)` | Raises `x` to the power of `y` |
| `Math.sqrt(x)` | Square root of `x` |
| `Math.abs(x)` | Absolute value of `x` |
| `Math.max(x, y, ...)` | Returns the max value |
| `Math.min(x, y, ...)` | Returns the min value |
| `Math.sin(x), Math.cos(x), Math.tan(x)` | Trigonometric functions |
| `Math.PI, Math.E` | Mathematical constants |
| `num.toFixed(n)` | Rounds to `n` decimal places |
| `isNaN(x)` | Checks if `x` is not a number |
| `isFinite(x)` | Checks if `x` is a finite number |

</br>
</br>