const name = "ruhi";
const repoCount = 20;

// concatenate string
// console.log(name + repoCount + "Value");         // old
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let newName = new String("vaunshika");

console.log(newName[0]);
console.log(newName.length);
console.log(newName.charAt(5));

const series = "game of thrones";
const newStr = series.substring(2, 5);
const newStr2 = series.slice(6, 8);
const newStr3 = series.slice(-9, 7);

console.log(newStr);
console.log(newStr2);
console.log(newStr3);

const str1 = "          games      ";
console.log(str1.trim);

const url = "https://gogarkar.com/vaunshika%2001";

console.log(url.replace("%20", "-"));
console.log(url.includes("vaun"));

console.log(newName.split("h"));
