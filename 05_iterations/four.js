// for-in loop => objects, arrays as strings

const myobj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myobj) {
  console.log(`${key}: ${myobj[key]}`);
}

console.log("\n");

const programming = ["js", "java", "python", "c++"];

for (const key in programming) {
  console.log(`${key}: ${programming[key]}`);
}
