// array

// in Js 1.u can store disimilar type of element 2.u can resize it
const myArr = [0, 1, 2, 3, 4, 5]; // can't access like this myArr["one"]
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4); // 2nd way of defining array
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //pop from the last

// myArr.unshift(9) //add ele at 1st and shift all ele
// myArr.shift() // remove from 1st

// console.log(myArr.includes(9)); // op=> asking the q if yes true else false
// console.log(myArr.indexOf(98)); // op=> -1

 const newArr = myArr.join() // change the type of array into string

//console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
//console.log(newArr);// 0,1,2,3,4,5 value is dame but change is type 

// slice, splice

//console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

 const myn1 = myArr.slice(1, 3);  // i.e doesn't change the original array

// console.log(myn1); // [ 1, 2 ] kat kar k kuch part ko print kiya h
// console.log("B ", myArr);// B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);  // manupalte the array
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]
