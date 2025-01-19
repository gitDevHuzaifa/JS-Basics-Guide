// Declaring a number variable
const score = 400;
// console.log(score);

// Creating a Number object
const balance = new Number(100);
// console.log(balance);

// Convert number to string and get its length
// console.log(balance.toString().length);

// Format number with two decimal places (100.00)
// console.log(balance.toFixed(2));

const otherNumber = 23.008;
// Get a precise value with 3 significant digits
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// Format number based on locale (US standard: "1,000,000", Indian standard: "10,00,000")
// console.log(hundreds.toLocaleString('en-US'));  // US format
// console.log(hundreds.toLocaleString('en-IN'));  // Indian format

// ++++++++++++++++++++++++++ Math Functions ++++++++++++++++++++++++++++++++++++

console.log(Math);  // Prints Math object with all available functions

// Returns the absolute (positive) value
console.log(Math.abs(-4));  // Output: 4

// Rounds to the nearest integer
console.log(Math.round(5.6));  // Output: 6

// Always rounds up
console.log(Math.ceil(4.2));  // Output: 5

// Always rounds down
console.log(Math.floor(4.9));  // Output: 4

// Returns the square root of a number
console.log(Math.sqrt(81));  // Output: 9

// Returns the maximum value from the given numbers
console.log(Math.max(5, 9, 8, 11, 2, 6));  // Output: 11

// Returns the minimum value from the given numbers
console.log(Math.min(5, 9, 8, 11, 2, 6));  // Output: 2

// Generate a random number between 0 and 1
console.log(Math.random());  // Output: 0.0 to 0.9

// Generate a random number between 0 and 10
console.log(Math.random() * 10);  // Output: 0.1 to 9.9

// Generate a random number between 1 and 10
console.log((Math.random() * 10) + 1);  // Output: 1.1 to 10.9

// Generate a whole number (1 to 10)
console.log(Math.floor((Math.random() * 10) + 1));  // Output: 1 to 10

// Generate a random number between a custom range (1 to 6)
const max = 6;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Output: 1 to 6
