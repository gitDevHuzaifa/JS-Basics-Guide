// Create a new string object
const gameName = new String('Huzaifa');

// Using charAt to get the character at index 0
let char = gameName.charAt(0);
// console.log(char);

// Displaying formatted results in a table
console.table([gameName.toUpperCase(), gameName.__proto__, typeof gameName]);

// Another string for manipulation
let anotherString = "      Huzaifa Malik";

// String replacement example
let str = "Hello ,World";
let result = str.replace('World', 'JavaScript');

// Searching for a substring
let sr = 'The quick brown fox';
let srResult = sr.search('quick'); // search() returns the index position of the value

// Logging results in a table
console.table([anotherString.trim(), result, srResult]);

// Using slice() to extract part of a string
console.log(str.slice(0, 5)); // slice(beginIndex, endIndex)

// Splitting a string into an array
console.log(sr.split(' '));

// URL includes check example
let url = "https://github.com/gitDevHuzaifa/JS-Basics-Guide";
console.log(url.includes('Huzaifa'));  // case-sensitive check -- true
console.log(url.includes('huzaifa'));  // case-sensitive check -- false

let str1 = 'Hello';
let str2 = 'World';

// Using + operator
let greeting = str1 + ' ' + str2;
console.log(greeting);  // "Hello World"

// Using concat() method
let greeting2 = str1.concat(' ', str2);
console.log(greeting2);  // "Hello World"

let name = 'Huzaifa';
let age = 21;

// Using template literals for string interpolation
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);  // "My name is Huzaifa and I am 25 years old."

