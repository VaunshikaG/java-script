// const coding = ["js", "java", "python", "c++"];

// const values = coding.forEach(function (item) {
//   //   console.log(item);
//   return item;
// });

// console.log(values);

// -----------------------------------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = myNums.filter((num) => num > 4);

const newNums = [];
myNums.filter((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Science", publish: 1987, edition: 1996 },
  { title: "Book Five", genre: "Fiction", publish: 2009, edition: 2010 },
  { title: "Book Six", genre: "Fiction", publish: 2000, edition: 2014 },
];
