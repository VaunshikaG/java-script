// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

// nested scope
function one() {
  const userName = "vaun";

  function two() {
    const website = "pinterest";
    console.log(userName);
  }
  //   cannot access outside scope
  //   console.log(website);

  two();
}

one();
