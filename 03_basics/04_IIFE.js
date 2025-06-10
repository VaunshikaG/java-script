// Immediately Invoked Function Expression (IIFE)

// ()function () execution
// 1=> function executes immediately
// 2=> sometimes problem is created due to pollution of global scope, so to overcome it IIFE is used

(function chai() {
  console.log("DB CONNECTED");
})();
// if ; is not there error will be raised

// by arrow fun
// unnamed IIFE
(() => {
  console.log("db connected");
})();

// named IIFE
((name) => {
  console.log(`db connected ${name}`);
})("sammy");
