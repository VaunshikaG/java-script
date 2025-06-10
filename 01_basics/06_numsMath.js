const score = 400;
const balance = new Number(100);

console.log(balance);

console.log(balance.toString);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.8699;

console.log(otherNum.toPrecision(3));

const hunderds = 1000000;

console.log(hunderds.toLocaleString("en-IN"));

// -------------------------------Maths-----------------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.14));
console.log(Math.ceil(6.14));
console.log(Math.floor(8.14));
console.log(Math.min(4, 2, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
