// primitive data type => call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 78469256742;

// non-primitive data type => reference type
// Array, Objects, Functions => all have return type as object

const cars = ["volvo", "kushaq", "carens"];
let myObj = {
  name: "ruhi",
  age: 25,
};

console.log(typeofmyObj);
