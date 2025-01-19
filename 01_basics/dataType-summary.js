

let firstName = "Jacson";
let secoundName = "Hud";
console.table([firstName, secoundName])

firstName = "Mohd";
secoundName = "Aamir";

console.table([firstName, secoundName])

let userOne = {
    name : "user",
    email : "user@gmail.com"
}

let userTwo = userOne;

userTwo.email = "huzaifa@google.com";

console.log(userOne.email)
console.log(userTwo.email)
