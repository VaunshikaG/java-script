// dates

let myDate = new Date();

console.log(typeof myDate); // object

console.log(myDate.toLocaleDateString());
// 9/6/2025

console.log(myDate.toDateString());
// Mon Jun 09 2025

console.log(myDate.toLocaleString());
// 9/6/2025, 12:19:04 pm

console.log(myDate.toString());
// Mon Jun 09 2025 12:17:17 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString());
// Mon, 09 Jun 2025 06:49:29 GMT

console.log(myDate.toTimeString());
// 12:19:29 GMT+0530 (India Standard Time)

console.log(myDate);
// 2025-06-09T06:47:17.860Z

console.log(myDate.toISOString());
// 2025-06-09T06:47:48.832Z

console.log(myDate.toJSON());
// 2025-06-09T06:48:31.840Z

console.log(myDate.toLocaleTimeString());
// 12:19:04 pm

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate2 = new Date(2023, 0, 23, 5, 20, 15, 30);
// month starts from zero
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toString());

// date format
let myCreatedDate3 = new Date("2023-01-23");
let myCreatedDate4 = new Date("01-23-2023");

console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());

console.log(Date.now() / 1000);

console.log(myDate.getMonth() + 1);
console.log(myDate.getDate());

console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  })
);
