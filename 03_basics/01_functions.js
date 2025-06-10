function myName() {
  console.log("J");
  console.log("E");
  console.log("R");
  console.log("R");
  console.log("Y");
}

// myName();
// when defining fun it has parameters
function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

// when calling fun it has arguments
// addTwoNumbers(3, 3); //6
// addTwoNumbers(3, 3); //33
// addTwoNumbers(3, "a"); //3a

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

//
// sam is default value
function loginUserMsg(username = "sam") {
  //   if (username === undefined) {
  if (!username) {
    console.log("Please enter user name");
    return;
  }
  return `${username} just logged in`;
}

// const loginresult = loginUserMsg("varun");
// console.log(loginresult);

// console.log(loginUserMsg()); // undefined just logged in

function calculateCartPrice(...num1) {
  // here ... is rest operator => takes multiple values
  //   (val1,val2,...num1)        // gives [500, 2000]
  return num1;
}

console.log(calculateCartPrice(200, 300, 500, 2000)); // [ 200, 300, 500 ]

const myuser = {
  username: "sammy",
  price: 199,
};

function handleObj(anyobj) {
  console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObj(myuser);
handleObj({
  username: "tom",
  price: 399,
});

const myNewArray = [200, 300, 400, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 1000]));
