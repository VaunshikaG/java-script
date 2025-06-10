// declare user
// const tinderUser = new Object();    //singleton object

// not singleton obj
const tinderUser = {};
tinderUser.id = "123ab";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "sammy@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sammy",
      lastname: "johnas",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);

// combining obj
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// gives obj in obj
// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);
// {} => newobj ; obj1,obj2 => source obj

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// destructuring
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor } = course;
// change courseInstructor=> instructor
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// react destructuring
// const navBar = ({ company }) => {};
// navBar((company = "vauns"));
// console.log(company);
