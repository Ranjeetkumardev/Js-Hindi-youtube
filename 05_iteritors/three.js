// for of // basicaly ye array or object specific loops h string par bhi lagta h 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps // it is a object and having key value pairs 

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // ye include nahi hog a kioki map unique value k liye jana jata h

// console.log(map);

//for (const key of map) { // ye as it is map bala stucture print kar dega
  // console.log(key, ':-', value);
//}

// ye alag-2 key value print karega 
for (const [key, value] of map) {
  // console.log(key, ':-', value);
}
 
//for of loop do'nt work on object 
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }
