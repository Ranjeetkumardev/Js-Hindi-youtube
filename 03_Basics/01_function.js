function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// console.log("Result: ", result); // result: undefined .bcz console value return anhi karta h 
function addTwoNumbers(number1, number2) {  // parameters
  // let result = number1 + number2
  // return result
    return number1 + number2; 
   // console.log(result) // unreachable code kioki fun return ke bad koi code execute nahi karta h
}

const result = addTwoNumbers(3, 5); // arguments

// console.log("Result: ", result);

function loginUserMessage(username = "sam") { // sam ek default value de di isase ab usename me undefined value kabhi bhi nahi jayegi
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Ranjeet"))
// console.log(loginUserMessage("Ranjeet")) // man le ki yaha se koi value hi nahi pass kare to isase bachane k liye if else ka thora use kar lete h

// yaha hame pata nahi h ki kitane arguments aane bale h // example like shoping card
function calculateCartPrice(val1, val2, ...num1) { // ... rest operator //after that op =>in array // 1st in val1 ,2nd in val2 ,baki sab array me chal jayega 
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// objecct in function
const user = {
  username: "Ranjeet",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
} 

// handleObject(user) // generaly aise to chal jata h par problem tab aati h jab koi price ki jagah prices kar diya ho ,to isase bachane k liye hame type checking karni padati h if else se

//jaruri nahi h ki aap object bana kar hi pass kare aap direct bhi pass kar sakte h
handleObject({
  username: "sam",
  price: 399,
});


// function k under array bhi pass kar sakte h
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
