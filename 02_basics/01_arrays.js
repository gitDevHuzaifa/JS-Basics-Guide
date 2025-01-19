// ++++++++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++

// Creating an array with numbers
const myArr = [0, 1, 2, 3, 4, 5];

// Creating an array with string values
const myHeoros = ["Ironman", "Loki", "Hulk", "Thor"];

// Accessing array elements
// console.log(myArr[1]); // Accessing the second element (index 1)
// console.log(myHeoros[2]); // Accessing the third element (index 2)

// ======================== Array Methods ========================

// Removes the last element from the array
// myArr.pop(); 

// Adds a new element at the end of the array
// myArr.push(5);

// Adds a new element at the beginning of the array
// myArr.unshift(9);

// Removes the first element from the array
// myArr.shift();

// Checks if the array includes a specific value
// console.log(myArr.includes(5)); // false

// Finds the index of a specific value in the array
// console.log(myArr.indexOf(2)); // 2

// Converts the array into a string
// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr); // Output: String

// ======================== Slice and Splice ========================

console.log("A ", myArr);

// slice(startIndex, endIndex) extracts a portion of the array without modifying the original array
const myn1 = myArr.slice(1, 3);
console.log(myn1); // Output: [1, 2]

console.log("B ", myArr);

// splice(startIndex, deleteCount) removes elements from the array and modifies the original array
const myn2 = myArr.splice(1, 3);

console.log("C ", myArr); // Output after removing elements using splice
console.log(myn2); // Output: Elements that were removed
