function fibo(num) {
  let fiboList = [0, 1];

  for (let i = 2; i < num; i++) {
    fiboList.push(fiboList[i - 1] + fiboList[i - 2]);
  }
  return fiboList;
}
// console.log(fibo(5));

// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]

function flatArray(arrList) {
  let myList = [];

  for (let i in arrList) {
    if (arrList[i] instanceof Array) {
      myList = myList.concat(flatArray(arrList[i]));
    } else {
      myList.push(arrList[i]);
    }
  }
  return myList;
}
// console.log(flatArray([1, [2, [3, [4]]]]));

// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// Group anagrams from a list of strings

// Rotate an array by k steps
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Move all zeros to the end of an array
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function* abc(list) {
  for (let i in list) {
    yield list[i];
  }
}
const list1 = [1, 2, 3, 4, 5];
const generator = abc(list1);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

let value = 0;
while ((value = 5)) {
  value = generator.next().value;
  console.log(value);
}
