// scope = {}

let a = 300;

// inside the if is block scope and outside of if is globle scope
// globle scope bali value avaible inside the block but the value define inside the block is avialable outside/globle
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a); // 10
}

// console.log(a); // 300
// console.log(b);
// console.log(c);

function one() {
  const username = "Ranjeet";
 
    // child function access the variable of parents function nut vice-versa is not true // issi ko kafi had tak clouser kahte h
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()
 
// ahi kam aap if else se bhi kar sakte h 
if (true) {
  const username = "Ranjeet";
  if (username === "Ranjeet") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));// no error

function addone(num) {
  return num + 1;
}

// dono function hi h par esse exprestion bol diya jata ye kuch hold kar sakta h like fun ,json ,string etc 
addTwo(5); // error // why bcz hoisting will learn about it futher 
const addTwo = function (num) {
  return num + 2;
};
