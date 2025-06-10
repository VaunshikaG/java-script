const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// add arrays

// 1. push method
// marvel_heros.push(dc_heros);
// // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //['flash']

// 2. concat method
const allHeros = marvel_heros.concat(dc_heros);
// gives a new array including 1 & 2 array
console.log(allHeros);

// 3. spread operator => takes 1-by-1 single element
const all_newHeros = [...marvel_heros, ...dc_heros];
console.log(all_newHeros);

const diff_arrays = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_diff_array = diff_arrays.flat(Infinity);
console.log(real_diff_array);

console.log(Array.isArray("vaun"));
console.log(Array.from("vaun"));
console.log(Array.from({ name: "vaun" }));
// gives empty array & need to tell how to make array, whether from keys/values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
