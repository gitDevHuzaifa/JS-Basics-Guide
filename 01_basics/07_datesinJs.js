// Creating a new Date object (Current Date & Time)
let myDate = new Date();

console.log(myDate); // Full Date object
console.log(myDate.toString()); // Converts Date to a readable string
console.log(myDate.toLocaleString()); // Converts to localized date-time format
console.log(typeof myDate); // "object" (Date is an object in JavaScript)

// Creating a Specific Date
// let myCreatedDate = new Date(2025, 0, 25); // Year, Month (0-based), Day
// let myCreatedDate = new Date(2025, 0, 25, 6, 15); // Year, Month, Day, Hour, Minute
let myCreatedDate = new Date("2025-01-19"); // Using a Date String

console.log(myCreatedDate); // Outputs the specified date

// Getting the Current Timestamp (Milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds

// Getting the Timestamp of a Specific Date
console.log(myCreatedDate.getTime()); // Converts the date to a timestamp

// Converting Current Timestamp to Seconds
console.log(Math.floor(Date.now() / 1000)); // Converts milliseconds to seconds

// Getting Month and Day from Current Date
let newDate = new Date();
console.log(newDate.getMonth() + 1); // Month (0-based, so +1 for correct month)
console.log(newDate.getDay() + 1); // Day of the week (0 = Sunday, 6 = Saturday, +1 for human-friendly output)

// Formatting Date with Weekday
const formattedDate = newDate.toLocaleDateString('default', {
    weekday: "short" // Short format of the weekday (e.g., "Sun", "Mon")
});
console.log(formattedDate); // Outputs short weekday name
