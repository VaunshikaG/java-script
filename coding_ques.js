let list_1 = [1, [2, [3, 4], 5]];

// flatten the list

function flattenList(myList) {
  return myList.flat(Infinity);
}
console.log(flattenList(list_1));
