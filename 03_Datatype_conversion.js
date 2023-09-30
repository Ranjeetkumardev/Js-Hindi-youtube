//Datatypes conversion confusion
//let score = "33"
//____________________// Number(score) isake ref me ye kaha ja raha h
//let score = "33abc" // o/p NaN but type show Nuber so we carefull when you use NO
//let score = null; // o/p 0
//let score = undefined; // o/p  NaN
//let score = true;// o/p true/flase = 1/0'
//let score = "Ranjeet" // p/p NaN

// console.log(typeof score)
// console.log(typeof (score))

//let valueInNumber = Number(score); // value of score allways in number
// console.log(typeof valueInNumber);

let isLoggedIn = "Ranjeet";
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);
// true =>1
// false =>0
// "" => false
// "Ranjeet" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
