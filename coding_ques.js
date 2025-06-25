// 2 sum
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// nums = [2, 7, 11, 15]
// target = 9
// output: [[ 0, 1], [2, 4] ]

function indices(nums, target) {
  let result = [];
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        temp.push(i);
        temp.push(j);
      }
    }
    if (temp.length != 0) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}

// console.log(indices([2, 7, 11, 15, -2], 9));

const myarr = [1, 2, 3, [4, 5, 6, [7, 8]]];

function flatArray(arr1) {
  //   let result = [];
  //   result = arr1.flat(Infinity);
  //   return result;

  let result = [];
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] instanceof Array) {
      result = result.concat(flatArray(arr1[i]));
      //   flatArray(arr1[i]);
    } else {
      result.push(arr1[i]);
    }
  }
  return result;
}
// console.log(flatArray(myarr));

function palin(str) {
  let str2 = str.replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase();
  let result = "";

  for (let i = str2.length - 1; i >= 0; i--) {
    result += str2[i];
  }
  return result === str2;
}
// console.log(palin("A man, a plan, a canal: Panama"));

function primeNum(num) {
  let i = 2;

  if (num <= 1) return false;

  while (i * i <= num) {
    if (num % i === 0) {
      return false;
    }

    i += 1;
  }
  return true;
}
console.log(primeNum(7));
