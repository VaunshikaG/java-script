// while

// while (condition) {}

let index = 0;
while (index <= 10) {
  //   console.log(`value of index is ${index}`);
  index = index + 2;
}

const myArray = ["flash", "ironman", "loki", "thor"];
let arrIndex = 0;

while (arrIndex < myArray.length) {
  console.log(`value is ${myArray[arrIndex]}`);
  arrIndex++;
}

//
// do-while
//
// first do execution the the condition

let score = 1;
do {
  console.log(`Score: ${score}`);
  score++;
} while (score <= 10);
