const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

 //marvel_heros.push(dc_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] yaha array ko bhi as single data le liya h

 //console.log(marvel_heros); // op Array in array i don't want this
//console.log(marvel_heros[3][1]); // flash

 const allHeros = marvel_heros.concat(dc_heros)
 //console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 // best way to join /merge is  spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // return simple array chahe jintani bhi defth ho //Infinity k jagah jitna defth tak solve utna de to better hota h
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Ranjeet")); // asking is this array op=> false 
console.log(Array.from("Ranjeet")); // it convert it into an array  //[ 'R', 'a', 'n', 'j', 'e', 'e', 't' ]
console.log(Array.from({ name: "Ranjeet" })); // interesting bcz jabye convert nahi kar pata h tab ye {} empty obj deta h i.e apko batna hoga ki key ko ya value ko convert karna h

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
