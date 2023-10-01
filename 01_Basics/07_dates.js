// Dates

let myDate = new Date();
//console.log(myDate.toString()); // OP=> Sun Oct 01 2023 17:56:05 GMT-0400 (Eastern Daylight Time)
//console.log(myDate.toDateString()); // Sun Oct 01 2023
//console.log(myDate.toLocaleString()); // 1/10/2023, 5:59:04 pm
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString ); // 2023-10-01T22:02:35.634Z
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp); //op in ms =>1696197949060
//console.log(myCreatedDate.getTime()); // 1673672400000 fist jan 1670 k bad se
// console.log(Math.floor(Date.now()/1000)); //op in second 1696198216

let newDate = new Date();
console.log(newDate); // 2023-10-01T22:10:16.246Z
console.log(newDate.getMonth() + 1); // 10
console.log(newDate.getDay()); // starting from 0

// `${newDate.getDay()} and the time `

//imp read more about it 
newDate.toLocaleString("default", {
  weekday: "long",
  
});

console.log(newDate.weekday);
