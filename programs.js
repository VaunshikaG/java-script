// -------------------------------------------------------------------------------

// leap year

function leapyear(year) {
  if (year == null) return false;
  // divisible by 4, not by 100 || divisible by 400
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

let x = 2024;
// console.log(leapyear(x));
// -------------------------------------------------------------------------------

// even odd

function evenOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
// console.log(evenOdd(6));
// -------------------------------------------------------------------------------

// second highest element

function secondHighest(arrList) {
  let largest = 0,
    secondLargest = 0;
  for (const num of arrList) {
    if (num > largest) {
      //  2 > 0
      secondLargest = largest; //  0=0
      largest = num; //  2
    } else if (num != largest && num > secondLargest) {
      //  6 != 5 && 6 > 5
      secondLargest = num;
    }
  }
  return secondLargest;
}
let arr = [2, 4, 6, 8, 9];
// console.log(secondHighest(arr));
// -------------------------------------------------------------------------------

// palindrome "aabaa"

function palindrome(str) {
  if (str == null) return false;

  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }

  if (str2 == str) {
    return true;
  } else {
    return false;
  }
}
// console.log(palindrome("ssmss"));
// -------------------------------------------------------------------------------

// prime number

function prime(num) {
  if (num <= 1) return false;
  // for (let i = 2; i < (num + 1) / 2; i++) {
  //   if (num % i === 0) {
  //     return false;
  //   }
  // }

  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
}
// console.log(prime(5));
// -------------------------------------------------------------------------------

// armstrong number   153 = 1*1*1 + 5*5*5 + 3*3*3

function armstrongNum(myNum) {
  let strLength = String(myNum).length;
  let sum = 0,
    temp = myNum;

  while (temp > 0) {
    let digit = temp % 10; // take single digit from end
    let power = 1;

    console.log(digit);

    for (let i = 0; i < strLength; i++) {
      power *= digit; // calculate power
    }

    sum += power; //  sum power
    temp = parseInt(temp / 10); //  remove digit
    // temp = Math.floor(temp / 10);
  }

  return sum === myNum;
}
// console.log(armstrongNum(153));
// -------------------------------------------------------------------------------

// fibonacci series 4 = [ 0,1,1,2,3,5]

function fibonacci(myNum) {
  let arr = [0, 1];

  for (let i = 0; i < myNum; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr;
}
// console.log(fibonacci(4));
// -------------------------------------------------------------------------------

// merge 2 arr and sort it

function mergeList(arr1, arr2) {
  const result = [...arr1, ...arr2];

  return result.sort((a, b) => a - b);
}

let arr1 = [1, 4, 3, 2];
let arr2 = [7, 5, 6];
// console.log(mergeList(arr1, arr2));
// -------------------------------------------------------------------------------

// find missing number in array

function missingElement(myArr) {
  // check list has natural numbers
  let array1 = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > 0) {
      array1.push(myArr[i]);
    }
  }

  // find highest num
  let highest = array1[0];
  for (let j = 0; j <= highest; j++) {
    if (j > highest) {
      highest = j;
    }
  }

  // sum of 1 to highest
  let sum = 0,
    actualSum = 0;
  for (let n = 1; n <= highest; n++) {
    sum += n;
  }

  // sum of list
  for (let m = 1; m < myArr.length; m++) {
    actualSum += myArr[m];
  }

  console.log(sum - actualSum);
}
let array = [1, 2, 3, 5];
// console.log(missingElement(array));
// -------------------------------------------------------------------------------

// find all missing elements in array

function missing(myArr) {
  let missing = [];
  const min = Math.min(...myArr);
  const max = Math.max(...myArr);

  // check list has natural numbers
  let array1 = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > 0) {
      array1.push(myArr[i]);
    }
  }

  // find min, max num
  let maximum = array1[0];
  let minimum = array1[0];
  for (let i = 1; i <= array1.length; i++) {
    if (array1[i] > maximum) maximum = array1[i];
    if (array1[i] < minimum) minimum = array1[i];
  }

  for (let i = minimum; i <= maximum; i++) {
    if (!array1.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}
// console.log(missing([1, 2, 3, 5, 7]));
// -------------------------------------------------------------------------------

// reverse a string

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
// console.log(reverseStr("funny"));
// -------------------------------------------------------------------------------

// count vowels in string

function countVowels(str) {
  let count = 0;
  const regex = /[aeiou]/gi;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      count += 1;
    }
  }
  return count;
}
// console.log(countVowels("exponential"));
// -------------------------------------------------------------------------------

// print pyramid

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    // left side pyramid
    let str1 = "* ".repeat(i + 1);
    // console.log(str1);

    // right side pyramid
    // for (let i = 1; i <= n; i++) {
    let space1 = " ".repeat(n - i);
    let star1 = "*".repeat(i);
    // console.log(space1 + star1);

    // center pyramid
    let space2 = " ".repeat(n - i);
    let star2 = " * ".repeat(i + 1);
    // console.log(space2 + star2);
  }

  // diamond shape
  // upper part
  for (let i = 1; i <= n; i++) {
    let space2 = " ".repeat(n - i);
    let star2 = "*".repeat(2 * i - 1);
    console.log(space2 + star2);
  }

  // lower part
  for (let j = n - 1; j >= 1; j--) {
    let space2 = " ".repeat(n - j);
    let star2 = "*".repeat(2 * j - 1);
    console.log(space2 + star2);
  }
}
// pyramid(4);
// -------------------------------------------------------------------------------

// return the k most frequent elements from list

function kFrequentelements(list, num) {
  let myMap = {};

  for (let n of list) {
    myMap[n] = (myMap[n] ?? 0) + 1;
  }
  console.log(myMap);

  let sorted = Object.entries(myMap)
    .sort((a, b) => b[1] - a[1]) // Descending order by frequency
    .map((entry) => Number(entry[0])); // Get the array of element, not the count
  console.log(sorted);

  return sorted.slice(0, num);
}
console.log(kFrequentelements([3, 1, 4, 4, 5, 2, 6, 1, 3], 3));
// -------------------------------------------------------------------------------

// remove duplicates and sort

function removeElement(myList) {
  let newList = [];
  for (let i = 0; i < myList.length; i++) {
    if (!newList.includes(myList[i])) {
      newList.push(myList[i]);
    }
  }
  return newList.sort((a, b) => a - b);
  // remove duplicates and return k i.e length
  // return newList.sort((a, b) => a - b).length;
}
// console.log(removeDuplicates([3, 1, 4, 4, 5, 2, 6, 1, 3]));
// -------------------------------------------------------------------------------

// find duplicates
function findDuplicates(myList) {
  let newList = [];
  for (let i = 0; i < myList.length; i++) {
    for (let j = i + 1; j < myList.length; j++) {
      if (myList[i] === myList[j]) {
        newList.push(myList[i]);
      }
    }
  }
  return newList.sort((a, b) => a - b);
}
// console.log(findDuplicates([3, 1, 4, 4, 5, 2, 6, 1, 3]));
// -------------------------------------------------------------------------------

// remove element from list
function removeElement(myList, k) {
  let newList = [];
  for (let i = 0; i < myList.length; i++) {
    if (myList[i] != k) {
      newList.push(myList[i]);
    }
  }
  return newList;
}
// console.log(removeElement([3, 1, 4, 4, 5, 2, 6, 1, 3], 4));
// -------------------------------------------------------------------------------

// flatten the list
let list_1 = [1, [2, [3, 4], 5]];

function flattenList(myList) {
  return myList.flat(Infinity);
}
console.log(flattenList(list_1));
