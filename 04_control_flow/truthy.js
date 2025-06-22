const email = "e@gmail.com";

if (email) {
  console.log("Got an email");
} else {
  console.log("Don't have email");
}

// falsy values
// false, 0, -0, BigInt (written as 0n), "", null, undefined,NaN

// truthy values
// "0", "false", " ", [], {}, function() {}

const myarr = [];
if (myarr.length === 0) {
  console.log("Array is empty");
}

const myObj = {};
if (Object.keys(myObj).length === 0) {
  console.log("Object is empty");
}
