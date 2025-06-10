// array

const myArr = [0, 1, 2, 3, 4, 5];
const heros = ["tom", "jerry"];

const myArr2 = new Array(1, 2, 3);
// coverts () to [] automatically
console.log(myArr2);

console.log(myArr[0]);

// // Inserts new value
// myArr.push(6);
// myArr.push(7);

// // removes last element
// myArr.pop();

// Inserts new elements at the start of an array
myArr.unshift(9);
// removes the unshift value
myArr.shift();

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(3));

// add 2 array
const newArr = myArr.join();

console.log(myArr);
console.log(newArr); // comes in string type

// slice(doesnot manipulate array), splice(manipulates original array)

console.log("A", myArr);

const myA1 = myArr.slice(1, 3);
// gives values between index 1 to 3 including index1
console.log(myA1);
console.log("B", myArr);

const myA2 = myArr.splice(1, 3);
// original array gets cut from given index 1 to 3
console.log("C", myArr); // [ 0, 4, 5 ]
console.log(myA2); //[ 1, 2, 3 ]
