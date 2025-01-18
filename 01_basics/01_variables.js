// Declare a constant variable 'accountId' with value 255532
const accountId = 255532;

// Declare a 'let' variable for account email, which can be reassigned later
let accountEmail = "test@gmail.com";

// Declare a 'var' variable for account password, which can be reassigned later
var accountPassword = "53222";

// Dynamically assigned value to accountCity, no declaration keyword
accountCity = "New Delhi";

// Declare an uninitialized 'let' variable 'state'
let state;

// The following line is commented out because 'accountId' is a constant and cannot be reassigned
// accountId = 555;  // not allowed to change const

// Log the value of 'accountId' to the console
console.log(accountId);

// Log the values of all variables in a tabular format using console.table
console.table([accountId, accountEmail, accountPassword, accountCity, state]);
