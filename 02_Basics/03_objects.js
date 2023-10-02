// objets are created in two way 1.like litteral 2.like constractor

// Object.create // this is constractor bala yani singleton
//singleton  // when you created by constractor called singleton i.e ye apne tarah ka ek hi object h // not created multiple instance

// object literals  // isase create hone par multiple intance crate ho jate h

const mySym = Symbol("key1");

const JsUser = {
  name: "Ranjeet", // name behind the is a string hi h but name is auto converted in "name"
  "full name": "Ranjeet Devkuamr", // koi chance hi nahi h ki aap ise "." se access kar sake
  //mySym : "mykey1", // this is not used as a Symbol ,value are same but deff
  [mySym]: "mykey1", // Now this is used as a Symbol
  age: 18,
  location: "Jaipur",
  email: "Ranjeet@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) // genral way to access but not the best way
// console.log(JsUser["email"]) // good way to access
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Ranjeet@chatgpt.com";
// Object.freeze(JsUser) // after that you can't change the JsUser
JsUser.email = "Ranjeet@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

//console.log(JsUser.greeting) // [Function (anonymous)] // function execute nahi hua h balki uska ek ref aaya h
console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Ranjeet
