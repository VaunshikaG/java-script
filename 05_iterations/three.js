// for-of lop => Map, array as numbers
// cannot iterate objects

//  maps => unique values

const map = new Map();
map.set("IN", "India");
map.set("USA", "United Stated of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

// for (const key of map) {
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

console.log("\n");

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// cannot iterate objects
for (const [key, value] of myObj) {
  console.log(key, ":-", value);
}
