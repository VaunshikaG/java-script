function primeNumber(num) {
  let i = 2;

  if (num <= 1) return false;

  while (i * i <= num) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
}
// console.log(primeNumber(5));

function findElement(list_1) {
  let largest = 0,
    secLargest = 0;

  for (let i = 0; i < list_1.length; i++) {
    let item = list_1[i];
    if (largest < item) {
      secLargest = largest;
      largest = item;
    } else if (secLargest < item) {
      secLargest = item;
    }
  }
  return secLargest;
}
// console.log(findElement([8, 7, 9, 3]));

function findMissing(arrList) {
  let list1 = [];
  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] > 0) {
      list1.push(arrList[i]);
    }
  }

  let highest = 0;
  for (let i = 0; i <= list1.length; i++) {
    if (highest < list1[i]) {
      highest = list1[i];
    }
  }
  console.log(highest);

  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i <= highest; i++) {
    sum1 += i;
  }
  for (let i = 0; i < arrList.length; i++) {
    sum2 += arrList[i];
  }
  console.log(sum1);
  console.log(sum2);
  return sum1 - sum2;
}
// console.log(findMissing([1, 2, 4, 5, 6]));
