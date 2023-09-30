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
// console.log(stringNumber);
// console.log(typeof stringNumber);

//********************************operations****************************************
let value = 3;
let negValue = -value;
//console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) // 2 to power 3
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello";
let str2 = " Ranjeet"; // ye space count hota h
let str3 = str1 + str2;
//console.log(str3);

// console.log("1"+2) //12
// console.log(1+ "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

// console.log(true) // trrue
// console.log(+true) // 1
// console.log("")  // 0
