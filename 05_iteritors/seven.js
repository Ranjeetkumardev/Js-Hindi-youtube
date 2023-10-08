const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10) // o/p 10,20 // yaha par num me 1,2,3 .. aaya h
  .map((num) => num + 1) // o/p 21 ,31  // yaha par num me 10,20,30 .. aaya h
  .filter((num) => num >= 40); //o/p grater than 40 
// This is called chaining 
console.log(newNums);
