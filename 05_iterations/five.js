// for-each loop => array

// ["", "", ""]
// [{}, {}, {}]

const programming = ["js", "java", "python", "c++"];

programming.forEach(function (item) {
  console.log(item);
});

console.log("--------------------------------------");

programming.forEach((item) => console.log(item));

console.log("--------------------------------------");

programming.forEach((item) => {
  console.log(item);
});

console.log("--------------------------------------");

function printMe(item) {
  console.log(item);
}

// programming.forEach(printMe());
programming.forEach(printMe);

console.log("--------------------------------------");

programming.forEach((item, index, arr) => {
  console.log(item, ", ", index, ", ", arr);
});

const myCoding = [
  {
    langName: "javascript",
    langFileName: "js",
  },
  {
    langName: "java",
    langFileName: "java",
  },
  {
    langName: "python",
    langFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName);
});
