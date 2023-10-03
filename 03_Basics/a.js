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

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one()
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
console.log(addone(5));
function addone(num) {
  return num + 1;
}
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
