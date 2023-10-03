// this => current context [uske under value access kar rahe to this keyword use kare] 
const user = {
  username: "Ranjeet",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this); // current context  ko ref => jo ki user h
  },
};

// user.welcomeMessage() // Ranjeet, welcome to website //default value
// user.username = "sam"
// user.welcomeMessage()// yaha context change kiya h //sam , welcome to website

// console.log(this); // bcz ham node k under h to this yaha {}(ek empty object ko ref kar raha ,bcz yaha context h hi nahi iss liye {},)
// but brower me this ko console karte h to baha this window ko ref karta h

// function chai(){
//     let username = "Ranjeet"
//     console.log(this.username); // undefined 
// }

 chai()

// const chai = function () {
//     let username = "Ranjeet"
//     console.log(this.username); //undefined
// }


// const chai = () => {
//   let username = "Ranjeet";
//   console.log(this);
// };

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// called implicity return // i.e man liya ki aapko return karna
// const addTwo = (num1, num2) =>  num1   + num2

// {} likha to return keyword likhna hi parega () tab nahi likhna parega 
// const addTwo = (num1, num2) => (num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Ranjeet" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
