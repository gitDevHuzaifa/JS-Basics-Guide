// --------->> Arrays in JavaScript

// Defining arrays for Marvel and DC superheroes
const marvelHeros = ["thor", "spiderman", "Ironman"];
const dcHeros = ["batman", "flash", "superman"];

// Merging two arrays using concat()
// const all_heros = marvelHeros.concat(dcHeros);
// console.log(all_heros)

// Using spread operator to merge arrays (preferred method)
const all_new_heros = [...marvelHeros, ...dcHeros]; // More efficient way to merge arrays
// console.log(all_new_heros)

// Flattening a nested array
const another_array = [1, 2, 3, 4, 5, [6, 7, 8, 9, [1, 2, 3]]];
const real_another_array = another_array.flat(Infinity); // Converts nested arrays into a single-level array
console.log(real_another_array);

// Accessing specific elements in arrays
console.log(all_new_heros[5]); // Access "superman" from merged array

// Checking if a value is an array
console.log(Array.isArray("Huzaifa")); // Returns false since it's a string

// Converting a string into an array
console.log(Array.from("Huzaifa")); // Converts each character into an array element

// Attempting to convert an object to an array (results in an empty array)
console.log(Array.from({ name: "Huzaifa" })); // Objects cannot be directly converted into arrays

// Creating an array from individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creates an array from given elements
