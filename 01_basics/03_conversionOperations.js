// 1. String to Other Types:
// String to Number: Number("123") => 123
// String to Boolean: Boolean("non-empty") => true, Boolean("") => false
// String to Object: String({}) => "[object Object]"
// String to Null: String(null) => "null"
// String to Undefined: String(undefined) => "undefined"

// 2. Number to Other Types:
// Number to String: String(123) => "123"
// Number to Boolean: Boolean(0) => false, Boolean(123) => true
// Number to Object: Object(123) => Number {123}
// Number to Null: Number(null) => 0
// Number to Undefined: Number(undefined) => NaN

// 3. Boolean to Other Types:
// Boolean to String: String(true) => "true", String(false) => "false"
// Boolean to Number: Number(true) => 1, Number(false) => 0
// Boolean to Object: Object(true) => Boolean {true}
// Boolean to Undefined: Boolean(undefined) => false

// 4. Object to Other Types:
// Object to String: String({}) => "[object Object]"
// Object to Number: Number({}) => NaN
// Object to Boolean: Boolean({}) => true
// Object to Undefined: Object(undefined) => undefined

// 5. Null to Other Types:
// Null to String: String(null) => "null"
// Null to Number: Number(null) => 0
// Null to Boolean: Boolean(null) => false
// Null to Object: Object(null) => Throws TypeError (null can't be converted to an object)

// 6. Undefined to Other Types:
// Undefined to String: String(undefined) => "undefined"
// Undefined to Number: Number(undefined) => NaN
// Undefined to Boolean: Boolean(undefined) => false
// Undefined to Object: Object(undefined) => Throws TypeError (undefined can't be converted to an object)

// 7. Other Special Cases:
// Array to String: String([1, 2, 3]) => "1,2,3"
// Array to Number: Number([1, 2, 3]) => NaN (arrays can't directly be converted to numbers)
// Function to String: String(function() {}) => "function() {}"


// let test = "Huzaifa";
let test = Number("5555");

// console.log( Number(test));
console.log(typeof test);