// 1. Kth Largest Element in an Array
// Problem: Find the kth largest element in an unsorted array.

let list_1 = [3, 2, 1, 5, 6, 4],
  k = 2;
// Output: 5

function kLargest(arrList, k) {
  let arr1 = [];
  // arrList.sort((a, b) => b - a);
  // return arrList[k - 1];

  for (let i = 0; i < arrList.length; i++) {
    arr1.push(arrList[i]);
    arr1.sort((a, b) => a - b);

    if (arr1.length > k) {
      arr1.shift();
    }
  }
  console.log(arr1);
  return arr1[0];
}
console.log(kLargest(list_1, k));

// 2.Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let nums = [2, 7, 11, 15];
let target = 9;

function indices(myList, target) {
  let sum = 0;
  let resultArr = [];
  let newList = [];

  for (let i = 0; i < nums.length; i++) {
    if (!newList.includes(nums[i])) {
      newList.push(nums[i]);
    }
  }

  for (let j = 0; j < newList.length; j++) {
    for (let k = j + 1; k < newList.length; k++) {
      if (newList[j] === target) {
        resultArr.push(j);
      } else if (newList[j] + newList[k] === target) {
        resultArr.push(j);
        resultArr.push(k);
      }
    }
  }

  return resultArr;
}
// console.log(indices(nums, target));
