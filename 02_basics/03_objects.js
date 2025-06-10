// singleton

// object literals
const mySym = Symbol("key1");

const user = {
  name: "jerry",
  "full name": "tom jerry",
  age: 20,
  [mySym]: "myKey1",
  location: "pune",
  email: "jerry@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.email = "jerry@chatgpt.com";

// Object.freeze(user);
user.email = "jerry@microsoft.com";
console.log(user);

// function
user.greeting = function () {
  console.log("Hello js user");
};

console.log(user.greeting());

user.greetingTwo = function () {
  // access name using this keyword
  console.log(`Hello js user, ${this["full name"]}`);
};

console.log(user.greetingTwo());
