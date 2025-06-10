// ----------------number conversion----------------------------

let score = "33"; // 33
let score1 = "33bc"; // NaN => not a number
let score2 = null; // 0

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

// "33" => 33
// "33abc" => NaN - not a number
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
// 1 => true; 0 =false
// "" => false
// "abc" => true

// ------------------string conversion---------------------------

let someNum = 33;

let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);

// ----------------------operations-------------------------------

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**3);  // power
// console.log(2%3);

let str1 = "hello";
let str2 = " vaunshika";
let str3 = str1 + str2;
console.log(str3); // hello vaunshika

console.log("1" + 2); // 12 treats number as string in this case
console.log("1" + 2); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 => first add num then string

console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 100;
gameCounter++;
// ++gameCounter;
console.log(gameCounter); // 101
