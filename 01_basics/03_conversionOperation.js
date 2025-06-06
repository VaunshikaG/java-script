// number conversion

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

/*






 */

// string conversion

let someNum = 33;

let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);
