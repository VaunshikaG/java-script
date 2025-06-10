const user = {
  username: "jerry",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}`, "welcome to website");
    // console.log(this);
  },
};

// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg(); // username: sam

// console.log(this); // refers to an empty obj {}

//
// ------------function dechlaration--------------
// 1
function chai() {
  //   console.log(this);
}
chai();

// 2
function chai1() {
  let username = "tom";
  console.log("1: ", `${this.username}`); // undefined
}
chai1();

// 3
const chai2 = function () {
  let username = "tom";
  console.log("2: ", `${this.username}`); // undefined
};
chai2();

// 4
const chai3 = () => {
  let username = "tom";
  console.log("3: ", `${this.username}`); // undefined
  console.log(this); // {}
};
chai3();

// arrow fun
// explicit return is using return keyword
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(4, 6));

// implicit return
// const addThree = (num1, num2) => num1 + num2;
const addThree = (num1, num2) => num1 + num2;
console.log(addThree(4, 6));

const add = (num1, num2) => ({ username: "sam" });
console.log(add(4, 6));
