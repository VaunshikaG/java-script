// for

const array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //   console.log(element);
}

for (let i = 2; i <= 10; i++) {
  //   console.log(`Table of ${i}:`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArray = ["flash", "ironman", "loki", "thor"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
